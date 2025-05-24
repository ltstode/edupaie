
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center py-32">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="container relative px-6 py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 animate-fade-in">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-100/60 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Solution N°1 pour la gestion de paie scolaire en Afrique
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-8">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                    <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Révolutionnez la
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                      gestion de paie
                    </span>
                    <span className="block text-gray-900 dark:text-white">
                      de votre école
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
                    Automatisez entièrement la gestion des salaires et des frais de scolarité avec une plateforme moderne, sécurisée et adaptée aux écoles privées africaines.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-5 pt-6">
                  <Link to="/register">
                    <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 border-0 text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] group">
                      Démarrer l'essai gratuit
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:scale-[1.02]">
                      Se connecter
                    </Button>
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="pt-8 space-y-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    Intégré avec tous les services de paiement mobile populaires
                  </p>
                  <div className="flex items-center gap-8 opacity-70">
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">Orange Money</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">MTN Money</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">Wave</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">CinetPay</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in lg:pl-8" style={{ animationDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-3xl transform rotate-2 scale-105 blur-2xl"></div>
                <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <img 
                    src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                    alt="Interface EduPaie - Tableau de bord de gestion de paie moderne et intuitif" 
                    className="rounded-2xl w-full shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="container px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Fonctionnalités Premium
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Une suite complète d'outils modernes pour transformer la gestion financière de votre établissement scolaire
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<FileText className="h-7 w-7 text-blue-600" />}
                title="Bulletins de paie automatisés"
                description="Génération instantanée de bulletins de paie PDF professionnels avec votre logo et conformes à la réglementation locale."
              />
              
              <FeatureCard 
                icon={<Wallet className="h-7 w-7 text-purple-600" />}
                title="Paiements mobiles intégrés"
                description="Acceptez les paiements via Orange Money, MTN Money, Wave et autres solutions mobiles grâce à notre intégration CinetPay."
              />
              
              <FeatureCard 
                icon={<FileSpreadsheet className="h-7 w-7 text-green-600" />}
                title="Export Excel avancé"
                description="Exportez toutes vos données comptables et financières en formats Excel optimisés pour votre comptable."
              />
              
              <FeatureCard 
                icon={<Calculator className="h-7 w-7 text-orange-600" />}
                title="Calculs automatiques"
                description="Calcul précis des taxes (CNSS, IUTS), cotisations sociales, déductions et primes selon la législation en vigueur."
              />
              
              <FeatureCard 
                icon={<PieChart className="h-7 w-7 text-indigo-600" />}
                title="Analytics en temps réel"
                description="Tableaux de bord intelligents avec visualisation des flux de trésorerie, budgets et performances financières."
              />
              
              <FeatureCard 
                icon={<Smartphone className="h-7 w-7 text-pink-600" />}
                title="Notifications SMS"
                description="Rappels automatiques pour les paiements en retard et notifications importantes via SMS aux parents et employés."
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-32 bg-white dark:bg-gray-900">
          <div className="container px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Témoignages de nos clients
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Découvrez comment EduPaie révolutionne la gestion financière des écoles privées à travers l'Afrique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="EduPaie a complètement transformé notre processus de paie. Nous économisons plus de 20 heures par mois et éliminons toutes les erreurs de calcul."
                author="Sophie Kamara"
                role="Directrice Administrative, École d'Excellence Dakar"
                rating={5}
              />
              
              <TestimonialCard 
                quote="L'intégration avec Orange Money a révolutionné nos encaissements. Notre taux de recouvrement a augmenté de 40% en seulement 3 mois."
                author="Jean-Paul Ouattara"
                role="Fondateur, Académie Internationale d'Abidjan"
                rating={5}
              />
              
              <TestimonialCard 
                quote="Interface intuitive, support exceptionnel. EduPaie comprend parfaitement les défis spécifiques des écoles africaines. Un investissement indispensable."
                author="Marie Diop"
                role="Responsable Comptable, Complexe Scolaire Bamako"
                rating={5}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-40 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="container px-6 max-w-5xl mx-auto text-center relative space-y-12">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Transformez votre école dès aujourd'hui
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                Rejoignez plus de 1 500 établissements scolaires qui ont déjà révolutionné leur gestion financière avec EduPaie
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/register">
                <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 group">
                  Démarrer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-medium border-white/30 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300">
                Demander une démonstration
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                14 jours d'essai gratuit
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Configuration incluse
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Support premium
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
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full group">
      <CardContent className="pt-8 pb-6 px-6 space-y-4">
        <div className="group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{description}</p>
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
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 h-full hover:shadow-xl transition-all duration-300 group">
      <CardContent className="pt-8 pb-6 px-6 space-y-6">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed font-light">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-4 pt-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-light">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Index;
