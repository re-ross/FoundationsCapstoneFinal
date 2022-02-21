import React, {  useState } from "react";
import axios from "axios";
import User from "./User"


const baseURL = "http://localhost:3000/users";

function SidebarRight() {
    const [users, setUsers] = useState([]);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setUsers(response.data);
          console.log(response.data);
        });
      },[]);

    return (
        <div className="user">
          <div className="user__header">
          </div>
          {users.map((user) => (
            <User
              key={user.id}
              displayName={user.displayName}
              userName={user.userName}
              avatar={user.avatar}
            />
          ))}
        </div>
      );
    }
 
    export default SidebarRight;
