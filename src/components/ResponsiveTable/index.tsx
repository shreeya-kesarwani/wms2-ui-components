"use client";
import * as React from "react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../Table";
import { EmptyState } from "../EmptyState";
import { Button } from "../Button";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem,
} from "../DropdownMenu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Select";
import { TableIcon, ChevronLeft, ChevronRight, Eye, Trash2, Columns2 } from "lucide-react";

export interface Column<T> {
  key: keyof T & string;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  hideable?: boolean;
}

export interface PaginationConfig {
  page: number;
  pageSize: number;
  total?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
}

const ACTIONS_KEY = "__actions__";

interface ResponsiveTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  emptyTitle?: string;
  emptyDescription?: string;
  className?: string;
  onView?: (row: T) => void;
  onDelete?: (row: T) => void;
  pagination?: PaginationConfig;
  defaultVisibleColumns?: string[];
  onColumnChange?: (visibleKeys: string[]) => void;
}

function TablePagination({
  page, pageSize, onPageChange, onPageSizeChange, pageSizeOptions, dataLength,
}: Pick<PaginationConfig, "page" | "pageSize" | "onPageChange" | "onPageSizeChange" | "pageSizeOptions"> & { dataLength: number }) {
  const isFirst = page <= 1;
  const isLast = dataLength < pageSize;
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t">
      {onPageSizeChange ? (
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Rows per page</span>
          <Select value={String(pageSize)} onValueChange={(v) => { onPageSizeChange(Number(v)); onPageChange(1); }}>
            <SelectTrigger className="h-7 w-[64px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {(pageSizeOptions ?? [10, 20, 50]).map((size) => (
                <SelectItem key={size} value={String(size)} className="text-xs">{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : <div />}
      <div className="flex items-center gap-1">
        <Button variant="outline" size="sm" className="h-7 px-2.5 text-xs gap-1" onClick={() => onPageChange(page - 1)} disabled={isFirst}>
          <ChevronLeft className="h-3.5 w-3.5" />Prev
        </Button>
        <Button variant="outline" size="sm" className="h-7 px-2.5 text-xs gap-1" onClick={() => { if (!isLast) onPageChange(page + 1); }} disabled={isLast}>
          Next<ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

function RowActions<T extends Record<string, unknown>>({ row, onView, onDelete }: { row: T; onView?: (row: T) => void; onDelete?: (row: T) => void }) {
  return (
    <div className="flex items-center gap-1.5">
      {onView && (
        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1" onClick={() => onView(row)}>
          <Eye className="h-3.5 w-3.5" />View
        </Button>
      )}
      {onDelete && (
        <Button variant="destructive" size="sm" className="h-7 px-2 text-xs gap-1" onClick={() => onDelete(row)}>
          <Trash2 className="h-3.5 w-3.5" />Delete
        </Button>
      )}
    </div>
  );
}

export function ResponsiveTable<T extends Record<string, unknown>>({
  columns, data, emptyTitle = "No data available", emptyDescription, className,
  onView, onDelete, pagination, defaultVisibleColumns, onColumnChange,
}: ResponsiveTableProps<T>) {
  const isMobile = useMobile();
  const hasActions = !!(onView || onDelete);

  const dropdownEntries = React.useMemo(
    () => [...columns, ...(hasActions ? [{ key: ACTIONS_KEY, label: "Actions", hideable: true } as Column<T>] : [])],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns, hasActions]
  );

  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(
    () => new Set(defaultVisibleColumns ?? dropdownEntries.map((c) => c.key))
  );

  const toggleKey = (key: string) => {
    setVisibleKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      onColumnChange?.([...next]);
      return next;
    });
  };

  const visibleDataColumns = columns.filter((c) => visibleKeys.has(c.key));
  const showActions = hasActions && visibleKeys.has(ACTIONS_KEY);

  const columnSelector = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          <Columns2 className="h-3.5 w-3.5" />Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {dropdownEntries.map((entry) => {
          const isForced = entry.hideable === false;
          return (
            <DropdownMenuCheckboxItem
              key={entry.key} checked={visibleKeys.has(entry.key)} disabled={isForced}
              onCheckedChange={() => { if (!isForced) toggleKey(entry.key); }}
            >
              {entry.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (data.length === 0) {
    return (
      <div className="rounded-lg border">
        <div className="flex justify-end px-4 py-2 border-b">{columnSelector}</div>
        <EmptyState icon={<TableIcon className="size-7" />} title={emptyTitle} description={emptyDescription} className="py-12" />
        {pagination && <TablePagination {...pagination} dataLength={data.length} />}
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={`space-y-3 ${className ?? ""}`}>
        <div className="flex justify-end">{columnSelector}</div>
        {data.map((row, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 space-y-2 shadow-sm">
            {visibleDataColumns.map((col) => {
              const value = row[col.key];
              return (
                <div key={col.key} className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground shrink-0">{col.label}</span>
                  <span className="text-sm font-medium text-right">
                    {col.render ? col.render(value, row) : value == null ? "—" : String(value)}
                  </span>
                </div>
              );
            })}
            {showActions && <div className="pt-2 mt-1 border-t"><RowActions row={row} onView={onView} onDelete={onDelete} /></div>}
          </div>
        ))}
        {pagination && <div className="rounded-lg border bg-card"><TablePagination {...pagination} dataLength={data.length} /></div>}
      </div>
    );
  }

  return (
    <div className={`rounded-lg border ${className ?? ""}`}>
      <div className="flex justify-end px-4 py-2 border-b">{columnSelector}</div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {visibleDataColumns.map((col) => <TableHead key={col.key}>{col.label}</TableHead>)}
              {showActions && <TableHead className="w-[140px]">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                {visibleDataColumns.map((col) => {
                  const value = row[col.key];
                  return (
                    <TableCell key={col.key}>
                      {col.render ? col.render(value, row) : value == null ? "—" : String(value)}
                    </TableCell>
                  );
                })}
                {showActions && <TableCell><RowActions row={row} onView={onView} onDelete={onDelete} /></TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {pagination && <TablePagination {...pagination} dataLength={data.length} />}
    </div>
  );
}