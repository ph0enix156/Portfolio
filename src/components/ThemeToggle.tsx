import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabels = false }) => {
  const { theme, setTheme } = useTheme();

  const options: Array<{ id: Theme; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher"
      className={`inline-flex items-center p-0.5 rounded-lg bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300/60 dark:border-stone-700/60 transition-colors ${className}`}
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isSelected = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setTheme(opt.id)}
            title={`${opt.label} mode`}
            className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer ${
              isSelected
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
            } ${showLabels ? 'px-3 py-1.5' : ''}`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            {showLabels && <span>{opt.label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
