import { PostInterface } from "../types";
import { getUserById } from "./userServices";
import PostsModel from "../models/post";

export const addPostToUser = async (id: string, post: PostInterface) => {
  // const user = await getUserById(id);
  // user?.posts.push(post);
  // user?.save();
  // return user?.posts.at(-1);
};

export const getPostUserInfo = async (id: string) => {
  const posts = await PostsModel.find({ authorId: id });

  return posts;
};
