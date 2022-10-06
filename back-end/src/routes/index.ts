import { Express } from "express";
import loginRoutes from "./loginRoutes";
import UserRoutes from "./userRoutes";

const initRoutes = (app: Express) => {
  app.use("/user", UserRoutes());
  app.use("/login", loginRoutes());
};

export default initRoutes;
