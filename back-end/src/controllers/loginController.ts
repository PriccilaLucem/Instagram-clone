import { Request, Response } from "express";
import {
  generateToken,
  getUser,
  verifyPassword,
} from "../services/loginService";
import { LoginInterface } from "../types";

const Login = async (req: Request, res: Response) => {
  const login = req.body as LoginInterface;
  const user = await getUser(login.email);
  if (user) {
    if (await verifyPassword(login.password, user.hash)) {
      const token = generateToken(user);
      return res.json({ token: token });
    }
  }
  return res.status(409).json({ error: "Wrong email or password" });
};

export default Login;
