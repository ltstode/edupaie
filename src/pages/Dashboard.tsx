
import { CreditCard, Download, Users, BookOpen, TrendingUp, DollarSign, Calendar, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEmployees } from "../contexts/EmployeeContext";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="text-muted-foreground">Bienvenue, {user?.name} | {user?.schoolName}</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exporter
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-card">
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
          <Card className="glass-card">
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
            <Card className="glass-card h-full hover:bg-accent/40 transition-colors">
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
          <Card className="glass-card">
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
                      <Calendar className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
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
                      <CreditCard className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
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
                      <FileText className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
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
      <Footer />
    </div>
  );
};

export default Dashboard;
