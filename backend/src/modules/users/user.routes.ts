import {Router } from 'express';
import { User } from './user.controller';
import { validateEmail } from '../../middleware/validateEmail';

export const userRoutes = Router();

userRoutes.get("/", User.allUser);
userRoutes.post("/", validateEmail, User.createUser);
userRoutes.put("/:id", validateEmail, User.updateUser);
userRoutes.delete("/:id", User.deleteUser);