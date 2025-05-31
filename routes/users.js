import express from "express";
import { Users } from "../info/data.js";
const users = express.Router();

users.get("/", (req, res) => {
  res.send(Users);
});

export default users;