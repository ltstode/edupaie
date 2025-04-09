
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DirectorProvider } from "./contexts/DirectorContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import EmployeesList from "./pages/employees/EmployeesList";
import EmployeeDetails from "./pages/employees/EmployeeDetails";
import EmployeeForm from "./pages/employees/EmployeeForm";
import EmployeeContract from "./pages/employees/EmployeeContract";
import EmployeeCertificate from "./pages/employees/EmployeeCertificate";
import PayrollPage from "./pages/payroll/PayrollPage";
import PayrollDetail from "./pages/payroll/PayrollDetail";
import ReportsPage from "./pages/reports/ReportsPage";
import ReportDetail from "./pages/reports/ReportDetail";
import PaymentsPage from "./pages/payments/PaymentsPage";
import PaymentDetail from "./pages/payments/PaymentDetail";
import ProfilePage from "./pages/profile/ProfilePage";
import ProfileSettings from "./pages/profile/ProfileSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <DirectorProvider>
              <EmployeeProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Routes protégées */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  
                  {/* Routes de gestion des employés */}
                  <Route path="/employees" element={
                    <ProtectedRoute>
                      <EmployeesList />
                    </ProtectedRoute>
                  } />
                  <Route path="/employees/:id" element={
                    <ProtectedRoute>
                      <EmployeeDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/employees/new" element={
                    <ProtectedRoute>
                      <EmployeeForm />
                    </ProtectedRoute>
                  } />
                  <Route path="/employees/edit/:id" element={
                    <ProtectedRoute>
                      <EmployeeForm />
                    </ProtectedRoute>
                  } />
                  <Route path="/employees/:id/contract" element={
                    <ProtectedRoute>
                      <EmployeeContract />
                    </ProtectedRoute>
                  } />
                  <Route path="/employees/:id/certificate" element={
                    <ProtectedRoute>
                      <EmployeeCertificate />
                    </ProtectedRoute>
                  } />
                  
                  {/* Routes de gestion des fiches de paie */}
                  <Route path="/payroll" element={
                    <ProtectedRoute>
                      <PayrollPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/payroll/:id" element={
                    <ProtectedRoute>
                      <PayrollDetail />
                    </ProtectedRoute>
                  } />
                  
                  {/* Routes pour les rapports */}
                  <Route path="/reports" element={
                    <ProtectedRoute>
                      <ReportsPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/reports/:id" element={
                    <ProtectedRoute>
                      <ReportDetail />
                    </ProtectedRoute>
                  } />
                  
                  {/* Routes pour les paiements */}
                  <Route path="/payments" element={
                    <ProtectedRoute>
                      <PaymentsPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/payments/:id" element={
                    <ProtectedRoute>
                      <PaymentDetail />
                    </ProtectedRoute>
                  } />
                  
                  {/* Routes pour le profil */}
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } />
                  <Route path="/profile/settings" element={
                    <ProtectedRoute>
                      <ProfileSettings />
                    </ProtectedRoute>
                  } />
                  
                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </EmployeeProvider>
            </DirectorProvider>
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
