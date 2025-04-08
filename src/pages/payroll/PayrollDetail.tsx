
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Mail, 
  Calendar, 
  Building, 
  DollarSign, 
  Clock,
  User,
  BadgeCheck,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useEmployees } from "../../contexts/EmployeeContext";
import { toast } from "sonner";

const PayrollDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { getEmployee } = useEmployees();
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Récupérer les paramètres de l'URL pour le mois et l'année
  const searchParams = new URLSearchParams(location.search);
  const month = searchParams.get("month") || "04";
  const year = searchParams.get("year") || "2025";
  
  const employee = getEmployee(id || "");
  
  // Données simulées pour la fiche de paie
  const payrollData = {
    baseSalary: employee?.salary || 0,
    deductions: {
      cnss: Math.round((employee?.salary || 0) * 0.0525), // 5.25% pour CNSS
      irpp: Math.round((employee?.salary || 0) * 0.07), // 7% pour IRPP (simulation)
      mutuelle: 15000, // Montant fixe pour mutuelle
    },
    benefits: {
      logement: 50000,
      transport: 35000,
      repas: 25000,
    },
    taxes: {
      patronale: Math.round((employee?.salary || 0) * 0.165), // 16.5% charges patronales
    }
  };
  
  // Calculer le salaire net
  const totalDeductions = Object.values(payrollData.deductions).reduce((a, b) => a + b, 0);
  const totalBenefits = Object.values(payrollData.benefits).reduce((a, b) => a + b, 0);
  const netSalary = (payrollData.baseSalary - totalDeductions) + totalBenefits;
  
  // Formater les montants
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Convertir le numéro du mois en nom
  const getMonthName = (monthNumber: string) => {
    const monthNames = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return monthNames[parseInt(monthNumber) - 1];
  };
  
  // Simuler la génération et téléchargement de PDF
  const handleDownloadPDF = () => {
    setIsGenerating(true);
    
    // Simuler un délai pour le traitement
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Fiche de paie téléchargée avec succès");
    }, 1500);
  };
  
  // Simuler l'envoi par email
  const handleSendByEmail = () => {
    if (!employee) return;
    
    toast.success(`Fiche de paie envoyée par email à ${employee.email}`);
  };
  
  // Si l'employé n'est pas trouvé
  if (!employee) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-8 flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Employé non trouvé</h2>
          <p className="text-muted-foreground mb-4">
            L'employé que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Button asChild>
            <button onClick={() => navigate("/payroll")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux fiches de paie
            </button>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <Button variant="ghost" onClick={() => navigate("/payroll")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux fiches de paie
        </Button>
        
        <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Bulletin de paie
              </h1>
              <Badge className="bg-green-500 hover:bg-green-600">
                {getMonthName(month)} {year}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {employee.firstName} {employee.lastName} • {employee.position}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleSendByEmail}
            >
              <Mail className="h-4 w-4" />
              Envoyer par email
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <Printer className="h-4 w-4" />
              Imprimer
            </Button>
            <Button 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              onClick={handleDownloadPDF}
              disabled={isGenerating}
            >
              <Download className="h-4 w-4" />
              {isGenerating ? "Génération..." : "Télécharger le PDF"}
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass-card md:col-span-3 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center">BULLETIN DE PAIE</CardTitle>
              <CardDescription className="text-center">
                Période de paie : {getMonthName(month)} {year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between p-4 border-b">
                <div>
                  <h3 className="font-bold text-lg">EMPLOYEUR</h3>
                  <p>Collège Saint-Pierre</p>
                  <p>123 Avenue des Écoles</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                  <p>SIRET: 123 456 789 00012</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="font-bold text-lg">SALARIÉ</h3>
                  <p>{employee.firstName} {employee.lastName}</p>
                  <p>{employee.position}</p>
                  <p>Date d'embauche: {new Date(employee.hireDate).toLocaleDateString('fr-FR')}</p>
                  <p>Matricule: EMP-{employee.id.padStart(4, '0')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="space-y-4">
                  <h3 className="font-bold">RÉMUNÉRATION</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Salaire de base</span>
                      <span className="font-medium">{formatCurrency(payrollData.baseSalary)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Indemnité de logement</span>
                      <span className="font-medium">{formatCurrency(payrollData.benefits.logement)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prime de transport</span>
                      <span className="font-medium">{formatCurrency(payrollData.benefits.transport)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prime de repas</span>
                      <span className="font-medium">{formatCurrency(payrollData.benefits.repas)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold">COTISATIONS</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>CNSS</span>
                      <span className="font-medium text-red-500">-{formatCurrency(payrollData.deductions.cnss)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IRPP</span>
                      <span className="font-medium text-red-500">-{formatCurrency(payrollData.deductions.irpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mutuelle santé</span>
                      <span className="font-medium text-red-500">-{formatCurrency(payrollData.deductions.mutuelle)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total cotisations</span>
                      <span className="font-medium text-red-500">-{formatCurrency(totalDeductions)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold">INFORMATIONS COMPLÉMENTAIRES</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Charges patronales</span>
                      <span className="font-medium">{formatCurrency(payrollData.taxes.patronale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût total employeur</span>
                      <span className="font-medium">{formatCurrency(payrollData.baseSalary + payrollData.taxes.patronale)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex flex-col md:flex-row justify-between items-center bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="font-bold">NET À PAYER</span>
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(netSalary)}
                </div>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Document à conserver sans limitation de durée</p>
                <p>Généré le {new Date().toLocaleDateString('fr-FR')} par EduPaie</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card md:col-span-2 animate-fade-in">
            <CardHeader>
              <CardTitle>Évolution de salaire</CardTitle>
              <CardDescription>
                Historique des rémunérations sur 12 mois
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                <p className="text-muted-foreground">Graphique d'évolution de salaire</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Documents associés</CardTitle>
              <CardDescription>
                Contrats et attestations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate(`/employees/${employee.id}/contract`)}>
                  <FileText className="mr-2 h-4 w-4" />
                  Contrat de travail
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate(`/employees/${employee.id}/certificate`)}>
                  <FileText className="mr-2 h-4 w-4" />
                  Attestation de travail
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Historique des fiches
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PayrollDetail;
