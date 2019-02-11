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
    backgroundColor: 'lightgreen',
    float: 'right'
  }

  return (
    <div>
      <div style={headerStylesLeft}>
        <button style={navbuttons}>Home</button>
        <button style={navbuttons}>Notifications</button>
        <button style={navbuttons}>Messages</button>
          <div style={headerStylesRight}>
            <input type="text" placeholder="Search.." name="search"/>
            <button>Tweet</button>
          </div>
      </div>
      <hr/>
    </div>

  );
}

export default Header;
