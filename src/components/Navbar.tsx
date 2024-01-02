import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar flex items-center justify-between h-12 p-3 text-[#ddddf7] bg-slate-500">
      <span className="logo">Let's Chat</span>
      <div className="flex gap-3">
        <img
          src={currentUser.photoURL}
          alt=""
          className="bg-white h-6 w-6 rounded-50% object-cover"
        />
        <span>{currentUser.displayName}</span>
        <button
          className="bg-[#5d5b8d] text-white text-xs border-none cursor-pointer p-1"
          onClick={() => signOut(auth)}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
