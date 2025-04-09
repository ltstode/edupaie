
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Automatisation de paie premium pour les écoles
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Simplifiez la gestion des salaires et des frais de scolarité avec une solution élégante et puissante.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg" className="h-12 px-6 gap-2 rounded-full">
                  Essayer Gratuitement
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-full">
                  Connexion
                </Button>
              </Link>
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <div className="text-sm text-muted-foreground">
                Intégration complète avec les services de paiement mobile
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
                <div className="text-muted-foreground/60">Orange Money</div>
                <div className="text-muted-foreground/60">MTN</div>
                <div className="text-muted-foreground/60">Wave</div>
                <div className="text-muted-foreground/60">CinetPay</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                alt="Tableau de bord EduPaie" 
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
