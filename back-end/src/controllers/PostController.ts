import { Request, Response } from "express";
import { addPostToUser } from "../services/postServices";
import { PostInterface } from "../types";

export const createNewPost = async (req: Request, res: Response) => {
  if (!req.file)
    return res.status(400).json({ error: "One image is required" });

  if (req.file.mimetype !== "image/jpeg")
    return res.status(400).json({ error: "File must be jpeg" });
  const id = req.jwtDecodedUser?._id;
  const newPost = {
    description: req.body.description,
    contentType: req.file.mimetype,
    data: req.file.buffer,
  };
  const post = (await addPostToUser(id as string, newPost)) as PostInterface;
  return res.json(post);
};
