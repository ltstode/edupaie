
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

// Import the refactored components
import { ProfileCard } from '@/components/profile/ProfileCard';
import { ProfileInfo } from '@/components/profile/ProfileInfo';
import { ProfileStats } from '@/components/profile/ProfileStats';
import { QuickActions } from '@/components/profile/QuickActions';
import { SubscriptionCard } from '@/components/profile/SubscriptionCard';

const ProfilePage = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <div className="flex flex-col items-center justify-center h-full">
            <User className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Vous n'êtes pas connecté</h2>
            <p className="text-muted-foreground mb-6">Veuillez vous connecter pour accéder à votre profil.</p>
            <Button asChild>
              <Link to="/login">Se connecter</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 animate-fade-in">
        <PageHeader 
          title="Profil" 
          description="Gérez vos informations personnelles et vos préférences"
        >
          <Button variant="outline" asChild>
            <Link to="/profile/settings" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Paramètres
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            <User className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </PageHeader>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <ProfileCard user={user} onLogout={handleLogout} />
          <ProfileInfo user={user} />
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <ProfileStats user={user} />
          <QuickActions />
          <SubscriptionCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
