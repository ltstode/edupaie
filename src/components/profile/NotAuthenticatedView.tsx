
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserX, LogIn, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export function NotAuthenticatedView() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                <UserX className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Accès non autorisé</h2>
              <p className="text-muted-foreground mb-6">
                Vous devez être connecté pour accéder à cette page.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button onClick={() => navigate('/login')} className="flex-1 flex items-center justify-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Se connecter
                </Button>
                <Button variant="outline" onClick={() => navigate('/')} className="flex-1 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Accueil
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
