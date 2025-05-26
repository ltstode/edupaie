
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 leading-tight" style={{ letterSpacing: '-2%' }}>
              Automatisez la paie de votre école
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ letterSpacing: '-1%' }}>
              Solution premium de gestion de paie pour les écoles privées africaines. 
              Simplifiez vos processus RH et concentrez-vous sur l'éducation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild>
                <Link to="/register">
                  Commencer gratuitement
                </Link>
              </AnimatedButton>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Découvrir les fonctionnalités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - No hover effects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4">Pourquoi choisir EduPaie ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ letterSpacing: '-1%' }}>
              Une solution complète pensée pour les spécificités des établissements scolaires africains
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Gestion automatisée",
                description: "Calculs automatiques des salaires, primes et déductions selon la législation locale",
                icon: "⚡"
              },
              {
                title: "Conformité réglementaire", 
                description: "Respect des normes CNSS, fiscales et bancaires en vigueur dans votre pays",
                icon: "✅"
              },
              {
                title: "Tableaux de bord intuitifs",
                description: "Visualisez vos données RH et financières en temps réel avec des rapports détaillés", 
                icon: "📊"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600" style={{ letterSpacing: '-1%' }}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-normal mb-4">Prêt à transformer votre gestion RH ?</h2>
          <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-1%' }}>
            Rejoignez les écoles qui ont déjà simplifié leur paie avec EduPaie
          </p>
          <AnimatedButton asChild>
            <Link to="/register">
              Commencer votre essai gratuit
            </Link>
          </AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
