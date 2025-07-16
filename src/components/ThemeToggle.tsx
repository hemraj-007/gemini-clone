// components/ThemeToggle.tsx
import React from 'react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
