
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, Star, Users, Calculator, 
  PieChart, Calendar, FileText, CreditCard, Shield, 
  Globe, Building, Download, Smartphone, Award,
  TrendingUp, Zap, Target, CheckCircle, Sparkles,
  FileSpreadsheet, Wallet, DollarSign
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="container relative px-4 py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                {/* Badge Premium */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Solution #1 pour les écoles africaines
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-6">
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                    <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Automatisation de paie
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                      premium
                    </span>
                    <span className="block text-gray-900 dark:text-white">
                      pour écoles
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
                    Simplifiez la gestion des salaires et des frais de scolarité avec une solution élégante et puissante, conçue spécialement pour les écoles privées africaines.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/register">
                    <Button size="lg" className="h-16 px-10 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/25 border-0 text-white transition-all duration-300 hover:shadow-3xl hover:shadow-blue-500/40 hover:scale-105">
                      Essayer Gratuitement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-gray-900">
                      Connexion
                    </Button>
                  </Link>
                </div>
                
                {/* Intégrations */}
                <div className="pt-8">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Intégration complète avec les services de paiement mobile
                  </p>
                  <div className="flex items-center gap-6 opacity-60">
                    <div className="text-gray-800 dark:text-gray-200 font-medium">Orange Money</div>
                    <div className="text-gray-800 dark:text-gray-200 font-medium">MTN Money</div>
                    <div className="text-gray-800 dark:text-gray-200 font-medium">Wave</div>
                    <div className="text-gray-800 dark:text-gray-200 font-medium">CinetPay</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-3xl transform rotate-3 scale-105 blur-2xl"></div>
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <img 
                    src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                    alt="Interface EduPaie - Tableau de bord moderne" 
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Fonctionnalités */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Fonctionnalités Premium
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Une suite complète d'outils pour simplifier la gestion financière de votre école
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<FileText className="h-8 w-8 text-blue-600" />}
                title="Bulletins de paie automatisés"
                description="Génération automatique de bulletins de paie PDF personnalisés avec le logo de votre école."
              />
              
              <FeatureCard 
                icon={<Wallet className="h-8 w-8 text-purple-600" />}
                title="Intégration paiement mobile"
                description="Acceptez les paiements via Orange Money, MTN Money et Wave grâce à l'intégration CinetPay."
              />
              
              <FeatureCard 
                icon={<FileSpreadsheet className="h-8 w-8 text-green-600" />}
                title="Export Excel en un clic"
                description="Exportez toutes vos données financières en un seul clic pour faciliter la comptabilité."
              />
              
              <FeatureCard 
                icon={<Calculator className="h-8 w-8 text-orange-600" />}
                title="Calcul automatique des taxes"
                description="Calcul précis et automatique des taxes (CNSS), déductions et primes selon la réglementation."
              />
              
              <FeatureCard 
                icon={<PieChart className="h-8 w-8 text-indigo-600" />}
                title="Tableau de bord en temps réel"
                description="Visualisez en temps réel l'état des salaires, frais non payés et flux de trésorerie."
              />
              
              <FeatureCard 
                icon={<Smartphone className="h-8 w-8 text-pink-600" />}
                title="Rappels de paiement SMS"
                description="Envoyez automatiquement des rappels SMS pour les paiements de frais de scolarité en retard."
              />
            </div>
          </div>
        </section>
        
        {/* Section Témoignages */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ce que disent nos clients
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Découvrez comment EduPaie a transformé la gestion financière des écoles privées
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="EduPaie a révolutionné notre processus de paie. Nous économisons plus de 15 heures par mois."
                author="Sophie Kamara"
                role="Directrice Administrative, École Élite"
                rating={5}
              />
              
              <TestimonialCard 
                quote="L'intégration avec les paiements mobiles a augmenté notre taux de recouvrement de 30%."
                author="Jean-Paul Ouattara"
                role="Fondateur, Académie Internationale"
                rating={5}
              />
              
              <TestimonialCard 
                quote="Interface élégante et support client exceptionnel. EduPaie comprend nos défis uniques."
                author="Marie Diop"
                role="Comptable, Lycée Excellence"
                rating={5}
              />
            </div>
          </div>
        </section>
        
        {/* Section CTA Final */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container px-4 max-w-4xl mx-auto text-center relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Prêt à révolutionner votre école ?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light">
              Rejoignez plus de 1000 établissements qui ont déjà transformé leur gestion avec EduPaie
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register">
                <Button size="lg" className="h-16 px-12 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-semibold border-white/30 text-white hover:bg-white/10 rounded-2xl backdrop-blur-sm">
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
    </div>
  );
};

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
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="font-display text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ 
  quote, 
  author, 
  role,
  rating 
}: { 
  quote: string; 
  author: string; 
  role: string;
  rating: number;
}) {
  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-lg mb-6 text-gray-700 dark:text-gray-300 italic">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Index;
