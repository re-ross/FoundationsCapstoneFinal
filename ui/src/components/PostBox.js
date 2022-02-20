import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./PostBox.css";
import axios from "axios";

function PostBox() {
  const [postMessage, setPostMessage] = useState("");
  // const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
   

    setPostMessage("");
    // setPostImage("");
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62" />
          <input
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        {/* <input
          placeholder="Optional: Enter image URL"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          type="text"
          className="postBox__imageInput"
        /> */}
        <Button onClick={sendPost} type="submit" className="postBox__button">
          Post
        </Button>
      </form>
    </div>
  );
  }
export default PostBox;