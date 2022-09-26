// import { lazyImport } from "@/utils/lazyImport";
// TODO enable lazy loading
// const { AuthRoutes } = lazyImport(
//   () => import("@/features/auth"),
//   "AuthRoutes"
// );

import { AuthRoutes } from "@/features/auth/routes";

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
