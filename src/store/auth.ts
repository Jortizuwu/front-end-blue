// src/store/auth.store.ts
import type { LoginResponse } from "@/shared/interfaces/login.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthSlice {
  token: string | null;
  setToken: (payload: LoginResponse) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthSlice>()(
  persist(
    (set) => ({
      token: null,
      setToken: ({ status }) => set({ token: status }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
