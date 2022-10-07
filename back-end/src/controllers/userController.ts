import { Request, Response } from "express";
import { UserInterface } from "../types";
import { getUserById } from "../services/userServices";

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
  return res.status(201).json(user);
};

export const getOneUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserById(id);
  return res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  deleteUserDB(req.params.id);
  return res.sendStatus(204);
};
