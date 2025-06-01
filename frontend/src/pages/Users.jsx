import React from "react";
import { useContext } from "react";
import User from "../context/users/user";
import UserForm from "../components/UserForm";
import userTable from "../components/userTable"

function Users() {
  const { userPage } = useContext(User);

  return <>{userPage ? <UserForm /> : <userTable />}</>;
}

export default Users;
