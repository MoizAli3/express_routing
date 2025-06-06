import { useState } from "react";
import UserData from "./userData";


const userDataProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  return (
    <UserData.Provider value={{ userData, setUserData }}>
      {children}
    </UserData.Provider>
  );
};

export default userDataProvider;
