
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { PersonalInfoForm } from './PersonalInfoForm';
import { SchoolInfoForm } from './SchoolInfoForm';
import { SecuritySettings } from './SecuritySettings';
import { PreferencesSettings } from './PreferencesSettings';
import { DirectorEditor } from '@/components/director/DirectorEditor';
import { User } from '@/types/user';
import { useTheme } from '@/contexts/ThemeContext';

interface SettingsTabsProps {
  user: User;
}

export function SettingsTabs({ user }: SettingsTabsProps) {
  // S'assurer que les paramètres restent synchronisés avec le thème global
  const { theme } = useTheme();
  
  // Récupérer les préférences utilisateur du localStorage au chargement de la page
  React.useEffect(() => {
    const userPrefs = localStorage.getItem('userPreferences');
    if (userPrefs) {
      const preferences = JSON.parse(userPrefs);
      // Vérifier si la préférence de thème est synchronisée avec le thème actuel
      if ((preferences.darkMode && theme !== 'dark') || (!preferences.darkMode && theme !== 'light')) {
        preferences.darkMode = theme === 'dark';
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
      }
    }
  }, [theme]);
  
  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="personal">Personnel</TabsTrigger>
        <TabsTrigger value="school">École</TabsTrigger>
        <TabsTrigger value="director">Directeur</TabsTrigger>
        <TabsTrigger value="security">Sécurité</TabsTrigger>
        <TabsTrigger value="preferences">Préférences</TabsTrigger>
      </TabsList>
      
      <TabsContent value="personal">
        <PersonalInfoForm user={user} />
      </TabsContent>
      
      <TabsContent value="school">
        <SchoolInfoForm user={user} />
      </TabsContent>
      
      <TabsContent value="director">
        <DirectorEditor />
      </TabsContent>
      
      <TabsContent value="security">
        <SecuritySettings />
      </TabsContent>
      
      <TabsContent value="preferences">
        <PreferencesSettings />
      </TabsContent>
    </Tabs>
  );
}
