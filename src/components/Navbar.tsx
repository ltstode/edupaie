
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-primary">
              EduPaie
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/dashboard" current={location.pathname === "/dashboard"}>
              Tableau de bord
            </NavLink>
            <NavLink href="/payroll" current={location.pathname === "/payroll"}>
              Paie
            </NavLink>
            <NavLink href="/payments" current={location.pathname === "/payments"}>
              Paiements
            </NavLink>
            <NavLink href="/reports" current={location.pathname === "/reports"}>
              Rapports
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center space-x-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Paramètres</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
            <User className="h-5 w-5" />
            <span className="sr-only">Profil</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ 
  href, 
  current, 
  children 
}: { 
  href: string; 
  current: boolean; 
  children: React.ReactNode 
}) {
  return (
    <Link 
      to={href} 
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative py-1.5",
        current 
          ? "text-primary after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0" 
          : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}
