// AllUsersComponent.js
import React, { useContext } from "react";
import { UserContext } from "../../hooks/UserHooks/userContextApp";
import useGetAllUsers from "../../hooks/UserHooks/useGetAllUsers";

function SandBox() {
  const { userInformation } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const allUsers = useGetAllUsers(token);

  return (
    <div className="bodyAbout">
      <h2>All Users:</h2>
      {userInformation && userInformation.isAdmin ? (
        <ul>
          {allUsers.map((user) => (
            <li key={user._id}>{user.name.first}</li>
          ))}
        </ul>
      ) : (
        <p>You do not have permission to view all users.</p>
      )}
    </div>
  );
}

export default SandBox;
