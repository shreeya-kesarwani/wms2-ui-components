"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetTitle } from "../Sheet";

export interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function SidePanel({ open, onClose, title, children, footer }: SidePanelProps) {
  return (
    <Sheet open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <SheetContent
        side="right"
        hideCloseButton
        className="flex flex-col p-0 gap-0 max-sm:w-full max-sm:max-w-full sm:w-1/3 sm:max-w-none"
      >
        <div className="px-6 py-4 border-b shrink-0">
          <SheetTitle className="text-base font-semibold">{title}</SheetTitle>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
        {footer && (
          <div className="shrink-0 border-t px-6 py-4 flex justify-end gap-2">{footer}</div>
        )}
      </SheetContent>
    </Sheet>
  );
}