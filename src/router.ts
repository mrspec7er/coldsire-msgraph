import { Application } from "express";
import userRoutes from "./module/user/router";
import emailRoutes from "./module/email/router";
import domainRoutes from "./module/domain/router";

const routesConfig = (app: Application): void => {
  app.use("/users", userRoutes);
  app.use("/emails", emailRoutes);
  app.use("/domains", domainRoutes);
};

export default routesConfig;
