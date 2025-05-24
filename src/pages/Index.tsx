
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, Star, Users, Calculator, 
  PieChart, Calendar, FileText, CreditCard, Shield, 
  Globe, Building, Download, Smartphone, Award,
  TrendingUp, Zap, Target, CheckCircle, Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <main className="flex-1">
        {/* Hero Section Premium */}
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
                  Plateforme #1 en Afrique de l'Ouest
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-6">
                  <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                    <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Des landing pages
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                      World-Class
                    </span>
                    <span className="block text-gray-900 dark:text-white">
                      pour votre école
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
                    Des solutions de gestion construites sur de la data avec une valeur ajoutée si forte que vos équipes auront l'impression de passer à côté de l'opportunité de leur vie.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/register">
                    <Button size="lg" className="h-16 px-10 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/25 border-0 text-white transition-all duration-300 hover:shadow-3xl hover:shadow-blue-500/40 hover:scale-105">
                      Réserver un appel
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-gray-900">
                      Voir la démo
                    </Button>
                  </Link>
                </div>
                
                {/* Social Proof */}
                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-3 border-white dark:border-gray-900 shadow-lg" />
                      ))}
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">4.9</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">1000+ écoles nous font confiance</p>
                    </div>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "J'ai obtenu d'excellents retours de la part de mes prospects et clients."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Rémi Lauer</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
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
        
        {/* Section Logos Clients */}
        <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-y border-gray-200/50 dark:border-gray-700/50">
          <div className="container px-4 max-w-7xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 font-medium">
              Ils nous ont fait confiance pour passer en dimension World-Class
            </p>
            <div className="flex items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">Delos</div>
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">LeadConnect</div>
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">Box-Club</div>
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">Softriver</div>
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">AgentFrançais</div>
              <div className="font-bold text-2xl text-gray-800 dark:text-gray-200">élevale</div>
            </div>
          </div>
        </section>
        
        {/* Section Différentiation */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="block text-gray-900 dark:text-white">Avoir une landing page</span>
                  <span className="block text-gray-500 dark:text-gray-400">"standard"</span>
                  <span className="block text-gray-900 dark:text-white">ne suffit plus.</span>
                </h2>
                <Button size="lg" className="h-16 px-10 text-lg font-semibold rounded-2xl bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300">
                  Réserver un appel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="text-right">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Et nos <span className="font-bold text-blue-600 dark:text-blue-400">[ Partenaires ]</span> l'ont bien compris.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Showcase */}
        <section className="py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-3 scale-105"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/6b7da374-5148-4293-b4de-6f69e9253afa.png" 
                    alt="Interface EduPaie" 
                    className="rounded-2xl w-full"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                  <TrendingUp className="h-4 w-4" />
                  Peakfast
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Boostez votre logistique e-commerce avec Peakfast
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Peakfast est un service logistique qui facilite la vie des e-commerçants en leur permettant de scaler sereinement sans soucis de logistique. Notre mission : Réaliser un design à la hauteur de leur promesse et créer une valeur perçue si grande qu'elle creuse un fossé incommensurable entre Peakfast et ses concurrents.
                </p>
                <Button variant="outline" className="font-semibold">
                  Voir la version live
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Design</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Landing page</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Full animations</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Offre Pulsor</span>
                </div>
              </div>
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
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
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

export default Index;
