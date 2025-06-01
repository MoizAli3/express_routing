import UserData from "./userData";

import { useState } from "react";

const userDataProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  return (
    <UserData.Provider value={{ userData, setUserData }}>
      {children}
    </UserData.Provider>
  );
};

export default userDataProvider;
