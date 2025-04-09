
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

export interface Director {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  signature: string;
  isProtected: boolean;
}

interface DirectorContextType {
  director: Director | null;
  isEditing: boolean;
  setDirector: (director: Director) => void;
  startEditing: () => void;
  cancelEditing: () => void;
  saveDirector: (director: Director, password: string) => boolean;
  getDirectorFullName: () => string;
}

const DirectorContext = createContext<DirectorContextType | undefined>(undefined);

const DIRECTOR_PASSWORD = "DIREP";

export const DirectorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [director, setDirectorState] = useState<Director | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Charger le directeur depuis le localStorage
    const savedDirector = localStorage.getItem('director');
    if (savedDirector) {
      setDirectorState(JSON.parse(savedDirector));
    } else {
      // Créer un directeur par défaut s'il n'existe pas
      const defaultDirector: Director = {
        id: 'director-1',
        firstName: 'Jean',
        lastName: 'Dupont',
        position: 'Directeur',
        signature: '/signatures/default-signature.png',
        isProtected: true
      };
      setDirectorState(defaultDirector);
      localStorage.setItem('director', JSON.stringify(defaultDirector));
    }
  }, []);

  const setDirector = (newDirector: Director) => {
    setDirectorState(newDirector);
    localStorage.setItem('director', JSON.stringify(newDirector));
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const saveDirector = (updatedDirector: Director, password: string): boolean => {
    if (updatedDirector.isProtected && password !== DIRECTOR_PASSWORD) {
      toast.error("Mot de passe incorrect pour modifier le directeur");
      return false;
    }
    
    setDirector(updatedDirector);
    setIsEditing(false);
    toast.success("Informations du directeur mises à jour avec succès");
    return true;
  };

  const getDirectorFullName = (): string => {
    if (!director) return "Le Directeur";
    return `${director.firstName} ${director.lastName}`;
  };

  return (
    <DirectorContext.Provider value={{
      director,
      isEditing,
      setDirector,
      startEditing,
      cancelEditing,
      saveDirector,
      getDirectorFullName
    }}>
      {children}
    </DirectorContext.Provider>
  );
};

export const useDirector = () => {
  const context = useContext(DirectorContext);
  if (context === undefined) {
    throw new Error('useDirector must be used within a DirectorProvider');
  }
  return context;
};
