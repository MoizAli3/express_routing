import express from "express";
const home = express.Router();

home.get("/", (req, res) => {
  res.send("Home Page");
});

export default home;