import { axios } from "@/lib/axios";

// import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO) => {
  return axios.post("/auth/login", data);
};
