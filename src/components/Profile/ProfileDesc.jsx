import React from "react";

function ProfileDesc(){
  const ProfileDesc = {
    border: "1px solid black",
    paddingBottom: '10px',
    textAlign: 'left',
    padding: '30px',
    boxShadow: '10px 10px 5px grey'

  }

  return (
    <p style = {ProfileDesc}>
      Once upon a time, there was a sloth who lived deep in the most luscious jungle in the whole rainforest region of South America. Now as we all know, sloths are one of the slowest animals in the world. They live a life of leisure that involves very little moving or activity.
      <br/>
      <br/>
      This particular sloth was the laziest of all the sloths. So lazy in fact, that he soon ran out of food, with no obvious way of getting more. The sloth was so lazy that rather than going about getting food himself, he instead lay around for hours and hours thinking. He thought and thought until he figured out a way for him to get something to eat, without working too hard.
    </p>
  );
}

export default ProfileDesc;
