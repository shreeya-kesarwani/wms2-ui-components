import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

// ── PageHeader ────────────────────────────────────────────────────────────────

export interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  titleSuffix?: ReactNode;
  actions?: ReactNode;
  actionsClassName?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  icon,
  titleSuffix,
  actions,
  actionsClassName,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-start md:items-center mb-3", className)}>
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
          {titleSuffix}
        </h1>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {actions && (
        <div className={cn("mt-4 md:mt-0 flex items-center gap-2", actionsClassName)}>{actions}</div>
      )}
    </div>
  );
}

// ── StatsCard ─────────────────────────────────────────────────────────────────

export interface StatsCardProps {
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: "increase" | "decrease" | "neutral";
  className?: string;
}

export function StatsCard({ label, value, delta, deltaType = "neutral", className }: StatsCardProps) {
  const deltaColor =
    deltaType === "increase"
      ? "text-green-500"
      : deltaType === "decrease"
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div className={cn("p-4 border rounded-lg bg-card", className)}>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">{value}</span>
          {delta && <span className={`text-sm ${deltaColor}`}>{delta}</span>}
        </div>
      </div>
    </div>
  );
}

// ── StatsGrid ─────────────────────────────────────────────────────────────────

export interface StatsGridProps {
  stats: StatsCardProps[];
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", className)}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}

// ── PageLayout ────────────────────────────────────────────────────────────────

export interface PageLayoutProps {
  children: ReactNode;
  header: PageHeaderProps;
  stats?: StatsCardProps[];
  className?: string;
}

export function PageLayout({ children, header, stats, className }: PageLayoutProps) {
  return (
    <div className={cn("p-6", className)}>
      <PageHeader {...header} />
      {stats && stats.length > 0 && <StatsGrid stats={stats} />}
      <div className="space-y-6">{children}</div>
    </div>
  );
}

// ── ContentSection ────────────────────────────────────────────────────────────

export interface ContentSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}

export function ContentSection({ title, description, children, className, actions }: ContentSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {(title || actions) && (
        <div className="flex items-center justify-between">
          <div>
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export default PageLayout;