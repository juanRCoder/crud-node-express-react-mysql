import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import UserLayout from "../layout";

const Loading = () => <div className="outline outline-slate-50 text-3xl text-white">Loading...</div>

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