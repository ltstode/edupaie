
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export function ProjectsTable() {
  const projects = [
    {
      name: "Fintech Project",
      status: "In Progress",
      statusColor: "bg-blue-500",
      progress: 70,
      totalTasks: "14/20",
      dueDate: "12 Mar 2024",
      owner: "Michael M",
      ownerInitials: "MM"
    },
    {
      name: "Brodo Redesign",
      status: "Completed",
      statusColor: "bg-green-500",
      progress: 100,
      totalTasks: "25/25",
      dueDate: "16 Mar 2024",
      owner: "Jhon Cena",
      ownerInitials: "JC"
    },
    {
      name: "HR Setup",
      status: "On Hold",
      statusColor: "bg-yellow-500",
      progress: 70,
      totalTasks: "8/20",
      dueDate: "18 May 2024",
      owner: "Dawne Jay",
      ownerInitials: "DJ"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Liste des Projets</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              placeholder="Rechercher ici..."
              className="bg-gray-700 border-gray-600 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-750">
              <TableHead className="text-gray-400">Nom du Projet</TableHead>
              <TableHead className="text-gray-400">Statut</TableHead>
              <TableHead className="text-gray-400">Progrès</TableHead>
              <TableHead className="text-gray-400">Total Tâches</TableHead>
              <TableHead className="text-gray-400">Échéance</TableHead>
              <TableHead className="text-gray-400">Propriétaire</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} className="border-gray-700 hover:bg-gray-750">
                <TableCell className="text-white font-medium">{project.name}</TableCell>
                <TableCell>
                  <Badge className={`${project.statusColor} text-white hover:${project.statusColor}/80`}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="w-16 h-2" />
                    <span className="text-gray-400 text-sm">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-400">{project.totalTasks}</TableCell>
                <TableCell className="text-gray-400">{project.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs bg-gray-600 text-white">
                        {project.ownerInitials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-400 text-sm">{project.owner}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
