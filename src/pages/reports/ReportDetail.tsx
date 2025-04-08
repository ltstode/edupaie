
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FileText, Download, Share2, Edit, Archive, Trash2, Clock, BarChart, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useReports } from '@/contexts/ReportContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'finance':
      return <BarChart className="h-8 w-8 text-primary" />;
    case 'attendance':
      return <Clock className="h-8 w-8 text-primary" />;
    case 'performance':
      return <Award className="h-8 w-8 text-primary" />;
    case 'evaluation':
      return <Users className="h-8 w-8 text-primary" />;
    default:
      return <FileText className="h-8 w-8 text-primary" />;
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

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'published':
      return 'Publié';
    case 'draft':
      return 'Brouillon';
    case 'archived':
      return 'Archivé';
    default:
      return status;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'finance':
      return 'Financier';
    case 'attendance':
      return 'Assiduité';
    case 'performance':
      return 'Performance';
    case 'evaluation':
      return 'Évaluation';
    case 'custom':
      return 'Personnalisé';
    default:
      return type;
  }
};

const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getReport, updateReport, deleteReport } = useReports();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const report = getReport(id || '');
  
  if (!report) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <div className="flex flex-col items-center justify-center h-full">
            <FileText className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Rapport non trouvé</h2>
            <p className="text-muted-foreground mb-6">Le rapport demandé n'existe pas ou a été supprimé.</p>
            <Button onClick={() => navigate('/reports')}>
              Retour aux rapports
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePublish = () => {
    updateReport(report.id, { status: 'published', updatedAt: new Date().toISOString() });
    toast.success('Rapport publié avec succès');
  };

  const handleArchive = () => {
    updateReport(report.id, { status: 'archived', updatedAt: new Date().toISOString() });
    toast.success('Rapport archivé avec succès');
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rapport ? Cette action est irréversible.')) {
      deleteReport(report.id);
      toast.success('Rapport supprimé avec succès');
      navigate('/reports');
    }
  };

  const handleDownload = () => {
    toast.success('Téléchargement du rapport initié');
  };

  const handleShare = () => {
    toast.success('Lien de partage copié dans le presse-papier');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 animate-fade-in">
        <PageHeader 
          title={report.title} 
          backLink="/reports"
          backLabel="Retour aux rapports"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleShare} className="cursor-pointer">
                Copier le lien
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Email envoyé')} className="cursor-pointer">
                Envoyer par email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Télécharger
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {report.status === 'draft' && (
                <DropdownMenuItem onClick={handlePublish} className="cursor-pointer">
                  Publier le rapport
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={() => setIsEditing(true)} className="cursor-pointer">
                <Edit className="h-4 w-4 mr-2" />
                Modifier
              </DropdownMenuItem>
              {report.status !== 'archived' && (
                <DropdownMenuItem onClick={handleArchive} className="cursor-pointer">
                  <Archive className="h-4 w-4 mr-2" />
                  Archiver
                </DropdownMenuItem>
              )}
              <DropdownMenuItem 
                onClick={handleDelete} 
                className="text-destructive cursor-pointer focus:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeader>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="md:col-span-2 glass-card">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">Résumé du rapport</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(report.status)}>
                    {getStatusLabel(report.status)}
                  </Badge>
                  <Badge variant="outline">{getTypeLabel(report.type)}</Badge>
                </div>
              </div>
              <div className="rounded-full p-3 bg-primary/10">
                {getTypeIcon(report.type)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{report.summary}</p>
              <div className="prose max-w-none">
                <div className="whitespace-pre-line">{report.content}</div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Auteur</h4>
                  <p className="font-medium">{report.author}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Créé le</h4>
                  <p className="font-medium">{format(new Date(report.createdAt), 'dd MMMM yyyy, HH:mm', { locale: fr })}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Dernière mise à jour</h4>
                  <p className="font-medium">{format(new Date(report.updatedAt), 'dd MMMM yyyy, HH:mm', { locale: fr })}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Établissement</h4>
                  <p className="font-medium">{user?.schoolName}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger en PDF
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager le rapport
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Modifier le rapport
                </Button>
                {report.status !== 'archived' && (
                  <Button variant="outline" className="w-full justify-start" onClick={handleArchive}>
                    <Archive className="h-4 w-4 mr-2" />
                    Archiver le rapport
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportDetail;
