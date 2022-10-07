import { PostInterface } from "../types";
import { getUserById } from "./userServices";

export const addPostToUser = async (id: string, post: PostInterface) => {
  const user = await getUserById(id);
  user?.posts.push(post);
  user?.save();
  return user?.posts.at(-1);
};
