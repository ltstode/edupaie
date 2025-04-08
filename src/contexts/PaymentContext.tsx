
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  amount: number;
  paymentDate: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  paymentType: "tuition" | "transportation" | "uniform" | "supplies" | "other";
  description?: string;
}

interface PaymentContextType {
  payments: Payment[];
  isLoading: boolean;
  error: string | null;
  getPayment: (id: string) => Payment | undefined;
  addPayment: (payment: Omit<Payment, "id">) => void;
  updatePayment: (id: string, payment: Partial<Payment>) => void;
  deletePayment: (id: string) => void;
}

const PaymentContext = createContext<PaymentContextType | null>(null);

export const usePayments = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayments doit être utilisé à l'intérieur d'un PaymentProvider");
  }
  return context;
};

interface PaymentProviderProps {
  children: ReactNode;
}

// Données fictives pour simuler une base de données
const mockPayments: Payment[] = [
  {
    id: "1",
    studentId: "ST001",
    studentName: "Amadou Diallo",
    class: "Terminale S",
    amount: 150000,
    paymentDate: "2025-03-15",
    dueDate: "2025-04-01",
    status: "paid",
    paymentType: "tuition",
    description: "Frais de scolarité - 2ème trimestre"
  },
  {
    id: "2",
    studentId: "ST002",
    studentName: "Fatou Sow",
    class: "4ème A",
    amount: 125000,
    paymentDate: "",
    dueDate: "2025-04-01",
    status: "pending",
    paymentType: "tuition",
    description: "Frais de scolarité - 2ème trimestre"
  },
  {
    id: "3",
    studentId: "ST003",
    studentName: "Moussa Camara",
    class: "Seconde A",
    amount: 135000,
    paymentDate: "",
    dueDate: "2025-03-01",
    status: "overdue",
    paymentType: "tuition",
    description: "Frais de scolarité - 2ème trimestre"
  },
  {
    id: "4",
    studentId: "ST004",
    studentName: "Aïcha Balde",
    class: "1ère L",
    amount: 45000,
    paymentDate: "2025-03-20",
    dueDate: "2025-03-15",
    status: "paid",
    paymentType: "transportation",
    description: "Frais de transport - Mars"
  },
  {
    id: "5",
    studentId: "ST001",
    studentName: "Amadou Diallo",
    class: "Terminale S",
    amount: 30000,
    paymentDate: "2025-03-10",
    dueDate: "2025-03-15",
    status: "paid",
    paymentType: "supplies",
    description: "Matériel scolaire supplémentaire"
  }
];

export const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les données au démarrage
  useEffect(() => {
    const loadPayments = () => {
      try {
        // Vérifier si des données existent déjà dans le localStorage
        const storedPayments = localStorage.getItem("edupaie_payments");
        
        if (storedPayments) {
          setPayments(JSON.parse(storedPayments));
        } else {
          // Utiliser les données fictives et les stocker dans le localStorage
          setPayments(mockPayments);
          localStorage.setItem("edupaie_payments", JSON.stringify(mockPayments));
        }
      } catch (error) {
        setError("Erreur lors du chargement des paiements");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Simuler un délai d'API
    setTimeout(loadPayments, 500);
  }, []);

  // Sauvegarder les changements dans le localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("edupaie_payments", JSON.stringify(payments));
    }
  }, [payments, isLoading]);

  const getPayment = (id: string) => {
    return payments.find(p => p.id === id);
  };

  const addPayment = (payment: Omit<Payment, "id">) => {
    try {
      const newPayment = {
        ...payment,
        id: Date.now().toString()
      };
      
      setPayments(prev => [...prev, newPayment]);
      toast.success("Paiement ajouté avec succès");
    } catch (error) {
      setError("Erreur lors de l'ajout du paiement");
      toast.error("Erreur lors de l'ajout du paiement");
      console.error(error);
    }
  };

  const updatePayment = (id: string, updatedData: Partial<Payment>) => {
    try {
      setPayments(prev => 
        prev.map(p => 
          p.id === id ? { ...p, ...updatedData } : p
        )
      );
      toast.success("Paiement mis à jour avec succès");
    } catch (error) {
      setError("Erreur lors de la mise à jour du paiement");
      toast.error("Erreur lors de la mise à jour du paiement");
      console.error(error);
    }
  };

  const deletePayment = (id: string) => {
    try {
      setPayments(prev => prev.filter(p => p.id !== id));
      toast.success("Paiement supprimé avec succès");
    } catch (error) {
      setError("Erreur lors de la suppression du paiement");
      toast.error("Erreur lors de la suppression du paiement");
      console.error(error);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        payments,
        isLoading,
        error,
        getPayment,
        addPayment,
        updatePayment,
        deletePayment
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
