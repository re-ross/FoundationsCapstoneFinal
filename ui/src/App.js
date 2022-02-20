import axios from "axios";
import React from "react";
import User from "./User"

const baseURL = "http://localhost:3000/users";

export default function App() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div className="users">
        {users.map((user) => (
        <User
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            userName={user.userName}
            followers={user.followers}
            following={user.following}
         />
        ))}
      </div>
  );
}
