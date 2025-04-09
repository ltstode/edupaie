
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function SubscriptionCard() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Abonnement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Badge className="mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Premium</Badge>
          <h3 className="font-bold text-lg">Plan Entreprise</h3>
          <p className="text-muted-foreground text-sm">Renouvellement le 15 avril 2025</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">Nombre illimité d'employés</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">Rapports avancés</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">Support prioritaire</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">Personnalisation complète</span>
          </div>
        </div>
        
        <Button className="w-full mt-4" variant="outline">
          Gérer l'abonnement
        </Button>
      </CardContent>
    </Card>
  );
}
