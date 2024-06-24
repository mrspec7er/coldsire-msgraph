import { Application } from "express";
import userRoutes from "./module/user/router";
import emailRoutes from "./module/email/router";

const routesConfig = (app: Application): void => {
  app.use("/users", userRoutes);
  app.use("/emails", emailRoutes);
};

export default routesConfig;
