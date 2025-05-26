
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { Bell, Settings, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "../../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UnifiedNavbar() {
  const location = useLocation();
  const { user } = useAuth();
  
  const isCurrentRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  
  const navItems = [
    { href: "/dashboard", label: "Tableau de bord" },
    { href: "/employees", label: "Employés" },
    { href: "/payroll", label: "Paie" },
    { href: "/payments", label: "Paiements" },
    { href: "/reports", label: "Rapports" }
  ];
  
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-8">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-blue-400">
              EduPaie
            </div>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2 px-1",
                  isCurrentRoute(item.href)
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700">
              <DropdownMenuLabel className="text-gray-300">Mon compte</DropdownMenuLabel>
              {user && (
                <div className="px-2 py-1.5 text-sm">
                  <div className="font-medium text-white">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                </div>
              )}
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="text-gray-300 hover:text-white">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
