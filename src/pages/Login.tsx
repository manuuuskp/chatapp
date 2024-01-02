import React, { useState } from "react";
import Add from "./../img/addAvatar.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-violet-400 h-svh flex items-center justify-center">
      <div className="formWrapper bg-white px-16 py-5 rounded-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-xl font-semibold text-violet-500">
            Let's Chat
          </span>
          <span className="text-lg">Login</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
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
          <button className="bg-violet-500 text-white p-3 rounded-sm hover:bg-violet-600">
            Sign in
          </button>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-center">
          You don't have an account?{" "}
          <Link className="text-violet-500 mt-2" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
