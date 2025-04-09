
// Type définitions pour l'utilisateur
export interface User {
  id: string;
  name: string;
  email: string;
  schoolName: string;
  avatar?: string;
  userStats?: {
    employees: number;
    reports: number;
    payments: number;
  };
}
