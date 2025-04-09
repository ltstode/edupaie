
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useAuth } from '@/contexts/AuthContext';
import { NotAuthenticatedView } from '@/components/profile/NotAuthenticatedView';
import { SettingsTabs } from '@/components/profile/settings/SettingsTabs';

const ProfileSettings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  if (!user) {
    return <NotAuthenticatedView />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 animate-fade-in">
        <PageHeader 
          title="Paramètres du profil" 
          backLink="/profile"
          backLabel="Retour au profil"
        >
          <Button onClick={() => navigate('/profile')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au profil
          </Button>
        </PageHeader>

        <Card className="glass-card mb-6">
          <CardContent className="p-6">
            <SettingsTabs user={user} />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSettings;
