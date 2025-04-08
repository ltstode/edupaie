
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  Clock, 
  Plus, 
  Download, 
  Filter, 
  AlertOctagon 
} from 'lucide-react';
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
import { usePayments } from '@/contexts/PaymentContext';

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

// Fonction pour formater les montants
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    maximumFractionDigits: 0
  }).format(amount);
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid':
      return 'success';
    case 'pending':
      return 'warning';
    case 'overdue':
      return 'destructive';
    default:
      return 'default';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'paid':
      return 'Payé';
    case 'pending':
      return 'En attente';
    case 'overdue':
      return 'En retard';
    default:
      return status;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'tuition':
      return 'Frais de scolarité';
    case 'transportation':
      return 'Transport';
    case 'uniform':
      return 'Uniforme';
    case 'supplies':
      return 'Fournitures';
    case 'other':
      return 'Autre';
    default:
      return type;
  }
};

const PaymentsPage = () => {
  const { payments, isLoading } = usePayments();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  // Filtrer les paiements par statut
  const filteredPayments = activeTab === 'all' 
    ? payments 
    : payments.filter(payment => payment.status === activeTab);

  // Calculer les statistiques des paiements
  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const paidAmount = payments
    .filter(payment => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);
  const pendingAmount = payments
    .filter(payment => payment.status === 'pending')
    .reduce((sum, payment) => sum + payment.amount, 0);
  const overdueAmount = payments
    .filter(payment => payment.status === 'overdue')
    .reduce((sum, payment) => sum + payment.amount, 0);

  // Colonnes pour le tableau
  const columns = [
    {
      header: 'Élève',
      accessorKey: 'studentName' as const,
      cell: (payment: any) => (
        <div>
          <div className="font-medium">{payment.studentName}</div>
          <div className="text-sm text-muted-foreground">{payment.class}</div>
        </div>
      )
    },
    {
      header: 'Montant',
      accessorKey: 'amount' as const,
      cell: (payment: any) => (
        <div className="font-semibold">
          {formatCurrency(payment.amount)}
        </div>
      )
    },
    {
      header: 'Type',
      accessorKey: 'paymentType' as const,
      cell: (payment: any) => (
        <Badge variant="outline" className="capitalize">
          {getTypeLabel(payment.paymentType)}
        </Badge>
      )
    },
    {
      header: 'Statut',
      accessorKey: 'status' as const,
      cell: (payment: any) => (
        <Badge variant={getStatusColor(payment.status)}>
          {getStatusLabel(payment.status)}
        </Badge>
      )
    },
    {
      header: 'Date limite',
      accessorKey: 'dueDate' as const,
      cell: (payment: any) => (
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{format(new Date(payment.dueDate), 'dd MMM yyyy', { locale: fr })}</span>
        </div>
      )
    },
    {
      header: 'Date de paiement',
      accessorKey: 'paymentDate' as const,
      cell: (payment: any) => (
        payment.paymentDate ? (
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{format(new Date(payment.paymentDate), 'dd MMM yyyy', { locale: fr })}</span>
          </div>
        ) : (
          <span className="text-muted-foreground">Non payé</span>
        )
      )
    },
    {
      header: 'Actions',
      accessorKey: 'id' as const,
      cell: (payment: any) => (
        <div className="flex items-center gap-2 justify-end">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/payments/${payment.id}`}>
              Voir
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">•••</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => navigate(`/payments/${payment.id}`)}
                className="cursor-pointer"
              >
                Voir les détails
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => window.alert('Reçu généré')}
                className="cursor-pointer"
              >
                Générer un reçu
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => window.alert('Email de rappel envoyé')}
                className="cursor-pointer"
              >
                Envoyer un rappel
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
          title="Paiements" 
          description="Suivez et gérez tous les paiements des élèves"
        >
          <Button asChild>
            <Link to="#" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nouveau paiement
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
            title="Total des paiements"
            value={formatCurrency(totalAmount)}
            icon={<DollarSign className="h-4 w-4" />}
            description={`${payments.length} paiements au total`}
            onClick={() => setActiveTab('all')}
          />
          <StatsCard
            title="Paiements reçus"
            value={formatCurrency(paidAmount)}
            icon={<CreditCard className="h-4 w-4" />}
            description={`${payments.filter(p => p.status === 'paid').length} paiements`}
            trend={{ value: Math.round((paidAmount / totalAmount) * 100) + '%', positive: true }}
            className="border-success/20"
            onClick={() => setActiveTab('paid')}
          />
          <StatsCard
            title="Paiements en attente"
            value={formatCurrency(pendingAmount)}
            icon={<Clock className="h-4 w-4" />}
            description={`${payments.filter(p => p.status === 'pending').length} paiements`}
            className="border-warning/20"
            onClick={() => setActiveTab('pending')}
          />
          <StatsCard
            title="Paiements en retard"
            value={formatCurrency(overdueAmount)}
            icon={<AlertOctagon className="h-4 w-4" />}
            description={`${payments.filter(p => p.status === 'overdue').length} paiements`}
            className="border-destructive/20"
            onClick={() => setActiveTab('overdue')}
          />
        </div>

        {/* Payments Table */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  <TabsTrigger value="paid">Payés</TabsTrigger>
                  <TabsTrigger value="pending">En attente</TabsTrigger>
                  <TabsTrigger value="overdue">En retard</TabsTrigger>
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
                    data={filteredPayments}
                    columns={columns}
                    searchable={true}
                    searchKeys={['studentName', 'studentId', 'class', 'description']}
                    onRowClick={(payment) => navigate(`/payments/${payment.id}`)}
                    emptyMessage="Aucun paiement trouvé"
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

export default PaymentsPage;
