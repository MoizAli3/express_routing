import express from "express";
import { Products } from "../info/data.js";
const products = express.Router();

products.get("/", (req, res) => {
  res.send(Products);
});

export default products;