
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  salary: number;
  hireDate: string;
  status: "active" | "inactive";
  avatar?: string;
}

interface EmployeeContextType {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
  getEmployee: (id: string) => Employee | undefined;
  addEmployee: (employee: Omit<Employee, "id">) => void;
  updateEmployee: (id: string, employee: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
  uploadAvatar: (id: string, file: File) => Promise<void>;
}

const EmployeeContext = createContext<EmployeeContextType | null>(null);

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployees doit être utilisé à l'intérieur d'un EmployeeProvider");
  }
  return context;
};

interface EmployeeProviderProps {
  children: ReactNode;
}

// Données fictives pour simuler une base de données
const mockEmployees: Employee[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@edupaie.com",
    phone: "01 23 45 67 89",
    position: "Professeur de mathématiques",
    department: "Sciences",
    salary: 450000,
    hireDate: "2020-09-01",
    status: "active",
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Martin",
    email: "marie.martin@edupaie.com",
    phone: "01 23 45 67 90",
    position: "Professeur de français",
    department: "Lettres",
    salary: 420000,
    hireDate: "2019-09-01",
    status: "active",
    avatar: "/placeholder.svg"
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Durand",
    email: "pierre.durand@edupaie.com",
    phone: "01 23 45 67 91",
    position: "Directeur",
    department: "Administration",
    salary: 750000,
    hireDate: "2018-01-15",
    status: "active",
    avatar: "/placeholder.svg"
  }
];

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les données au démarrage
  useEffect(() => {
    const loadEmployees = () => {
      try {
        // Vérifier si des données existent déjà dans le localStorage
        const storedEmployees = localStorage.getItem("edupaie_employees");
        
        if (storedEmployees) {
          setEmployees(JSON.parse(storedEmployees));
        } else {
          // Utiliser les données fictives et les stocker dans le localStorage
          setEmployees(mockEmployees);
          localStorage.setItem("edupaie_employees", JSON.stringify(mockEmployees));
        }
      } catch (error) {
        setError("Erreur lors du chargement des employés");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Simuler un délai d'API
    setTimeout(loadEmployees, 500);
  }, []);

  // Sauvegarder les changements dans le localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("edupaie_employees", JSON.stringify(employees));
    }
  }, [employees, isLoading]);

  const getEmployee = (id: string) => {
    return employees.find(emp => emp.id === id);
  };

  const addEmployee = (employee: Omit<Employee, "id">) => {
    try {
      const newEmployee = {
        ...employee,
        id: Date.now().toString(),
        avatar: employee.avatar || "/placeholder.svg"
      };
      
      setEmployees(prev => [...prev, newEmployee]);
      toast.success("Employé ajouté avec succès");
    } catch (error) {
      setError("Erreur lors de l'ajout de l'employé");
      toast.error("Erreur lors de l'ajout de l'employé");
      console.error(error);
    }
  };

  const updateEmployee = (id: string, updatedData: Partial<Employee>) => {
    try {
      setEmployees(prev => 
        prev.map(emp => 
          emp.id === id ? { ...emp, ...updatedData } : emp
        )
      );
      toast.success("Employé mis à jour avec succès");
    } catch (error) {
      setError("Erreur lors de la mise à jour de l'employé");
      toast.error("Erreur lors de la mise à jour de l'employé");
      console.error(error);
    }
  };

  const deleteEmployee = (id: string) => {
    try {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      toast.success("Employé supprimé avec succès");
    } catch (error) {
      setError("Erreur lors de la suppression de l'employé");
      toast.error("Erreur lors de la suppression de l'employé");
      console.error(error);
    }
  };

  // Fonction pour télécharger un avatar (simulation)
  const uploadAvatar = async (id: string, file: File): Promise<void> => {
    try {
      // En environnement réel, on utiliserait une API pour stocker l'image
      // Ici, on simule en convertissant l'image en base64
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            const base64Image = e.target.result.toString();
            updateEmployee(id, { avatar: base64Image });
            resolve();
          } else {
            reject(new Error("Échec de la conversion de l'image"));
          }
        };
        reader.onerror = () => {
          reject(new Error("Échec du chargement de l'image"));
        };
        reader.readAsDataURL(file);
      });
    } catch (error) {
      setError("Erreur lors du téléchargement de l'avatar");
      toast.error("Erreur lors du téléchargement de l'avatar");
      console.error(error);
      throw error;
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        isLoading,
        error,
        getEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        uploadAvatar
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
