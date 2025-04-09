
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { User } from '@/types/user';
import { Edit, LogOut } from 'lucide-react';
import { toast } from 'sonner';

interface ProfileCardProps {
  user: User;
  onLogout: () => void;
}

export function ProfileCard({ user, onLogout }: ProfileCardProps) {
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

  return (
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
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-1" />
              Déconnexion
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
