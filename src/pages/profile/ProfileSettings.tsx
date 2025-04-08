
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Building, 
  Phone, 
  MapPin, 
  Lock, 
  BellRing, 
  Languages, 
  Moon, 
  Palette,
  Save,
  ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const ProfileSettings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+221 77 123 45 67',
    address: '123 Rue Principale, Dakar, Sénégal'
  });
  
  const [schoolInfo, setSchoolInfo] = useState({
    name: user?.schoolName || '',
    type: 'École secondaire',
    address: '456 Avenue de l'Education, Dakar, Sénégal',
    email: `contact@${user?.schoolName?.toLowerCase().replace(/\s+/g, '') || 'ecole'}.edu.sn`,
    phone: '+221 33 123 45 67'
  });
  
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    appNotifications: true,
    language: 'Français'
  });
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSchoolInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSchoolInfo({
      ...schoolInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo({
      ...passwordInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handlePreferenceChange = (name: string, value: boolean) => {
    setPreferences({
      ...preferences,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Paramètres enregistrés avec succès');
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }
    
    if (passwordInfo.newPassword.length < 8) {
      toast.error('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }
    
    toast.success('Mot de passe modifié avec succès');
    setPasswordInfo({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  
  if (!user) {
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
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personnel</TabsTrigger>
                <TabsTrigger value="school">École</TabsTrigger>
                <TabsTrigger value="security">Sécurité</TabsTrigger>
                <TabsTrigger value="preferences">Préférences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Nom complet
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={personalInfo.name}
                        onChange={handlePersonalInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Téléphone
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Adresse
                      </Label>
                      <Textarea 
                        id="address" 
                        name="address"
                        value={personalInfo.address}
                        onChange={handlePersonalInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="mt-4">
                        <Save className="h-4 w-4 mr-2" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="school">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="schoolName" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Nom de l'établissement
                      </Label>
                      <Input 
                        id="schoolName" 
                        name="name"
                        value={schoolInfo.name}
                        onChange={handleSchoolInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="schoolType" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Type d'établissement
                      </Label>
                      <Input 
                        id="schoolType" 
                        name="type"
                        value={schoolInfo.type}
                        onChange={handleSchoolInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="schoolAddress" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Adresse de l'école
                      </Label>
                      <Textarea 
                        id="schoolAddress" 
                        name="address"
                        value={schoolInfo.address}
                        onChange={handleSchoolInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="schoolEmail" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email de l'école
                      </Label>
                      <Input 
                        id="schoolEmail" 
                        name="email"
                        type="email"
                        value={schoolInfo.email}
                        onChange={handleSchoolInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="schoolPhone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Téléphone de l'école
                      </Label>
                      <Input 
                        id="schoolPhone" 
                        name="phone"
                        value={schoolInfo.phone}
                        onChange={handleSchoolInfoChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="mt-4">
                        <Save className="h-4 w-4 mr-2" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="security">
                <form onSubmit={handlePasswordSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Mot de passe actuel
                      </Label>
                      <Input 
                        id="currentPassword" 
                        name="currentPassword"
                        type="password"
                        value={passwordInfo.currentPassword}
                        onChange={handlePasswordChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="newPassword" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Nouveau mot de passe
                      </Label>
                      <Input 
                        id="newPassword" 
                        name="newPassword"
                        type="password"
                        value={passwordInfo.newPassword}
                        onChange={handlePasswordChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Confirmer le mot de passe
                      </Label>
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword"
                        type="password"
                        value={passwordInfo.confirmPassword}
                        onChange={handlePasswordChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="mt-4">
                        <Save className="h-4 w-4 mr-2" />
                        Mettre à jour le mot de passe
                      </Button>
                    </div>
                  </div>
                </form>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Authentification à deux facteurs</h3>
                  <p className="text-muted-foreground">
                    Ajouter une couche de sécurité supplémentaire à votre compte en activant l'authentification à deux facteurs.
                  </p>
                  <Button variant="outline">
                    Configurer l'A2F
                  </Button>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sessions actives</h3>
                  <p className="text-muted-foreground">
                    Gérez les appareils et les navigateurs connectés à votre compte.
                  </p>
                  <Button variant="outline">
                    Gérer les sessions
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="preferences">
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
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSettings;
