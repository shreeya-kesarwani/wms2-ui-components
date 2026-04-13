"use client";
import * as React from "react";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { TimePicker } from "../TimePicker";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { ScrollArea } from "../ScrollArea";
import { useMobile } from "../../hooks/useMobile";
import { TimeSelector } from "../TimeSelector";

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  showSeparatePickers?: boolean;
}

export function DateTimePicker({ value, onChange, placeholder = "Pick date and time", showSeparatePickers = false }: DateTimePickerProps) {
  const isMobile = useMobile();
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [dateOpen, setDateOpen] = React.useState(false);

  React.useEffect(() => { setDate(value); }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      if (date) { newDate.setHours(date.getHours()); newDate.setMinutes(date.getMinutes()); newDate.setSeconds(date.getSeconds()); }
      else { const now = new Date(); newDate.setHours(now.getHours()); newDate.setMinutes(now.getMinutes()); newDate.setSeconds(now.getSeconds()); }
      setDate(newDate); onChange?.(newDate);
    } else { setDate(undefined); onChange?.(undefined); }
  };

  const handleTimeSelect = (selectedTime: Date | undefined) => {
    if (selectedTime) {
      const newDate = date ? new Date(date) : new Date();
      newDate.setHours(selectedTime.getHours()); newDate.setMinutes(selectedTime.getMinutes()); newDate.setSeconds(selectedTime.getSeconds());
      setDate(newDate); onChange?.(newDate);
    }
  };

  if (showSeparatePickers) {
    return (
      <div className={cn("flex gap-2", isMobile && "flex-col")}>
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("flex-1 justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={(date) => handleDateSelect(date as Date | undefined)} initialFocus />
          </PopoverContent>
        </Popover>
        <TimePicker value={date} onChange={handleTimeSelect} placeholder="Pick time" />
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP p") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", isMobile ? "w-[calc(100vw-2rem)]" : "w-auto")} align="start">
        <div className={cn("flex flex-row gap-2 p-2", isMobile && "flex-col gap-0 p-0")}>
          <div className={cn("flex-1", isMobile && "p-2 pb-0")}>
            <Calendar mode="single" selected={date} onSelect={(date) => handleDateSelect(date as Date | undefined)} initialFocus />
          </div>
          <div className={cn("flex flex-col border-l pl-4 pr-2 py-2 gap-4 min-w-[200px]", isMobile && "border-l-0 border-t px-3 py-3 gap-3 min-w-0")}>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" /><span>Time</span>
            </div>
            <TimeSelector value={date} onChange={handleTimeSelect} height={isMobile ? "h-[180px]" : "h-[300px]"} isMobile={isMobile} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}