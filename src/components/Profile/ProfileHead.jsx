import React from "react";
import ProfileNav from "./ProfileNav";

function ProfileHead(){
  const ProfileHead = {
    backgroundColor: "#2c97de",
    height: '150px',
    marginTop: '0px'
  }
  return (
    <div>
      <p style = {ProfileHead}>
      </p>
      <ProfileNav/>
    </div>
  );
}

export default ProfileHead;
