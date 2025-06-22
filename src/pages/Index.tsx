import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, Star, Users, Calculator, 
  PieChart, Calendar, FileText, CreditCard, Shield, 
  Globe, Building, Download, Smartphone, Award,
  TrendingUp, Zap, Target, CheckCircle, Sparkles,
  FileSpreadsheet, Wallet, DollarSign, Clock,
  BarChart3, Banknote, Receipt, ChartLine,
  UserCheck, School, GraduationCap, Megaphone
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center py-40">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="container relative px-8 py-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12 animate-fade-in">
                {/* Premium Badge with Glass Effect */}
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 text-blue-700 dark:text-blue-300 rounded-2xl text-sm font-medium shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                  <div className="relative">
                    <Sparkles className="h-4 w-4" />
                    <div className="absolute inset-0 h-4 w-4 bg-blue-400 rounded-full blur-sm opacity-30 animate-pulse"></div>
                  </div>
                  Solution N°1 pour la gestion de paie scolaire en Afrique
                  <div className="relative">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full blur-sm opacity-50"></div>
                  </div>
                </div>
                
                <div className="space-y-10">
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                    <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Révolutionnez la
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
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
                
                {/* Enhanced 3D Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <AnimatedButton asChild size="lg" className="relative h-16 px-10 text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/25 border-0 text-white transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/40 hover:scale-[1.05] transform-gpu perspective-1000 hover:-translate-y-2">
                    <Link to="/register" className="group flex items-center gap-3">
                      Démarrer l'essai gratuit
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </AnimatedButton>
                  
                  <AnimatedButton asChild size="lg" variant="outline" className="relative h-16 px-10 text-base font-medium rounded-2xl border-2 border-white/20 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-500 hover:bg-white dark:hover:bg-gray-900 hover:scale-[1.05] hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2 transform-gpu">
                    <Link to="/login">Se connecter</Link>
                  </AnimatedButton>
                </div>
                
                {/* Enhanced Trust Indicators */}
                <div className="pt-12 space-y-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    Intégré avec tous les services de paiement mobile populaires
                  </p>
                  <div className="flex items-center gap-8 opacity-70">
                    {["Orange Money", "MTN Money", "Wave", "CinetPay"].map((service, index) => (
                      <div key={service} className="group cursor-pointer">
                        <div className="text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110">
                          {service}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Hero Image */}
              <div className="relative animate-fade-in lg:pl-8" style={{ animationDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-2 scale-105 blur-3xl"></div>
                <div className="relative group">
                  {/* Glass morphism container */}
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
                    
                    <img 
                      src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                      alt="Interface EduPaie - Tableau de bord de gestion de paie moderne et intuitif" 
                      className="rounded-2xl w-full shadow-xl relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    
                    {/* Floating elements for depth */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features Section */}
        <section className="py-40 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Fonctionnalités clés
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Obtenez facilement tout votre personnel payé sur un système automatisé
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <KeyFeatureCard 
                icon={<Clock className="h-8 w-8 text-blue-600" />}
                title="Gestion avancée"
                description="Créez des bulletins de paie personnalisés et automatiques"
              />
              
              <KeyFeatureCard 
                icon={<BarChart3 className="h-8 w-8 text-purple-600" />}
                title="Suivi des indicateurs de paie prioritaires"
                description="Suivez vos indicateurs clés avec des rapports détaillés"
              />
              
              <KeyFeatureCard 
                icon={<Banknote className="h-8 w-8 text-green-600" />}
                title="Gestion des budgets de paie panifiables"
                description="Planifiez et gérez facilement vos budgets de paie"
              />
              
              <KeyFeatureCard 
                icon={<Receipt className="h-8 w-8 text-orange-600" />}
                title="Suivi des justificatifs financiers"
                description="Conservez et gérez tous vos justificatifs en un lieu"
              />
              
              <KeyFeatureCard 
                icon={<ChartLine className="h-8 w-8 text-indigo-600" />}
                title="Gestion informatisée de vente de services"
                description="Automatisez la facturation de vos services éducatifs"
              />
              
              <KeyFeatureCard 
                icon={<UserCheck className="h-8 w-8 text-pink-600" />}
                title="Transformez la gestion de votre école"
                description="Une solution complète pour moderniser votre établissement"
              />
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-40 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="container relative px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                    Une interface simple et intuitive
                  </h2>
                  <p className="text-xl opacity-90 font-light leading-relaxed">
                    Tableau de bord moderne conçu spécialement pour les directeurs d'école qui veulent gagner du temps et améliorer leur efficacité.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-lg">Interface intuitive et facile à utiliser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-lg">Données en temps réel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-lg">Rapports détaillés automatiques</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                  <img 
                    src="/lovable-uploads/41066815-b5eb-435c-b51c-b675407c2194.png" 
                    alt="Interface EduPaie" 
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats Section */}
        <section className="py-40 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
          <div className="container px-8 max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Déjà adopté par les meilleures écoles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Des résultats mesurables qui transforment la gestion des écoles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <StatCard number="98%" label="Réduction des erreurs de paie" />
              <StatCard number="75%" label="Gain de temps administratif" />
              <StatCard number="100%" label="Satisfaction client" />
              <StatCard number="1500+" label="Écoles utilisatrices" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard number="24h" label="Mise en place" color="blue" />
              <StatCard number="99.9%" label="Disponibilité" color="green" />
              <StatCard number="50%" label="Réduction des coûts" color="purple" />
              <StatCard number="24/7" label="Support technique" color="orange" />
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-40 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative">
          <div className="container relative px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Fonctionnalités Premium
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Une suite complète d'outils modernes pour transformer la gestion financière de votre établissement scolaire
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <FeatureCard 
                icon={<FileText className="h-8 w-8 text-blue-600" />}
                title="Bulletins de paie automatisés"
                description="Génération instantanée de bulletins de paie PDF professionnels avec votre logo et conformes à la réglementation locale."
              />
              
              <FeatureCard 
                icon={<Wallet className="h-8 w-8 text-purple-600" />}
                title="Paiements mobiles intégrés"
                description="Acceptez les paiements via Orange Money, MTN Money, Wave et autres solutions mobiles grâce à notre intégration CinetPay."
              />
              
              <FeatureCard 
                icon={<FileSpreadsheet className="h-8 w-8 text-green-600" />}
                title="Export Excel avancé"
                description="Exportez toutes vos données comptables et financières en formats Excel optimisés pour votre comptable."
              />
              
              <FeatureCard 
                icon={<Calculator className="h-8 w-8 text-orange-600" />}
                title="Calculs automatiques"
                description="Calcul précis des taxes (CNSS, IUTS), cotisations sociales, déductions et primes selon la législation en vigueur."
              />
              
              <FeatureCard 
                icon={<PieChart className="h-8 w-8 text-indigo-600" />}
                title="Analytics en temps réel"
                description="Tableaux de bord intelligents avec visualisation des flux de trésorerie, budgets et performances financières."
              />
              
              <FeatureCard 
                icon={<Smartphone className="h-8 w-8 text-pink-600" />}
                title="Notifications SMS"
                description="Rappels automatiques pour les paiements en retard et notifications importantes via SMS aux parents et employés."
              />
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-40 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="container relative px-8 max-w-7xl mx-auto text-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8">
                  <Shield className="h-12 w-12 text-blue-400" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Sécurité et conformité au cœur de nos priorités
                </h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
                  Vos données sont protégées par les plus hauts standards de sécurité. Nous respectons toutes les réglementations locales et internationales pour garantir la confidentialité de vos informations financières.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <TrustCard 
                  icon={<Shield className="h-8 w-8 text-green-400" />}
                  title="Chiffrement SSL 256-bit"
                  description="Protection maximale de vos données sensibles"
                />
                <TrustCard 
                  icon={<CheckCircle className="h-8 w-8 text-blue-400" />}
                  title="Conformité RGPD"
                  description="Respect des réglementations européennes"
                />
                <TrustCard 
                  icon={<Award className="h-8 w-8 text-purple-400" />}
                  title="Certifications ISO"
                  description="Standards internationaux de qualité"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-40 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div>
          
          <div className="container relative px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Ils nous font confiance
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Découvrez comment EduPaie révolutionne la gestion financière des écoles privées à travers l'Afrique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

        {/* Pricing Section */}
        <section className="py-40 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900">
          <div className="container px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Des tarifs adaptés à chaque école
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Choisissez la formule qui correspond à la taille de votre établissement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="15 000"
                period="FCFA/mois"
                description="Parfait pour les petites écoles"
                features={[
                  "Jusqu'à 20 employés",
                  "Bulletins de paie PDF",
                  "Calculs automatiques",
                  "Support email",
                  "Exports Excel"
                ]}
                buttonText="Commencer"
                popular={false}
              />
              
              <PricingCard
                title="Professional"
                price="35 000"
                period="FCFA/mois"
                description="Idéal pour les écoles en croissance"
                features={[
                  "Jusqu'à 100 employés",
                  "Tout du plan Starter",
                  "Paiements mobiles",
                  "Rappels SMS",
                  "Support prioritaire",
                  "Rapports avancés"
                ]}
                buttonText="Choisir Pro"
                popular={true}
              />
              
              <PricingCard
                title="Enterprise"
                price="60 000"
                period="FCFA/mois"
                description="Pour les grands établissements"
                features={[
                  "Employés illimités",
                  "Tout du plan Pro",
                  "API personnalisée",
                  "Multi-établissements",
                  "Manager dédié",
                  "Formation incluse"
                ]}
                buttonText="Nous contacter"
                popular={false}
              />
            </div>
            
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                14 jours d'essai gratuit • Aucune carte de crédit requise • Configuration incluse
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Migration gratuite
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Formation incluse
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Support 24/7
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-40 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-950/30 dark:via-gray-900 dark:to-purple-950/30">
          <div className="container px-8 max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>
            
            <div className="space-y-6">
              <FAQItem 
                question="Combien de temps faut-il pour mettre en place EduPaie ?"
                answer="La mise en place d'EduPaie est très rapide. En moyenne, il faut moins de 24 heures pour configurer complètement votre système. Notre équipe vous accompagne dans la migration de vos données existantes."
              />
              <FAQItem 
                question="EduPaie est-il conforme à la réglementation locale ?"
                answer="Absolument ! EduPaie est spécialement conçu pour respecter la réglementation des pays africains (CNSS, IUTS, etc.). Nos calculs sont automatiquement mis à jour selon les dernières lois en vigueur."
              />
              <FAQItem 
                question="Puis-je essayer EduPaie gratuitement ?"
                answer="Oui, nous offrons 14 jours d'essai gratuit sans aucune carte de crédit requise. Vous aurez accès à toutes les fonctionnalités pour tester la solution avec vos propres données."
              />
              <FAQItem 
                question="Quel support est disponible ?"
                answer="Nous proposons un support complet : chat en direct, email, téléphone et même assistance à distance. Notre équipe locale comprend parfaitement les défis des écoles africaines."
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-48 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
          </div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
          
          <div className="container relative px-8 max-w-6xl mx-auto text-center space-y-16">
            <div className="space-y-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Prêt à simplifier la gestion de votre école ?
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
                Rejoignez plus de 1 500 établissements scolaires qui ont déjà révolutionné leur gestion financière avec EduPaie
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <AnimatedButton asChild size="lg" className="relative h-20 px-12 text-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl transform-gpu hover:-translate-y-3">
                <Link to="/register" className="group flex items-center gap-3">
                  Démarrer gratuitement
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </AnimatedButton>
              
              <AnimatedButton asChild size="lg" variant="outline" className="relative h-20 px-12 text-xl font-medium border-white/30 text-white hover:bg-white/10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-3 transform-gpu">
                <Link to="/login">Demander une démonstration</Link>
              </AnimatedButton>
            </div>
            
            <div className="flex items-center justify-center gap-12 pt-12 text-base opacity-80">
              {[
                { icon: CheckCircle, text: "14 jours d'essai gratuit" },
                { icon: CheckCircle, text: "Configuration incluse" },
                { icon: CheckCircle, text: "Support premium" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function KeyFeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <Card className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] h-full hover:-translate-y-2 transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 rounded-lg"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardContent className="relative pt-8 pb-6 px-6 space-y-4">
        <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm">{description}</p>
      </CardContent>
      
      <div className="absolute -bottom-1 left-4 right-4 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-700"></div>
    </Card>
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
    <Card className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-700 hover:scale-[1.05] h-full hover:-translate-y-2 transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-gray-800/40 dark:via-gray-800/20 rounded-lg"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardContent className="relative pt-10 pb-8 px-8 space-y-6">
        <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{description}</p>
      </CardContent>
      
      <div className="absolute -bottom-1 left-4 right-4 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-700"></div>
    </Card>
  );
}

function StatCard({ 
  number, 
  label, 
  color = "blue" 
}: { 
  number: string; 
  label: string; 
  color?: string;
}) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600", 
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (
    <Card className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 rounded-lg"></div>
      
      <CardContent className="relative space-y-4 p-0">
        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent`}>
          {number}
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium leading-tight">{label}</p>
      </CardContent>
    </Card>
  );
}

function TrustCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="group text-center space-y-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
      <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-white/80 font-light">{description}</p>
    </div>
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
    <Card className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 h-full hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 rounded-lg"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardContent className="relative pt-10 pb-8 px-8 space-y-8">
        <div className="flex items-center gap-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed font-light text-lg">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-4 pt-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-lg">{author}</div>
            <div className="text-gray-600 dark:text-gray-400 font-light">{role}</div>
          </div>
        </div>
      </CardContent>
      
      <div className="absolute -bottom-1 left-4 right-4 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-700"></div>
    </Card>
  );
}

function PricingCard({ 
  title, 
  price, 
  period,
  description, 
  features, 
  buttonText, 
  popular 
}: { 
  title: string; 
  price: string; 
  period: string;
  description: string; 
  features: string[]; 
  buttonText: string; 
  popular: boolean 
}) {
  return (
    <Card className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 transform-gpu ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-lg">
            Recommandé
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 rounded-lg"></div>
      
      <CardContent className="relative p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 font-light">{description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
            <span className="text-gray-600 dark:text-gray-400">{period}</span>
          </div>
        </div>
        
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/register" className="block">
          <Button 
            className={`w-full h-12 font-semibold rounded-xl transition-all duration-500 ${popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300'}`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function FAQItem({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string 
}) {
  return (
    <Card className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500">
      <CardContent className="p-8">
        <div className="space-y-4">
          <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white leading-tight">{question}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{answer}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Index;
