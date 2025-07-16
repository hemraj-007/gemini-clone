import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: localStorage.getItem('theme') === 'dark',
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDark;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return { isDark: newTheme };
    }),
  setDark: (value) => {
    localStorage.setItem('theme', value ? 'dark' : 'light');
    set({ isDark: value });
  },
}));
