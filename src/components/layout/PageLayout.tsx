
import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export function PageLayout({ children, title, subtitle, action }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar />
      
      <main className="flex-1 ml-72 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {(title || subtitle || action) && (
            <div className="flex items-center justify-between">
              <div>
                {title && (
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>
              {action && (
                <div className="flex items-center gap-4">
                  {action}
                </div>
              )}
            </div>
          )}
          
          {children}
        </div>
      </main>
    </div>
  );
}
