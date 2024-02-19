'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void; // doesn't return anything, simply changes the mode
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // at the start it will be undefined

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(''); // light or dark

  const handleThemeChange = () => {
    if (
      // check if there is a dark theme in local storage OR if there is no theme in local storage but the browser prefers dark mode
      localStorage.theme === 'dark' ||
      (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    ) {
      setMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => { // each time the theme mode changes
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}