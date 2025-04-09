
import React, { useState, useEffect } from 'react';
import { Moon, Mail, BellRing, Languages, Palette, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';

export function PreferencesSettings() {
  const { theme, setTheme } = useTheme();
  
  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    appNotifications: true,
    language: 'Français',
    accentColor: '#3b82f6' // Bleu par défaut
  });
  
  // Synchroniser le mode sombre avec le contexte de thème
  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      darkMode: theme === 'dark'
    }));
  }, [theme]);
  
  const handlePreferenceChange = (name: string, value: boolean | string) => {
    setPreferences({
      ...preferences,
      [name]: value
    });
    
    // Si c'est le mode sombre qui change, mettre à jour le thème global
    if (name === 'darkMode') {
      setTheme(value ? 'dark' : 'light');
    }
    
    // Pour le changement de couleur d'accent, appliquer la couleur
    if (name === 'accentColor') {
      document.documentElement.style.setProperty('--primary', value as string);
      localStorage.setItem('accentColor', value as string);
    }
  };
  
  const handleSubmit = () => {
    // Sauvegarder les préférences dans le localStorage
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    toast.success('Préférences enregistrées avec succès');
  };
  
  const colors = [
    { color: '#3b82f6', name: 'Bleu' },
    { color: '#10b981', name: 'Vert' },
    { color: '#8b5cf6', name: 'Violet' },
    { color: '#f97316', name: 'Orange' },
    { color: '#ef4444', name: 'Rouge' }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <Label htmlFor="darkMode">Mode sombre</Label>
          </div>
          <Switch 
            id="darkMode" 
            checked={preferences.darkMode}
            onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
          />
        </div>
        <p className="text-sm text-muted-foreground pl-6">
          Activer le mode sombre pour réduire la fatigue oculaire.
        </p>
      </div>
      
      <Separator />
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <Label htmlFor="emailNotifications">Notifications par email</Label>
          </div>
          <Switch 
            id="emailNotifications" 
            checked={preferences.emailNotifications}
            onCheckedChange={(checked) => handlePreferenceChange('emailNotifications', checked)}
          />
        </div>
        <p className="text-sm text-muted-foreground pl-6">
          Recevoir des notifications par email pour les activités importantes.
        </p>
      </div>
      
      <Separator />
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BellRing className="h-4 w-4" />
            <Label htmlFor="appNotifications">Notifications dans l'application</Label>
          </div>
          <Switch 
            id="appNotifications" 
            checked={preferences.appNotifications}
            onCheckedChange={(checked) => handlePreferenceChange('appNotifications', checked)}
          />
        </div>
        <p className="text-sm text-muted-foreground pl-6">
          Recevoir des notifications dans l'application pour les mises à jour.
        </p>
      </div>
      
      <Separator />
      
      <div className="space-y-3">
        <Label htmlFor="language" className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          Langue
        </Label>
        <select 
          id="language" 
          className="w-full p-2 rounded-md border border-input bg-background"
          value={preferences.language}
          onChange={(e) => handlePreferenceChange('language', e.target.value)}
        >
          <option value="Français">Français</option>
          <option value="English">English</option>
          <option value="Español">Español</option>
          <option value="Wolof">Wolof</option>
        </select>
      </div>
      
      <Separator />
      
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Thème de couleur
        </Label>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((colorOption) => (
            <div 
              key={colorOption.color}
              className={`w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-offset-2 transition-all ${
                preferences.accentColor === colorOption.color ? 'ring-2' : ''
              }`}
              style={{ backgroundColor: colorOption.color, ringColor: colorOption.color }}
              onClick={() => handlePreferenceChange('accentColor', colorOption.color)}
              title={colorOption.name}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="button" onClick={handleSubmit} className="mt-4">
          <Save className="h-4 w-4 mr-2" />
          Enregistrer les préférences
        </Button>
      </div>
    </div>
  );
}
