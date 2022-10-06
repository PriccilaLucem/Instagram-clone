import { Router } from "express";
import {
  deleteUser,
  getOneUser,
  postUser,
} from "../controllers/userController";
import {
  verifyIfEmailExists,
  verifyIfUserExists,
} from "../middlewares/userMiddleware";
import validateData from "../middlewares/validateDataMiddleware";
import userSchema from "../schemas/userSchema";

const router = Router();

const UserRoutes = () => {
  router.post("", validateData(userSchema), verifyIfEmailExists, postUser);
  router.get("/:id", verifyIfUserExists, getOneUser);
  router.delete("/:id", verifyIfUserExists, deleteUser);
  return router;
};

export default UserRoutes;
