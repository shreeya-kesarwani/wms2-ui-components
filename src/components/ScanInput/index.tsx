"use client";
import * as React from "react";
import { Minus, Plus, ScanBarcode } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";
import { cn } from "../../lib/utils";

export interface ScanInputProps {
  value: string;
  onChange: (value: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onScan: (value: string, quantity: number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  showQuantity?: boolean;
}

export function ScanInput({
  value,
  onChange,
  quantity,
  onQuantityChange,
  onScan,
  placeholder = "Scan barcode...",
  disabled = false,
  className,
  showQuantity = true,
}: ScanInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => { inputRef.current?.focus(); }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) onScan(value, quantity);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex-1">
        <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="pl-9 h-10"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
      </div>
      {showQuantity && <div className={cn("flex items-center border rounded-md overflow-hidden shrink-0", disabled && "opacity-50 cursor-not-allowed")}>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={disabled || quantity <= 1}
          className="h-10 w-9 rounded-none border-r px-0 text-muted-foreground hover:text-foreground"
        >
          <Minus className="h-3.5 w-3.5" />
        </Button>
        <span className={cn("w-10 text-center text-sm font-medium tabular-nums select-none", disabled && "text-muted-foreground")}>
          {quantity}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onQuantityChange(quantity + 1)}
          disabled={disabled}
          className="h-10 w-9 rounded-none border-l px-0 text-muted-foreground hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>}
    </div>
  );
}