
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export function TasksTable() {
  const tasks = [
    {
      name: "Préparer rapport Q2",
      project: "Fintech Project",
      projectColor: "bg-blue-500",
      due: "12 Mar 2024"
    },
    {
      name: "Finaliser design homepage",
      project: "Brodo Redesign",
      projectColor: "bg-purple-500",
      due: "12 Mar 2024"
    },
    {
      name: "Réviser checklist onboarding",
      project: "HR Setup",
      projectColor: "bg-teal-500",
      due: "12 Mar 2024"
    },
    {
      name: "Finaliser design homepage",
      project: "Lucas Projects",
      projectColor: "bg-blue-500",
      due: "12 Mar 2024"
    },
    {
      name: "Finaliser design homepage",
      project: "All in One Project",
      projectColor: "bg-pink-500",
      due: "12 Mar 2024"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Tâches d'Aujourd'hui</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input 
                placeholder="Rechercher ici..."
                className="bg-gray-700 border-gray-600 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-750">
              <TableHead className="text-gray-400">Nom de la Tâche</TableHead>
              <TableHead className="text-gray-400">Projet</TableHead>
              <TableHead className="text-gray-400">Échéance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index} className="border-gray-700 hover:bg-gray-750">
                <TableCell className="text-white font-medium">{task.name}</TableCell>
                <TableCell>
                  <Badge className={`${task.projectColor} text-white hover:${task.projectColor}/80`}>
                    {task.project}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-400">{task.due}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
