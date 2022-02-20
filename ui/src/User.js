import React from "react";

const User = ({ id, firstName, lastName, userName, followers, following }) => {
  return (
    <div>
      <h1>{userName}</h1>
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{followers}</li>
        <li>{following}</li>
      </ul>
    </div>
  );
};

export default User;