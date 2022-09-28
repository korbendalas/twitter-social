import React from "react";
import { AuthUser, AuthContextValue } from "@/features/auth/types";

export const AuthContext = React.createContext<AuthContextValue | null>(null);
