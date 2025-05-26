
import { Link, useLocation } from "react-router-dom";
import { 
  Home, DollarSign, Users, BookOpen, TrendingUp, 
  BarChart2, Settings, HelpCircle, ChevronRight,
  Building2, User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "../contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  
  const mainNavItems = [
    { href: "/dashboard", icon: Home, label: "Tableau de bord", primary: true },
    { href: "/employees", icon: Users, label: "Employés" },
    { href: "/payroll", icon: DollarSign, label: "Paie" },
    { href: "/payments", icon: BookOpen, label: "Paiements" },
    { href: "/reports", icon: TrendingUp, label: "Rapports" },
    { href: "/analytics", icon: BarChart2, label: "Analytiques" }
  ];

  const settingsItems = [
    { href: "/profile/settings", icon: Settings, label: "Paramètres" },
    { href: "/help", icon: HelpCircle, label: "Centre d'aide" }
  ];
  
  return (
    <aside className="w-72 h-screen bg-gradient-to-b from-background to-muted/20 border-r border-border/50 fixed left-0 top-0 z-30 flex flex-col backdrop-blur-sm">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-105 transition-transform">
            E
          </div>
          <div>
            <h1 className="font-bold text-xl text-foreground">EduPaie</h1>
            <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
              Preview
            </span>
          </div>
        </Link>
      </div>
      
      {/* Navigation principale */}
      <nav className="flex-1 overflow-y-auto py-6">
        <div className="px-4 space-y-2">
          <div className="px-2 mb-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Navigation
            </h2>
          </div>
          
          {mainNavItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={isActive(item.href)}
              primary={item.primary}
            />
          ))}
          
          <div className="py-4">
            <div className="h-px bg-border/50 mx-2"></div>
          </div>
          
          <div className="px-2 mb-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Paramètres
            </h2>
          </div>
          
          {settingsItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={isActive(item.href)}
            />
          ))}
        </div>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-border/50 bg-muted/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground text-sm font-medium">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">
                {user?.name || "Utilisateur"}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {user?.schoolName || "École"}
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
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
        "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative",
        primary && active 
          ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/20" 
          : active 
            ? "bg-accent/80 text-accent-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
      )}
    >
      <Icon className={cn(
        "h-5 w-5 transition-all duration-200",
        active ? "scale-110" : "group-hover:scale-105"
      )} />
      <span className="flex-1">{label}</span>
      {active && (
        <ChevronRight className="h-4 w-4 opacity-60" />
      )}
      
      {/* Indicateur actif */}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
      )}
    </Link>
  );
}
