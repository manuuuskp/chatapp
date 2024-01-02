import React, { FormEvent, useState } from "react";
import Add from "./../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } catch {
      setError(true);
    }
  };

  return (
    <div className="bg-violet-400 h-svh flex items-center justify-center">
      <div className="formWrapper bg-white px-16 py-5 rounded-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-xl font-semibold text-violet-500">
            Let's Chat
          </span>
          <span className="text-lg">Register</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <input
            required
            type="text"
            placeholder="Display name"
            className="border-b rounded-sm p-3 w-80 focus:outline-none"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="border-b rounded-sm p-3 w-80 focus:outline-none"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="border-b rounded-sm p-3 w-80 focus:outline-none"
          />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label
            htmlFor="file"
            className="flex gap-2 items-center text-violet-400 cursor-pointer"
          >
            <img src={Add} alt="avatar" className="w-8" />
            <span>Add an avatar</span>
          </label>
          <button className="bg-violet-500 text-white p-3 rounded-sm hover:bg-violet-600">
            Sign up
          </button>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-center">
          You do have an account?{" "}
          <Link className="text-violet-500 mt-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
