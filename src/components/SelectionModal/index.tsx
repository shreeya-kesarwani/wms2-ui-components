"use client";
import * as React from "react";
import { SearchX } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Dialog";
import { SearchInput } from "../SearchInput";
import { Checkbox } from "../Checkbox";
import { LoadingButton } from "../LoadingButton";
import { EmptyState } from "../EmptyState";
import { cn } from "../../lib/utils";

export interface SelectionItem {
  id: string;
  label: string;
  sublabel?: string;
  imageUrl?: string;
  attributes?: { label: string; value: string }[];
}

export interface SelectionModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  data: SelectionItem[];
  onConfirm: (selected: SelectionItem[]) => void;
  variant?: "list" | "card";
  showImagePlaceholder?: boolean;
  multiple?: boolean;
  renderItem?: (item: SelectionItem, isSelected: boolean, onToggle: () => void) => React.ReactNode;
}

export function SelectionModal({
  open, onClose, title, data, onConfirm,
  variant = "list", showImagePlaceholder = false, multiple = true, renderItem,
}: SelectionModalProps) {
  const [query, setQuery] = React.useState("");
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    if (open) { setQuery(""); setSelected(new Set()); }
  }, [open]);

  const filtered = React.useMemo(() => {
    if (!query.trim()) return data;
    const lower = query.toLowerCase();
    return data.filter((item) =>
      item.label.toLowerCase().includes(lower) || item.sublabel?.toLowerCase().includes(lower)
    );
  }, [data, query]);

  function toggle(id: string) {
    if (!multiple) { setSelected(new Set([id])); return; }
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function selectAndClose(item: SelectionItem) { onConfirm([item]); onClose(); }
  function handleConfirm() { onConfirm(data.filter((item) => selected.has(item.id))); onClose(); }

  const emptyState = (
    <EmptyState icon={<SearchX className="size-6" />} title="No results" description="Try a different search term." className="py-8" />
  );

  function renderCardItem(item: SelectionItem) {
    const isSelected = selected.has(item.id);
    if (renderItem) return renderItem(item, isSelected, () => toggle(item.id));
    const showImage = item.imageUrl || showImagePlaceholder;
    return (
      <button
        key={item.id} type="button"
        onClick={() => multiple ? toggle(item.id) : selectAndClose(item)}
        className={cn(
          "flex items-center gap-3 w-full text-left rounded-lg border p-3 transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30 hover:bg-muted/40"
        )}
      >
        {showImage && (
          <div className="shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.label} className="h-full w-full object-contain" />
            ) : (
              <span className="text-xl font-bold text-gray-400 select-none">{item.label.charAt(0).toUpperCase()}</span>
            )}
          </div>
        )}
        <div className="flex flex-col min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug truncate">{item.label}</p>
          {item.sublabel && <p className="text-xs text-muted-foreground mt-0.5 truncate font-mono">{item.sublabel}</p>}
          {item.attributes && item.attributes.length > 0 && (
            <div className="mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1">
              {item.attributes.map((attr) => (
                <div key={attr.label} className="flex flex-col min-w-0">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{attr.label}</span>
                  <span className="text-xs font-medium truncate">{attr.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </button>
    );
  }

  function renderListItem(item: SelectionItem) {
    const isSelected = selected.has(item.id);
    if (renderItem) return renderItem(item, isSelected, () => toggle(item.id));
    if (!multiple) {
      return (
        <button
          key={item.id} type="button"
          className="flex items-center gap-3 rounded-md px-2 py-2.5 w-full text-left cursor-pointer hover:bg-accent transition-colors"
          onClick={() => selectAndClose(item)}
        >
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium leading-none truncate">{item.label}</p>
            {item.sublabel && <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.sublabel}</p>}
          </div>
        </button>
      );
    }
    return (
      <label key={item.id} className="flex items-center gap-3 rounded-md px-2 py-2.5 cursor-pointer hover:bg-accent transition-colors">
        <Checkbox checked={isSelected} onCheckedChange={() => toggle(item.id)} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-none truncate">{item.label}</p>
          {item.sublabel && <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.sublabel}</p>}
        </div>
      </label>
    );
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent
        className={cn("w-[calc(100vw-2rem)] p-0 gap-0", variant === "card" ? "sm:max-w-lg" : "sm:max-w-md")}
        hideCloseButton
      >
        <DialogHeader className="px-6 pt-5 pb-4 border-b">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="px-6 pt-4 pb-2">
          <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
        </div>

        {variant === "card" ? (
          <div className="overflow-y-auto max-h-[420px] px-4 pb-2">
            {filtered.length === 0 ? emptyState : (
              <div className="flex flex-col gap-2 py-2">
                {filtered.map((item) => <React.Fragment key={item.id}>{renderCardItem(item)}</React.Fragment>)}
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[300px] px-4 pb-2">
            {filtered.length === 0 ? emptyState : (
              <div className="space-y-0.5 py-1">
                {filtered.map((item) => <React.Fragment key={item.id}>{renderListItem(item)}</React.Fragment>)}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t">
          {multiple ? (
            <p className="text-xs text-muted-foreground">{selected.size > 0 ? `${selected.size} selected` : "None selected"}</p>
          ) : (
            <p className="text-xs text-muted-foreground">Click an item to select</p>
          )}
          <div className="flex gap-2">
            <LoadingButton variant="secondary" onClick={onClose}>Cancel</LoadingButton>
            {multiple && (
              <LoadingButton variant="primary" disabled={selected.size === 0} onClick={handleConfirm}>Confirm</LoadingButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}