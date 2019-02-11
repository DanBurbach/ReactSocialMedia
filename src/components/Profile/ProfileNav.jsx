import React from "react";

function ProfileNav(){
  const main = {
  }

  const namestyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight:'30px'
  }

  const nav = {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding:'0px 30px 30px 30px',
    marginTop: '40px'
    }

  const navbuttons = {
    border: 'none'
  }

  const profileImage ={
    float: 'left',
    marginLeft: '30px',
    paddingLeft: '30px',
    borderRadius: '25%',
    height: '80px',
    width: '70px',
    background: 'url(https://www.rainforest-alliance.org/sites/default/files/styles/large/public/2016-09/three-toed-sloth-teaser.jpg?itok=_1WeWSnX)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '4px solid white',
    backgroundSize: 'cover',
    zIndex: '1',
    position: 'relative',
    bottom: '55px'

  }


  return (
    <div style={main}>
      <div style={profileImage}></div>
      <div style={namestyle}>
        <h3>Slothy Mc'Sloth</h3>
      </div>
      <div style={nav}>
        <button style={navbuttons}>TWEETS</button>
        <button style={navbuttons}>FOLLOWING</button>
        <button style={navbuttons}>FOLOLOWERS</button>
      </div>
    </div>
  );
}

export default ProfileNav;
