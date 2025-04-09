
import React, { useState } from 'react';
import { useDirector, Director } from '@/contexts/DirectorContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { User, Lock, CheckCircle, X } from 'lucide-react';

export const DirectorEditor = () => {
  const { director, isEditing, startEditing, cancelEditing, saveDirector } = useDirector();
  const [formData, setFormData] = useState<Director | null>(director);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  if (!director || !formData) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.isProtected) {
      setShowPasswordDialog(true);
    } else {
      saveDirector(formData, '');
    }
  };

  const handlePasswordSubmit = () => {
    const success = saveDirector(formData, password);
    if (success) {
      setShowPasswordDialog(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Mot de passe incorrect');
    }
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informations du Directeur
          </CardTitle>
          <CardDescription>
            Ces informations apparaîtront sur les contrats et les attestations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom du directeur"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom du directeur"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Poste</Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Ex: Directeur"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={cancelEditing}>
                  <X className="h-4 w-4 mr-2" />
                  Annuler
                </Button>
                <Button onClick={handleSubmit}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Enregistrer
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Prénom</p>
                  <p className="font-medium">{director.firstName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Nom</p>
                  <p className="font-medium">{director.lastName}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Poste</p>
                <p className="font-medium">{director.position}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 text-amber-600 dark:text-amber-400">
                <Lock className="h-4 w-4" />
                <span className="text-sm">
                  {director.isProtected ? 'Protégé par mot de passe' : 'Non protégé'}
                </span>
              </div>
              <div className="flex justify-end mt-4">
                <Button onClick={startEditing}>
                  Modifier
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Authentification requise</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe administrateur</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe"
                className={passwordError ? "border-red-500" : ""}
              />
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}
              <p className="text-sm text-muted-foreground mt-2">
                Un mot de passe spécial est requis pour modifier les informations du directeur.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPasswordDialog(false)}>
              Annuler
            </Button>
            <Button onClick={handlePasswordSubmit}>
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
