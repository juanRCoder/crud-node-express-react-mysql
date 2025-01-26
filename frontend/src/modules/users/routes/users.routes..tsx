import { RouteObject } from "react-router-dom";
import UserLayout from "../layout";


export const usersRouter: RouteObject[] = [
  {
    path: '/',
    element: <UserLayout />
  }
]