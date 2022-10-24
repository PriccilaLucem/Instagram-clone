import { Request, Response } from "express";
import { followUser, unfollowUser } from "../services/followerServices";
import { getUserById } from "../services/userServices";

export const postNewFollower = async (req: Request, res: Response) => {
  const loggedUserId = req.jwtDecodedUser?._id as string;
  const idToBeFollowed = req.params.id;

  if (loggedUserId == idToBeFollowed) {
    return res.status(400).json({ error: "Ids are equal" });
  }

  const loggedUser = await getUserById(loggedUserId);
  const userToBeFollowed = await getUserById(idToBeFollowed);

  if (
    !loggedUser?.following.find(
      (item) => item.followingUserId == userToBeFollowed?._id
    )
  ) {
    followUser(loggedUser, userToBeFollowed);
  } else {
    unfollowUser(loggedUser, userToBeFollowed);
  }
  return res.sendStatus(200);
};
