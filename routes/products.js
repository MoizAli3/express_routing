import express from "express";
import { Products } from "../info/data.js";
const prodcts = express.Router();


prodcts.get("/", (req, res) => {
  res.send(Products);
});

prodcts.get("/:id", (req, res) => {
  const id = req.params.id - 1;

  if (products[id]) {
    res.status(200).send({
      status: 200,
      message: "Product Successfull Found!",
      data: products[id],
    });
  } else {
    res.send({ message: "Product Not Found!" });
  }
});

export default prodcts;
