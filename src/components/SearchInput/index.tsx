"use client";
import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "../Input";
import { cn } from "../../lib/utils";

export type SearchInputProps = React.ComponentProps<"input">;

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, placeholder = "Search...", ...props }, ref) => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
      <Input ref={ref} placeholder={placeholder} className={cn("pl-9", className)} {...props} />
    </div>
  )
);
SearchInput.displayName = "SearchInput";

export { SearchInput };