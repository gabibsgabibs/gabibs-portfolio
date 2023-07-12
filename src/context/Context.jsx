import { createContext } from 'react';

export const defaultTheme = {
  isDark: false,
  toggleDarkMode: function () {
    return;
  },
};

export const ThemeContext = createContext(defaultTheme);