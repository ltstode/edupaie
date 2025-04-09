
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
import { User } from '@/types/user';

interface SettingsTabsProps {
  user: User;
}

export function SettingsTabs({ user }: SettingsTabsProps) {
  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="personal">Personnel</TabsTrigger>
        <TabsTrigger value="school">École</TabsTrigger>
        <TabsTrigger value="security">Sécurité</TabsTrigger>
        <TabsTrigger value="preferences">Préférences</TabsTrigger>
      </TabsList>
      
      <TabsContent value="personal">
        <PersonalInfoForm user={user} />
      </TabsContent>
      
      <TabsContent value="school">
        <SchoolInfoForm user={user} />
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
