
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  trend?: {
    value: string | number;
    positive: boolean;
  };
  className?: string;
  onClick?: () => void;
}

export function StatsCard({ 
  title, 
  value, 
  icon, 
  description, 
  trend, 
  className,
  onClick
}: StatsCardProps) {
  return (
    <Card 
      className={cn(
        "glass-card overflow-hidden transition-all", 
        onClick && "cursor-pointer hover:scale-105 hover:shadow-md", 
        "animate-fade-in border border-primary/10",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 p-1.5 text-primary flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            {description}
            {trend && (
              <span className={`inline-flex items-center ${trend.positive ? 'text-success' : 'text-destructive'}`}>
                {trend.positive ? '↑' : '↓'} {trend.value}
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
