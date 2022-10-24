import { Router } from "express";
import { postNewFollower } from "../controllers/FollowersController";
import { isLogged, verifyIfUserExists } from "../middlewares/userMiddleware";

const router = Router();

export const followersRoutes = () => {
  router.post("/:id", isLogged, verifyIfUserExists, postNewFollower);

  return router;
};
