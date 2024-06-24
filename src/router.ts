import { Application } from "express";
import userRoutes from "./module/user/router";

const routesConfig = (app: Application): void => {
  app.use("/users", userRoutes);
};

export default routesConfig;
