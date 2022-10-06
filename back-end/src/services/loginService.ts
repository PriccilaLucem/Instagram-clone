import UserModel from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const getUser = async (email: string) => {
  const user = await UserModel.findOne({ email: email }).select(
    "hash username email"
  );
  return user;
};

export const verifyPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password.toString(), hash);
};

export const generateToken = (user: any) => {
  const userInfo = {
    username: user.username,
    email: user.email,
    _id: user._id,
  };
  return jwt.sign(userInfo, process.env.JWT_SECRET as string);
};
