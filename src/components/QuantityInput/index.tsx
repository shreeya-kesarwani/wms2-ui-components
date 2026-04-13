"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "../Button";
import { cn } from "../../lib/utils";

export interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export function QuantityInput({ value, onChange, min = 0, max, step = 1, disabled = false, className }: QuantityInputProps) {
  const decrement = () => { const next = value - step; if (next >= min) onChange(next); };
  const increment = () => { const next = value + step; if (max === undefined || next <= max) onChange(next); };
  const canDecrement = !disabled && value - step >= min;
  const canIncrement = !disabled && (max === undefined || value + step <= max);

  return (
    <div className={cn("flex items-center border rounded-md overflow-hidden w-fit", disabled && "opacity-50 cursor-not-allowed", className)}>
      <Button
        type="button" variant="ghost" size="sm" onClick={decrement} disabled={!canDecrement}
        className="h-10 w-10 sm:h-9 sm:w-9 rounded-none border-r px-0 text-muted-foreground hover:text-foreground"
      >
        <Minus className="h-3.5 w-3.5" />
      </Button>
      <span className={cn("min-w-[2.5rem] px-2 text-center text-sm font-medium tabular-nums select-none", disabled && "text-muted-foreground")}>
        {value}
      </span>
      <Button
        type="button" variant="ghost" size="sm" onClick={increment} disabled={!canIncrement}
        className="h-10 w-10 sm:h-9 sm:w-9 rounded-none border-l px-0 text-muted-foreground hover:text-foreground"
      >
        <Plus className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}