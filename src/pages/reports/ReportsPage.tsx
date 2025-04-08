
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Plus, BarChart, Users, Clock, Award, Filter, Download } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DataTable } from '@/components/DataTable';
import { PageHeader } from '@/components/PageHeader';
import { StatsCard } from '@/components/StatsCard';
import { useReports } from '@/contexts/ReportContext';

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const getReportTypeIcon = (type: string) => {
  switch (type) {
    case 'finance':
      return <BarChart className="h-4 w-4" />;
    case 'attendance':
      return <Clock className="h-4 w-4" />;
    case 'performance':
      return <Award className="h-4 w-4" />;
    case 'evaluation':
      return <Users className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'success';
    case 'draft':
      return 'warning';
    case 'archived':
      return 'secondary';
    default:
      return 'default';
  }
};

const ReportsPage = () => {
  const { reports, isLoading } = useReports();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  // Filtrer les rapports par type
  const filteredReports = activeTab === 'all' 
    ? reports 
    : reports.filter(report => report.type === activeTab);

  // Statistiques des rapports
  const reportStats = {
    total: reports.length,
    published: reports.filter(r => r.status === 'published').length,
    draft: reports.filter(r => r.status === 'draft').length,
    finance: reports.filter(r => r.type === 'finance').length,
    attendance: reports.filter(r => r.type === 'attendance').length,
    performance: reports.filter(r => r.type === 'performance').length,
  };

  // Colonnes pour le tableau
  const columns = [
    {
      header: 'Titre',
      accessorKey: 'title' as const,
      cell: (report: any) => (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            {getReportTypeIcon(report.type)}
          </div>
          <div>
            <div className="font-medium">{report.title}</div>
            <div className="text-sm text-muted-foreground">
              {report.summary.substring(0, 40)}...
            </div>
          </div>
        </div>
      )
    },
    {
      header: 'Type',
      accessorKey: 'type' as const,
      cell: (report: any) => (
        <Badge variant="outline" className="capitalize">
          {report.type}
        </Badge>
      )
    },
    {
      header: 'Auteur',
      accessorKey: 'author' as const
    },
    {
      header: 'Statut',
      accessorKey: 'status' as const,
      cell: (report: any) => (
        <Badge variant={getStatusColor(report.status)} className="capitalize">
          {report.status === 'published' ? 'Publié' : report.status === 'draft' ? 'Brouillon' : 'Archivé'}
        </Badge>
      )
    },
    {
      header: 'Mise à jour',
      accessorKey: 'updatedAt' as const,
      cell: (report: any) => (
        <span>{format(new Date(report.updatedAt), 'dd MMM yyyy', { locale: fr })}</span>
      )
    },
    {
      header: 'Actions',
      accessorKey: 'id' as const,
      cell: (report: any) => (
        <div className="flex items-center gap-2 justify-end">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/reports/${report.id}`}>
              Voir
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">•••</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => navigate(`/reports/${report.id}`)}
                className="cursor-pointer"
              >
                Voir les détails
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => window.alert('Téléchargement du rapport en PDF')}
                className="cursor-pointer"
              >
                Télécharger en PDF
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => window.alert('Rapport partagé par email')}
                className="cursor-pointer"
              >
                Partager par email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 animate-fade-in">
        <PageHeader 
          title="Rapports" 
          description="Gérez et consultez tous les rapports de l'établissement"
        >
          <Button asChild>
            <Link to="#" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nouveau rapport
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => window.alert('Export en PDF')}>
                Exporter en PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.alert('Export en Excel')}>
                Exporter en Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeader>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Rapports totaux"
            value={reportStats.total}
            icon={<FileText className="h-4 w-4" />}
            onClick={() => setActiveTab('all')}
          />
          <StatsCard
            title="Rapports financiers"
            value={reportStats.finance}
            icon={<BarChart className="h-4 w-4" />}
            onClick={() => setActiveTab('finance')}
          />
          <StatsCard
            title="Rapports d'assiduité"
            value={reportStats.attendance}
            icon={<Clock className="h-4 w-4" />}
            onClick={() => setActiveTab('attendance')}
          />
          <StatsCard
            title="Rapports de performance"
            value={reportStats.performance}
            icon={<Award className="h-4 w-4" />}
            onClick={() => setActiveTab('performance')}
          />
        </div>

        {/* Reports Table */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  <TabsTrigger value="finance">Finances</TabsTrigger>
                  <TabsTrigger value="attendance">Assiduité</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="evaluation">Évaluation</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
              </div>
              
              <TabsContent value={activeTab} className="m-0">
                {isLoading ? (
                  <div className="h-96 flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                  </div>
                ) : (
                  <DataTable
                    data={filteredReports}
                    columns={columns}
                    searchable={true}
                    searchKeys={['title', 'summary', 'author']}
                    onRowClick={(report) => navigate(`/reports/${report.id}`)}
                    emptyMessage="Aucun rapport trouvé"
                  />
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ReportsPage;
