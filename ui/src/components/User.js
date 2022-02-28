import React from "react";
import { Avatar } from "@material-ui/core";
import "../styling/User.css"

const User = ({ id,displayName, userName, avatar }) => {
    return (
      <div className="userCard">
        <Avatar src={avatar} />
        <h1>{userName}</h1>
        <p>{displayName}</p>
      </div>
    );
  };
  
  export default User;
  