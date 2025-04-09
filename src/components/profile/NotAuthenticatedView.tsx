
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function NotAuthenticatedView() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center justify-center h-full">
          <User className="h-16 w-16 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">Vous n'êtes pas connecté</h2>
          <p className="text-muted-foreground mb-6">Veuillez vous connecter pour accéder à vos paramètres.</p>
          <Button onClick={() => navigate('/login')}>
            Se connecter
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
