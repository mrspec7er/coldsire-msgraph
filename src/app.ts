import express from "express";
import dotenv from "dotenv";
import routesConfig from "./router";
import { greetUserAsync, initializeGraph, msGraphConfig } from "./config";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello There!");
});

initializeMsGraph();

routesConfig(app);

app.listen(process.env.PORT, () => {
  return console.log(
    `Express server is listening at http://localhost:${process.env.PORT} 🚀`
  );
});

async function initializeMsGraph() {
  initializeGraph(msGraphConfig);
  await greetUserAsync();
}
