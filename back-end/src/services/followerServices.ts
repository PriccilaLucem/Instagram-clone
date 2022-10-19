import { UserInterface } from "../types";

const pushNewFollower = (user: UserInterface, followerId: string) => {
  user.followers.push({ followerId: followerId });
};
