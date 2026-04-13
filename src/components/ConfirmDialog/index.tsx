"use client";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "../Dialog";
import { LoadingButton } from "../LoadingButton";
import { cn } from "../../lib/utils";

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
  className?: string;
}

export function ConfirmDialog({
  open, onClose, onConfirm, title, description,
  confirmText = "Confirm", cancelText = "Cancel", variant = "default", className,
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
      <DialogContent hideCloseButton className={cn("w-[calc(100vw-2rem)] max-w-md", className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <LoadingButton variant="secondary" onClick={onClose}>{cancelText}</LoadingButton>
          <LoadingButton variant={variant === "destructive" ? "destructive" : "primary"} onClick={onConfirm}>
            {confirmText}
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}