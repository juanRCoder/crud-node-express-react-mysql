import { Router } from "express";
import { userRoutes } from "./modules/users/user.routes";

export const serverRoutes = Router();

serverRoutes.use("/users", userRoutes);