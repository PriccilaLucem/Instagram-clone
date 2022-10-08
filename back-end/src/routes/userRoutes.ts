import { Router } from "express";
import {
  deleteUser,
  getOneUser,
  getYourProfile,
  postUser,
} from "../controllers/userController";
import {
  isLogged,
  verifyIfEmailExists,
  verifyIfUserExists,
} from "../middlewares/userMiddleware";
import validateData from "../middlewares/validateDataMiddleware";
import userSchema from "../schemas/userSchema";

const router = Router();

const UserRoutes = () => {
  router.post("", validateData(userSchema), verifyIfEmailExists, postUser);
  router.get("/:id", verifyIfUserExists, getOneUser);
  router.get("", isLogged, getYourProfile);
  router.delete("/:id", verifyIfUserExists, deleteUser);
  return router;
};

export default UserRoutes;
