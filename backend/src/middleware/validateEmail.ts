import { NextFunction, Request, Response } from "express";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (email && !emailRegex.test(email)) {
    res.status(400).json({ status: 400, message: "Invalid email format" });
    return;
  }
  next();
};
