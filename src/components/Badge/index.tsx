"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { createExpressiveClasses } from "../../utils/expressive-design";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        flat: "border-transparent bg-primary-100 text-primary-800 hover:bg-primary-200/80",
        success: "status-success status-success-hover",
        warning: "status-warning status-warning-hover",
        error: "status-error status-error-hover",
        info: "status-info status-info-hover",
        neutral: "status-neutral status-neutral-hover",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      color: {
        default: "",
        primary: "bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        danger: "bg-red-100 text-red-800 hover:bg-red-200",
      },
      animation: {
        default: "",
        pulse: "animate-pulse-custom",
        bounce: "animate-bounce-custom",
        success: "animate-success",
        error: "animate-error",
        warning: "animate-warning",
      },
      elevation: {
        default: "",
        resting: "elevation-resting",
        hovered: "elevation-hovered",
        elevated: "elevation-elevated",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "default",
      elevation: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  status?: "success" | "warning" | "error" | "info" | "neutral";
}

function Badge({ className, variant, size, color, animation, elevation, status, ...props }: BadgeProps) {
  const enhancedClasses = createExpressiveClasses({ status: status ?? undefined });
  return (
    <div
      className={cn(
        badgeVariants({ variant, size, animation, elevation }),
        color && badgeVariants({ color }),
        enhancedClasses,
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };