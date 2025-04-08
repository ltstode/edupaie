
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ 
  title, 
  description, 
  backLink, 
  backLabel = "Retour", 
  children,
  className
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 animate-fade-in", className)}>
      <div>
        {backLink && (
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link to={backLink} className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="h-4 w-4" />
              {backLabel}
            </Link>
          </Button>
        )}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children && (
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          {children}
        </div>
      )}
    </div>
  );
}
