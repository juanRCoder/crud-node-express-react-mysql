import { Request, Response } from "express";
import { getAllUsers, postCreateUser } from "./user.service";

export class User {
  static allUser = async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers();
      if(users.length === 0){
        res.status(400).json({ status: 404, message: "No users found" });
        return
      }
      res.status(200).json({
        status: 200,
        message: "all users",
        users
      });
    } catch(error){
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    } 
  }

  static createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
      res.status(400).json({ status: 400, message: "Name, email and password are required" });
      return;
    }
    if (!emailRegex.test(email)) {
      res.status(400).json({ status: 400, message: "Invalid email format" });
      return;
    }
    try {
      const data = {name, email, password};
      const newUser = await postCreateUser(data);
      if(newUser.status === 409){
        res.status(409).json({status: newUser.status, message: "Email already exists" });
        return
      }
      res.status(201).json({
        status: newUser.status,
        message: "User created",
        data: newUser.user
      });
    }
    catch(error){
      console.log(error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  }
}
