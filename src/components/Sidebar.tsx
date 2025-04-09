
import { Link, useLocation } from "react-router-dom";
import { 
  Home, DollarSign, Users, BookOpen, TrendingUp, 
  BarChart2, Settings, HelpCircle, PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "../contexts/AuthContext";

export function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  
  return (
    <aside className="w-60 h-screen bg-white dark:bg-sidebar border-r border-border fixed left-0 top-0 z-30 flex flex-col">
      <div className="p-4 border-b border-border flex items-center">
        <Link to="/dashboard" className="font-bold text-xl text-primary flex items-center gap-2">
          EduPaie
        </Link>
        <span className="text-xs px-2 py-1 bg-muted rounded-md ml-2">Preview</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-8">
          <SidebarLink 
            href="/dashboard" 
            icon={Home} 
            label="Accueil" 
            active={isActive("/dashboard")} 
            primary={true}
          />
          
          <SidebarLink 
            href="/payroll" 
            icon={DollarSign} 
            label="Paie" 
            active={isActive("/payroll")} 
          />
          
          <SidebarLink 
            href="/employees" 
            icon={Users} 
            label="Employés" 
            active={isActive("/employees")} 
          />
          
          <SidebarLink 
            href="/payments" 
            icon={BookOpen} 
            label="Paiements" 
            active={isActive("/payments")} 
          />
          
          <SidebarLink 
            href="/reports" 
            icon={TrendingUp} 
            label="Rapports" 
            active={isActive("/reports")} 
          />
          
          <SidebarLink 
            href="/analytics" 
            icon={BarChart2} 
            label="Analytiques" 
            active={isActive("/analytics")} 
          />
          
          <div className="mt-6 pt-6 border-t border-border">
            <SidebarLink 
              href="/profile/settings" 
              icon={Settings} 
              label="Paramètres" 
              active={isActive("/profile/settings")} 
            />
            
            <SidebarLink 
              href="/help" 
              icon={HelpCircle} 
              label="Centre d'aide" 
              active={isActive("/help")} 
            />
          </div>
        </div>
      </nav>
      
      <div className="p-4 border-t border-border mt-auto">
        <div className="text-xs text-muted-foreground mb-2">Connecté en tant que:</div>
        <div className="font-medium truncate">{user?.name || "Utilisateur"}</div>
        <div className="text-xs text-muted-foreground truncate">{user?.schoolName || "École"}</div>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  primary?: boolean;
}

function SidebarLink({ href, icon: Icon, label, active, primary }: SidebarLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium mb-1 transition-colors",
        primary 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : active 
            ? "bg-accent text-accent-foreground" 
            : "text-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
