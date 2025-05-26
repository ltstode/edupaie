
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PerformanceChart() {
  const weekData = [
    { day: "Mon", value: 82, change: "+82%" },
    { day: "Tue", value: 51, change: "+51%" },
    { day: "Wed", value: 86, change: "+86%" },
    { day: "Thu", value: 45, change: "+45%" },
    { day: "Fri", value: 82, change: "+82%" }
  ];

  const maxValue = Math.max(...weekData.map(d => d.value));

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Performance</CardTitle>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">86%</span>
          <span className="text-green-500 text-sm font-medium">+15% vs semaine dernière</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-32 gap-2">
          {weekData.map((data, index) => (
            <div key={data.day} className="flex flex-col items-center gap-2">
              <div className="text-xs text-green-500 font-medium">{data.change}</div>
              <div 
                className="bg-gray-600 rounded-t-sm min-w-[40px] transition-all duration-300 hover:bg-gray-500"
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              <div className="text-xs text-gray-400">{data.day}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
