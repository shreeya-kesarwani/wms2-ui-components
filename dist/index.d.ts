import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { DateRange } from 'react-day-picker';
export { DateRange } from 'react-day-picker';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

declare function cn(...inputs: ClassValue[]): string;

/**
 * Material 3 Expressive Design System Utilities
 */
interface StatusColors {
    text: string;
    bg: string;
    border: string;
    hover: string;
    active: string;
}
declare const enhancedStatusColors: Record<string, StatusColors>;
declare const statusRingClasses: Record<string, string>;
declare const enhancedButtonClasses: Record<string, {
    base: string;
}>;
declare const getStatusClasses: (status: string, variant?: "default" | "hover" | "active") => string;
declare const getButtonEnhancedClasses: (variant: string, _size?: string, status?: string) => string;
declare const getAnimationClasses: (_animation: string) => string;
declare const createExpressiveClasses: (options: {
    status?: string;
    elevation?: string;
    animation?: string;
    typography?: string;
    microInteraction?: string;
    layout?: string;
    interactive?: boolean;
}) => string;

declare function useMediaQuery(query: string): boolean;

declare function useMobile(): boolean;

declare const buttonVariants: (props?: ({
    variant?: "success" | "primary" | "secondary" | "danger" | "default" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    status?: "success" | "warning" | "error" | "info" | "default" | null | undefined;
    elevation?: "default" | "resting" | "hovered" | "pressed" | "focused" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;

declare const badgeVariants: (props?: ({
    variant?: "success" | "warning" | "error" | "info" | "neutral" | "default" | "destructive" | "outline" | "flat" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    color?: "success" | "warning" | "primary" | "secondary" | "danger" | "default" | null | undefined;
    animation?: "success" | "warning" | "error" | "default" | "pulse" | "bounce" | null | undefined;
    elevation?: "default" | "resting" | "hovered" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof badgeVariants> {
    status?: "success" | "warning" | "error" | "info" | "neutral";
}
declare function Badge({ className, variant, size, color, animation, elevation, status, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    hideCloseButton?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Sheet: React.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
    hideCloseButton?: boolean;
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CalendarProps {
    mode?: "single" | "range";
    selected?: Date | {
        from?: Date;
        to?: Date;
    };
    onSelect?: (date: Date | {
        from?: Date;
        to?: Date;
    } | undefined) => void;
    defaultMonth?: Date;
    numberOfMonths?: number;
    className?: string;
    disabled?: boolean;
    initialFocus?: boolean;
    showOutsideDays?: boolean;
}
declare function Calendar({ mode, selected, onSelect, defaultMonth, numberOfMonths, className, disabled, showOutsideDays, }: CalendarProps): react_jsx_runtime.JSX.Element;

declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "success" | "neutral" | "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

type ToasterToast = Omit<ToastProps, "title"> & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
    createdAt?: Date;
};
interface Toast extends Omit<ToasterToast, "id" | "title" | "description"> {
    title?: React.ReactNode;
    description?: React.ReactNode;
}
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (p: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare function Toaster(): react_jsx_runtime.JSX.Element;

interface AppIconProps {
    name: string;
    size?: number;
    className?: string;
}
declare function AppIcon({ name, size, className }: AppIconProps): react_jsx_runtime.JSX.Element;
declare const APP_ICON_NAMES: string[];

interface LoadingButtonProps extends ButtonProps {
    loading?: boolean;
}
declare const LoadingButton: React.ForwardRefExoticComponent<LoadingButtonProps & React.RefAttributes<HTMLButtonElement>>;

type SearchInputProps = React.ComponentProps<"input">;
declare const SearchInput: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}
declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface ScanInputProps {
    value: string;
    onChange: (value: string) => void;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onScan: (value: string, quantity: number) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    showQuantity?: boolean;
}
declare function ScanInput({ value, onChange, quantity, onQuantityChange, onScan, placeholder, disabled, className, showQuantity, }: ScanInputProps): react_jsx_runtime.JSX.Element;

interface StatusBadgeProps {
    label?: string;
    className?: string;
    status?: string;
}
declare function StatusBadge({ label, className, status }: StatusBadgeProps): react_jsx_runtime.JSX.Element;

interface QuantityInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}
declare function QuantityInput({ value, onChange, min, max, step, disabled, className }: QuantityInputProps): react_jsx_runtime.JSX.Element;

interface ConfirmDialogProps {
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
declare function ConfirmDialog({ open, onClose, onConfirm, title, description, confirmText, cancelText, variant, className, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element;

interface SidePanelProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
declare function SidePanel({ open, onClose, title, children, footer }: SidePanelProps): react_jsx_runtime.JSX.Element;

interface SelectionItem {
    id: string;
    label: string;
    sublabel?: string;
    imageUrl?: string;
    attributes?: {
        label: string;
        value: string;
    }[];
}
interface SelectionModalProps {
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
declare function SelectionModal({ open, onClose, title, data, onConfirm, variant, showImagePlaceholder, multiple, renderItem, }: SelectionModalProps): react_jsx_runtime.JSX.Element;

interface Column<T> {
    key: keyof T & string;
    label: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
    hideable?: boolean;
}
interface PaginationConfig {
    page: number;
    pageSize: number;
    total?: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];
}
interface ResponsiveTableProps<T extends Record<string, unknown>> {
    columns: Column<T>[];
    data: T[];
    emptyTitle?: string;
    emptyDescription?: string;
    className?: string;
    onView?: (row: T) => void;
    onDelete?: (row: T) => void;
    pagination?: PaginationConfig;
    defaultVisibleColumns?: string[];
    onColumnChange?: (visibleKeys: string[]) => void;
}
declare function ResponsiveTable<T extends Record<string, unknown>>({ columns, data, emptyTitle, emptyDescription, className, onView, onDelete, pagination, defaultVisibleColumns, onColumnChange, }: ResponsiveTableProps<T>): react_jsx_runtime.JSX.Element;

interface FilterOption {
    label: string;
    value: string;
}
interface FilterConfig {
    key: string;
    label: string;
    options: FilterOption[];
}
interface FilterBarProps {
    filters?: FilterConfig[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    onApply: (values: Record<string, string>) => void;
    onReset: () => void;
    values?: Record<string, string>;
    onValuesChange?: (values: Record<string, string>) => void;
    /** Custom content rendered inside the collapsible filter area (mobile) and inline (desktop) */
    additionalFilters?: React.ReactNode;
    /** Override the SelectTrigger className for filter dropdowns (desktop). Default: "w-36 h-9 text-sm" */
    filterTriggerClassName?: string;
}
declare function FilterBar({ filters, searchValue, onSearchChange, searchPlaceholder, onApply, onReset, values: controlledValues, onValuesChange, additionalFilters, filterTriggerClassName, }: FilterBarProps): react_jsx_runtime.JSX.Element;

type FieldType = "text" | "number" | "select";
interface FieldOption {
    label: string;
    value: string;
}
interface FieldConfig {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    options?: FieldOption[];
}
interface FormBuilderProps {
    fields: FieldConfig[];
    values: Record<string, string>;
    onChange: (name: string, value: string) => void;
    onSubmit: (values: Record<string, string>) => void;
    submitLabel?: string;
}
declare function FormBuilder({ fields, values, onChange, onSubmit, submitLabel }: FormBuilderProps): react_jsx_runtime.JSX.Element;

type MultiSelectOption = string | {
    label: string;
    value: string;
};
interface MultiSelectProps {
    options: MultiSelectOption[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
    className?: string;
    triggerClassName?: string;
    contentClassName?: string;
    maxHeight?: string;
}
declare function MultiSelect({ options, selected, onChange, placeholder, className, triggerClassName, contentClassName, maxHeight, }: MultiSelectProps): react_jsx_runtime.JSX.Element;
declare function MultiSelectBadges({ selected, onRemove, className }: {
    selected: string[];
    onRemove: (value: string) => void;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

interface TabItem {
    label: string;
    value: string;
    content: React.ReactNode;
}
interface TabsWrapperProps {
    tabs: TabItem[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    responsive?: boolean;
}
declare function TabsWrapper({ tabs, defaultValue, onChange, className, responsive }: TabsWrapperProps): react_jsx_runtime.JSX.Element;

interface DropdownMenuItemConfig {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "default" | "destructive";
    separator?: boolean;
}
interface DropdownMenuWrapperProps {
    label: React.ReactNode;
    items: DropdownMenuItemConfig[];
    triggerVariant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    align?: "start" | "center" | "end";
    className?: string;
}
declare function DropdownMenuWrapper({ label, items, triggerVariant, align, className, }: DropdownMenuWrapperProps): react_jsx_runtime.JSX.Element;

interface TimePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
}
declare function TimePicker({ value, onChange, placeholder, disabled }: TimePickerProps): react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
}
declare function DatePicker({ value, onChange, placeholder, className }: DatePickerProps): react_jsx_runtime.JSX.Element;

interface DateTimePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    showSeparatePickers?: boolean;
}
declare function DateTimePicker({ value, onChange, placeholder, showSeparatePickers }: DateTimePickerProps): react_jsx_runtime.JSX.Element;

interface DateRangePickerProps {
    className?: string;
    date?: DateRange;
    onDateChange?: (date: DateRange | undefined) => void;
}
declare function DateRangePicker({ className, date, onDateChange }: DateRangePickerProps): react_jsx_runtime.JSX.Element;

declare const cardVariants: (props?: ({
    elevation?: "success" | "warning" | "error" | "default" | "resting" | "hovered" | "pressed" | "focused" | "elevated" | null | undefined;
    status?: "success" | "warning" | "error" | "info" | "neutral" | "default" | null | undefined;
    interactive?: boolean | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Textarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function showSuccess(_message?: string): void;
declare function showError(message: string): void;

export { APP_ICON_NAMES, Accordion, AccordionContent, AccordionItem, AccordionTrigger, AppIcon, type AppIconProps, Badge, type BadgeProps, Button, type ButtonProps, Calendar, type CalendarProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Checkbox, type Column, ConfirmDialog, type ConfirmDialogProps, DatePicker, type DatePickerProps, DateRangePicker, type DateRangePickerProps, DateTimePicker, type DateTimePickerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, type DropdownMenuItemConfig, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuWrapper, type DropdownMenuWrapperProps, EmptyState, type EmptyStateProps, type FieldConfig, type FieldOption, type FieldType, FilterBar, type FilterBarProps, type FilterConfig, type FilterOption, FormBuilder, type FormBuilderProps, Input, Label, LoadingButton, type LoadingButtonProps, MultiSelect, MultiSelectBadges, type MultiSelectOption, type MultiSelectProps, Pagination, type PaginationConfig, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, QuantityInput, type QuantityInputProps, ResponsiveTable, ScanInput, type ScanInputProps, ScrollArea, ScrollBar, SearchInput, type SearchInputProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, type SelectionItem, SelectionModal, type SelectionModalProps, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, SidePanel, type SidePanelProps, StatusBadge, type StatusBadgeProps, type StatusColors, type TabItem, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, TabsWrapper, type TabsWrapperProps, Textarea, TimePicker, type TimePickerProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cardVariants, cn, createExpressiveClasses, enhancedButtonClasses, enhancedStatusColors, getAnimationClasses, getButtonEnhancedClasses, getStatusClasses, showError, showSuccess, statusRingClasses, toast, useMediaQuery, useMobile, useToast };
