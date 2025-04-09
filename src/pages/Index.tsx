
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Users, 
  Calculator, 
  PieChart, 
  Calendar, 
  FileText, 
  CreditCard, 
  Shield, 
  Globe, 
  ArrowUpRight,
  FileSpreadsheet,
  Building,
  Download
} from "lucide-react";

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
                    src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                    alt="Interface EduPaie - Tableau de bord" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Fonctionnalités Clés avec captures d'écran */}
        <section className="py-20 overflow-hidden">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fonctionnalités clés
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Des outils puissants conçus spécifiquement pour les besoins des écoles africaines
              </p>
            </div>
            
            {/* Fonctionnalité 1: Gestion des employés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Gestion des employés
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Gérez facilement tout votre personnel</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Centralisez les informations de vos enseignants et du personnel administratif en un seul endroit sécurisé.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureListItem text="Dossiers complets pour chaque employé" />
                  <FeatureListItem text="Suivi des contrats et renouvellements" />
                  <FeatureListItem text="Historique des salaires et ajustements" />
                  <FeatureListItem text="Génération automatique d'attestations" />
                </ul>
                <Link to="/register" className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline">
                  Découvrir cette fonctionnalité
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-2xl transform rotate-2 scale-105 opacity-70"></div>
                <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <img 
                    src="/lovable-uploads/6b7da374-5148-4293-b4de-6f69e9253afa.png" 
                    alt="Gestion des employés" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Fonctionnalité 2: Génération de bulletins de paie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10 rounded-2xl transform -rotate-2 scale-105 opacity-70"></div>
                <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <img 
                    src="/lovable-uploads/c0d6ba3a-0a1c-4cc4-983f-a4b8d6d3570e.png" 
                    alt="Génération de bulletins de paie" 
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Bulletins de paie
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Générez des bulletins de paie professionnels</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Créez et distribuez des bulletins de paie détaillés conformes aux réglementations locales.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureListItem text="Calcul automatique des cotisations sociales" />
                  <FeatureListItem text="Personnalisation avec le logo de votre école" />
                  <FeatureListItem text="Distribution par email ou impression" />
                  <FeatureListItem text="Archivage sécurisé et exportation PDF" />
                </ul>
                <Link to="/register" className="text-green-600 dark:text-green-400 font-medium flex items-center hover:underline">
                  Découvrir cette fonctionnalité
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Fonctionnalité 3: Rapports et analyses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Rapports et analyses
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Suivez vos indicateurs financiers</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Gardez un œil sur tous les aspects financiers de votre établissement grâce à des rapports détaillés.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureListItem text="Tableaux de bord interactifs en temps réel" />
                  <FeatureListItem text="Rapports financiers personnalisables" />
                  <FeatureListItem text="Suivi des tendances et prévisions" />
                  <FeatureListItem text="Export vers Excel et PDF" />
                </ul>
                <Link to="/register" className="text-purple-600 dark:text-purple-400 font-medium flex items-center hover:underline">
                  Découvrir cette fonctionnalité
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-2xl transform rotate-2 scale-105 opacity-70"></div>
                <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <img 
                    src="/lovable-uploads/1ab43376-8625-4054-b3f5-52208a4f9be4.png" 
                    alt="Rapports et analyses" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Fonctionnalité 4: Informations sur l'établissement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-2xl transform -rotate-2 scale-105 opacity-70"></div>
                <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <img 
                    src="/lovable-uploads/66d35ec4-cf80-4afd-9950-59fd84e45aed.png" 
                    alt="Informations sur l'établissement" 
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Profil d'établissement
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Gérez les informations de votre école</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Centralisez toutes les informations administratives de votre établissement scolaire.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureListItem text="Profil complet de l'école" />
                  <FeatureListItem text="Coordonnées et identifiants légaux" />
                  <FeatureListItem text="Personnalisation des documents officiels" />
                  <FeatureListItem text="Gestion des autorisations utilisateurs" />
                </ul>
                <Link to="/register" className="text-orange-600 dark:text-orange-400 font-medium flex items-center hover:underline">
                  Découvrir cette fonctionnalité
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
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
        
        {/* Section Démo Interactive */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Une interface simple et intuitive
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez à quel point EduPaie est facile à utiliser avec son interface moderne et intuitive
              </p>
            </div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
              <div className="bg-gray-100 dark:bg-gray-900 h-10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">app.edupaie.com</div>
              </div>
              <img 
                src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                alt="Interface EduPaie" 
                className="w-full"
              />
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/register">
                <Button size="lg" className="rounded-full">
                  Essayer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Section Caractéristiques Techniques */}
        <section className="py-20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Développé pour répondre aux défis spécifiques des écoles africaines
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  EduPaie a été conçu en tenant compte des besoins spécifiques et des défis rencontrés par les écoles en Afrique.
                </p>
                
                <div className="space-y-6">
                  <TechFeature 
                    icon={<Globe className="h-5 w-5 text-blue-600" />}
                    title="Fonctionne même en connexion limitée"
                    description="Synchronisation intelligente qui permet de travailler même avec une connexion internet intermittente."
                  />
                  <TechFeature 
                    icon={<Building className="h-5 w-5 text-blue-600" />}
                    title="Adapté aux réglementations locales"
                    description="Conformité avec les lois fiscales et sociales des différents pays africains."
                  />
                  <TechFeature 
                    icon={<CreditCard className="h-5 w-5 text-blue-600" />}
                    title="Intégration paiements mobiles"
                    description="Support natif pour Orange Money, MTN Mobile Money, Wave et autres services populaires."
                  />
                  <TechFeature 
                    icon={<FileSpreadsheet className="h-5 w-5 text-blue-600" />}
                    title="Export multi-formats"
                    description="Exportez vos données facilement aux formats Excel, PDF ou CSV selon vos besoins."
                  />
                  <TechFeature 
                    icon={<Download className="h-5 w-5 text-blue-600" />}
                    title="Application légère"
                    description="Fonctionne sur tous les appareils, y compris les ordinateurs plus anciens et les connexions lentes."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                    <div className="text-sm mt-2">de réduction du temps passé sur la gestion des salaires</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">100%</div>
                    <div className="text-sm mt-2">conforme aux réglementations locales</div>
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">35%</div>
                    <div className="text-sm mt-2">d'amélioration du taux de recouvrement des frais</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">1000+</div>
                    <div className="text-sm mt-2">établissements utilisent déjà EduPaie</div>
                  </div>
                </div>
              </div>
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

const FeatureListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
};

const TechFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Index;
