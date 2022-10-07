import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import UserModel from "../models/user";
import jwt from "jsonwebtoken";
import { jwtDecodedUserInterface } from "../types";

export const verifyIfEmailExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;

  UserModel.findOne({ email: email }, (err: mongoose.Error, user: any) => {
    if (user == null) {
      next();
    } else {
      return res.status(400).json({ error: "Email already taken" });
    }
  });
};

export const verifyIfUserExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  UserModel.findById(id, (err: mongoose.Error, user: any) => {
    if (user) {
      req.existentData = user;
      next();
    } else {
      return res.status(404).json({ error: "User Not Found" });
    }
  });
};

export const isLogged = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.jwtDecodedUser = decoded as jwtDecodedUserInterface;
    return next();
  });
};
