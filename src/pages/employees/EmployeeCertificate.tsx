
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useEmployees } from "../../contexts/EmployeeContext";
import { toast } from "sonner";

const EmployeeCertificate = () => {
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
  
  // Simuler le téléchargement du certificat
  const handleDownload = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Attestation téléchargée avec succès");
    }, 1500);
  };
  
  // Simuler l'impression du certificat
  const handlePrint = () => {
    toast.success("Impression de l'attestation initiée");
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
              Attestation de Travail
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
            <CardTitle className="uppercase tracking-wider">Attestation de Travail</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between mb-12">
              <div>
                <p className="font-bold mb-1">Collège Saint-Pierre</p>
                <p>123 Avenue des Écoles</p>
                <p>Abidjan, Côte d'Ivoire</p>
                <p>SIRET: 123 456 789 00012</p>
              </div>
              <div className="text-right">
                <p>Abidjan, le {formatDate(new Date().toISOString())}</p>
              </div>
            </div>
            
            <div className="space-y-8 text-sm">
              <p className="font-bold text-center text-lg uppercase">Attestation de Travail</p>
              
              <p>Je soussigné, Robert KOUASSI, agissant en qualité de Directeur du Collège Saint-Pierre, certifie que :</p>
              
              <div className="ml-8 space-y-4">
                <div className="flex">
                  <span className="w-32">M./Mme</span>
                  <span className="font-semibold">{employee.firstName} {employee.lastName}</span>
                </div>
                
                <div className="flex">
                  <span className="w-32">Poste</span>
                  <span className="font-semibold">{employee.position}</span>
                </div>
                
                <div className="flex">
                  <span className="w-32">Département</span>
                  <span className="font-semibold">{employee.department}</span>
                </div>
              </div>
              
              <p>Est employé(e) dans notre établissement depuis le <span className="font-semibold">{formatDate(employee.hireDate)}</span> en qualité de <span className="font-semibold">{employee.position}</span>, dans le cadre d'un contrat à durée indéterminée.</p>
              
              <p>Cette attestation est délivrée à l'intéressé(e) pour faire valoir ce que de droit.</p>
              
              <div className="mt-16 text-right space-y-10">
                <p className="font-semibold">Le Directeur,</p>
                <p>Robert KOUASSI</p>
                <p>Signature et cachet</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Informations de l'attestation</CardTitle>
              <CardDescription>
                Détails de l'attestation de travail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Type de document</span>
                  </div>
                  <span className="font-medium">Attestation de travail</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span>État du document</span>
                  </div>
                  <Badge className="bg-green-600">Généré le {formatDate(new Date().toISOString())}</Badge>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                    <span>Référence</span>
                  </div>
                  <span className="font-medium">AT-{employee.id.padStart(4, '0')}-{new Date().getFullYear()}</span>
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
                  className="w-full justify-start transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500"
                  onClick={() => navigate(`/employees/${employee.id}/contract`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Contrat de travail
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Autres attestations
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

export default EmployeeCertificate;
