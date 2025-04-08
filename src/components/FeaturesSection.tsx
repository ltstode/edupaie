
import { CheckCircle, FileText, Wallet, FileSpreadsheet, ChartBarIcon, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Fonctionnalités Premium
          </h2>
          <p className="text-xl text-muted-foreground md:max-w-2xl mx-auto">
            Une suite complète d'outils pour simplifier la gestion financière de votre école
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Bulletins de paie automatisés"
            description="Génération automatique de bulletins de paie PDF personnalisés avec le logo de votre école."
          />
          
          <FeatureCard 
            icon={<Wallet className="h-6 w-6 text-primary" />}
            title="Intégration paiement mobile"
            description="Acceptez les paiements via Orange Money, MTN Money et Wave grâce à l'intégration CinetPay."
          />
          
          <FeatureCard 
            icon={<FileSpreadsheet className="h-6 w-6 text-primary" />}
            title="Export Excel en un clic"
            description="Exportez toutes vos données financières en un seul clic pour faciliter la comptabilité."
          />
          
          <FeatureCard 
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            title="Calcul automatique des taxes"
            description="Calcul précis et automatique des taxes (CNSS), déductions et primes selon la réglementation."
          />
          
          <FeatureCard 
            icon={<ChartBarIcon className="h-6 w-6 text-primary" />}
            title="Tableau de bord en temps réel"
            description="Visualisez en temps réel l'état des salaires, frais non payés et flux de trésorerie."
          />
          
          <FeatureCard 
            icon={<DollarSign className="h-6 w-6 text-primary" />}
            title="Rappels de paiement SMS"
            description="Envoyez automatiquement des rappels SMS pour les paiements de frais de scolarité en retard."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <Card className="glass-card hover:shadow-xl transition-all duration-200 h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
