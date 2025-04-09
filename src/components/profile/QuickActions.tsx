
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, CreditCard, FileText, LayoutDashboard } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/employees">
              <User className="h-4 w-4 mr-2" />
              Gérer les employés
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/payments">
              <CreditCard className="h-4 w-4 mr-2" />
              Voir les paiements
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/reports">
              <FileText className="h-4 w-4 mr-2" />
              Créer un rapport
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/dashboard">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Tableau de bord
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
