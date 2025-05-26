
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Search, Download, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockEmployees = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@edupaie.com",
    position: "Professeur de mathématiques",
    department: "Sciences",
    salary: "450 000 FCFA",
    status: "Actif",
    avatar: "",
    initials: "JD"
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@edupaie.com",
    position: "Professeur de français",
    department: "Lettres",
    salary: "420 000 FCFA",
    status: "Actif",
    avatar: "",
    initials: "MM"
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre.durand@edupaie.com",
    position: "Directeur",
    department: "Administration",
    salary: "750 000 FCFA",
    status: "Actif",
    avatar: "",
    initials: "PD"
  }
];

const EmployeesList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = mockEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headerAction = (
    <>
      <Button variant="outline" className="mr-4">
        <Download className="h-4 w-4 mr-2" />
        Exporter
      </Button>
      <Button asChild>
        <Link to="/employees/new">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un employé
        </Link>
      </Button>
    </>
  );

  return (
    <PageLayout
      title="Gestion des employés"
      subtitle="Gérez les informations et les salaires de vos employés"
      action={headerAction}
    >
      <div className="space-y-6">
        {/* Barre de recherche */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher un employé..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Liste des employés */}
        <div className="grid gap-4">
          {/* En-tête du tableau */}
          <div className="grid grid-cols-6 gap-4 p-4 bg-muted/50 rounded-lg font-medium text-sm text-muted-foreground">
            <div>Employé</div>
            <div>Poste</div>
            <div>Département</div>
            <div>Salaire</div>
            <div>Statut</div>
            <div>Actions</div>
          </div>

          {/* Lignes des employés */}
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="transition-all hover:shadow-md">
              <CardContent className="p-4">
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {employee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-muted-foreground">{employee.email}</div>
                    </div>
                  </div>
                  
                  <div className="text-sm">{employee.position}</div>
                  
                  <div className="text-sm">{employee.department}</div>
                  
                  <div className="font-medium">{employee.salary}</div>
                  
                  <div>
                    <Badge variant="success" className="text-xs">
                      {employee.status}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={`/employees/${employee.id}`}>
                            Voir le profil
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/employees/edit/${employee.id}`}>
                            Modifier
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/employees/${employee.id}/contract`}>
                            Contrat
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default EmployeesList;
