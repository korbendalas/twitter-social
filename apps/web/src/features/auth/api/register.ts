import { axios } from "@/lib/axios";

// import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (data: RegisterCredentialsDTO) => {
  return axios.post("/auth/register", data);
};
