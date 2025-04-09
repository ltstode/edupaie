
import React from 'react';
import { Link } from 'react-router-dom';
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
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  MapPin, 
  Edit, 
  Lock, 
  Shield, 
  LogOut
} from 'lucide-react';
import { User as UserType } from '@/types/user';

interface ProfileInfoProps {
  user: UserType;
}

export function ProfileInfo({ user }: ProfileInfoProps) {
  return (
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
  );
}
