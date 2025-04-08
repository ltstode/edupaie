
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground md:max-w-2xl mx-auto">
            Découvrez comment EduPaie a transformé la gestion financière des écoles privées
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            quote="EduPaie a révolutionné notre processus de paie. Nous économisons plus de 15 heures par mois et nos enseignants reçoivent leurs salaires à temps, sans erreur."
            author="Sophie Kamara"
            role="Directrice Administrative, École Élite"
          />
          
          <TestimonialCard 
            quote="L'intégration avec les paiements mobiles a permis d'augmenter notre taux de recouvrement des frais de scolarité de plus de 30%. Une solution vraiment indispensable."
            author="Jean-Paul Ouattara"
            role="Fondateur, Académie Internationale"
          />
          
          <TestimonialCard 
            quote="Interface élégante, simple à utiliser et support client exceptionnel. EduPaie comprend parfaitement les défis uniques des écoles africaines."
            author="Marie Diop"
            role="Comptable, Lycée Excellence"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ 
  quote, 
  author, 
  role 
}: { 
  quote: string; 
  author: string; 
  role: string 
}) {
  return (
    <Card className="glass-card h-full">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
        <blockquote className="text-lg mb-4">
          "{quote}"
        </blockquote>
        <div className="mt-6">
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}
