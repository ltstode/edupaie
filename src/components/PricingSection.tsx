
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Plans tarifaires simples
          </h2>
          <p className="text-xl text-muted-foreground md:max-w-2xl mx-auto">
            Des formules adaptées à la taille de votre école
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <PricingCard
            title="Essentiel"
            price="25 000"
            description="Idéal pour les petites écoles jusqu'à 20 enseignants"
            features={[
              "Bulletins de paie automatisés",
              "Calcul des taxes et déductions",
              "Tableau de bord simplifié",
              "Jusqu'à 20 employés",
              "Support par email"
            ]}
            buttonText="Commencer gratuitement"
            popular={false}
          />
          
          <PricingCard
            title="Premium"
            price="45 000"
            description="Parfait pour les écoles en développement jusqu'à 50 enseignants"
            features={[
              "Tout dans Essentiel, plus :",
              "Intégration paiement mobile",
              "Rappels de paiement SMS",
              "Export Excel avancé",
              "Jusqu'à 50 employés",
              "Support prioritaire"
            ]}
            buttonText="Choisir Premium"
            popular={true}
          />
          
          <PricingCard
            title="Entreprise"
            price="75 000"
            description="Solution complète pour les grands établissements"
            features={[
              "Tout dans Premium, plus :",
              "API personnalisable",
              "Intégration multi-établissements",
              "Rapports financiers avancés",
              "Employés illimités",
              "Gestionnaire de compte dédié"
            ]}
            buttonText="Contacter les ventes"
            popular={false}
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Tous les prix sont en FCFA par mois. Facturation annuelle disponible avec 2 mois gratuits.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  buttonText: string; 
  popular: boolean 
}) {
  return (
    <Card className={`glass-card flex flex-col ${popular ? 'border-primary shadow-lg relative' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
            Recommandé
          </div>
        </div>
      )}
      <CardHeader className={`${popular ? 'pt-8' : ''}`}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mt-4 mb-8">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">FCFA/mois</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/register" className="w-full">
          <Button 
            className={`w-full ${popular ? 'bg-primary' : ''}`} 
            variant={popular ? "default" : "outline"}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
