
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronRight, Users, Calculator, PieChart, Calendar, FileText, CreditCard, Shield, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Section Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Gestion de paie simplifiée pour écoles
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-md">
                  Automatisez vos processus de paie, gérez vos employés et générez des rapports détaillés en quelques clics.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="h-12 px-6 rounded-full bg-white text-blue-700 hover:bg-blue-50">
                    <Link to="/register">
                      Essayer Gratuitement
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-6 rounded-full border-white text-white hover:bg-white/10">
                    <Link to="/login">
                      Connexion
                    </Link>
                  </Button>
                </div>
                <div className="text-sm opacity-80">
                  Intégration complète avec les services de paiement mobile en Afrique
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-700 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/ef19982e-c0b9-4b4d-bd0f-307b23cc5aac.png" 
                    alt="Interface EduPaie" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Avantages */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transformez la gestion de votre école
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                EduPaie combine tous les outils dont vous avez besoin pour optimiser vos opérations administratives et vous concentrer sur l'éducation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Gestion des employés"
                description="Gérez facilement les profils, contrats et documents de vos enseignants et personnel administratif."
              />
              <FeatureCard 
                icon={<Calculator className="h-8 w-8 text-blue-600" />}
                title="Calcul de paie automatisé"
                description="Calculez automatiquement les salaires, primes, déductions et générez les fiches de paie en un clic."
              />
              <FeatureCard 
                icon={<CreditCard className="h-8 w-8 text-blue-600" />}
                title="Paiements simplifiés"
                description="Intégration avec les systèmes de paiement mobile populaires en Afrique pour des versements rapides."
              />
              <FeatureCard 
                icon={<PieChart className="h-8 w-8 text-blue-600" />}
                title="Rapports détaillés"
                description="Visualisez vos données financières avec des tableaux de bord interactifs et des rapports personnalisables."
              />
              <FeatureCard 
                icon={<Calendar className="h-8 w-8 text-blue-600" />}
                title="Suivi des présences"
                description="Suivez les présences, absences et retards pour une gestion optimale des ressources humaines."
              />
              <FeatureCard 
                icon={<FileText className="h-8 w-8 text-blue-600" />}
                title="Documents automatisés"
                description="Générez automatiquement contrats, attestations et certificats avec les signatures numériques."
              />
            </div>
          </div>
        </section>
        
        {/* Section Comment ça marche */}
        <section className="py-20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comment ça marche
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                EduPaie a été conçu pour simplifier chaque étape du processus de gestion de la paie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute left-1/2 top-1/4 h-1/2 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
              
              <StepCard 
                number="01"
                title="Ajoutez vos employés"
                description="Importez ou ajoutez manuellement les profils de vos employés avec leurs informations personnelles et professionnelles."
              />
              <StepCard 
                number="02"
                title="Configurez les paramètres de paie"
                description="Définissez les salaires, primes, déductions et autres variables nécessaires au calcul de la paie."
              />
              <StepCard 
                number="03"
                title="Générez et distribuez"
                description="Générez les fiches de paie, les rapports et envoyez les paiements directement via les services de paiement mobile."
              />
            </div>
          </div>
        </section>
        
        {/* Section Témoignages */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ils nous font confiance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Des écoles de toute l'Afrique utilisent EduPaie pour simplifier leur administration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="EduPaie nous a permis d'économiser plus de 20 heures par mois sur la gestion des salaires de nos 35 enseignants."
                author="Amadou Diallo"
                role="Directeur, École Élite Dakar"
              />
              <TestimonialCard 
                quote="L'intégration avec les services de paiement mobile a révolutionné notre processus de paie. Nos enseignants reçoivent leur salaire instantanément."
                author="Marie Koné"
                role="Responsable RH, Institut Supérieur Abidjan"
              />
              <TestimonialCard 
                quote="La génération automatique des contrats et attestations nous fait gagner un temps précieux et réduit considérablement les erreurs administratives."
                author="Samuel Okeke"
                role="Administrateur, Lagos International School"
              />
            </div>
          </div>
        </section>
        
        {/* Section Tarification */}
        <section className="py-20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Des tarifs adaptés à chaque école
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choisissez le forfait qui correspond le mieux à vos besoins
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Démarrage"
                price="19 900"
                period="FCFA / mois"
                description="Parfait pour les petites écoles"
                features={[
                  "Jusqu'à 15 employés",
                  "Calcul automatique de la paie",
                  "Génération de fiches de paie",
                  "Support par email"
                ]}
                buttonLabel="Commencer"
                buttonLink="/register"
                popular={false}
              />
              <PricingCard 
                title="Standard"
                price="39 900"
                period="FCFA / mois"
                description="Idéal pour les écoles en croissance"
                features={[
                  "Jusqu'à 50 employés",
                  "Toutes les fonctionnalités Démarrage",
                  "Génération de contrats et attestations",
                  "Intégration paiements mobiles",
                  "Support prioritaire"
                ]}
                buttonLabel="Essayer gratuitement"
                buttonLink="/register"
                popular={true}
              />
              <PricingCard 
                title="Premium"
                price="79 900"
                period="FCFA / mois"
                description="Pour les grandes institutions"
                features={[
                  "Employés illimités",
                  "Toutes les fonctionnalités Standard",
                  "Rapports financiers avancés",
                  "API pour intégrations personnalisées",
                  "Accompagnement dédié"
                ]}
                buttonLabel="Nous contacter"
                buttonLink="/contact"
                popular={false}
              />
            </div>
          </div>
        </section>
        
        {/* Section Sécurité et conformité */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sécurité et conformité au cœur de nos priorités
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  EduPaie assure la protection de vos données sensibles et respecte les réglementations financières en vigueur dans chaque pays.
                </p>
                <ul className="space-y-4">
                  <SecurityFeature text="Chiffrement de bout en bout des données personnelles" />
                  <SecurityFeature text="Conformité avec les réglementations locales" />
                  <SecurityFeature text="Sauvegarde automatique et journalière" />
                  <SecurityFeature text="Authentification à deux facteurs" />
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 transform scale-150"></div>
                  <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-full w-64 h-64 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section CTA */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à simplifier la gestion de votre école ?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines d'établissements à travers l'Afrique qui ont transformé leur gestion administrative avec EduPaie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="h-12 px-6 rounded-full bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/register">
                    Commencer gratuitement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 px-6 rounded-full border-white text-white hover:bg-white/10">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Composants utilitaires pour la page d'accueil
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-4xl text-blue-600 mb-4">"</div>
      <p className="italic text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonLabel, 
  buttonLink,
  popular
}: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[], 
  buttonLabel: string, 
  buttonLink: string,
  popular: boolean
}) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-xl shadow-sm border 
      ${popular ? 'border-blue-600 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-gray-900' : 'border-gray-100 dark:border-gray-700'}
      p-6 md:p-8 flex flex-col h-full relative
    `}>
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Recommandé
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground"> {period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        asChild 
        className={popular ? 'bg-blue-600 hover:bg-blue-700' : ''}
        variant={popular ? 'default' : 'outline'}
      >
        <Link to={buttonLink}>
          {buttonLabel}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

const SecurityFeature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mr-3">
        <Shield className="w-4 h-4" />
      </div>
      <span>{text}</span>
    </li>
  );
};

export default Index;
