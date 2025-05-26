
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Bienvenue, {user?.name || "Administrateur"} 👋
        </h1>
        <div className="text-muted-foreground text-sm">
          <span className="text-orange-500 font-medium">4</span> Tâches dues aujourd'hui, 
          <span className="text-red-500 font-medium ml-1">2</span> Tâches en retard, 
          <span className="text-blue-500 font-medium ml-1">8</span> Échéances cette semaine
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground text-sm">Dernière mise à jour {currentDate}</span>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
