import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className="content-bg">
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
          alt=""
        />
      </div>
      <div>Ava+Desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
