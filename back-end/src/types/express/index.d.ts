import { jwtDecodedUserInterface } from "..";

export {};

declare global {
  namespace Express {
    interface Request {
      validatedData?: any;
      existentData?: any;
      jwtDecodedUser?: jwtDecodedUserInterface;
    }
  }
}
