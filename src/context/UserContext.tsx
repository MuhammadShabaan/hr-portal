import React, { useEffect, useState } from "react";
import { User } from "../types/Types";

export const UserContext = React.createContext();

const LoggedInUserContext = ({ children }: any) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  console.log("user==>", user);

  useEffect(() => {
    let loggedInUser: User | null = JSON.parse(
      window.localStorage.getItem("user")
    );
    if (loggedInUser != null) {
      setUser(loggedInUser);
    } else {
      console.log("Value not found in local storage!");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default LoggedInUserContext;
