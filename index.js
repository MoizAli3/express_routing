import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import connectMongoDb from "./connect.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

connectMongoDb(process.env.DATABASE_URI);


app.use((req, res) => {
  res.status(404).json({ status: 404, error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

