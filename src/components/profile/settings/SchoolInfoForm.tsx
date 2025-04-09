
import React, { useState } from 'react';
import { Building, MapPin, Mail, Phone, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { User } from '@/types/user';

interface SchoolInfoFormProps {
  user: User;
}

export function SchoolInfoForm({ user }: SchoolInfoFormProps) {
  const [schoolInfo, setSchoolInfo] = useState({
    name: user?.schoolName || '',
    type: 'École secondaire',
    address: '456 Avenue de l\'Education, Dakar, Sénégal',
    email: `contact@${user?.schoolName?.toLowerCase().replace(/\s+/g, '') || 'ecole'}.edu.sn`,
    phone: '+221 33 123 45 67'
  });
  
  const handleSchoolInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSchoolInfo({
      ...schoolInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Paramètres enregistrés avec succès');
  };

  return (
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
  );
}
