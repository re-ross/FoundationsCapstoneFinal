import { Avatar } from "@material-ui/core";
import {
  FavoriteBorder
} from "@material-ui/icons";
import React from "react";
import "../styling/Post.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// takes in id of comment, make delete axios req, passes id === post.id, onClick for DeleteIcon
function Post({ displayName, username, content, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{content}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <EditIcon fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <DeleteIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
export default Post;