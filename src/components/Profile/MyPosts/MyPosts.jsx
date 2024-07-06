import React from "react";
import s from "./MyPosts.module.css";
import ThePost from "./ThePost/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, How are you?", like: 12 },
    { id: 2, message: "It's my first post", like: 19 },
    { id: 3, message: "How old are you?", like: 0 },
  ];

  let postsElements = posts.map((p) => (
    <ThePost message={p.message} like={p.like} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
