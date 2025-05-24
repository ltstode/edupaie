
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
                  <Link to="/register" className="group">
                    <Button size="lg" className="relative h-16 px-10 text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/25 border-0 text-white transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/40 hover:scale-[1.05] transform-gpu perspective-1000 hover:-translate-y-2">
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                      {/* 3D effect layers */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      
                      <span className="relative z-10 flex items-center gap-3">
                        Démarrer l'essai gratuit
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      {/* Bottom shadow for 3D effect */}
                      <div className="absolute -bottom-1 left-2 right-2 h-2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-2xl blur-md group-hover:bottom-0 transition-all duration-500"></div>
                    </Button>
                  </Link>
                  
                  <Link to="/login" className="group">
                    <Button size="lg" variant="outline" className="relative h-16 px-10 text-base font-medium rounded-2xl border-2 border-white/20 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-500 hover:bg-white dark:hover:bg-gray-900 hover:scale-[1.05] hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2 transform-gpu">
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl"></div>
                      
                      <span className="relative z-10">Se connecter</span>
                      
                      {/* Bottom shadow for 3D effect */}
                      <div className="absolute -bottom-1 left-2 right-2 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-2xl blur-md group-hover:bottom-0 transition-all duration-500"></div>
                    </Button>
                  </Link>
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
        
        {/* Enhanced Features Section */}
        <section className="py-40 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
          </div>
          
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
        
        {/* Enhanced Testimonials Section */}
        <section className="py-40 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div>
          
          <div className="container relative px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Témoignages de nos clients
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
        
        {/* Enhanced CTA Section */}
        <section className="py-48 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
          
          <div className="container relative px-8 max-w-6xl mx-auto text-center space-y-16">
            <div className="space-y-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformez votre école dès aujourd'hui
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
                Rejoignez plus de 1 500 établissements scolaires qui ont déjà révolutionné leur gestion financière avec EduPaie
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Link to="/register" className="group">
                <Button size="lg" className="relative h-20 px-12 text-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl transform-gpu hover:-translate-y-3">
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-white/80 rounded-2xl"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Démarrer gratuitement
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Enhanced 3D shadow */}
                  <div className="absolute -bottom-2 left-3 right-3 h-3 bg-gray-400/30 rounded-2xl blur-lg group-hover:bottom-0 transition-all duration-500"></div>
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="relative h-20 px-12 text-xl font-medium border-white/30 text-white hover:bg-white/10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-3 transform-gpu">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
                
                <span className="relative z-10">Demander une démonstration</span>
                
                {/* 3D shadow */}
                <div className="absolute -bottom-2 left-3 right-3 h-3 bg-white/10 rounded-2xl blur-lg hover:bottom-0 transition-all duration-500"></div>
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
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
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-gray-800/40 dark:via-gray-800/20 rounded-lg"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardContent className="relative pt-10 pb-8 px-8 space-y-6">
        <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{description}</p>
      </CardContent>
      
      {/* Bottom shadow for 3D effect */}
      <div className="absolute -bottom-1 left-4 right-4 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-700"></div>
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
    <Card className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 h-full hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 transform-gpu">
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 rounded-lg"></div>
      
      {/* Subtle glow */}
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
      
      {/* Bottom shadow for 3D effect */}
      <div className="absolute -bottom-1 left-4 right-4 h-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-700"></div>
    </Card>
  );
}

export default Index;
