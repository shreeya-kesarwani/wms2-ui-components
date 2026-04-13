"use client";
import * as React from "react";
import {
  Pencil, Trash2, Search, Filter, Plus, Minus, X, Check,
  Eye, EyeOff, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Download, Upload, RefreshCw, Settings, User, Bell,
  Package, Truck, Warehouse, BarChart2, List, Grid2x2,
  AlertCircle, CheckCircle2, Info, HelpCircle, ScanBarcode,
  ArrowLeft, ArrowRight, LogOut, Lock, Unlock, Copy,
  FileText, Printer, MapPin, Calendar, Clock, Tag, DoorOpen,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  // Actions
  edit: Pencil, delete: Trash2, add: Plus, remove: Minus, close: X, check: Check,
  view: Eye, hide: EyeOff, download: Download, upload: Upload, refresh: RefreshCw,
  copy: Copy, print: Printer, logout: LogOut, lock: Lock, unlock: Unlock,
  // Navigation
  "arrow-left": ArrowLeft, "arrow-right": ArrowRight,
  "chevron-down": ChevronDown, "chevron-up": ChevronUp,
  "chevron-left": ChevronLeft, "chevron-right": ChevronRight,
  // UI
  search: Search, filter: Filter, settings: Settings, list: List, grid: Grid2x2,
  // Domain
  user: User, bell: Bell, package: Package, truck: Truck, warehouse: Warehouse,
  scan: ScanBarcode, chart: BarChart2, file: FileText, pin: MapPin,
  calendar: Calendar, clock: Clock, tag: Tag, gate: DoorOpen,
  // Status
  error: AlertCircle, success: CheckCircle2, info: Info,
};

export interface AppIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function AppIcon({ name, size = 16, className }: AppIconProps) {
  const IconComponent = ICON_MAP[name] ?? HelpCircle;
  return <IconComponent size={size} className={cn(className)} />;
}

export const APP_ICON_NAMES = Object.keys(ICON_MAP) as string[];