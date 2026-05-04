'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-900 animate-pulse border border-gray-200 dark:border-zinc-800" />
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gold-500/30 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300 group shadow-sm hover:shadow-gold-500/20"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          animate={{
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-gold-600" />
        </motion.div>
        <motion.div
          animate={{
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-gold-400" />
        </motion.div>
      </div>
      
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-300 scale-110 opacity-0 group-hover:opacity-100" />
    </motion.button>
  );
};

export default ThemeToggle;
