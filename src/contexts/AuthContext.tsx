
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  schoolName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (schoolName: string, name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem("edupaie_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulation d'une API de connexion
      if (email === "demo@edupaie.com" && password === "password") {
        const userData: User = {
          id: "1",
          name: "Administrateur Démo",
          email: "demo@edupaie.com",
          role: "admin",
          schoolName: "École Elite"
        };
        
        localStorage.setItem("edupaie_user", JSON.stringify(userData));
        setUser(userData);
        
        toast.success("Connexion réussie!");
        navigate("/dashboard");
      } else {
        toast.error("Identifiants incorrects");
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (schoolName: string, name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulation d'une API d'inscription
      const userData: User = {
        id: "2",
        name,
        email,
        role: "admin",
        schoolName
      };
      
      localStorage.setItem("edupaie_user", JSON.stringify(userData));
      setUser(userData);
      
      toast.success("Inscription réussie!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("edupaie_user");
    setUser(null);
    navigate("/login");
    toast.success("Déconnexion réussie");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
