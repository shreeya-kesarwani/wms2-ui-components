"use client";
import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { ScrollArea } from "../ScrollArea";

export interface TimeSelectorProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  height?: string;
  isMobile?: boolean;
}

export function TimeSelector({ value, onChange, height = "h-[300px]", isMobile = false }: TimeSelectorProps) {
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleTimeChange = (type: "hour" | "minute" | "ampm", val: string | number) => {
    const newTime = value ? new Date(value) : new Date();
    if (!value) { const now = new Date(); newTime.setHours(now.getHours()); newTime.setMinutes(now.getMinutes()); }
    if (type === "hour") {
      const isPM = newTime.getHours() >= 12;
      let newHours = val as number;
      if (isPM && newHours !== 12) newHours += 12;
      if (!isPM && newHours === 12) newHours = 0;
      newTime.setHours(newHours);
    } else if (type === "minute") {
      newTime.setMinutes(val as number);
    } else if (type === "ampm") {
      const h = newTime.getHours();
      if (val === "PM" && h < 12) newTime.setHours(h + 12);
      if (val === "AM" && h >= 12) newTime.setHours(h - 12);
    }
    onChange?.(newTime);
  };

  return (
    <div className={cn("flex gap-2", height)}>
      <ScrollArea className={cn("h-full w-16 border rounded-md", isMobile && "flex-1 w-auto")}>
        <div className="flex flex-col p-1 gap-1">
          {hours.map((hour) => (
            <Button key={hour} size="sm" variant={value && ((value.getHours() % 12) || 12) === hour ? "default" : "ghost"}
              className="h-8 w-full" type="button"
              onClick={() => handleTimeChange("hour", hour)}
            >{hour}</Button>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className={cn("h-full w-20 border rounded-md", isMobile && "flex-1 w-auto")}>
        <div className="flex flex-col p-1 gap-1">
          {minutes.map((minute) => (
            <Button key={minute} size="sm" variant={value && value.getMinutes() === minute ? "default" : "ghost"}
              className="h-8 w-full text-xs" type="button"
              onClick={() => handleTimeChange("minute", minute)}
            >{minute.toString().padStart(2, "0")}</Button>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col gap-2">
        {["AM", "PM"].map((ampm) => (
          <Button key={ampm} size="sm"
            variant={value && ((ampm === "AM" && value.getHours() < 12) || (ampm === "PM" && value.getHours() >= 12)) ? "default" : "outline"}
            className={cn("h-8 w-12", isMobile && "w-10")} type="button"
            onClick={() => handleTimeChange("ampm", ampm)}
          >{ampm}</Button>
        ))}
      </div>
    </div>
  );
}
