import express from "express";
import router from "./routes/index.js";

const app = express();
const port = 3000;

app.use("/api", router);
app.use("/", express.static("public"));

// app.get("/", (req, res) => {
//   res.send(`<h1>Routes</h1>`);
// });

app.get("/api", (req, res) => {
  res.send(`<h1>Welcome to API</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
