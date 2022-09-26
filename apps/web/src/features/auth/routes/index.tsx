import { Routes, Route } from "react-router-dom";
import { Login } from "@/features/auth/routes/login";
import { Register } from "@/features/auth/routes/register";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Register />} />
    </Routes>
  );
};
