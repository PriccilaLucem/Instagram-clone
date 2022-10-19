import { Router } from "express";
import {
  deleteAllUsers,
  deleteUser,
  getAllUsers,
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
  router.delete("/:id", verifyIfUserExists, deleteUser);
  // Dev routes
  router.get("", getAllUsers);
  router.delete("", deleteAllUsers);
  return router;
};

export default UserRoutes;
