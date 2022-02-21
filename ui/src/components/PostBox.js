import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../styling/PostBox.css";
import axios from "axios";

const baseURL = "http://localhost:3000/posts";

function PostBox({setRefresh, refresh}) {
  const [post, setPost] = useState({
    userName: "@reross",
    displayName: "Ryan Ross",
    content: "",
    avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQG0LNL3PKBeWw/profile-displayphoto-shrink_800_800/0/1517278606063?e=1651104000&v=beta&t=COA-_2KQU8cQ1cYAqj1sQygNtoaQu9WrJN3aioYhv6I",
    image: "",

  });

  function createPost(e) {
    // e.preventDefault();
    axios
      .post(baseURL, post)
      .then((response) => {
        console.log(response.data);
        setRefresh(!refresh);
        setPost({...post,content:""});
    
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