"use client";
import React from "react";
import { toast } from "../Toast/use-toast";

function CopyButton({ message }: { message: string }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(message).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      type="button" onClick={handleCopy}
      className="inline-flex items-center rounded border border-white/20 bg-red-700/30 px-2.5 py-1 text-xs font-bold tracking-widest text-white hover:bg-red-700/50 transition-colors cursor-pointer"
    >
      {copied ? "COPIED" : "CLICK TO COPY"}
    </button>
  );
}

export function showSuccess(_message?: string) {
  toast({ title: "Success!" });
}

export function showError(message: string) {
  const now = new Date();
  const datePart = now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const timePart = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const headerTimestamp = `${datePart} ${timePart}`;

  const { dismiss } = toast({
    variant: "destructive",
    className: "bg-red-600 border-red-700 text-white",
    title: (
      <div className="space-y-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-bold text-sm tracking-wide">ERROR</span>
          <span className="text-[11px] text-red-200 font-normal">{headerTimestamp}</span>
        </div>
        <p className="text-sm text-white font-normal leading-snug">{message}</p>
      </div>
    ),
    description: <div className="mt-3"><CopyButton message={message} /></div>,
  });

  setTimeout(() => dismiss(), 5000);
}