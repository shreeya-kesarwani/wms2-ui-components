"use client";
import * as React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../DropdownMenu";
import { LoadingButton } from "../LoadingButton";
import { useMobile } from "../../hooks/useMobile";
import { cn } from "../../lib/utils";

export interface DropdownMenuItemConfig {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: "default" | "destructive";
  separator?: boolean;
}

export interface DropdownMenuWrapperProps {
  label: React.ReactNode;
  items: DropdownMenuItemConfig[];
  triggerVariant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  align?: "start" | "center" | "end";
  className?: string;
}

const OPEN_STATE_CLASSES: Record<NonNullable<DropdownMenuWrapperProps["triggerVariant"]>, string> = {
  outline:     "data-[state=open]:bg-gray-100",
  ghost:       "data-[state=open]:bg-gray-100",
  secondary:   "data-[state=open]:bg-gray-200",
  primary:     "data-[state=open]:bg-blue-600",
  destructive: "data-[state=open]:bg-destructive/90",
};

export function DropdownMenuWrapper({
  label, items, triggerVariant = "outline", align = "end", className,
}: DropdownMenuWrapperProps) {
  const isMobile = useMobile();
  const effectiveAlign = isMobile ? "center" : align;
  const openStateClass = OPEN_STATE_CLASSES[triggerVariant ?? "outline"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LoadingButton
          variant={triggerVariant}
          className={cn("data-[state=open]:scale-95 focus-visible:ring-gray-300", openStateClass, className)}
        >
          {label}
        </LoadingButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={effectiveAlign} className="min-w-[160px]">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {item.separator && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onClick={item.onClick}
              className={item.variant === "destructive" ? "text-destructive focus:text-destructive" : undefined}
            >
              {item.icon && <span className="mr-2 flex items-center">{item.icon}</span>}
              {item.label}
            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}