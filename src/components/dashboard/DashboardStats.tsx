
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, GraduationCap, Users, TrendingUp } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Total des salaires",
      value: "1 620 000 FCFA",
      subtitle: "3 employés actifs",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Frais de scolarité",
      value: "12,750,000 FCFA",
      subtitle: "+10.5% par rapport au trimestre dernier",
      icon: GraduationCap,
      color: "text-blue-400"
    },
    {
      title: "Personnel",
      value: "3",
      subtitle: "Gérer les employés",
      icon: Users,
      color: "text-purple-400"
    },
    {
      title: "Taux de paiement",
      value: "87%",
      subtitle: "+5.1% par rapport au mois dernier",
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
