import express from "express";
const users = express.Router();
import { handleGetAllUsers, handleRegisterUsers } from "../controllers/user.js";


users.post("/", handleRegisterUsers);
users.get("/", handleGetAllUsers);


export default users;