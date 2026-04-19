"use client";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Label } from "../Label";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { ArrowUpDown } from "lucide-react";

export interface SortOptionsProps {
  onSortByChange?: (sortBy: string) => void;
  onSortOrderChange?: (sortOrder: string) => void;
  sortByOptions: { label: string; value: string }[];
  sortOrderOptions: { label: string; value: string }[];
  sortByValue?: string;
  sortOrderValue?: string;
  containerRef?: HTMLElement | undefined;
}

export function SortOptions({
  onSortByChange,
  onSortOrderChange,
  sortByOptions,
  sortOrderOptions,
  sortByValue,
  sortOrderValue,
}: SortOptionsProps) {
  const [selectedSortBy, setSelectedSortBy] = useState<string>(
    sortByValue || sortByOptions?.[0]?.value
  );
  const [selectedOrder, setSelectedOrder] = useState<string>(
    sortOrderValue || sortOrderOptions?.[0]?.value
  );

  useEffect(() => {
    if (sortByValue) setSelectedSortBy(sortByValue);
  }, [sortByValue]);

  useEffect(() => {
    if (sortOrderValue) setSelectedOrder(sortOrderValue);
  }, [sortOrderValue]);

  const handleSortByChange = useCallback(
    (value: string) => {
      setSelectedSortBy(value);
      onSortByChange?.(value);
    },
    [onSortByChange]
  );

  const handleOrderChange = useCallback(
    (value: string) => {
      setSelectedOrder(value);
      onSortOrderChange?.(value);
    },
    [onSortOrderChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Sort by</h4>
            <RadioGroup value={selectedSortBy} onValueChange={handleSortByChange} className="space-y-1">
              {sortByOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`sort-by-${option.value}`} />
                  <Label htmlFor={`sort-by-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <h4 className="font-medium mb-2">Order</h4>
            <RadioGroup value={selectedOrder} onValueChange={handleOrderChange} className="space-y-1">
              {sortOrderOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`sort-order-${option.value}`} />
                  <Label htmlFor={`sort-order-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SortOptions;