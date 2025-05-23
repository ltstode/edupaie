import { useAuth } from "../contexts/AuthContext";
import { Sidebar } from "../components/Sidebar";
import { StatsCard } from "../components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, DollarSign, TrendingUp, Calendar,
  Plus, FileText, BarChart3, Clock,
  ArrowRight, Star, Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Bonjour";
    if (currentHour < 18) return "Bon après-midi";
    return "Bonsoir";
  };

  const stats = [
    {
      title: "Total Employés",
      value: "45",
      description: "+2 ce mois",
      icon: <Users className="h-4 w-4" />,
      trend: { value: "+2", positive: true }
    },
    {
      title: "Salaires du mois",
      value: "2,450,000 FCFA",
      description: "+12% vs mois dernier",
      icon: <DollarSign className="h-4 w-4" />,
      trend: { value: "+12%", positive: true }
    },
    {
      title: "Paiements en attente",
      value: "8",
      description: "À traiter aujourd'hui",
      icon: <Clock className="h-4 w-4" />,
      trend: { value: "8", positive: false }
    },
    {
      title: "Taux de satisfaction",
      value: "98%",
      description: "+5% ce trimestre",
      icon: <Star className="h-4 w-4" />,
      trend: { value: "+5%", positive: true }
    }
  ];

  const quickActions = [
    {
      title: "Nouveau employé",
      description: "Ajouter un nouvel employé à votre système",
      icon: Users,
      href: "/employees/new",
      color: "bg-blue-500"
    },
    {
      title: "Générer la paie",
      description: "Créer les bulletins de paie du mois",
      icon: FileText,
      href: "/payroll",
      color: "bg-green-500"
    },
    {
      title: "Voir les rapports",
      description: "Consulter les rapports financiers",
      icon: BarChart3,
      href: "/reports",
      color: "bg-purple-500"
    }
  ];

  const recentActivities = [
    {
      title: "Bulletin de paie généré",
      description: "Marie Diallo - Janvier 2024",
      time: "Il y a 2 heures",
      type: "payroll"
    },
    {
      title: "Nouvel employé ajouté",
      description: "Ahmed Sow - Professeur de Mathématiques",
      time: "Il y a 5 heures",
      type: "employee"
    },
    {
      title: "Rapport mensuel généré",
      description: "Rapport financier - Décembre 2023",
      time: "Hier",
      type: "report"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex">
      <Sidebar />
      
      <main className="flex-1 ml-72 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header avec salutation */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {getGreeting()}, {user?.name || "Administrateur"} 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Voici un aperçu de votre école aujourd'hui
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date().toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Button>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                description={stat.description}
                icon={stat.icon}
                trend={stat.trend}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Actions rapides */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Actions rapides
                  </CardTitle>
                  <CardDescription>
                    Accédez rapidement aux fonctionnalités principales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                      <Link key={index} to={action.href}>
                        <Card className="group hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30">
                          <CardContent className="p-6">
                            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                              <action.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                              {action.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {action.description}
                            </p>
                            <div className="flex items-center text-primary text-sm font-medium">
                              Commencer
                              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activités récentes */}
            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Activités récentes
                  </CardTitle>
                  <CardDescription>
                    Dernières actions effectuées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          {activity.type === 'payroll' && <FileText className="h-4 w-4 text-primary" />}
                          {activity.type === 'employee' && <Users className="h-4 w-4 text-primary" />}
                          {activity.type === 'report' && <BarChart3 className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium">{activity.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
                    Voir toutes les activités
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Graphiques et aperçus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle>Évolution des salaires</CardTitle>
                <CardDescription>Comparaison sur les 6 derniers mois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Graphique à venir</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle>Répartition des employés</CardTitle>
                <CardDescription>Par département</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Graphique à venir</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
