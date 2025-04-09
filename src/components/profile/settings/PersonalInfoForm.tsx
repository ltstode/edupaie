
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { User as UserType } from '@/types/user';

interface PersonalInfoFormProps {
  user: UserType;
}

export function PersonalInfoForm({ user }: PersonalInfoFormProps) {
  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+221 77 123 45 67',
    address: '123 Rue Principale, Dakar, Sénégal'
  });
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalInfo({
      ...personalInfo,
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
  );
}
