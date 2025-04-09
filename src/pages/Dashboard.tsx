
import { CreditCard, Download, Users, BookOpen, TrendingUp, DollarSign, Calendar, FileText, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEmployees } from "../contexts/EmployeeContext";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const { user } = useAuth();
  const { employees } = useEmployees();
  
  // Calculer le total des salaires
  const totalSalaries = employees.reduce((sum, employee) => sum + employee.salary, 0);
  
  // Formatage des montants
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="ml-60">
        <header className="sticky top-0 z-20 w-full bg-background/80 backdrop-blur-md border-b">
          <div className="h-16 flex items-center justify-between px-6">
            <h1 className="text-lg font-medium">Aperçu</h1>
            <div className="flex items-center space-x-4">
              <div className="relative w-full max-w-sm">
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="w-full rounded-full bg-muted px-4 py-2 text-sm"
                />
              </div>
              <Button variant="outline" className="rounded-full">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Bonjour {user?.name} ! <span className="text-yellow-400">☀️</span>
            </h2>
            <p className="text-muted-foreground">
              Bienvenue dans votre tableau de bord
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="max-w-lg">
              <div className="bg-muted/50 rounded-xl p-8 relative flex items-center space-x-4">
                <div className="border-4 border-background p-4 rounded-xl bg-background">
                  <Rocket className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">Un nouveau départ avec des possibilités infinies</h3>
                  <p className="text-muted-foreground mb-4">Quelle sera votre première action ?</p>
                  <Button asChild>
                    <Link to="/employees/new">
                      Ajouter un employé
                      <span className="ml-2">🚀</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card className={cn("glass-card transition-all hover:shadow-md")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total des salaires</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(totalSalaries)}</div>
                <p className="text-xs text-muted-foreground">
                  {employees.length} employés actifs
                </p>
              </CardContent>
            </Card>
            <Card className={cn("glass-card transition-all hover:shadow-md")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Frais de scolarité</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,750,000 FCFA</div>
                <p className="text-xs text-muted-foreground">
                  +10.5% par rapport au trimestre dernier
                </p>
              </CardContent>
            </Card>
            <Link to="/employees" className="block">
              <Card className={cn("glass-card h-full hover:bg-accent/20 transition-all hover:shadow-md")}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Personnel</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{employees.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Gérer les employés
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Card className={cn("glass-card transition-all hover:shadow-md")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taux de paiement</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">
                  +5.1% par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
            <Tabs defaultValue="apercu" className="col-span-full lg:col-span-4">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="apercu">Aperçu</TabsTrigger>
                  <TabsTrigger value="paiements">Paiements</TabsTrigger>
                  <TabsTrigger value="depenses">Dépenses</TabsTrigger>
                </TabsList>
                <select className="bg-background border rounded px-2 py-1 text-sm">
                  <option>Ce mois-ci</option>
                  <option>Ce trimestre</option>
                  <option>Cette année</option>
                </select>
              </div>
              <TabsContent value="apercu" className="p-0 mt-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Tendance des revenus</CardTitle>
                    <CardDescription>
                      Évolution des revenus des frais de scolarité et autres sources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                      <p className="text-muted-foreground">Graphique de tendance des revenus</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="paiements" className="p-0 mt-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Paiements récents</CardTitle>
                    <CardDescription>
                      Les derniers paiements reçus
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                      <p className="text-muted-foreground">Liste des paiements récents</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="depenses" className="p-0 mt-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Principales dépenses</CardTitle>
                    <CardDescription>
                      Répartition des dépenses par catégorie
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                      <p className="text-muted-foreground">Graphique des dépenses</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="col-span-full lg:col-span-3 space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Paiements à venir</CardTitle>
                  <CardDescription>
                    Échéances prévues pour les prochains jours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Salaires du personnel</p>
                          <p className="text-sm text-muted-foreground">28 Avril 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(totalSalaries)}</p>
                        <p className="text-xs text-muted-foreground">{employees.length} employés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Facture Fournitures</p>
                          <p className="text-sm text-muted-foreground">15 Avril 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">850,000 FCFA</p>
                        <p className="text-xs text-muted-foreground">Librairie Centrale</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Taxes trimestrielles</p>
                          <p className="text-sm text-muted-foreground">30 Avril 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">1,230,000 FCFA</p>
                        <p className="text-xs text-muted-foreground">CNSS et autres</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Frais non payés</CardTitle>
                  <CardDescription>
                    Élèves avec des frais de scolarité en retard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center border-2 border-dashed rounded-md">
                    <p className="text-muted-foreground">Liste des frais en retard</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
