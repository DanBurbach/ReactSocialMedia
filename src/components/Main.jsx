import React from "react";
import Profile from "./Profile";
import Feed from "./Feed";
import ListFriends from "./ListFriends";

function Main(){
  const wrapper = {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '350px 350px 350px',
    justifyContent: "space-between",
    backgroundColor:' #fff',
    color: '#444',
    border: "1px solid black"
    }

  const box = {
    backgroundColor: "#444",
    color: '#fff',
    borderRadius: '5px',
    padding: '20px',
    fontSize: '150%'
  }

  const a = {
    gridColumn: '1 ',
    gridRow: '1',
    margin: '20px',
    padding: '40px',
    border: "1px solid black"
  }

  const b = {
    gridColumn: '2',
    gridRow: '1',
    margin: '20px',
    padding: '40px',
    border: "1px solid black"
  }

  const c = {
    gridColumn: '3',
    gridRow: '1',
    margin: '20px',
    padding: '40px',
    border: "1px solid black"
  }


  return (
    <div>
      <div style={wrapper}>
        <div style={box} style={a}><Profile/></div>
        <div style={box} style={b}><Feed/></div>
        <div style={box} style={c}><ListFriends/></div>
      </div>
    </div>
  );
}

export default Main;
