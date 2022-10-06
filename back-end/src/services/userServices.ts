import bcrypt from "bcrypt";
import { UserInterface } from "../types";
import UserModel from "../models/user";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password.toString(), salt);

  return hash;
};

export const createUser = (user: UserInterface) => {
  const newUser = new UserModel(user);
  newUser.save((err) => {
    console.error(err);
  });
  return newUser;
};

export const deleteUserDB = async (id: string) => {
  await UserModel.findByIdAndDelete(id);
};
