import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-violet-400">
      <div className="border border-white border-solid rounded-md w-4/6 h-4/5 flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
