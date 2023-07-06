import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeStoreState {
  theme: "dark" | "light";
  toggleTheme: Function;
  changeTheme: Function;
}

export const useThemeStore = create<ThemeStoreState>()(
  devtools(
    persist(
      (set) => ({
        theme: "dark",
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "dark" ? "light" : "dark",
          })),
        changeTheme: (userTheme: "dark" | "light") =>
          set((state) => ({ theme: userTheme })),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);
