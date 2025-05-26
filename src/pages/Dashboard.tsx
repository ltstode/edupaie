
import { useAuth } from "../contexts/AuthContext";
import { Sidebar } from "../components/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { TasksTable } from "../components/dashboard/TasksTable";
import { ProjectsTable } from "../components/dashboard/ProjectsTable";
import { PerformanceChart } from "../components/dashboard/PerformanceChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar />
      
      <main className="flex-1 ml-72 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <DashboardHeader />
          <StatsGrid />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TasksTable />
            </div>
            <div>
              <PerformanceChart />
            </div>
          </div>
          
          <ProjectsTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
