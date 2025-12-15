import { api } from "../api";
import type { LoginResponse } from "../interfaces/login.model";

const authServices = {
  login: async (username: string, password: string) => {
    const req = await api.post<LoginResponse>(`/login`, {
      username,
      pin: password,
    });
    const token = req.data;
    return token;
  },
};

export default authServices;
