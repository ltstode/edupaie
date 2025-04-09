
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/types/user';

interface ProfileStatsProps {
  user: User;
}

export function ProfileStats({ user }: ProfileStatsProps) {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Statistiques</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Rapports créés</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Paiements traités</span>
            <span className="font-semibold">247</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Employés gérés</span>
            <span className="font-semibold">{user.userStats?.employees || '3'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Dernière connexion</span>
            <span className="font-semibold">Aujourd'hui</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
