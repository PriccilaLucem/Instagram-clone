import { Request, Response } from "express";
import { getUserById } from "../services/userServices";

export const postNewFollower = async (req: Request, res: Response) => {
  const loggedUserId = req.jwtDecodedUser?._id;
  const userToBeFollowed = req.params.id;

  const user = await getUserById(userToBeFollowed);
  if (!user) return;

  if (!user?.followers.find((item) => item.followerId == loggedUserId)) {
    user.followers.push({ followerId: loggedUserId });
    await user.save();
  } else {
    user.followers.pull({ followerId: loggedUserId });
    await user.save();
  }
  return res.sendStatus(200);
};
