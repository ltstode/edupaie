
import React, { useState, useEffect } from 'react';
import { Moon, Mail, BellRing, Languages, Palette, Save, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';

export function PreferencesSettings() {
  const { theme, setTheme, accentColor, setAccentColor } = useTheme();
  
  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    appNotifications: true,
    language: 'Français'
  });
  
  // Synchroniser avec le contexte de thème
  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      darkMode: theme === 'dark'
    }));
    
    // Charger les préférences sauvegardées
    const savedPrefs = localStorage.getItem('userPreferences');
    if (savedPrefs) {
      const parsed = JSON.parse(savedPrefs);
      setPreferences(prev => ({
        ...prev,
        emailNotifications: parsed.emailNotifications ?? true,
        appNotifications: parsed.appNotifications ?? true,
        language: parsed.language ?? 'Français'
      }));
    }
  }, [theme]);
  
  const handlePreferenceChange = (name: string, value: boolean | string) => {
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Si c'est le mode sombre qui change, mettre à jour le thème global
    if (name === 'darkMode') {
      setTheme(value ? 'dark' : 'light');
    }
  };
  
  const handleColorChange = (color: string) => {
    setAccentColor(color);
    toast.success('Couleur d\'accent mise à jour');
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
    { color: '#ef4444', name: 'Rouge' },
    { color: '#06b6d4', name: 'Cyan' },
    { color: '#84cc16', name: 'Lime' },
    { color: '#ec4899', name: 'Rose' }
  ];

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Section Apparence */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Apparence
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <div>
                <Label htmlFor="darkMode" className="font-medium">Mode sombre</Label>
                <p className="text-sm text-muted-foreground">
                  Basculer entre les thèmes clair et sombre
                </p>
              </div>
            </div>
            <Switch 
              id="darkMode" 
              checked={preferences.darkMode}
              onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
            />
          </div>
          
          <div className="p-4 rounded-lg border bg-card">
            <Label className="font-medium mb-4 block">Couleur d'accent</Label>
            <div className="grid grid-cols-4 gap-3">
              {colors.map((colorOption) => (
                <button
                  key={colorOption.color}
                  className={`relative w-12 h-12 rounded-lg transition-all hover:scale-110 ${
                    accentColor === colorOption.color 
                      ? 'ring-2 ring-offset-2 ring-current scale-110' 
                      : 'hover:ring-2 hover:ring-offset-2 hover:ring-current'
                  }`}
                  style={{ backgroundColor: colorOption.color }}
                  onClick={() => handleColorChange(colorOption.color)}
                  title={colorOption.name}
                >
                  {accentColor === colorOption.color && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Section Notifications */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BellRing className="h-5 w-5" />
            Notifications
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <div>
                <Label htmlFor="emailNotifications" className="font-medium">Notifications par email</Label>
                <p className="text-sm text-muted-foreground">
                  Recevoir des notifications par email pour les activités importantes
                </p>
              </div>
            </div>
            <Switch 
              id="emailNotifications" 
              checked={preferences.emailNotifications}
              onCheckedChange={(checked) => handlePreferenceChange('emailNotifications', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
            <div className="flex items-center gap-3">
              <BellRing className="h-5 w-5" />
              <div>
                <Label htmlFor="appNotifications" className="font-medium">Notifications dans l'application</Label>
                <p className="text-sm text-muted-foreground">
                  Recevoir des notifications dans l'application pour les mises à jour
                </p>
              </div>
            </div>
            <Switch 
              id="appNotifications" 
              checked={preferences.appNotifications}
              onCheckedChange={(checked) => handlePreferenceChange('appNotifications', checked)}
            />
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Section Langue */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Languages className="h-5 w-5" />
            Langue et région
          </h3>
        </div>
        
        <div className="p-4 rounded-lg border bg-card">
          <Label htmlFor="language" className="font-medium mb-3 block">Langue de l'interface</Label>
          <select 
            id="language" 
            className="w-full p-3 rounded-md border border-input bg-background text-foreground"
            value={preferences.language}
            onChange={(e) => handlePreferenceChange('language', e.target.value)}
          >
            <option value="Français">Français</option>
            <option value="English">English</option>
            <option value="Español">Español</option>
            <option value="Wolof">Wolof</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-end pt-6">
        <Button onClick={handleSubmit} size="lg" className="px-8">
          <Save className="h-4 w-4 mr-2" />
          Enregistrer les préférences
        </Button>
      </div>
    </div>
  );
}
