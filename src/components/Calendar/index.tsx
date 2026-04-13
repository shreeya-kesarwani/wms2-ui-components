// "use client";
// import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DayPicker } from "react-day-picker";
// import { cn } from "../../lib/utils";
// import { buttonVariants } from "../Button";
//
// export type CalendarProps = React.ComponentProps<typeof DayPicker>;
//
// function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("p-3", className)}
//       classNames={{
//         month_caption: "flex justify-center pt-1 relative items-center h-7",
//         caption_label: "text-sm font-medium",
//         nav: "flex items-center gap-1",
//         button_previous: cn(
//           buttonVariants({ variant: "outline" }),
//           "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
//         ),
//         button_next: cn(
//           buttonVariants({ variant: "outline" }),
//           "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
//         ),
//         weekdays: "grid grid-cols-7 w-full",
//         weekday: "text-muted-foreground h-8 flex items-center justify-center font-normal text-[0.8rem]",
//         week: "grid grid-cols-7 w-full mt-2",
//         day: cn(
//           "flex items-center justify-center w-8 h-8",
//           "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
//           props.mode === "range"
//             ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
//             : "[&:has([aria-selected])]:rounded-md"
//         ),
//         day_button: cn(
//           buttonVariants({ variant: "ghost" }),
//           "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
//         ),
//         range_start: "day-range-start",
//         range_end: "day-range-end",
//         selected:
//           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
//         today: "bg-accent text-accent-foreground",
//         outside:
//           "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
//         disabled: "text-muted-foreground opacity-50",
//         range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
//         hidden: "invisible",
//         ...classNames,
//       }}
//       components={{
//         Chevron: ({ orientation }) =>
//           orientation === "left"
//             ? <ChevronLeft className="h-4 w-4" />
//             : <ChevronRight className="h-4 w-4" />,
//       }}
//       {...props}
//     />
//   );
// }
// Calendar.displayName = "Calendar";
//
// export { Calendar };

"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns"

import { cn } from "../../lib/utils"
import { buttonVariants } from "../Button"

export interface CalendarProps {
  mode?: "single" | "range"
  selected?: Date | { from?: Date; to?: Date }
  onSelect?: (date: Date | { from?: Date; to?: Date } | undefined) => void
  defaultMonth?: Date
  numberOfMonths?: number
  className?: string
  disabled?: boolean
  initialFocus?: boolean
  showOutsideDays?: boolean
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  defaultMonth = new Date(),
  numberOfMonths = 1,
  className,
  disabled = false,
  showOutsideDays = true,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(defaultMonth)
  const [rangeStart, setRangeStart] = React.useState<Date | null>(
    mode === "range" && selected && typeof selected === 'object' && 'from' in selected && selected.from ? selected.from : null
  )

  React.useEffect(() => {
    if (defaultMonth) {
      setCurrentMonth(prev =>
        prev.getFullYear() === defaultMonth.getFullYear() && prev.getMonth() === defaultMonth.getMonth()
          ? prev
          : defaultMonth
      )
    }
  }, [defaultMonth])

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const handleDateClick = (day: Date) => {
    if (disabled) return

    if (mode === "single") {
      onSelect?.(day)
    } else {
      // Range mode
      const currentRange = selected as { from?: Date; to?: Date } | undefined
      if (!rangeStart || (currentRange?.from && currentRange?.to)) {
        // Start new range
        const newRange = { from: day, to: undefined }
        setRangeStart(day)
        onSelect?.(newRange)
      } else if (rangeStart) {
        // Complete range
        const from = day < rangeStart ? day : rangeStart
        const to = day < rangeStart ? rangeStart : day
        setRangeStart(null)
        onSelect?.({ from, to })
      }
    }
  }

  const isSelected = (day: Date) => {
    if (!selected) return false
    if (mode === "single") {
      return isSameDay(day, selected as Date)
    } else {
      const range = selected as { from?: Date; to?: Date }
      return (
        (range.from && isSameDay(day, range.from)) ||
        (range.to && isSameDay(day, range.to))
      )
    }
  }

  const isInRange = (day: Date) => {
    if (mode !== "range" || !selected || typeof selected !== 'object' || !('from' in selected)) return false
    const range = selected as { from?: Date; to?: Date }
    if (!range.from || !range.to) return false
    return day >= range.from && day <= range.to
  }

  const isRangeStart = (day: Date) => {
    if (mode !== "range" || !selected || typeof selected !== 'object' || !('from' in selected)) return false
    const range = selected as { from?: Date; to?: Date }
    return range.from ? isSameDay(day, range.from) : false
  }

  const isRangeEnd = (day: Date) => {
    if (mode !== "range" || !selected || typeof selected !== 'object' || !('from' in selected)) return false
    const range = selected as { from?: Date; to?: Date }
    return range.to ? isSameDay(day, range.to) : false
  }

  const isToday = (day: Date) => {
    return isSameDay(day, new Date())
  }

  const isOutsideMonth = (day: Date) => {
    return !isSameMonth(day, currentMonth)
  }

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const months = []
  for (let i = 0; i < numberOfMonths; i++) {
    const monthDate = addMonths(currentMonth, i)
    const monthStart = startOfMonth(monthDate)
    const monthEnd = endOfMonth(monthDate)
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })
    const monthDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd })
    months.push({ date: monthDate, days: monthDays })
  }

  return (
    <div className={cn("p-3", className)}>
      <div className={cn(
        "flex",
        numberOfMonths > 1 ? "flex-row gap-6" : "flex-col"
      )}>
        {months.map((month, monthIdx) => (
          <div key={monthIdx} className="rounded-md border bg-card p-3">
            <div className="flex items-center justify-between mb-4">
              {monthIdx === 0 && (
                <button
                  onClick={previousMonth}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-8 w-8 p-0 opacity-50 hover:opacity-100"
                  )}
                  disabled={disabled}
                  type="button"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {monthIdx > 0 && <div className="w-8" />}
              <div className="text-sm font-medium flex-1 text-center">
                {format(month.date, "MMMM yyyy")}
              </div>
              {monthIdx === months.length - 1 && (
                <button
                  onClick={nextMonth}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-8 w-8 p-0 opacity-50 hover:opacity-100"
                  )}
                  disabled={disabled}
                  type="button"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {monthIdx < months.length - 1 && <div className="w-8" />}
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-muted-foreground text-xs font-medium text-center h-8 flex items-center justify-center"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {month.days.map((day, idx) => {
                const selected = isSelected(day)
                const inRange = isInRange(day)
                const rangeStart = isRangeStart(day)
                const rangeEnd = isRangeEnd(day)
                const today = isToday(day)
                const outside = isOutsideMonth(day)

                if (!showOutsideDays && outside) {
                  return <div key={idx} className="h-9 w-9" />
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateClick(day)}
                    disabled={disabled}
                    type="button"
                    className={cn(
                      "h-9 w-9 text-sm rounded-md transition-colors relative",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      outside && "text-muted-foreground opacity-50",
                      today && !selected && "bg-accent font-semibold",
                      selected && "bg-primary text-primary-foreground hover:bg-primary",
                      inRange && !selected && "bg-primary/10",
                      rangeStart && "rounded-l-md",
                      rangeEnd && "rounded-r-md",
                      disabled && "cursor-not-allowed opacity-50"
                    )}
                  >
                    {format(day, "d")}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
console.log("🚀 CUSTOM CALENDAR ACTIVE");