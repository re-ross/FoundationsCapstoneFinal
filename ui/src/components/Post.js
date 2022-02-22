import { Avatar } from "@material-ui/core";
import React from "react";
import "../styling/Post.css";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";


// takes in id of comment, make delete axios req, passes id === post.id, onClick for DeleteIcon
function Post({ id, displayName, userName, content, image, avatar }) {
  const deletePost = (id) =>{
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(()=>console.log(`${id} deleted!`))
  }
  
    
  
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{content}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <DeleteIcon fontSize="small"onClick={(e)=>deletePost(id)}/>
        </div>
      </div>
    </div>
  );
}
export default Post;