// import { lazyImport } from "@/utils/lazyImport";
// TODO enable lazy loading
// const { AuthRoutes } = lazyImport(
//   () => import("@/features/auth"),
//   "AuthRoutes"
// );

import { AuthRoutes } from "@/features/auth/routes";
import { Register } from "@/features/auth/routes/register";

// export const publicRoutes = [
//   {
//     path: "/auth/*",
//     element: <AuthRoutes />,
//   },
// ];

export const publicRoutes = [
  {
    path: "/",
    element: <Register />,
  },
];
