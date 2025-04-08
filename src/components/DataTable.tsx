
import { useState } from 'react';
import { Search, FilterX } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchable?: boolean;
  searchKeys?: Array<keyof T>;
  onRowClick?: (item: T) => void;
  className?: string;
  emptyMessage?: string;
}

export function DataTable<T>({
  data,
  columns,
  searchable = true,
  searchKeys,
  onRowClick,
  className,
  emptyMessage = "Aucune donnée disponible"
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<T[]>(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) => {
      if (!searchKeys) {
        // Si searchKeys n'est pas défini, rechercher dans toutes les propriétés
        return Object.values(item as Record<string, any>).some(
          (value) => value && value.toString().toLowerCase().includes(query)
        );
      }

      // Sinon, rechercher uniquement dans les propriétés spécifiées
      return searchKeys.some((key) => {
        const value = (item as Record<string, any>)[key as string];
        return value && value.toString().toLowerCase().includes(query);
      });
    });

    setFilteredData(filtered);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setFilteredData(data);
  };

  return (
    <div className={cn("animate-fade-in", className)}>
      {searchable && (
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/70" />
            <Input
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-9 w-full"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-7 w-7 p-0"
                onClick={resetSearch}
              >
                <FilterX className="h-4 w-4" />
                <span className="sr-only">Effacer la recherche</span>
              </Button>
            )}
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  onClick={() => onRowClick && onRowClick(item)}
                  className={cn(onRowClick && "cursor-pointer hover:bg-accent")}
                >
                  {columns.map((column, colIndex) => (
                    <TableCell key={`${rowIndex}-${colIndex}`}>
                      {column.cell
                        ? column.cell(item)
                        : (item[column.accessorKey] as React.ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
