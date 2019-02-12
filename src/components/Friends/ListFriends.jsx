import React from "react";


const profileImage = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '2px solid #2c97de',
  height: '70px',
  width: '80px',
  borderRadius: '25%',
  // float: 'left',
  // marginRight: '8px'
}

const friendBox = {
  display: 'flex',
  marginTop: '30px'
}

function ListFriends(props,index){
  return (
    <div>
      <FriendList
        friends={friends}
        key={index}
      />
    </div>
  );
}

const FriendList = (props) => {
  return (
    <div>
      <p> something </p>
        {props.friends.map((friend, index) =>
          <div style={friendBox}>
            <p>{friend.name}</p>
              <div>
                <img style={profileImage} src={friend.url}/>
              </div>
            <button> Add Friend </button>
          </div>
        )}
    </div>

  )
}

const friends = [
  {
    name:"Flippy flop",
    url: 'https://www.gannett-cdn.com/-mm-/eb9153ef471ec1cb22faf645d7d063754d336115/c=0-330-2006-3000&r=2006x2670/local/-/media/USATODAY/test/2013/08/09/1376068652000-mmiin07p.jpg?width=534&height=712&fit=crop'
  },
  {
    name:"Hooti Hoo",
    url: 'https://animals.sandiegozoo.org/sites/default/files/2016-10/owl_southern_white_faced.jpg'
  }
]

export default ListFriends;
