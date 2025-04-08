
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export interface Report {
  id: string;
  title: string;
  type: "finance" | "attendance" | "performance" | "evaluation" | "custom";
  createdAt: string;
  updatedAt: string;
  status: "draft" | "published" | "archived";
  summary: string;
  content: string;
  author: string;
}

interface ReportContextType {
  reports: Report[];
  isLoading: boolean;
  error: string | null;
  getReport: (id: string) => Report | undefined;
  addReport: (report: Omit<Report, "id">) => void;
  updateReport: (id: string, report: Partial<Report>) => void;
  deleteReport: (id: string) => void;
}

const ReportContext = createContext<ReportContextType | null>(null);

export const useReports = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReports doit être utilisé à l'intérieur d'un ReportProvider");
  }
  return context;
};

interface ReportProviderProps {
  children: ReactNode;
}

// Données fictives pour simuler une base de données
const mockReports: Report[] = [
  {
    id: "1",
    title: "Rapport financier du 1er trimestre",
    type: "finance",
    createdAt: "2025-03-15T10:30:00Z",
    updatedAt: "2025-03-16T14:45:00Z",
    status: "published",
    summary: "Résumé des finances du 1er trimestre de l'année scolaire 2024-2025",
    content: "Contenu détaillé du rapport financier incluant les revenus, dépenses et projections...",
    author: "Pierre Durand"
  },
  {
    id: "2",
    title: "Analyse des performances académiques",
    type: "performance",
    createdAt: "2025-03-10T09:15:00Z",
    updatedAt: "2025-03-12T11:20:00Z",
    status: "published",
    summary: "Évaluation des performances académiques des élèves pour le semestre actuel",
    content: "Analyse approfondie des notes, des tendances et des recommandations pour améliorer les résultats...",
    author: "Marie Martin"
  },
  {
    id: "3",
    title: "Rapport d'assiduité mensuel",
    type: "attendance",
    createdAt: "2025-03-05T08:00:00Z",
    updatedAt: "2025-03-05T16:30:00Z",
    status: "published",
    summary: "Analyse de l'assiduité des élèves durant le mois de février 2025",
    content: "Détails des présences, absences et retards par classe, avec graphiques et statistiques...",
    author: "Jean Dupont"
  },
  {
    id: "4",
    title: "Évaluation du personnel enseignant",
    type: "evaluation",
    createdAt: "2025-02-28T13:45:00Z",
    updatedAt: "2025-03-02T10:15:00Z",
    status: "draft",
    summary: "Évaluation des performances des enseignants et recommandations",
    content: "Analyse des méthodes pédagogiques, retours des élèves et parents, objectifs futurs...",
    author: "Pierre Durand"
  },
  {
    id: "5",
    title: "Plan stratégique 2025-2026",
    type: "custom",
    createdAt: "2025-02-20T09:30:00Z",
    updatedAt: "2025-02-25T14:20:00Z",
    status: "archived",
    summary: "Plan stratégique pour l'amélioration de l'établissement",
    content: "Objectifs, stratégies et indicateurs de performance pour l'année académique à venir...",
    author: "Pierre Durand"
  }
];

export const ReportProvider: React.FC<ReportProviderProps> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les données au démarrage
  useEffect(() => {
    const loadReports = () => {
      try {
        // Vérifier si des données existent déjà dans le localStorage
        const storedReports = localStorage.getItem("edupaie_reports");
        
        if (storedReports) {
          setReports(JSON.parse(storedReports));
        } else {
          // Utiliser les données fictives et les stocker dans le localStorage
          setReports(mockReports);
          localStorage.setItem("edupaie_reports", JSON.stringify(mockReports));
        }
      } catch (error) {
        setError("Erreur lors du chargement des rapports");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Simuler un délai d'API
    setTimeout(loadReports, 500);
  }, []);

  // Sauvegarder les changements dans le localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("edupaie_reports", JSON.stringify(reports));
    }
  }, [reports, isLoading]);

  const getReport = (id: string) => {
    return reports.find(r => r.id === id);
  };

  const addReport = (report: Omit<Report, "id">) => {
    try {
      const newReport = {
        ...report,
        id: Date.now().toString()
      };
      
      setReports(prev => [...prev, newReport]);
      toast.success("Rapport ajouté avec succès");
    } catch (error) {
      setError("Erreur lors de l'ajout du rapport");
      toast.error("Erreur lors de l'ajout du rapport");
      console.error(error);
    }
  };

  const updateReport = (id: string, updatedData: Partial<Report>) => {
    try {
      setReports(prev => 
        prev.map(r => 
          r.id === id ? { ...r, ...updatedData, updatedAt: new Date().toISOString() } : r
        )
      );
      toast.success("Rapport mis à jour avec succès");
    } catch (error) {
      setError("Erreur lors de la mise à jour du rapport");
      toast.error("Erreur lors de la mise à jour du rapport");
      console.error(error);
    }
  };

  const deleteReport = (id: string) => {
    try {
      setReports(prev => prev.filter(r => r.id !== id));
      toast.success("Rapport supprimé avec succès");
    } catch (error) {
      setError("Erreur lors de la suppression du rapport");
      toast.error("Erreur lors de la suppression du rapport");
      console.error(error);
    }
  };

  return (
    <ReportContext.Provider
      value={{
        reports,
        isLoading,
        error,
        getReport,
        addReport,
        updateReport,
        deleteReport
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
