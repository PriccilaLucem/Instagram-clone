import { Router } from "express";
import { postNewFollower } from "../controllers/FollowersController";
import { isLogged } from "../middlewares/userMiddleware";

const router = Router();

export const followersRoutes = () => {
  router.post("/:id", isLogged, postNewFollower);

  return router;
};
