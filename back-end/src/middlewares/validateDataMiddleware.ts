import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

const validateData =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    try {
      const validated = await schema.validate(data, {
        stripUnknown: true,
        abortEarly: true,
      });
      req.validatedData = validated;
      return next();
    } catch (e: any) {
      return res.status(400).json({ error: e.errors[0] });
    }
  };

export default validateData;
