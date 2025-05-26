
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export function DashboardHeader() {
  const { user } = useAuth();
  
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Bienvenue, {user?.name || "Administrateur"} 👋
        </h1>
        <div className="text-gray-400 text-sm">
          <span className="text-orange-500 font-medium">4</span> Tâches dues aujourd'hui, 
          <span className="text-red-500 font-medium ml-1">2</span> Tâches en retard, 
          <span className="text-blue-500 font-medium ml-1">8</span> Échéances cette semaine
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm">Dernière mise à jour {currentDate}</span>
        <Button className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
