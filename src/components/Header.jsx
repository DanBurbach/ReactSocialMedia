import React from "react";

function Header(props){
  const headerStylesLeft = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    display: 'flex-start',
    marginRight: '15px',
    padding: '10px'
  }

  const navbuttons = {
    padding: '12px'
  }

  const headerStylesRight = {
    float: 'right',
    borderRadius: '20px',
  }

  const searchBar = {
    borderRadius: '20px',
    padding: '10px',
    marginRight: '15px',
    border: '1px solid #54aae3'
  }

  const tweetButton = {
    borderRadius: '20px',
    padding: '10px',
    marginRight: '15px',
    border: '1px solid #54aae3'
  }


  return (
    <div>
      <div style={headerStylesLeft}>
        <button style={navbuttons}>Home</button>
        <button style={navbuttons}>Notifications</button>
        <button style={navbuttons}>Messages</button>
          <div style={headerStylesRight}>
            <input style={searchBar} type="text" placeholder="Search.." name="search"/>
            <button style={tweetButton}>Tweet</button>
          </div>
      </div>
    </div>

  );
}

export default Header;
