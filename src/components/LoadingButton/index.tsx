"use client";
import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "../Button";
import { cn } from "../../lib/utils";

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading, disabled, children, variant, className, ...props }, ref) => (
    <Button
      ref={ref}
      variant={variant}
      disabled={disabled || loading}
      className={cn("active:scale-95 transition-all duration-200", className)}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" />}
      {children}
    </Button>
  )
);
LoadingButton.displayName = "LoadingButton";

export { LoadingButton };