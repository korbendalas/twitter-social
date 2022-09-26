import { useRoutes } from "react-router-dom";

// import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  // const auth = useAuth();

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  // const routes = true ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);
  const element = useRoutes([...publicRoutes, ...protectedRoutes]);

  return <>{element}</>;
};
