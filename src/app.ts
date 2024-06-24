import express from "express";
import dotenv from "dotenv";
import routesConfig from "./router";
import { greetUserAsync, initializeGraph, MsGraphConfig } from "./config";

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
  const msGraphConfig: MsGraphConfig = {
    clientId: process.env.GRAPH_API_CLIENT_ID,
    tenantId: process.env.GRAPH_API_TENANT_ID,
    graphUserScopes: [
      "user.read",
      "mail.read",
      "mail.send",
      "User.ReadWrite.All",
      "Domain.ReadWrite.All",
      "Contacts.ReadWrite",
    ],
  };
  initializeGraph(msGraphConfig);
  await greetUserAsync();
}
