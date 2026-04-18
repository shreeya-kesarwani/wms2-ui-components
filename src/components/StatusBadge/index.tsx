"use client";
import React from "react";
import { Badge } from "../Badge";
import { cn } from "../../lib/utils";

type StatusType =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "default"
  | "active"
  | "inactive"
  | "pending"
  | "processing"
  | "completed"
  | "cancelled"
  | "shipped"
  | "delivered"
  | "returned"
  | "critical"
  | "low"
  | "medium"
  | "high";

export interface StatusBadgeProps {
  status: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  statusMapping?: Record<string, StatusType>;
}

const defaultStatusMapping: Record<string, StatusType> = {
  active: "success",
  inactive: "default",
  pending: "warning",
  processing: "info",
  completed: "success",
  cancelled: "error",
  shipped: "success",
  delivered: "success",
  returned: "warning",
  critical: "error",
  low: "warning",
  medium: "info",
  high: "success",
};

export function getStatusVariant(
  status: string,
  statusMapping?: Record<string, StatusType>
): StatusType {
  const mapping = statusMapping || defaultStatusMapping;
  return mapping[status.toLowerCase()] || "default";
}

export function StatusBadge({ status, className, size = "default", statusMapping }: StatusBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-0 px-2",
    default: "text-xs py-1 px-2.5",
    lg: "text-sm py-1 px-3",
  };

  const variant = getStatusVariant(status, statusMapping);

  return (
    <Badge variant={variant as any} className={cn(sizeClasses[size], className)}>
      {status}
    </Badge>
  );
}

export default StatusBadge;