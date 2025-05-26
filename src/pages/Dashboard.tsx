
import { UnifiedNavbar } from "../components/layout/UnifiedNavbar";
import { DashboardStats } from "../components/dashboard/DashboardStats";
import { PaymentsTabs } from "../components/dashboard/PaymentsTabs";
import { LoadingAnimation } from "../components/ui/loading-animation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <UnifiedNavbar />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-normal text-white mb-2">
                Tableau de bord
              </h1>
              <p className="text-gray-400">Bienvenue, coll's right | Elite</p>
            </div>
            <LoadingAnimation />
          </div>
          
          {/* Stats Grid */}
          <DashboardStats />
          
          {/* Main Content */}
          <PaymentsTabs />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
