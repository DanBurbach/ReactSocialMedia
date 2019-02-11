import React from "react";
import ProfileNav from "./ProfileNav";

function ProfileHead(){
  const ProfileHead = {
    backgroundColor: "#2c97de",
    height: '150px',
    marginTop: '0px',
  }

  const MainProfile = {
    boxShadow: '10px 10px 5px grey'
  }
  return (
    <div style= {MainProfile}>
      <p style = {ProfileHead}>
      </p>
      <ProfileNav/>
    </div>
  );
}

export default ProfileHead;
