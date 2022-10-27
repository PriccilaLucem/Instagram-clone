import { Request, Response } from "express";
import { UserInterface } from "../types";
import { getAll, getUserById } from "../services/userServices";
import mongoose from "mongoose";
import {
  createUser,
  deleteUserDB,
  hashPassword,
} from "../services/userServices";

export const postUser = async (req: Request, res: Response) => {
  const validatedData = req.body as UserInterface;

  const hash = await hashPassword(validatedData.password as string);
  validatedData.hash = hash;

  const user = createUser(validatedData);
  const output = {
    _id: user._id,
    username: user.username,
    email: user.email,
    followers: user.followers,
  };

  return res.status(201).json(output);
};

export const getOneUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserById(id);
  return res.json(user);
};
export const getYourProfile = async (req: Request, res: Response) => {
  const id = req.jwtDecodedUser?._id as string;
  const user = await getUserById(id);
  return res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  deleteUserDB(req.params.id);
  return res.sendStatus(204);
};

// Function to clear all db
export const deleteAllUsers = async (req: Request, res: Response) => {
  async function clearCollections() {
    const collections = mongoose.connection.collections;

    await Promise.all(
      Object.values(collections).map(async (collection) => {
        await collection.deleteMany({}); // an empty mongodb selector object ({}) must be passed as the filter argument
      })
    );
  }
  await clearCollections();
  return res.sendStatus(204);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getAll();
  return res.json(users);
};
