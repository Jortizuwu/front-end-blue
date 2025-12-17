import axios from "axios";
import { ENVS } from "./../env";

export const api = axios.create({
  baseURL: ENVS.API_URL,
});

api.interceptors.request.use(async (confing) => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    confing.headers.Authorization = `Bearer ${token}`;
  }
  return confing;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.sessionStorage.clear();
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
