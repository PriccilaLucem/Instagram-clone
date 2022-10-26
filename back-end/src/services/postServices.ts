import { PostInterface } from "../types";
import { getUserById } from "./userServices";
import UserModel from "../models/user";

export const addPostToUser = async (id: string, post: PostInterface) => {
  const user = await getUserById(id);
  user?.posts.push(post);
  user?.save();
  return user?.posts.at(-1);
};

export const getPostUserInfo = async (id: string) => {
  const user = await UserModel.findById(id).select("username posts");
  const output = {
    author: user?.username,
    posts: user?.posts,
  };
  return output;
};
