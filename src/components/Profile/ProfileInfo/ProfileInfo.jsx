import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content_bg}>
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
          alt=""
        />
      </div>
      <div className={s.descrBlock}>Ava+Desc</div>
    </div>
  );
};

export default ProfileInfo;
