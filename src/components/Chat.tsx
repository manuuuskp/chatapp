import React, { useContext } from "react";

import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="grow-2 relative flex flex-col">
      <div className="h-12 flex items-center justify-between p-2 text-slate-300 bg-[#5d5b8d]">
        <span>{data.user?.displayName}</span>
        <div className="flex gap-3">
          <img src={Cam} alt="" className="h-6 cursor-pointer" />
          <img src={Add} alt="" className="h-6 cursor-pointer" />
          <img src={More} alt="" className="h-6 cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
