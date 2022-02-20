import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import PostBox from "./PostBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
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
          displayName={post.displayName}
          username={post.username}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;