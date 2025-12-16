import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthSlice {
  token: string | null;
  openDialog: boolean;
  setToken: (token: string) => void;
  setOpenDialog: (openDialog: boolean) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthSlice>()(
  persist(
    (set) => ({
      token: null,
      openDialog: false,
      setToken: (token: string) => set({ token }),
      removeToken: () => set({ token: null }),
      setOpenDialog: (openDialog: boolean) => set({ openDialog }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
