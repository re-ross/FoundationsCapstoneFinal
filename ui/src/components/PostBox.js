import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "../styling/PostBox.css";
import axios from "axios";

const baseURL = "http://localhost:3000/posts";

function PostBox({setRefresh, refresh}) {
  const [post, setPost] = useState({
    userName: "@reross",
    displayName: "Ryan Ross",
    content: "",
    avatar: "https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg",
    image: "",

  });

  function createPost(e) {
    e.preventDefault();
    axios
      .post(baseURL, post)
      .then((response) => {
        console.log(response.data);
        setRefresh(!refresh);
    
      });
  }


  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src={post.avatar} />
          <input
            onChange={(e) => setPost({...post,content: e.target.value})}
            placeholder="What's going on?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          onChange={(e) => setPost({...post,image: e.target.value})}
          type="text"
          className="postBox__imageInput"
        />
        <Button onClick={(e)=>createPost(e)} type="submit" className="postBox__button">
          Post
        </Button>
      </form>
    </div>
  );
  }
export default PostBox;