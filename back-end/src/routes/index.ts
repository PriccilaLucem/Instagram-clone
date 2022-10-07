import { Express } from "express";
import loginRoutes from "./loginRoutes";
import postRoutes from "./postRoutes";
import UserRoutes from "./userRoutes";

const initRoutes = (app: Express) => {
  app.use("/user", UserRoutes());
  app.use("/login", loginRoutes());
  app.use("/post", postRoutes());
};

export default initRoutes;
