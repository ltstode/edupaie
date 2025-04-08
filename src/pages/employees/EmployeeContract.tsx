
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle, 
  Clock,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useEmployees } from "../../contexts/EmployeeContext";
import { toast } from "sonner";

const EmployeeContract = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getEmployee } = useEmployees();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const employee = getEmployee(id || "");
  
  // Formatter la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  // Calculer la période de travail
  const calculateWorkPeriod = (hireDate: string) => {
    const hire = new Date(hireDate);
    const now = new Date();
    
    const years = now.getFullYear() - hire.getFullYear();
    const months = now.getMonth() - hire.getMonth();
    
    if (months < 0) {
      return `${years - 1} an${years - 1 > 1 ? 's' : ''} et ${months + 12} mois`;
    }
    
    return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
  };
  
  // Simuler le téléchargement du contrat
  const handleDownload = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Contrat téléchargé avec succès");
    }, 1500);
  };
  
  // Simuler l'impression du contrat
  const handlePrint = () => {
    toast.success("Impression du contrat initiée");
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
          <Button onClick={() => navigate("/employees")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux employés
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <Button variant="ghost" onClick={() => navigate(`/employees/${employee.id}`)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'employé
        </Button>
        
        <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Contrat de Travail
            </h1>
            <p className="text-muted-foreground">
              {employee.firstName} {employee.lastName} • {employee.position}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handlePrint}
            >
              <Printer className="h-4 w-4" />
              Imprimer
            </Button>
            <Button 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              onClick={handleDownload}
              disabled={isGenerating}
            >
              <Download className="h-4 w-4" />
              {isGenerating ? "Génération..." : "Télécharger le PDF"}
            </Button>
          </div>
        </div>
        
        <Card className="glass-card mb-6 animate-fade-in">
          <CardHeader className="text-center border-b">
            <CardTitle className="uppercase tracking-wider">Contrat de Travail à Durée Indéterminée</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6 text-sm">
              <p className="font-bold text-center">ENTRE LES SOUSSIGNÉS</p>
              
              <div className="space-y-2">
                <p><span className="font-semibold">Collège Saint-Pierre</span>, ci-après dénommé "l'employeur", immatriculé sous le numéro SIRET 123 456 789 00012, dont le siège social est situé 123 Avenue des Écoles, Abidjan, Côte d'Ivoire,</p>
                <p>Représenté par M. Robert KOUASSI, agissant en qualité de Directeur,</p>
                <p className="font-semibold">D'une part,</p>
              </div>
              
              <div className="space-y-2">
                <p>ET</p>
                <p><span className="font-semibold">M./Mme {employee.firstName} {employee.lastName}</span>, ci-après dénommé(e) "le salarié",</p>
                <p>Demeurant à [Adresse de l'employé]</p>
                <p className="font-semibold">D'autre part,</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-bold">IL A ÉTÉ CONVENU CE QUI SUIT :</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 1 : ENGAGEMENT</p>
                <p>L'employeur engage le salarié en qualité de <span className="font-semibold">{employee.position}</span> au sein du département <span className="font-semibold">{employee.department}</span> à compter du <span className="font-semibold">{formatDate(employee.hireDate)}</span>.</p>
                <p>Le salarié déclare être libre de tout engagement et n'être soumis à aucune clause de non-concurrence.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 2 : DURÉE DU CONTRAT</p>
                <p>Le présent contrat est conclu pour une durée indéterminée, sous réserve des résultats de la visite médicale d'embauche.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 3 : PÉRIODE D'ESSAI</p>
                <p>Le présent contrat comporte une période d'essai de trois mois au cours de laquelle chacune des parties pourra rompre le contrat sans indemnité.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 4 : RÉMUNÉRATION</p>
                <p>En contrepartie de ses services, le salarié percevra une rémunération mensuelle brute de <span className="font-semibold">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 }).format(employee.salary)}</span> pour un horaire mensuel de 173,33 heures.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 5 : LIEU DE TRAVAIL</p>
                <p>Le salarié exercera ses fonctions dans les locaux de l'entreprise situés à Abidjan, Côte d'Ivoire.</p>
                <p>L'employeur se réserve le droit de demander au salarié d'exercer ses fonctions dans un autre établissement, en fonction des nécessités de service.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 6 : HORAIRES DE TRAVAIL</p>
                <p>Le salarié sera soumis à l'horaire en vigueur dans l'établissement scolaire, soit actuellement 40 heures par semaine, réparties du lundi au vendredi.</p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold">ARTICLE 7 : OBLIGATIONS</p>
                <p>Le salarié s'engage à respecter les directives et consignes qui lui seront données par sa hiérarchie, le règlement intérieur, ainsi que toutes les règles en vigueur au sein de l'établissement.</p>
              </div>
              
              <div className="mt-12 pt-6 border-t space-y-6">
                <p>Fait à Abidjan, le {formatDate(new Date().toISOString())}, en deux exemplaires originaux.</p>
                
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="space-y-10">
                    <p className="font-semibold">Pour l'employeur,</p>
                    <p>M. Robert KOUASSI</p>
                    <p>Signature</p>
                  </div>
                  <div className="space-y-10">
                    <p className="font-semibold">Le salarié,</p>
                    <p>M./Mme {employee.firstName} {employee.lastName}</p>
                    <p>Signature précédée de la mention "Lu et approuvé"</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Statut du contrat</CardTitle>
              <CardDescription>
                État actuel et historique du contrat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                    <span className="font-medium">Contrat actif</span>
                  </div>
                  <Badge className="bg-green-600">En vigueur</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Date de signature</span>
                    </div>
                    <span className="font-medium">{formatDate(employee.hireDate)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Durée d'emploi</span>
                    </div>
                    <span className="font-medium">{calculateWorkPeriod(employee.hireDate)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center gap-2">
                      <Copy className="h-4 w-4 text-muted-foreground" />
                      <span>Type de contrat</span>
                    </div>
                    <span className="font-medium">CDI</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Documents associés</CardTitle>
              <CardDescription>
                Autres documents relatifs à l'employé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start transition-colors hover:bg-green-100 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 hover:border-green-500"
                  onClick={() => navigate(`/payroll/${employee.id}`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Fiche de paie
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start transition-colors hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-500"
                  onClick={() => navigate(`/employees/${employee.id}/certificate`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Attestation de travail
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Avenant au contrat
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

export default EmployeeContract;
