import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "../styling/PostBox.css";
import axios from "axios";

const baseURL = "http://localhost:3000/posts";

function PostBox() {
  const [post, setPost] = useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
 

  const sendPost = (e) => {
   

    setPost("");
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src={post.avatar} />
          <input
            value={post.content}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={post.image}
          onChange={(e) => setPost(e.target.value)}
          type="text"
          className="postBox__imageInput"
        />
        <Button onClick={sendPost} type="submit" className="postBox__button">
          Post
        </Button>
      </form>
    </div>
  );
  }
export default PostBox;