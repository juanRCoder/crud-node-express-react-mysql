import {Router } from 'express';
import { User } from './user.controller';

export const userRoutes = Router();

userRoutes.get("/all", User.allUser);
userRoutes.post("/create", User.createUser);
// userRoutes.put("/update", updateUserController);
// userRoutes.delete("/delete", deleteUserController);