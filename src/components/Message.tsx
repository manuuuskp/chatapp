import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Message = ({ message }: { message: any }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef<any>();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const chatContainer =
    message.senderId === currentUser.uid
      ? "flex gap-5 mb-5 flex-row-reverse"
      : "flex gap-5 mb-5";

  const messageContainer =
    message.senderId === currentUser.uid
      ? "max-w-80% flex flex-col gap-3 items-end"
      : "max-w-80% flex flex-col gap-3";

  const messagePara =
    message.senderId === currentUser.uid
      ? "bg-white px-5 py-3 rounded-sender max-w-max"
      : "bg-white px-5 py-3 max-w-max rounded-receiver";

  return (
    <div className={chatContainer} ref={ref}>
      <div className="flex flex-col text-slate-300 font-light">
        <img
          alt=""
          className="h-10 w-10 rounded-50% object-cover"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />
        <span>just now</span>
      </div>
      <div className={messageContainer}>
        {message.text && <p className={messagePara}>{message.text}</p>}
        {message.img && <img src={message.img} alt="" className="w-1/2" />}
      </div>
    </div>
  );
};

export default Message;
