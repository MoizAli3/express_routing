import { useState } from "react";
import UserData from "./userData";

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  return (
    <UserData.Provider value={{ userData, setUserData }}>
      {children}
    </UserData.Provider>
  );
};

export default UserDataProvider;
