import { Request, Response } from "express";
import { deleteUserById, getAllUsers, postCreateUser, putUpdateUser } from "./user.service";

export class User {
  static allUser = async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers();
      if (users.length === 0) {
        res.status(400).json({ status: 404, message: "No users found" });
        return;
      }
      res.status(200).json({
        status: 200,
        message: "all users",
        users,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  };

  static createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ status: 400, message: "Name, email and password are required" });
      return;
    }
    try {
      const data = { name, email, password };
      const newUser = await postCreateUser(data);
      if (newUser.status === 409) {
        res.status(409).json({ status: newUser.status, message: "Email already exists" });
        return;
      }
      res.status(201).json({
        status: newUser.status,
        message: "User created",
        data: newUser.user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  };

  static updateUser = async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.params.id;
    if (!userId) {
      res.status(400).json({ status: 400, message: "User ID is required" });
      return;
    }
    try {
      const updatedUser = await putUpdateUser(data, userId);
      if (updatedUser.status === 404) {
        res.status(404).json({ status: 404, message: "User id not found" });
        return;
      }
      res.status(200).json({
        status: updatedUser.status,
        message: "User updated",
        data: updatedUser.user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  };

  static deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    if (!userId) {
      res.status(400).json({ status: 400, message: "User ID is required" });
      return;
    }
    try {
      const deletedUser = await deleteUserById(userId);
      if (deletedUser.status === 404) {
        res.status(404).json({ status: 404, message: "User id not found" });
        return;
      }
      res.status(200).json({
        status: deletedUser.status,
        message: "User deleted",
        data: deletedUser.user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  };
}
