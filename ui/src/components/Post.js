import { Avatar, Button } from "@material-ui/core";
import React, {  useState }from "react";
import "../styling/Post.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

function Post({ id, displayName, userName, content, image, avatar }) {
  const [isEditing, setIsEditing] = useState(false)
  const deletePost = (id) =>{
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(() => console.log(`${id} deleted!`))
  }

  const editPost = () => {
    setIsEditing(false)

    axios.put(`http://localhost:3000/posts/${id}`)
    .then(()=>console.log(`${id} edited!`))
  }
  
    
  
  return (
    <div className="post">
      {isEditing ?  (
        <form>
        <div className="postBox__input">
          <input
            onChange={(e) => editPost(id)}
            placeholder="What's going on?"
            type="text"
          />
        </div>
        <Button onClick={(e)=>editPost(id)} type="submit" className="postBox__button">
          Post
        </Button>
      </form>

      ):null}
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
        <img className="post__image" src={image} alt="" />
        <div className="post__footer">
          <EditIcon fontSize="small"onClick={(e)=>editPost(id)}/>
          <DeleteIcon fontSize="small"onClick={(e)=>deletePost(id)}/>
        </div>
      </div>
    </div>
  );
}
export default Post;