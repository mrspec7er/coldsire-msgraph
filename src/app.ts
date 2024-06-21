import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.listen(process.env.PORT, () => {
  return console.log(
    `Express server is listening at http://localhost:${process.env.PORT} 🚀`
  );
});
