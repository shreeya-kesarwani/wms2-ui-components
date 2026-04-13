/**
 * Material 3 Expressive Design System Utilities
 */

export interface StatusColors {
  text: string;
  bg: string;
  border: string;
  hover: string;
  active: string;
}

export const enhancedStatusColors: Record<string, StatusColors> = {
  success: { text: "text-green-600", bg: "bg-green-50", border: "border-green-200", hover: "hover:bg-green-100", active: "bg-green-100" },
  warning: { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", hover: "hover:bg-amber-100", active: "bg-amber-100" },
  error:   { text: "text-red-600",   bg: "bg-red-50",   border: "border-red-200",   hover: "hover:bg-red-100",   active: "bg-red-100"   },
  info:    { text: "text-blue-600",  bg: "bg-blue-50",  border: "border-blue-200",  hover: "hover:bg-blue-100",  active: "bg-blue-100"  },
  neutral: { text: "text-gray-600",  bg: "bg-gray-50",  border: "border-gray-200",  hover: "hover:bg-gray-100",  active: "bg-gray-100"  },
};

export const statusRingClasses: Record<string, string> = {
  success: "ring-success",
  warning: "ring-warning",
  error: "ring-error",
  info: "ring-info",
};

export const enhancedButtonClasses: Record<string, { base: string }> = {
  primary:   { base: "btn-enhanced-primary"   },
  secondary: { base: "btn-enhanced-secondary" },
  success:   { base: "btn-enhanced-success"   },
  danger:    { base: "btn-enhanced-danger"    },
};

export const getStatusClasses = (
  status: string,
  variant: "default" | "hover" | "active" = "default"
): string => {
  const cfg = enhancedStatusColors[status];
  if (!cfg) return "";
  if (variant === "hover") return cfg.hover;
  if (variant === "active") return cfg.active;
  return `${cfg.text} ${cfg.bg} ${cfg.border}`;
};

export const getButtonEnhancedClasses = (variant: string, _size?: string, status?: string): string => {
  const cfg = enhancedButtonClasses[variant];
  if (!cfg) return "";
  let classes = cfg.base;
  if (status && statusRingClasses[status]) {
    classes += ` ${statusRingClasses[status]}`;
  }
  return classes;
};

export const getAnimationClasses = (_animation: string): string => "";

export const createExpressiveClasses = (options: {
  status?: string;
  elevation?: string;
  animation?: string;
  typography?: string;
  microInteraction?: string;
  layout?: string;
  interactive?: boolean;
}): string => {
  const classes: string[] = [];
  if (options.status) classes.push(getStatusClasses(options.status));
  return classes.filter(Boolean).join(" ");
};