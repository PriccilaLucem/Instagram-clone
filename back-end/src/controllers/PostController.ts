import { Request, Response } from "express";
import { addPostToUser, getPostUserInfo } from "../services/postServices";
import { getUserById } from "../services/userServices";
import { PostInterface } from "../types";

export const createNewPost = async (req: Request, res: Response) => {
  if (!req.file)
    return res.status(400).json({ error: "One image is required" });

  if (req.file.mimetype !== "image/jpeg")
    return res.status(400).json({ error: "File must be jpeg" });
  const id = req.jwtDecodedUser?._id as string;
  const newPost = {
    description: req.body.description,
    contentType: req.file.mimetype,
    data: req.file.buffer,
  };
  const post = (await addPostToUser(id, newPost)) as PostInterface;
  return res.json(post);
};

export const getFollowingPosts = async (req: Request, res: Response) => {
  const id = req.jwtDecodedUser?._id as string;
  const loggedUser = await getUserById(id);
  if (!loggedUser) return;
  const output = [] as any;

  await Promise.all(
    loggedUser.following.map(async (item) => {
      const post = await getPostUserInfo(item.followingUserId as string);
      output.push(post);
    })
  );

  res.json(output);
};
