"use client";
import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Badge } from "../Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";

export type MultiSelectOption = string | { label: string; value: string };

export interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  maxHeight?: string;
}

function normalize(options: MultiSelectOption[]): { label: string; value: string }[] {
  return options.map((o) => (typeof o === "string" ? { label: o, value: o } : o));
}

export function MultiSelect({
  options, selected, onChange, placeholder = "Select options",
  className, triggerClassName, contentClassName, maxHeight = "200px",
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const normalized = normalize(options);

  const handleSelectAll = () => onChange(normalized.map((o) => o.value));
  const handleClearAll = () => onChange([]);
  const handleToggleOption = (value: string) => {
    onChange(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]);
  };

  const selectedLabels = selected.map((v) => normalized.find((o) => o.value === v)?.label ?? v);
  const triggerLabel =
    selected.length === 0 ? placeholder
    : selected.length === normalized.length && normalized.length > 1 ? "All selected"
    : selected.length === 1 ? selectedLabels[0]
    : `${selected.length} selected`;
  const tooltipLabel = selected.length === 0 ? placeholder : selected.length === 1 ? selectedLabels[0] : selectedLabels.join(", ");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className={cn("w-full justify-between min-w-0", triggerClassName)}>
                <span className="min-w-0 truncate text-left">{triggerLabel}</span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="max-w-[320px] break-words"><p>{tooltipLabel}</p></TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className={cn("p-0", contentClassName)} style={{ width: "var(--radix-popover-trigger-width)" }} align="start" sideOffset={5}>
        <div className="p-2 border-b">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="sm" className="text-xs h-8 px-2" onClick={handleSelectAll}>Select All</Button>
            <Button variant="ghost" size="sm" className="text-xs h-8 px-2 text-destructive" onClick={handleClearAll}>Clear All</Button>
          </div>
        </div>
        <div className={cn("overflow-y-auto", className)} style={{ maxHeight }}>
          {normalized.map(({ label, value }) => (
            <div
              key={value}
              className="relative flex items-center justify-between rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent cursor-pointer"
              onClick={() => handleToggleOption(value)}
            >
              <span>{label}</span>
              {selected.includes(value) && <Check className="h-4 w-4 flex-shrink-0 text-primary" />}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function MultiSelectBadges({ selected, onRemove, className }: { selected: string[]; onRemove: (value: string) => void; className?: string }) {
  if (selected.length === 0) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {selected.map((value) => (
        <TooltipProvider key={value} delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="flex items-center gap-1 max-w-[220px] cursor-default">
                <span className="min-w-0 truncate">{value}</span>
                <X className="h-3 w-3 shrink-0 cursor-pointer" onClick={(e) => { e.stopPropagation(); onRemove(value); }} />
              </Badge>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-[320px] break-words"><p>{value}</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}