import React from "react";
import User from "../context/users/user";
import UserForm from "../components/table/UserForm";
import UserTable from "../components/table/UserTable";
import { useEffect, useContext } from "react";
import axios from "axios";
import UserData from "../context/userData/userData";

function Users() {
  const { userPage } = useContext(User);
  const { userData, setUserData } = useContext(UserData);

  
  
  useEffect(() => {
    axios
      .get(`https://express-routing-1.onrender.com/api/users`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [ setUserData]);

  console.log(userData);

  return <>{userPage ? <UserForm /> : <UserTable />}</>;
}

export default Users;
