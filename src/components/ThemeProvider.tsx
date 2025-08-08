'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      
      // Apply theme to document
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        bodyElement.classList.add('dark');
        htmlElement.style.colorScheme = 'dark';
      } else {
        htmlElement.classList.remove('dark');
        bodyElement.classList.remove('dark');
        htmlElement.style.colorScheme = 'light';
      }
      
      // Force a reflow to ensure styles are applied
      void htmlElement.offsetHeight;
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Always provide the context, but with default values during hydration
  const contextValue = {
    theme: mounted ? theme : 'light' as Theme,
    toggleTheme: mounted ? toggleTheme : () => {}
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
