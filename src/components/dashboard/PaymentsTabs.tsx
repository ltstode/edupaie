
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, FileText } from "lucide-react";

export function PaymentsTabs() {
  const upcomingPayments = [
    {
      title: "Salaires du personnel",
      date: "28 Avril 2025",
      amount: "1 620 000 FCFA",
      subtitle: "3 employés",
      icon: Calendar
    },
    {
      title: "Facture Fournitures",
      date: "15 Avril 2025",
      amount: "850,000 FCFA",
      subtitle: "Librairie Centrale",
      icon: CreditCard
    },
    {
      title: "Taxes trimestrielles",
      date: "30 Avril 2025",
      amount: "1,230,000 FCFA",
      subtitle: "CNSS et autres",
      icon: FileText
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Tendance des revenus</CardTitle>
          <p className="text-gray-400">Évolution des revenus des frais de scolarité et autres sources</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-gray-700">
              <TabsTrigger value="overview" className="text-gray-300">Aperçu</TabsTrigger>
              <TabsTrigger value="payments" className="text-gray-300">Paiements</TabsTrigger>
              <TabsTrigger value="expenses" className="text-gray-300">Dépenses</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>Graphique de tendance des revenus</p>
              </div>
            </TabsContent>
            <TabsContent value="payments" className="space-y-4">
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>Données des paiements</p>
              </div>
            </TabsContent>
            <TabsContent value="expenses" className="space-y-4">
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>Données des dépenses</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Paiements à venir</CardTitle>
            <p className="text-gray-400">Échéances prévues pour les prochains jours</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPayments.map((payment, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <payment.icon className="h-5 w-5 text-blue-400" />
                <div className="flex-1">
                  <p className="font-medium text-white">{payment.title}</p>
                  <p className="text-sm text-gray-400">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">{payment.amount}</p>
                  <p className="text-xs text-gray-400">{payment.subtitle}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Frais non payés</CardTitle>
            <p className="text-gray-400">Élèves avec des frais de scolarité en retard</p>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center text-gray-400">
              <p>Liste des frais en retard</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
