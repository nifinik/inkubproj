import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Nikita" },
    { id: 6, name: "Kolya" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is it going?" },
    { id: 3, message: "How old are you?" },
    { id: 4, message: "Are you rich?" },
    { id: 5, message: "Yoo" },
    { id: 6, message: "Goodbye" },
  ];

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
