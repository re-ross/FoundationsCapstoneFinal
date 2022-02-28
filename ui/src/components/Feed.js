import React, {  useState } from "react";
import "../styling/Feed.css";
import Post from "./Post";
import PostBox from "./PostBox";
import axios from "axios";


const baseURL = "http://localhost:3000/posts";

function Feed() {
  const [refresh, setRefresh] = useState(false)
  const [feed, setFeed] = useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setFeed(response.data);
      console.log(response.data);
    });
  },[refresh]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <PostBox setRefresh={setRefresh}refresh={refresh}feed={feed} setFeed={setFeed}/>
      {[...feed].reverse().map((post) => (
        <Post
          setFeed={setFeed}
          key={post.id}
          id={post.id}
          displayName={post.displayName}
          userName={post.userName}
          content={post.content}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;