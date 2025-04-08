
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  MapPin, 
  Settings, 
  Edit, 
  Lock, 
  Shield, 
  LogOut, 
  Upload,
  CreditCard,
  FileText,
  LayoutDashboard,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string | undefined>(
    user?.avatar || 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80'
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Prévisualiser l'image
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Ici, nous simulons un téléchargement réussi
      toast.success('Photo de profil mise à jour avec succès');
      setSelectedFile(null);
    }
  };

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
              <Settings className="h-4 w-4" />
              Paramètres
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </PageHeader>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="glass-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="group relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background">
                <img 
                  src={profileImage} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <label className="cursor-pointer p-2 rounded-full bg-primary/80 hover:bg-primary transition-colors">
                    <Upload className="h-6 w-6 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-muted-foreground mb-3">Administrateur</p>
              <Badge variant="outline" className="mb-4">
                Premium
              </Badge>
              
              {selectedFile && (
                <div className="w-full mt-2">
                  <p className="text-sm text-muted-foreground mb-2">
                    Nouvelle photo sélectionnée: {selectedFile.name}
                  </p>
                  <Button className="w-full" onClick={handleUpload}>
                    Enregistrer la photo
                  </Button>
                </div>
              )}
              
              <div className="mt-auto w-full">
                <Separator className="my-4" />
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/profile/settings">
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-1" />
                    Déconnexion
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 glass-card">
            <CardHeader>
              <CardTitle>Informations</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="personal">Personnel</TabsTrigger>
                  <TabsTrigger value="school">École</TabsTrigger>
                  <TabsTrigger value="security">Sécurité</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Nom complet</h3>
                        <p className="text-muted-foreground">{user.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Téléphone</h3>
                        <p className="text-muted-foreground">+221 77 123 45 67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Date d'inscription</h3>
                        <p className="text-muted-foreground">15 janvier 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 md:col-span-2">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Adresse</h3>
                        <p className="text-muted-foreground">123 Rue Principale, Dakar, Sénégal</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="outline" asChild className="mt-4">
                    <Link to="/profile/settings">
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier les informations personnelles
                    </Link>
                  </Button>
                </TabsContent>
                
                <TabsContent value="school" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Nom de l'établissement</h3>
                        <p className="text-muted-foreground">{user.schoolName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Type d'établissement</h3>
                        <p className="text-muted-foreground">École secondaire</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Adresse de l'école</h3>
                        <p className="text-muted-foreground">456 Avenue de l'Education, Dakar, Sénégal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email de l'école</h3>
                        <p className="text-muted-foreground">contact@{user.schoolName.toLowerCase().replace(/\s+/g, '')}.edu.sn</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Téléphone de l'école</h3>
                        <p className="text-muted-foreground">+221 33 123 45 67</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="outline" asChild className="mt-4">
                    <Link to="/profile/settings">
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier les informations de l'école
                    </Link>
                  </Button>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-4">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Mot de passe</h3>
                        <p className="text-muted-foreground">Dernière modification: il y a 3 mois</p>
                        <Button variant="link" className="p-0 h-auto mt-1">
                          Changer le mot de passe
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Authentification à deux facteurs</h3>
                        <p className="text-muted-foreground">Non activée</p>
                        <Button variant="link" className="p-0 h-auto mt-1">
                          Activer l'A2F
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <LogOut className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Sessions actives</h3>
                        <p className="text-muted-foreground">1 session active</p>
                        <Button variant="link" className="p-0 h-auto mt-1">
                          Gérer les sessions
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="outline" asChild className="mt-4">
                    <Link to="/profile/settings">
                      <Edit className="h-4 w-4 mr-2" />
                      Gérer les paramètres de sécurité
                    </Link>
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-6">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
