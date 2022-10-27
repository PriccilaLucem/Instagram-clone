import { Router } from "express";
import {
  createNewPost,
  getFollowingPosts,
} from "../controllers/PostController";
import upload from "../middlewares/multer";
import { isLogged } from "../middlewares/userMiddleware";

const router = Router();

const postRoutes = () => {
  router.post("", isLogged, upload.single("file"), createNewPost);
  router.get("", isLogged, getFollowingPosts);
  return router;
};

export default postRoutes;
