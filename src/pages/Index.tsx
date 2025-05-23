
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, Star, Users, Calculator, 
  PieChart, Calendar, FileText, CreditCard, Shield, 
  Globe, Building, Download, Smartphone, Award,
  TrendingUp, Zap, Target, CheckCircle
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section Moderne */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"></div>
          <div className="container relative px-4 py-24 md:py-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Star className="h-4 w-4" />
                  Plateforme #1 en Afrique de l'Ouest
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Révolutionnez
                  </span>
                  <br />
                  la gestion de votre école
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                  EduPaie automatise complètement la gestion des salaires, des employés et des finances de votre établissement scolaire.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl">
                      Essayer gratuitement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-2">
                      Démo en direct
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">1000+ écoles nous font confiance</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 p-3 rounded-3xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                    alt="Interface EduPaie - Tableau de bord moderne" 
                    className="rounded-2xl w-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Fonctionnalités avec Images */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Fonctionnalités Premium
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tout ce dont votre école a besoin
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une suite complète d'outils conçus spécifiquement pour les établissements scolaires africains
              </p>
            </div>
            
            {/* Gestion des employés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  Gestion RH
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Gérez facilement tous vos employés</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Centralisez toutes les informations de votre personnel enseignant et administratif. 
                  Suivez les contrats, les présences et générez automatiquement tous les documents nécessaires.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Dossiers complets pour chaque employé" />
                  <FeatureItem text="Suivi des contrats et renouvellements" />
                  <FeatureItem text="Gestion des présences et absences" />
                  <FeatureItem text="Génération d'attestations automatique" />
                </div>
                <Link to="/register" className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:underline">
                  Explorer cette fonctionnalité
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-200/50 to-blue-200/50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl transform rotate-2 scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/6b7da374-5148-4293-b4de-6f69e9253afa.png" 
                    alt="Gestion des employés - Interface moderne" 
                    className="w-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Bulletins de paie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/50 to-pink-200/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl transform -rotate-2 scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/c0d6ba3a-0a1c-4cc4-983f-a4b8d6d3570e.png" 
                    alt="Génération de bulletins de paie automatique" 
                    className="w-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
                  <Calculator className="h-4 w-4" />
                  Automatisation
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Bulletins de paie en un clic</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Générez des bulletins de paie professionnels conformes aux réglementations locales. 
                  Calculs automatiques, distribution par email et archivage sécurisé.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Calcul automatique des cotisations" />
                  <FeatureItem text="Templates personnalisables" />
                  <FeatureItem text="Distribution multi-canal" />
                  <FeatureItem text="Conformité réglementaire" />
                </div>
                <Link to="/register" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  Découvrir cette fonctionnalité
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Rapports et analyses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="h-4 w-4" />
                  Analytics
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Tableaux de bord intelligents</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Visualisez toutes vos métriques importantes en temps réel. Prenez des décisions éclairées 
                  grâce à des rapports détaillés et des prévisions automatiques.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Tableaux de bord interactifs" />
                  <FeatureItem text="Rapports personnalisables" />
                  <FeatureItem text="Analyses prédictives" />
                  <FeatureItem text="Exports multi-formats" />
                </div>
                <Link to="/register" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Voir les analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-cyan-200/50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl transform rotate-2 scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/1ab43376-8625-4054-b3f5-52208a4f9be4.png" 
                    alt="Rapports et analytics avancés" 
                    className="w-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Informations établissement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/50 to-red-200/50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl transform -rotate-2 scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/66d35ec4-cf80-4afd-9950-59fd84e45aed.png" 
                    alt="Gestion des informations d'établissement" 
                    className="w-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-6">
                  <Building className="h-4 w-4" />
                  Configuration
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Profil complet de votre école</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Configurez facilement toutes les informations de votre établissement. 
                  Personnalisez vos documents officiels et gérez les accès utilisateurs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Identité complète de l'école" />
                  <FeatureItem text="Documents personnalisés" />
                  <FeatureItem text="Gestion des permissions" />
                  <FeatureItem text="Branding automatique" />
                </div>
                <Link to="/register" className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:underline">
                  Configurer mon école
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Avantages */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pourquoi choisir EduPaie ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une solution complète pensée pour les défis spécifiques des écoles africaines
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AdvantageCard 
                icon={<Smartphone className="h-8 w-8 text-blue-600" />}
                title="Mobile First"
                description="Interface optimisée pour mobile, fonctionne parfaitement même avec une connexion limitée."
              />
              <AdvantageCard 
                icon={<Globe className="h-8 w-8 text-green-600" />}
                title="Multi-pays"
                description="Adapté aux réglementations fiscales et sociales de tous les pays d'Afrique de l'Ouest."
              />
              <AdvantageCard 
                icon={<CreditCard className="h-8 w-8 text-purple-600" />}
                title="Paiements locaux"
                description="Intégration native avec Orange Money, MTN, Wave et tous les services populaires."
              />
              <AdvantageCard 
                icon={<Shield className="h-8 w-8 text-red-600" />}
                title="Sécurité maximale"
                description="Chiffrement bancaire, sauvegardes automatiques et conformité RGPD."
              />
              <AdvantageCard 
                icon={<Award className="h-8 w-8 text-yellow-600" />}
                title="Support expert"
                description="Équipe dédiée qui comprend les enjeux de l'éducation en Afrique."
              />
              <AdvantageCard 
                icon={<Target className="h-8 w-8 text-indigo-600" />}
                title="ROI prouvé"
                description="90% de réduction du temps de gestion administrative selon nos clients."
              />
            </div>
          </div>
        </section>
        
        {/* Section Témoignages */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ils transforment leur école avec EduPaie
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez comment nos clients révolutionnent leur gestion administrative
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="EduPaie a transformé notre gestion RH. Nous avons économisé 25 heures par mois et éliminé toutes les erreurs de calcul."
                author="Amadou Diallo"
                role="Directeur, École Élite Dakar"
                rating={5}
              />
              <TestimonialCard 
                quote="L'intégration avec Orange Money a révolutionné nos paiements. Plus besoin d'attendre les virements bancaires !"
                author="Marie Koné"
                role="Responsable RH, Institut Supérieur Abidjan"
                rating={5}
              />
              <TestimonialCard 
                quote="Interface intuitive, support exceptionnel. EduPaie comprend vraiment nos besoins spécifiques en tant qu'école africaine."
                author="Samuel Okeke"
                role="Administrateur, Lagos International School"
                rating={5}
              />
            </div>
          </div>
        </section>
        
        {/* Section CTA Final */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
          <div className="container px-4 max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à révolutionner votre école ?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Rejoignez plus de 1000 établissements qui ont déjà transformé leur gestion avec EduPaie
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register">
                <Button size="lg" className="h-16 px-12 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-xl shadow-xl">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-white text-white hover:bg-white/10 rounded-xl">
                Planifier une démo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Essai gratuit 14 jours
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Support inclus
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Composants utilitaires
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
      <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const AdvantageCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/30">
    <CardContent className="p-8 text-center">
      <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ quote, author, role, rating }: { 
  quote: string; 
  author: string; 
  role: string; 
  rating: number 
}) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
    <CardContent className="p-8">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="border-t pt-6">
        <p className="font-bold text-lg">{author}</p>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </CardContent>
  </Card>
);

export default Index;
