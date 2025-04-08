
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Download, Printer, Search, Filter, MailPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useEmployees } from "../../contexts/EmployeeContext";
import { toast } from "sonner";

const PayrollPage = () => {
  const navigate = useNavigate();
  const { employees } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("04");
  const [selectedYear, setSelectedYear] = useState("2025");
  
  // Filtrer les fiches de paie (simulation)
  const filteredPayslips = employees.filter(employee => 
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Générer une fiche de paie pour un employé (simulation)
  const generatePayslip = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;
    
    // Simulation - Dans un cas réel, on générerait un PDF
    toast.success(`Fiche de paie générée pour ${employee.firstName} ${employee.lastName}`);
    
    // En cas réel, on redirigerait vers une page de téléchargement ou afficherait le PDF
    setTimeout(() => {
      navigate(`/payroll/${employeeId}?month=${selectedMonth}&year=${selectedYear}`);
    }, 500);
  };
  
  // Envoyer une fiche de paie par email (simulation)
  const sendPayslipByEmail = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;
    
    toast.success(`Fiche de paie envoyée par email à ${employee.email}`);
  };
  
  // Formatage du salaire
  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0
    }).format(salary);
  };
  
  // Liste des mois
  const months = [
    { value: "01", label: "Janvier" },
    { value: "02", label: "Février" },
    { value: "03", label: "Mars" },
    { value: "04", label: "Avril" },
    { value: "05", label: "Mai" },
    { value: "06", label: "Juin" },
    { value: "07", label: "Juillet" },
    { value: "08", label: "Août" },
    { value: "09", label: "Septembre" },
    { value: "10", label: "Octobre" },
    { value: "11", label: "Novembre" },
    { value: "12", label: "Décembre" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-2 -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au tableau de bord
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Bulletins de paie</h1>
            <p className="text-muted-foreground">
              Générez et gérez les fiches de paie pour tous les employés
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exporter tout
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MailPlus className="h-4 w-4" />
              Envoyer par lot
            </Button>
          </div>
        </div>
        
        <Card className="glass-card mb-6">
          <CardHeader>
            <CardTitle>Période de paie</CardTitle>
            <CardDescription>
              Sélectionnez la période pour laquelle vous souhaitez générer les fiches de paie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Sélectionnez le mois" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map(month => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full md:w-auto">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Sélectionnez l'année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full md:w-auto flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Rechercher un employé..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filtrer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="tous" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="tous">Tous les employés</TabsTrigger>
            <TabsTrigger value="generes">Fiches générées</TabsTrigger>
            <TabsTrigger value="envoyes">Fiches envoyées</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tous" className="space-y-4">
            <div className="grid gap-4">
              {filteredPayslips.map(employee => (
                <Card key={employee.id} className="transition-all hover:bg-accent/20">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {employee.firstName[0]}{employee.lastName[0]}
                        </div>
                        <div>
                          <p className="font-medium">{employee.firstName} {employee.lastName}</p>
                          <p className="text-sm text-muted-foreground">{employee.department} • {employee.position}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:text-right">
                        <div className="flex-1">
                          <p className="font-medium">{formatSalary(employee.salary)}</p>
                          <p className="text-sm text-muted-foreground">Salaire mensuel</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => sendPayslipByEmail(employee.id)}
                            className="transition-all hover:text-blue-500 hover:border-blue-500"
                          >
                            <MailPlus className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => navigate(`/payroll/${employee.id}?month=${selectedMonth}&year=${selectedYear}`)}
                            className="transition-all hover:text-amber-500 hover:border-amber-500"
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button 
                            className="whitespace-nowrap"
                            onClick={() => generatePayslip(employee.id)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Générer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredPayslips.length === 0 && (
                <div className="text-center py-10">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium">Aucun résultat</h3>
                  <p className="text-muted-foreground">
                    Aucun employé ne correspond à votre recherche.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="generes" className="space-y-4">
            <div className="flex items-center justify-center p-8 border border-dashed rounded-lg">
              <div className="text-center">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <h3 className="text-lg font-medium">Fiches de paie générées</h3>
                <p className="text-muted-foreground mb-4">
                  Les fiches de paie que vous avez générées apparaîtront ici.
                </p>
                <Button>Générer des fiches de paie</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="envoyes" className="space-y-4">
            <div className="flex items-center justify-center p-8 border border-dashed rounded-lg">
              <div className="text-center">
                <MailPlus className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <h3 className="text-lg font-medium">Fiches de paie envoyées</h3>
                <p className="text-muted-foreground mb-4">
                  L'historique des fiches de paie envoyées par email apparaîtra ici.
                </p>
                <Button variant="outline">Voir l'historique</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default PayrollPage;
