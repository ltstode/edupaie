
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Bell, Settings, User, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isCurrentRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-primary">
              EduPaie
            </div>
          </Link>
          
          {isAuthenticated && (
            <>
              {/* Menu pour écrans larges */}
              <nav className="hidden md:flex items-center space-x-6">
                <NavLink href="/dashboard" current={isCurrentRoute("/dashboard")}>
                  Tableau de bord
                </NavLink>
                <NavLink href="/employees" current={isCurrentRoute("/employees")}>
                  Employés
                </NavLink>
                <NavLink href="/payroll" current={isCurrentRoute("/payroll")}>
                  Paie
                </NavLink>
                <NavLink href="/payments" current={isCurrentRoute("/payments")}>
                  Paiements
                </NavLink>
                <NavLink href="/reports" current={isCurrentRoute("/reports")}>
                  Rapports
                </NavLink>
              </nav>
              
              {/* Bouton menu mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </Button>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-1">
          <ThemeToggle />
          
          {isAuthenticated && (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Paramètres</span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profil</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  {user && (
                    <div className="px-2 py-1.5 text-sm">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </div>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Paramètres</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
      
      {/* Menu mobile */}
      {isAuthenticated && mobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink 
              href="/dashboard" 
              current={isCurrentRoute("/dashboard")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tableau de bord
            </MobileNavLink>
            <MobileNavLink 
              href="/employees" 
              current={isCurrentRoute("/employees")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Employés
            </MobileNavLink>
            <MobileNavLink 
              href="/payroll" 
              current={isCurrentRoute("/payroll")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Paie
            </MobileNavLink>
            <MobileNavLink 
              href="/payments" 
              current={isCurrentRoute("/payments")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Paiements
            </MobileNavLink>
            <MobileNavLink 
              href="/reports" 
              current={isCurrentRoute("/reports")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Rapports
            </MobileNavLink>
          </nav>
        </div>
      )}
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

function MobileNavLink({ 
  href, 
  current, 
  onClick,
  children 
}: { 
  href: string; 
  current: boolean;
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link 
      to={href} 
      onClick={onClick}
      className={cn(
        "text-sm font-medium p-2 rounded-md block",
        current 
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-accent"
      )}
    >
      {children}
    </Link>
  );
}
