import { AuthContextValue } from "@/hooks/auth/useAuth";
import React from "react";
import { AuthUser } from "@/features/auth/types";
import {
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from "@/features/auth/api";

export const AuthContext = React.createContext<AuthContextValue<
  AuthUser | null,
  Error | null,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
> | null>(null);
AuthContext.displayName = "AuthContext";
