"use client";
import * as React from "react";
import { Badge } from "../Badge";
import { cn } from "../../lib/utils";

const LEGACY_STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  CREATED:     { label: "Created",     className: "bg-gray-100 text-gray-700 border-gray-200"   },
  IN_PROGRESS: { label: "In Progress", className: "bg-blue-100 text-blue-700 border-blue-200"   },
  COMPLETED:   { label: "Completed",   className: "bg-green-100 text-green-700 border-green-200" },
  FAILED:      { label: "Failed",      className: "bg-red-100 text-red-700 border-red-200"      },
};

const LEGACY_FALLBACK = { label: null, className: "bg-gray-100 text-gray-600 border-gray-200" };

export interface StatusBadgeProps {
  label?: string;
  className?: string;
  status?: string;
}

export function StatusBadge({ label, className, status }: StatusBadgeProps) {
  let resolvedLabel: string;
  let resolvedClassName: string | undefined;

  if (label !== undefined) {
    resolvedLabel = label;
    resolvedClassName = className;
  } else if (status !== undefined) {
    const cfg = LEGACY_STATUS_CONFIG[status] ?? LEGACY_FALLBACK;
    resolvedLabel = cfg.label ?? status;
    resolvedClassName = cfg.className;
  } else {
    resolvedLabel = "";
    resolvedClassName = className;
  }

  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium px-2 py-0.5 rounded-full border", resolvedClassName)}
    >
      {resolvedLabel}
    </Badge>
  );
}