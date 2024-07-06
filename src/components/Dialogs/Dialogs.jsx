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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Matvey" id="3" />
        <DialogItem name="Valeria" id="4" />
        <DialogItem name="Sveta" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is it going?" />
        <Message message="How old are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
