import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="grow bg-purple-950 max-w-35% min-w-25%">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
