import User from "./user";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [userPage, setUserPage] = useState(false);
  return (
    <User.Provider value={{ userPage, setUserPage }}>{children}</User.Provider>
  );
};

export default UserProvider;
