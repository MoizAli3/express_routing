import React, { useContext } from "react";
import { useEffect } from "react";
import Table from "../components/userTable";
import axios from "axios";
import UserData from "../context/userData/userData";
import Users from "./Users";

function Home() {
  const { userData, setUserData } = useContext(UserData);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);

  return (
    <div className="flex justify-center">
      <Users />
    </div>
  );
}

export default Home;
