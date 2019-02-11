import React from "react";
import ProfileHead from "../Profile/ProfileHead";
import ProfileDesc from "../Profile/ProfileDesc";


function Profile(){
  const head = {
    border: "1px solid black",
  }
  return (
    <div>
      <div style={head}>
        <ProfileHead/>
      </div>
      <div>
        <ProfileDesc/>
      </div>
    </div>
  );
}

export default Profile;
