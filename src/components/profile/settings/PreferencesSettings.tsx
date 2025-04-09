
import React, { useState } from 'react';
import { Moon, Mail, BellRing, Languages, Palette, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export function PreferencesSettings() {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    appNotifications: true,
    language: 'Français'
  });
  
  const handlePreferenceChange = (name: string, value: boolean) => {
    setPreferences({
      ...preferences,
      [name]: value
    });
  };
  
  const handleSubmit = () => {
    toast.success('Préférences enregistrées avec succès');
  };

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
          onChange={(e) => setPreferences({...preferences, language: e.target.value})}
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
          <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:ring-2 ring-offset-2 ring-blue-500 transition-all" />
          <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:ring-2 ring-offset-2 ring-green-500 transition-all" />
          <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer hover:ring-2 ring-offset-2 ring-purple-500 transition-all" />
          <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer hover:ring-2 ring-offset-2 ring-orange-500 transition-all" />
          <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:ring-2 ring-offset-2 ring-red-500 transition-all" />
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
