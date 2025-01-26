import { create } from "zustand";
import { User } from "../modules/users/services/users.services";

interface propZustand {
  users: User[] | null;
  setUsers: (users: User[]) => void;

  themeMode: "dark" | "light";
  setThemeMode: (themeMode: "dark" | "light") => void;
}

export const useStore = create<propZustand>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  themeMode: 'dark',
  setThemeMode: (themeMode) => set({ themeMode })
}));