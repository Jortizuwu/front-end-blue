import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthSlice {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthSlice>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
