import {Router } from 'express';
import { User } from './user.controller';
import { validateEmail } from '../../middleware/validateEmail';

export const userRoutes = Router();

userRoutes.get("/all", User.allUser);
userRoutes.post("/create", validateEmail, User.createUser);
userRoutes.put("/update/:id", validateEmail, User.updateUser);
userRoutes.delete("/delete/:id", User.deleteUser);