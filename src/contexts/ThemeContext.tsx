
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [accentColor, setAccentColor] = useState('#3b82f6');

  useEffect(() => {
    // Initialiser le thème selon la préférence du navigateur ou du localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    const savedAccentColor = localStorage.getItem('accentColor');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    const initialAccentColor = savedAccentColor || '#3b82f6';
    
    setTheme(initialTheme);
    setAccentColor(initialAccentColor);
    
    // Appliquer le thème initial
    applyTheme(initialTheme);
    applyAccentColor(initialAccentColor);
  }, []);

  const applyTheme = (newTheme: ThemeType) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const applyAccentColor = (color: string) => {
    const hsl = hexToHsl(color);
    document.documentElement.style.setProperty('--primary', hsl);
    document.documentElement.style.setProperty('--sidebar-primary', hsl);
  };

  const updateTheme = (newTheme: ThemeType) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const updateAccentColor = (color: string) => {
    localStorage.setItem('accentColor', color);
    setAccentColor(color);
    applyAccentColor(color);
  };

  // Convertir hex en hsl pour les variables CSS
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme: updateTheme, 
      accentColor, 
      setAccentColor: updateAccentColor 
    }}>
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
