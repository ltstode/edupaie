
import React, { useState } from 'react';
import { Lock, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export function SecuritySettings() {
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo({
      ...passwordInfo,
      [e.target.name]: e.target.value
    });
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

  return (
    <>
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
    </>
  );
}
