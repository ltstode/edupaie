
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
}

function StatCard({ title, value, change, isPositive }: StatCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">{title}</p>
            <p className="text-white text-3xl font-bold mt-2">{value}</p>
            <div className="flex items-center mt-2">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {change} vs mois dernier
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsGrid() {
  const stats = [
    {
      title: "Total Projets",
      value: 15,
      change: "+5",
      isPositive: true
    },
    {
      title: "Total Tâches",
      value: 10,
      change: "+2",
      isPositive: true
    },
    {
      title: "En Révision",
      value: 23,
      change: "+12",
      isPositive: true
    },
    {
      title: "Tâches Complétées",
      value: 50,
      change: "+15",
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          isPositive={stat.isPositive}
        />
      ))}
    </div>
  );
}
