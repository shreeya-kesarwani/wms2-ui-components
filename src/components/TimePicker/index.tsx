"use client";
import * as React from "react";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { TimeSelector } from "../TimeSelector";

export interface TimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function TimePicker({ value, onChange, placeholder = "Pick time", disabled = false }: TimePickerProps) {
  const [time, setTime] = React.useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => { setTime(value); }, [value]);

  const handleTimeChange = (newTime: Date | undefined) => {
    setTime(newTime);
    onChange?.(newTime);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" disabled={disabled} className={cn("w-full justify-start text-left font-normal", !time && "text-muted-foreground")}>
          <Clock className="mr-2 h-4 w-4" />
          {time ? format(time, "h:mm a") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-col gap-4 p-4 min-w-[200px]">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Clock className="h-4 w-4" /><span>Time</span>
          </div>
          <TimeSelector value={time} onChange={handleTimeChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}