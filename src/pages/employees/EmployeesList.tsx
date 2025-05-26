import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Download, Users, MoreVertical } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { UnifiedNavbar } from '@/components/layout/UnifiedNavbar';
import { AnimatedButton } from '@/components/ui/animated-button';
import { DataTable } from '@/components/DataTable';
import { useEmployees } from '@/contexts/EmployeeContext';

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
  const { employees, isLoading } = useEmployees();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    {
      header: "Employé",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={row.original.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {row.original.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.original.name}</div>
            <div className="text-sm text-muted-foreground">{row.original.email}</div>
          </div>
        </div>
      )
    },
    {
      header: "Poste",
      accessorKey: "position",
      cell: ({ row }) => <div className="text-sm">{row.original.position}</div>
    },
    {
      header: "Département",
      accessorKey: "department",
      cell: ({ row }) => <div className="text-sm">{row.original.department}</div>
    },
    {
      header: "Salaire",
      accessorKey: "salary",
      cell: ({ row }) => <div className="font-medium">{row.original.salary}</div>
    },
    {
      header: "Statut",
      accessorKey: "status",
      cell: ({ row }) => (
        <div>
          <Badge variant="success" className="text-xs">
            {row.original.status}
          </Badge>
        </div>
      )
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/employees/${row.original.id}`}>
                  Voir le profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/employees/edit/${row.original.id}`}>
                  Modifier
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/employees/${row.original.id}/contract`}>
                  Contrat
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  ];

  const filteredEmployees = mockEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <UnifiedNavbar />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-normal text-white mb-2">
                Employés
              </h1>
              <p className="text-gray-400">Gérez votre équipe pédagogique et administrative</p>
            </div>
            <div className="flex items-center gap-4">
              <AnimatedButton asChild>
                <Link to="/employees/new" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nouvel employé
                </Link>
              </AnimatedButton>
            </div>
          </div>

          {/* Search and filters */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un employé..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <Button variant="outline" className="border-gray-600 text-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300">
                  <Download className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
              </div>

              {/* DataTable */}
              <DataTable
                columns={columns}
                data={filteredEmployees}
                isLoading={isLoading}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EmployeesList;
