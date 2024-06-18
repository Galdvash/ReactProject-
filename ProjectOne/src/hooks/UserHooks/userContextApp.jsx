// userContextApp.js
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(
    JSON.parse(localStorage.getItem("userInformation")) || null
  );

  useEffect(() => {
    if (userInformation) {
      localStorage.setItem("userInformation", JSON.stringify(userInformation));
    }
  }, [userInformation]);

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </UserContext.Provider>
  );
};
