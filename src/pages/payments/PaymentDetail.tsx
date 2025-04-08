
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  CreditCard, 
  Download, 
  Share2, 
  Edit, 
  Mail, 
  User, 
  Calendar, 
  DollarSign, 
  School,
  CheckCircle,
  Clock,
  AlertOctagon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { usePayments } from '@/contexts/PaymentContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

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

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'paid':
      return <CheckCircle className="h-8 w-8 text-success" />;
    case 'pending':
      return <Clock className="h-8 w-8 text-warning" />;
    case 'overdue':
      return <AlertOctagon className="h-8 w-8 text-destructive" />;
    default:
      return <CreditCard className="h-8 w-8 text-primary" />;
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

const PaymentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getPayment, updatePayment } = usePayments();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const payment = getPayment(id || '');
  
  if (!payment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <div className="flex flex-col items-center justify-center h-full">
            <CreditCard className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Paiement non trouvé</h2>
            <p className="text-muted-foreground mb-6">Le paiement demandé n'existe pas ou a été supprimé.</p>
            <Button onClick={() => navigate('/payments')}>
              Retour aux paiements
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleMarkAsPaid = () => {
    updatePayment(payment.id, { 
      status: 'paid', 
      paymentDate: new Date().toISOString() 
    });
    toast.success('Paiement marqué comme payé');
  };

  const handleSendReminder = () => {
    toast.success('Rappel de paiement envoyé à l\'élève');
  };

  const handleDownloadReceipt = () => {
    toast.success('Téléchargement du reçu initié');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8 animate-fade-in">
        <PageHeader 
          title={`Paiement #${payment.id}`} 
          backLink="/payments"
          backLabel="Retour aux paiements"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toast.success('Lien copié')} className="cursor-pointer">
                Copier le lien
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Email envoyé')} className="cursor-pointer">
                Envoyer par email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" onClick={handleDownloadReceipt}>
            <Download className="h-4 w-4 mr-2" />
            Télécharger le reçu
          </Button>
          
          {payment.status !== 'paid' && (
            <Button onClick={handleMarkAsPaid}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Marquer comme payé
            </Button>
          )}
        </PageHeader>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="md:col-span-2 glass-card">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">Détails du paiement</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(payment.status)}>
                    {getStatusLabel(payment.status)}
                  </Badge>
                  <Badge variant="outline">{getTypeLabel(payment.paymentType)}</Badge>
                </div>
              </div>
              <div className="rounded-full p-3 bg-primary/10">
                {getStatusIcon(payment.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Récapitulatif</h3>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Montant</span>
                    <span className="font-bold text-xl">{formatCurrency(payment.amount)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Type de paiement</span>
                    <span>{getTypeLabel(payment.paymentType)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Date d'échéance</span>
                    <span>{format(new Date(payment.dueDate), 'dd MMMM yyyy', { locale: fr })}</span>
                  </div>
                  {payment.paymentDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Date de paiement</span>
                      <span>{format(new Date(payment.paymentDate), 'dd MMMM yyyy', { locale: fr })}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Informations de l'élève</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="font-medium">{payment.studentName}</p>
                      <p className="text-sm text-muted-foreground">ID: {payment.studentId}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <School className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="font-medium">{payment.class}</p>
                      <p className="text-sm text-muted-foreground">Année scolaire 2024-2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {payment.description && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground">{payment.description}</p>
                </div>
              )}

              <Separator className="my-6" />

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Référence de paiement</p>
                  <p className="font-medium">REF-{payment.id}-{payment.studentId}</p>
                </div>
                
                {payment.status === 'paid' ? (
                  <Badge variant="success" className="py-1.5 px-3">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Payé le {payment.paymentDate ? format(new Date(payment.paymentDate), 'dd/MM/yyyy', { locale: fr }) : ''}
                  </Badge>
                ) : (
                  <Button onClick={handleMarkAsPaid} size="sm">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Marquer comme payé
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" onClick={handleDownloadReceipt}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le reçu
                </Button>
                
                {payment.status !== 'paid' && (
                  <Button variant="outline" className="w-full justify-start" onClick={handleSendReminder}>
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer un rappel
                  </Button>
                )}
                
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/payments')}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Voir tous les paiements
                </Button>
                
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("Fonction à implémenter")}>
                  <Edit className="h-4 w-4 mr-2" />
                  Modifier le paiement
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Établissement</h4>
                  <p className="font-medium">{user?.schoolName}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Date d'échéance</h4>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <p className="font-medium">{format(new Date(payment.dueDate), 'dd MMMM yyyy', { locale: fr })}</p>
                  </div>
                </div>
                {payment.status === 'overdue' && (
                  <div className="bg-destructive/10 p-3 rounded-md">
                    <div className="flex items-start gap-2">
                      <AlertOctagon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-destructive">Paiement en retard</p>
                        <p className="text-sm text-destructive/80">
                          Ce paiement a dépassé sa date d'échéance de {
                            Math.ceil((new Date().getTime() - new Date(payment.dueDate).getTime()) / (1000 * 60 * 60 * 24))
                          } jours.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default PaymentDetail;
