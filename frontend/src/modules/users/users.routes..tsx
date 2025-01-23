import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import UserLayout from ".";

const Loading = () => <div>Loading...</div>

export const usersRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <UserLayout />
      </Suspense>
    ),
  }
]