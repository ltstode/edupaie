
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  // Synchroniser avec les préférences système si nécessaire
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Ne mettre à jour que si l'utilisateur n'a pas déjà défini une préférence
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Ajouter un listener pour les changements de préférence système
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Sauvegarder la préférence de l'utilisateur
    localStorage.setItem('theme', newTheme);
    
    // Mettre à jour les préférences utilisateur si elles existent
    const userPreferences = localStorage.getItem('userPreferences');
    if (userPreferences) {
      const preferences = JSON.parse(userPreferences);
      preferences.darkMode = newTheme === 'dark';
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full transition-all hover:bg-muted"
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
      <span className="sr-only">Changer de thème</span>
    </Button>
  );
}
