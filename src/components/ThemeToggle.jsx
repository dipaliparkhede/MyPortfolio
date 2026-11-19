import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 hover:bg-white/10 dark:hover:bg-navy-800 transition-all duration-300 text-violet-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 group"
      title={theme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 text-amber-300" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 text-violet-600" />
      )}
    </button>
  );
}
