import React from "react";
import s from "./MyPosts.module.css";
import ThePost from "./ThePost/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <ThePost message="Hi, How are you?" like="0" />
        <ThePost message="It's my first post" like="18" />
      </div>
    </div>
  );
};

export default MyPosts;
