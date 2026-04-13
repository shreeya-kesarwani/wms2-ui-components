"use client";
import * as React from "react";
import { Filter } from "lucide-react";
import { cn } from "../../lib/utils";
import { SearchInput } from "../SearchInput";
import { LoadingButton } from "../LoadingButton";
import { Button } from "../Button";
import { useMobile } from "../../hooks/useMobile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Select";

export interface FilterOption { label: string; value: string; }
export interface FilterConfig { key: string; label: string; options: FilterOption[]; }

export interface FilterBarProps {
  filters?: FilterConfig[];
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  onApply: (values: Record<string, string>) => void;
  onReset: () => void;
  values?: Record<string, string>;
  onValuesChange?: (values: Record<string, string>) => void;
  /** Custom content rendered inside the collapsible filter area (mobile) and inline (desktop) */
  additionalFilters?: React.ReactNode;
  /** Override the SelectTrigger className for filter dropdowns (desktop). Default: "w-36 h-9 text-sm" */
  filterTriggerClassName?: string;
}

export function FilterBar({
  filters = [], searchValue = "", onSearchChange, searchPlaceholder = "Search...",
  onApply, onReset, values: controlledValues, onValuesChange, additionalFilters,
  filterTriggerClassName = "w-36 h-9 text-sm",
}: FilterBarProps) {
  const isMobile = useMobile();
  const [expanded, setExpanded] = React.useState(false);
  const [internalValues, setInternalValues] = React.useState<Record<string, string>>({});
  const filterValues = controlledValues ?? internalValues;

  function handleFilterChange(key: string, value: string) {
    const next = { ...filterValues, [key]: value };
    if (controlledValues === undefined) setInternalValues(next);
    onValuesChange?.(next);
    onApply({ search: searchValue, ...next });
  }

  function handleApply() { onApply({ search: searchValue, ...filterValues }); }

  function handleReset() {
    if (controlledValues === undefined) setInternalValues({});
    onValuesChange?.({});
    onSearchChange?.("");
    onReset();
  }

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {onSearchChange && (
            <SearchInput className="flex-1" value={searchValue} onChange={(e) => onSearchChange(e.target.value)} placeholder={searchPlaceholder} />
          )}
          {(!expanded || filters.length === 0) && (
            <LoadingButton variant="primary" onClick={handleApply}>Search</LoadingButton>
          )}
          {filters.length > 0 && (
            <Button
              variant="outline" size="icon"
              className={cn("h-9 w-9 shrink-0 transition-colors", expanded && "bg-accent text-accent-foreground border-accent")}
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded} aria-label="Toggle filters"
            >
              <Filter className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className={cn("grid transition-all duration-300 ease-in-out", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
          <div className="overflow-hidden">
            <div className="space-y-3 pt-1 pb-1">
              {additionalFilters && <div>{additionalFilters}</div>}
              {filters.map((filter) => (
                <div key={filter.key} className="space-y-1.5">
                  <p className="text-sm font-medium">{filter.label}</p>
                  <Select value={filterValues[filter.key] ?? ""} onValueChange={(val) => handleFilterChange(filter.key, val)}>
                    <SelectTrigger className="w-full h-9 text-sm"><SelectValue placeholder={`Select ${filter.label}`} /></SelectTrigger>
                    <SelectContent>
                      {filter.options.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              ))}
              <div className="pt-1 flex gap-2">
                <LoadingButton variant="secondary" onClick={handleReset}>Reset</LoadingButton>
                <LoadingButton variant="primary" onClick={handleApply}>Search</LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        {onSearchChange && (
          <SearchInput className="w-48" value={searchValue} onChange={(e) => onSearchChange(e.target.value)} placeholder={searchPlaceholder} />
        )}
        {additionalFilters && <div className="shrink-0">{additionalFilters}</div>}
        {filters.map((filter) => (
          <Select key={filter.key} value={filterValues[filter.key] ?? ""} onValueChange={(val) => handleFilterChange(filter.key, val)}>
            <SelectTrigger className={filterTriggerClassName}><SelectValue placeholder={filter.label} /></SelectTrigger>
            <SelectContent>
              {filter.options.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
            </SelectContent>
          </Select>
        ))}
      </div>
      <div className="flex gap-2 justify-end">
        <LoadingButton variant="secondary" onClick={handleReset}>Reset</LoadingButton>
        <LoadingButton variant="primary" onClick={handleApply}>Search</LoadingButton>
      </div>
    </div>
  );
}