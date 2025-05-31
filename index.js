import express from "express";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", router);

app.use("/", express.static("public"));

// app.get("/", (req, res) => {
//   res.send(`<h1>Routes</h1>`);
// });

app.get("/api", (req, res) => {
  res.status(200).send(`<h1>Welcome to API</h1>`);
});

app.use((req, res) => {
  res.status(404).json({ status: 404 , error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
