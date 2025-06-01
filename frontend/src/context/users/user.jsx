import { createContext } from "react";

const User = createContext({
  userPage: false,
  setUserPage: () => {}, // Provide a no-op function as default
});

export default User;
