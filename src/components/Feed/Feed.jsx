import React from "react";


function Feed(props, index){
  return(
    <div>
      <Stream
        posts={posts}
        key={index}
      />
    </div>
  )
}

const mainStyle = {
  padding:'10px',
  display: 'grid',
  gridGap: '2px',
}

const searchBar = {
  padding: '10px',
  marginRight: '15px',
  border: '2px solid #00b5f3',
}

const searchMenu = {
  backgroundColor: '#a6d8f1'
}

const profileImage = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '2px solid #2c97de',
  height: '70px',
  width: '80px',
  borderRadius: '25%',
  float: 'left',
}

const nameStyle = {
  fontWeight: 'bold'
}

const postStyle = {
  gridRow:'1',
  gridColumn: '2',
  border: '1px solid red',
}



const Stream = (props) => {
  return (

    <div>
      <div style={searchMenu}>
        <input style={searchBar} type="text" placeholder="What's happening?" name="search"/>
      </div>

      {props.posts.map((post, index) =>
      <div style ={mainStyle}>
        <div>
          <img style={profileImage} src={post.url}/>
        </div>
        <div style={nameStyle}>{post.name}</div>
        <div style ={postStyle}>{post.post}</div>
        <hr/>
      </div>
      )}
    </div>
  );
}


const posts = [
  {
  name:"Mr. Sparkles",
  post:"gooooob morning. be sure to start your day with a stretchum. maybe even a wiggle. now you’re ready for anything. the haters won’t know what hit them",
  url: 'https://static1.squarespace.com/static/52f6e70ae4b09d0c250122c6/t/543fd5b5e4b0e4641e417f41/1413469622559/question.jpg?format=1500w'
  },
  {
  name:"Spatula",
  post:"the commercial on the tv. made a doorbell noise. i know deep down it wasn’t my doorbell. but. there’s no harm in making sure",
  url: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/happiest-smiling-hedgehog-wildo-1-58ef812f8b934__700.jpg'
  },
  {
  name:"Granddad",
  post:"there was a sandwich. on the edge of the counter. and now there isn’t. those are all the details. we can confirm so far. the piece of lettuce on my nose. is purely circumstantial",
  url: 'http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg'
  },
  {
  name:"Twinkie",
  post:"WE’RE GOING TO THE PARK. AND I’M BRINGING MY STUFFED FREN SEBASTIAN. AND I’M GOING TO SHOW HIM. TO EVERYBODY",
  url: 'https://www.kellogggarden.com/wp-content/uploads/2016/09/PotBellyPig.jpg'
  },
  {
  name:"Turd Nugget",
  post:"i fell asleep with my tongue out. and the human decided to poke it. i should really know better by now. they do that every time",
  url: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg'
  },
  {
  name:"Piglet",
  post:"the human took a little swab of my cheek. and is sending it away. to see what type of pup i am. but i don’t need the results. i’m 100% fabulous",
  url: 'https://www.rainforest-alliance.org/sites/default/files/styles/large/public/2016-09/european-otter.jpg?itok=kaSC9p-S'
  }
]


export default Feed;
