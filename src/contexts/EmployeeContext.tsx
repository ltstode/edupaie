
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
    status: "active"
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
    status: "active"
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
    status: "active"
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
        id: Date.now().toString()
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

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        isLoading,
        error,
        getEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
