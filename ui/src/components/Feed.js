import React, {  useState } from "react";
import "../styling/Feed.css";
import Post from "./Post";
import PostBox from "./PostBox";
import axios from "axios"

const baseURL = "http://localhost:3000/posts";

function Feed() {
  const [posts, setPosts] = useState([]);
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPosts(response.data);
      });
    }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <PostBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          content={post.content}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;