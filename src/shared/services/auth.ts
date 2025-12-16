import { api } from "../api";
import type { LoginResponse } from "../interfaces/login.model";

const authServices = {
  login: async (username: string, password: string) => {
    const req = await api.post<LoginResponse>(`/auth/login`, {
      username,
      password,
    });
    return req.data;
  },

  register: async (username: string, password: string) => {
    const req = await api.post<LoginResponse>(`/users`, {
      username,
      password,
    });

    return req.data;
  },
};

export default authServices;
