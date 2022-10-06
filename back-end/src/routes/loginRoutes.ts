import { Router } from "express";
import Login from "../controllers/loginController";

const router = Router();

const loginRoutes = () => {
  router.post("", Login);

  return router;
};
export default loginRoutes;
