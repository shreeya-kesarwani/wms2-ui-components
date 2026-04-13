// ── Utilities ─────────────────────────────────────────────────────────────────
export { cn } from "./lib/utils";
export * from "./utils/expressive-design";

// ── Hooks ─────────────────────────────────────────────────────────────────────
export { useMediaQuery } from "./hooks/useMediaQuery";
export { useMobile } from "./hooks/useMobile";

// ── Base (shadcn) Components ──────────────────────────────────────────────────
export { Button, buttonVariants, type ButtonProps } from "./components/Button";
export { Input } from "./components/Input";
export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent,
  SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton,
} from "./components/Select";
export {
  Table, TableHeader, TableBody, TableFooter, TableHead,
  TableRow, TableCell, TableCaption,
} from "./components/Table";
export { Badge, badgeVariants, type BadgeProps } from "./components/Badge";
export { Label } from "./components/Label";
export { Checkbox } from "./components/Checkbox";
export {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from "./components/Tooltip";
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "./components/Popover";
export {
  Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
} from "./components/Dialog";
export {
  Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
} from "./components/Sheet";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";
export { ScrollArea, ScrollBar } from "./components/ScrollArea";
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup,
  DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuRadioGroup,
} from "./components/DropdownMenu";
export { Calendar, type CalendarProps } from "./components/Calendar";
export {
  Pagination, PaginationContent, PaginationLink, PaginationItem,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "./components/Pagination";

// ── Toast System ──────────────────────────────────────────────────────────────
export {
  Toast, ToastAction, ToastClose, ToastDescription, ToastProvider,
  ToastTitle, ToastViewport, type ToastProps, type ToastActionElement,
} from "./components/Toast/toast";
export { useToast, toast } from "./components/Toast/use-toast";
export { Toaster } from "./components/Toast/toaster";

// ── Custom Components ─────────────────────────────────────────────────────────
export { AppIcon, APP_ICON_NAMES, type AppIconProps } from "./components/AppIcon";
export { LoadingButton, type LoadingButtonProps } from "./components/LoadingButton";
export { SearchInput, type SearchInputProps } from "./components/SearchInput";
export { EmptyState, type EmptyStateProps } from "./components/EmptyState";
export { ScanInput, type ScanInputProps } from "./components/ScanInput";
export { StatusBadge, type StatusBadgeProps } from "./components/StatusBadge";
export { QuantityInput, type QuantityInputProps } from "./components/QuantityInput";
export { ConfirmDialog, type ConfirmDialogProps } from "./components/ConfirmDialog";
export { SidePanel, type SidePanelProps } from "./components/SidePanel";
export {
  SelectionModal, type SelectionModalProps, type SelectionItem,
} from "./components/SelectionModal";
export {
  ResponsiveTable, type Column, type PaginationConfig,
} from "./components/ResponsiveTable";
export {
  FilterBar, type FilterBarProps, type FilterConfig, type FilterOption,
} from "./components/FilterBar";
export {
  FormBuilder, type FormBuilderProps, type FieldConfig, type FieldType, type FieldOption,
} from "./components/FormBuilder";
export {
  MultiSelect, MultiSelectBadges, type MultiSelectProps, type MultiSelectOption,
} from "./components/MultiSelect";
export { TabsWrapper, type TabsWrapperProps, type TabItem } from "./components/TabsWrapper";
export {
  DropdownMenuWrapper, type DropdownMenuWrapperProps, type DropdownMenuItemConfig,
} from "./components/DropdownMenuWrapper";
export { TimePicker, type TimePickerProps } from "./components/TimePicker";

export { DatePicker, type DatePickerProps } from "./components/DatePicker";
export { DateTimePicker, type DateTimePickerProps } from "./components/DateTimePicker";
export { DateRangePicker, type DateRangePickerProps, type DateRange } from "./components/DateRangePicker";

// ── Additional Base Components ────────────────────────────────────────────────
export {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent,
  cardVariants, type CardProps,
} from "./components/Card";
export { Separator } from "./components/Separator";
export { Textarea } from "./components/Textarea";
export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "./components/Accordion";

// ── Toast utilities ───────────────────────────────────────────────────────────
export { showSuccess, showError } from "./components/WmsToast";