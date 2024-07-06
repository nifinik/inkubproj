import React from "react";
import s from "./Post.module.css";

const ThePost = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/sam-worthington-avatar-the-way-of-the-water-jake-sully-1670323168.jpg?crop=0.519xw:0.981xh;0.165xw,0&resize=640:*"
        alt=""
      />
      {props.message}
      <div>
        <span>like: </span>
        {props.like}
      </div>
    </div>
  );
};

export default ThePost;
