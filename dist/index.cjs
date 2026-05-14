"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  APP_ICON_NAMES: () => APP_ICON_NAMES,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AppIcon: () => AppIcon,
  Badge: () => Badge,
  Button: () => Button,
  Calendar: () => Calendar,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ConfirmDialog: () => ConfirmDialog,
  ContentSection: () => ContentSection,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  DropdownMenuWrapper: () => DropdownMenuWrapper,
  EmptyState: () => EmptyState,
  FieldType: () => FieldType,
  FilterBar: () => FilterBar,
  FormBuilder: () => FormBuilder,
  ImageCaptureModal: () => ImageCaptureModal,
  ImageCaptureTrigger: () => ImageCaptureTrigger,
  ImageCard: () => ImageCard,
  ImageGallery: () => ImageGallery,
  ImagePreviewDialog: () => ImagePreviewDialog,
  Input: () => Input,
  Label: () => Label2,
  LoadingButton: () => LoadingButton,
  MultiSelect: () => MultiSelect,
  MultiSelectBadges: () => MultiSelectBadges,
  PageHeader: () => PageHeader,
  PageLayout: () => PageLayout,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  QuantityInput: () => QuantityInput,
  QuantityInputModal: () => QuantityInputModal,
  RadioGroup: () => RadioGroup2,
  RadioGroupItem: () => RadioGroupItem,
  ResponsiveTable: () => ResponsiveTable,
  ScanInput: () => ScanInput,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  SearchInput: () => SearchInput,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  SelectionModal: () => SelectionModal,
  Separator: () => Separator3,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetOverlay: () => SheetOverlay,
  SheetPortal: () => SheetPortal,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  SkuProductDetails: () => SkuProductDetails,
  SmallToteCard: () => SmallToteCard,
  SortOptions: () => SortOptions,
  StatsCard: () => StatsCard,
  StatsGrid: () => StatsGrid,
  StatusBadge: () => StatusBadge,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  TabsWrapper: () => TabsWrapper,
  Textarea: () => Textarea,
  TimePicker: () => TimePicker,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toaster: () => Toaster,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cardVariants: () => cardVariants,
  cn: () => cn,
  compressImage: () => compressImage,
  createExpressiveClasses: () => createExpressiveClasses,
  enhancedButtonClasses: () => enhancedButtonClasses,
  enhancedStatusColors: () => enhancedStatusColors,
  getAnimationClasses: () => getAnimationClasses,
  getButtonEnhancedClasses: () => getButtonEnhancedClasses,
  getStatusClasses: () => getStatusClasses,
  getStatusVariant: () => getStatusVariant,
  needsCompression: () => needsCompression,
  showError: () => showError,
  showSuccess: () => showSuccess,
  statusRingClasses: () => statusRingClasses,
  toast: () => toast,
  useMediaQuery: () => useMediaQuery,
  useMobile: () => useMobile,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/utils/expressive-design.ts
var enhancedStatusColors = {
  success: { text: "text-green-600", bg: "bg-green-50", border: "border-green-200", hover: "hover:bg-green-100", active: "bg-green-100" },
  warning: { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", hover: "hover:bg-amber-100", active: "bg-amber-100" },
  error: { text: "text-red-600", bg: "bg-red-50", border: "border-red-200", hover: "hover:bg-red-100", active: "bg-red-100" },
  info: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", hover: "hover:bg-blue-100", active: "bg-blue-100" },
  neutral: { text: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200", hover: "hover:bg-gray-100", active: "bg-gray-100" }
};
var statusRingClasses = {
  success: "ring-success",
  warning: "ring-warning",
  error: "ring-error",
  info: "ring-info"
};
var enhancedButtonClasses = {
  primary: { base: "btn-enhanced-primary" },
  secondary: { base: "btn-enhanced-secondary" },
  success: { base: "btn-enhanced-success" },
  danger: { base: "btn-enhanced-danger" }
};
var getStatusClasses = (status, variant = "default") => {
  const cfg = enhancedStatusColors[status];
  if (!cfg) return "";
  if (variant === "hover") return cfg.hover;
  if (variant === "active") return cfg.active;
  return `${cfg.text} ${cfg.bg} ${cfg.border}`;
};
var getButtonEnhancedClasses = (variant, _size, status) => {
  const cfg = enhancedButtonClasses[variant];
  if (!cfg) return "";
  let classes = cfg.base;
  if (status && statusRingClasses[status]) {
    classes += ` ${statusRingClasses[status]}`;
  }
  return classes;
};
var getAnimationClasses = (_animation) => "";
var createExpressiveClasses = (options) => {
  const classes = [];
  if (options.status) classes.push(getStatusClasses(options.status));
  return classes.filter(Boolean).join(" ");
};

// src/hooks/useMediaQuery.ts
var import_react = require("react");
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);
  return matches;
}

// src/hooks/useMobile.ts
var MOBILE_BREAKPOINT = 768;
function useMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
}

// src/components/Button/index.tsx
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "btn-enhanced-success",
        danger: "btn-enhanced-danger",
        primary: "btn-enhanced-primary",
        secondary: "btn-enhanced-secondary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      },
      status: {
        default: "",
        success: "ring-success",
        warning: "ring-warning",
        error: "ring-error",
        info: "ring-info"
      },
      elevation: {
        default: "",
        resting: "elevation-resting",
        hovered: "elevation-hovered",
        pressed: "elevation-pressed",
        focused: "elevation-focused",
        elevated: "elevation-elevated"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      status: "default",
      elevation: "default"
    }
  }
);
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, status, elevation, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "status", "elevation", "asChild"]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    let enhancedClasses = "";
    if (variant && ["success", "danger", "primary", "secondary"].includes(variant)) {
      const sizeStr = size != null ? size : "default";
      const statusStr = status != null ? status : "default";
      enhancedClasses = getButtonEnhancedClasses(variant, sizeStr, statusStr);
    }
    let statusClasses = "";
    if (status && status !== "default") {
      statusClasses = getStatusClasses(status);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      __spreadValues({
        className: cn(
          buttonVariants({ variant, size, status, elevation }),
          enhancedClasses,
          statusClasses,
          className
        ),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// src/components/Input/index.tsx
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// src/components/Select/index.tsx
var React3 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-[150] max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/Table/index.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Table = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("table", __spreadValues({ ref, className: cn("w-full caption-bottom text-sm", className) }, props)) });
  }
);
Table.displayName = "Table";
var TableHeader = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
  }
);
TableHeader.displayName = "TableHeader";
var TableBody = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tbody", __spreadValues({ ref, className: cn("[&_tr:last-child]:border-0", className) }, props));
  }
);
TableBody.displayName = "TableBody";
var TableFooter = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tfoot", __spreadValues({ ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className) }, props));
  }
);
TableFooter.displayName = "TableFooter";
var TableRow = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "tr",
      __spreadValues({
        ref,
        className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)
      }, props)
    );
  }
);
TableRow.displayName = "TableRow";
var TableHead = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "th",
      __spreadValues({
        ref,
        className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
      }, props)
    );
  }
);
TableHead.displayName = "TableHead";
var TableCell = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "td",
      __spreadValues({
        ref,
        className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
      }, props)
    );
  }
);
TableCell.displayName = "TableCell";
var TableCaption = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("caption", __spreadValues({ ref, className: cn("mt-4 text-sm text-muted-foreground", className) }, props));
  }
);
TableCaption.displayName = "TableCaption";

// src/components/Badge/index.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        flat: "border-transparent bg-primary-100 text-primary-800 hover:bg-primary-200/80",
        success: "status-success status-success-hover",
        warning: "status-warning status-warning-hover",
        error: "status-error status-error-hover",
        info: "status-info status-info-hover",
        neutral: "status-neutral status-neutral-hover"
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      },
      color: {
        default: "",
        primary: "bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        danger: "bg-red-100 text-red-800 hover:bg-red-200"
      },
      animation: {
        default: "",
        pulse: "animate-pulse-custom",
        bounce: "animate-bounce-custom",
        success: "animate-success",
        error: "animate-error",
        warning: "animate-warning"
      },
      elevation: {
        default: "",
        resting: "elevation-resting",
        hovered: "elevation-hovered",
        elevated: "elevation-elevated"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "default",
      elevation: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, { className, variant, size, color, animation, elevation, status } = _b, props = __objRest(_b, ["className", "variant", "size", "color", "animation", "elevation", "status"]);
  const enhancedClasses = createExpressiveClasses({ status: status != null ? status : void 0 });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    __spreadValues({
      className: cn(
        badgeVariants({ variant, size, animation, elevation }),
        color && badgeVariants({ color }),
        enhancedClasses,
        className
      )
    }, props)
  );
}

// src/components/Label/index.tsx
var React5 = __toESM(require("react"), 1);
var LabelPrimitive = __toESM(require("@radix-ui/react-label"), 1);
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority3.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LabelPrimitive.Root, __spreadValues({ ref, className: cn(labelVariants(), className) }, props));
});
Label2.displayName = LabelPrimitive.Root.displayName;

// src/components/Checkbox/index.tsx
var React6 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Checkbox = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Check, { className: "h-4 w-4" }) })
    })
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/Tooltip/index.tsx
var React7 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React7.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/Popover/index.tsx
var React8 = __toESM(require("react"), 1);
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React8.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/Dialog/index.tsx
var React9 = __toESM(require("react"), 1);
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-[100] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React9.forwardRef((_a, ref) => {
  var _b = _a, { className, children, hideCloseButton } = _b, props = __objRest(_b, ["className", "children", "hideCloseButton"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-[100] grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.X, { className: "h-4 w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", __spreadValues({ className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", __spreadValues({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Sheet/index.tsx
var React10 = __toESM(require("react"), 1);
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_class_variance_authority4 = require("class-variance-authority");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React10.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SheetPrimitive.Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority4.cva)(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: { side: "right" }
  }
);
var SheetContent = React10.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children, hideCloseButton } = _b, props = __objRest(_b, ["side", "className", "children", "hideCloseButton"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetPrimitive.Content, __spreadProps(__spreadValues({ ref, className: cn(sheetVariants({ side }), className) }, props), { children: [
      children,
      !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetPrimitive.Close, { className: "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.X, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: "Close" })
      ] })
    ] }))
  ] });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", __spreadValues({ className: cn("flex flex-col space-y-2 text-center sm:text-left", className) }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", __spreadValues({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React10.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetPrimitive.Title, __spreadValues({ ref, className: cn("text-lg font-semibold text-foreground", className) }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React10.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetPrimitive.Description, __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/Tabs/index.tsx
var React11 = __toESM(require("react"), 1);
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var TabsList = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className)
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:shadow-sm",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/ScrollArea/index.tsx
var React12 = __toESM(require("react"), 1);
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var ScrollArea = React12.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(ScrollAreaPrimitive.Root, __spreadProps(__spreadValues({ ref, className: cn("relative overflow-hidden", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ScrollBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ScrollAreaPrimitive.Corner, {})
  ] }));
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React12.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    __spreadProps(__spreadValues({
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
    })
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/DropdownMenu/index.tsx
var React13 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ChevronRight, { className: "ml-auto" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React13.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React13.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React13.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", __spreadValues({ className: cn("ml-auto text-xs tracking-widest opacity-60", className) }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Calendar/index.tsx
var React14 = __toESM(require("react"), 1);
var import_lucide_react6 = require("lucide-react");
var import_date_fns = require("date-fns");
var import_jsx_runtime15 = require("react/jsx-runtime");
function Calendar({
  mode = "single",
  selected,
  onSelect,
  defaultMonth = /* @__PURE__ */ new Date(),
  numberOfMonths = 1,
  className,
  disabled = false,
  showOutsideDays = true
}) {
  const [currentMonth, setCurrentMonth] = React14.useState(defaultMonth);
  const [rangeStart, setRangeStart] = React14.useState(
    mode === "range" && selected && typeof selected === "object" && "from" in selected && selected.from ? selected.from : null
  );
  React14.useEffect(() => {
    if (defaultMonth) {
      setCurrentMonth(
        (prev) => prev.getFullYear() === defaultMonth.getFullYear() && prev.getMonth() === defaultMonth.getMonth() ? prev : defaultMonth
      );
    }
  }, [defaultMonth]);
  const monthStart = (0, import_date_fns.startOfMonth)(currentMonth);
  const monthEnd = (0, import_date_fns.endOfMonth)(currentMonth);
  const calendarStart = (0, import_date_fns.startOfWeek)(monthStart, { weekStartsOn: 0 });
  const calendarEnd = (0, import_date_fns.endOfWeek)(monthEnd, { weekStartsOn: 0 });
  const days = (0, import_date_fns.eachDayOfInterval)({ start: calendarStart, end: calendarEnd });
  const handleDateClick = (day) => {
    if (disabled) return;
    if (mode === "single") {
      onSelect == null ? void 0 : onSelect(day);
    } else {
      const currentRange = selected;
      if (!rangeStart || (currentRange == null ? void 0 : currentRange.from) && (currentRange == null ? void 0 : currentRange.to)) {
        const newRange = { from: day, to: void 0 };
        setRangeStart(day);
        onSelect == null ? void 0 : onSelect(newRange);
      } else if (rangeStart) {
        const from = day < rangeStart ? day : rangeStart;
        const to = day < rangeStart ? rangeStart : day;
        setRangeStart(null);
        onSelect == null ? void 0 : onSelect({ from, to });
      }
    }
  };
  const isSelected = (day) => {
    if (!selected) return false;
    if (mode === "single") {
      return (0, import_date_fns.isSameDay)(day, selected);
    } else {
      const range = selected;
      return range.from && (0, import_date_fns.isSameDay)(day, range.from) || range.to && (0, import_date_fns.isSameDay)(day, range.to);
    }
  };
  const isInRange = (day) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) return false;
    const range = selected;
    if (!range.from || !range.to) return false;
    return day >= range.from && day <= range.to;
  };
  const isRangeStart = (day) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) return false;
    const range = selected;
    return range.from ? (0, import_date_fns.isSameDay)(day, range.from) : false;
  };
  const isRangeEnd = (day) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) return false;
    const range = selected;
    return range.to ? (0, import_date_fns.isSameDay)(day, range.to) : false;
  };
  const isToday = (day) => {
    return (0, import_date_fns.isSameDay)(day, /* @__PURE__ */ new Date());
  };
  const isOutsideMonth = (day) => {
    return !(0, import_date_fns.isSameMonth)(day, currentMonth);
  };
  const previousMonth = () => {
    setCurrentMonth((0, import_date_fns.subMonths)(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth((0, import_date_fns.addMonths)(currentMonth, 1));
  };
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const months = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const monthDate = (0, import_date_fns.addMonths)(currentMonth, i);
    const monthStart2 = (0, import_date_fns.startOfMonth)(monthDate);
    const monthEnd2 = (0, import_date_fns.endOfMonth)(monthDate);
    const calendarStart2 = (0, import_date_fns.startOfWeek)(monthStart2, { weekStartsOn: 0 });
    const calendarEnd2 = (0, import_date_fns.endOfWeek)(monthEnd2, { weekStartsOn: 0 });
    const monthDays = (0, import_date_fns.eachDayOfInterval)({ start: calendarStart2, end: calendarEnd2 });
    months.push({ date: monthDate, days: monthDays });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn("p-3", className), children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn(
    "flex",
    numberOfMonths > 1 ? "flex-row gap-6" : "flex-col"
  ), children: months.map((month, monthIdx) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "rounded-md border bg-card p-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [
      monthIdx === 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "button",
        {
          onClick: previousMonth,
          className: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8 p-0 opacity-50 hover:opacity-100"
          ),
          disabled,
          type: "button",
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      monthIdx > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-sm font-medium flex-1 text-center", children: (0, import_date_fns.format)(month.date, "MMMM yyyy") }),
      monthIdx === months.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "button",
        {
          onClick: nextMonth,
          className: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8 p-0 opacity-50 hover:opacity-100"
          ),
          disabled,
          type: "button",
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.ChevronRight, { className: "h-4 w-4" })
        }
      ),
      monthIdx < months.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-7 gap-1 mb-2", children: weekDays.map((day) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "text-muted-foreground text-xs font-medium text-center h-8 flex items-center justify-center",
        children: day
      },
      day
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-7 gap-1", children: month.days.map((day, idx) => {
      const selected2 = isSelected(day);
      const inRange = isInRange(day);
      const rangeStart2 = isRangeStart(day);
      const rangeEnd = isRangeEnd(day);
      const today = isToday(day);
      const outside = isOutsideMonth(day);
      if (!showOutsideDays && outside) {
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "h-9 w-9" }, idx);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "button",
        {
          onClick: () => handleDateClick(day),
          disabled,
          type: "button",
          className: cn(
            "h-9 w-9 text-sm rounded-md transition-colors relative",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            outside && "text-muted-foreground opacity-50",
            today && !selected2 && "bg-accent font-semibold",
            selected2 && "bg-primary text-primary-foreground hover:bg-primary",
            inRange && !selected2 && "bg-primary/10",
            rangeStart2 && "rounded-l-md",
            rangeEnd && "rounded-r-md",
            disabled && "cursor-not-allowed opacity-50"
          ),
          children: (0, import_date_fns.format)(day, "d")
        },
        idx
      );
    }) })
  ] }, monthIdx)) }) });
}
console.log("\u{1F680} CUSTOM CALENDAR ACTIVE");

// src/components/Pagination/index.tsx
var React15 = __toESM(require("react"), 1);
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", __spreadValues({ role: "navigation", "aria-label": "pagination", className: cn("mx-auto flex w-full justify-center", className) }, props));
};
Pagination.displayName = "Pagination";
var PaginationContent = React15.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", __spreadValues({ ref, className: cn("flex flex-row items-center gap-1", className) }, props));
  }
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React15.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", __spreadValues({ ref, className: cn("", className) }, props));
  }
);
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, { className, isActive, size = "icon" } = _b, props = __objRest(_b, ["className", "isActive", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className)
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(PaginationLink, __spreadProps(__spreadValues({ "aria-label": "Go to previous page", size: "default", className: cn("gap-1 pl-2.5", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react7.ChevronLeft, { className: "h-4 w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Previous" })
  ] }));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(PaginationLink, __spreadProps(__spreadValues({ "aria-label": "Go to next page", size: "default", className: cn("gap-1 pr-2.5", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Next" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react7.ChevronRight, { className: "h-4 w-4" })
  ] }));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", __spreadProps(__spreadValues({ "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react7.MoreHorizontal, { className: "h-4 w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "sr-only", children: "More pages" })
  ] }));
};
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/Toast/toast.tsx
var React16 = __toESM(require("react"), 1);
var ToastPrimitives = __toESM(require("@radix-ui/react-toast"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React16.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    ToastPrimitives.Viewport,
    __spreadValues({
      ref,
      className: cn("fixed top-4 right-4 z-[9999] flex w-full max-w-xs flex-col items-end gap-2", className)
    }, props)
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority5.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl border px-4 py-2.5 pr-8 shadow-2xl transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-top-full",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-black/85 text-white backdrop-blur-md",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-white/10 bg-black/85 text-white backdrop-blur-md",
        neutral: "border bg-background text-foreground"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Toast = React16.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ToastPrimitives.Root, __spreadValues({ ref, className: cn(toastVariants({ variant }), className) }, props));
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React16.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    ToastPrimitives.Action,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )
    }, props)
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React16.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    ToastPrimitives.Close,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/60 opacity-0 transition-opacity hover:text-white group-hover:opacity-100 focus:outline-none focus:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50",
        className
      ),
      "toast-close": ""
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react8.X, { className: "h-3.5 w-3.5" })
    })
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React16.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ToastPrimitives.Title, __spreadValues({ ref, className: cn("text-sm font-semibold [&+div]:text-xs", className) }, props));
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React16.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ToastPrimitives.Description, __spreadValues({ ref, className: cn("text-sm opacity-90", className) }, props));
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/Toast/use-toast.ts
var React17 = __toESM(require("react"), 1);
var TOAST_LIMIT = 5;
var TOAST_REMOVE_DELAY = 1e3;
var SUCCESS_DURATION = 1e3;
var PLEASE_WAIT_MS = 350;
var actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return __spreadProps(__spreadValues({}, state), { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) });
    case actionTypes.UPDATE_TOAST:
      return __spreadProps(__spreadValues({}, state), { toasts: state.toasts.map((t) => t.id === action.toast.id ? __spreadValues(__spreadValues({}, t), action.toast) : t) });
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;
      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));
      return __spreadProps(__spreadValues({}, state), { toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? __spreadProps(__spreadValues({}, t), { open: false }) : t) });
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === void 0) return __spreadProps(__spreadValues({}, state), { toasts: [] });
      return __spreadProps(__spreadValues({}, state), { toasts: state.toasts.filter((t) => t.id !== action.toastId) });
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}
var activeSuccessId = null;
var activeSuccessDismissFn = null;
var activeSuccessExpireTimer = null;
var activeSuccessResetTimer = null;
function clearSuccessTimers() {
  if (activeSuccessExpireTimer) {
    clearTimeout(activeSuccessExpireTimer);
    activeSuccessExpireTimer = null;
  }
  if (activeSuccessResetTimer) {
    clearTimeout(activeSuccessResetTimer);
    activeSuccessResetTimer = null;
  }
}
function clearSuccessState() {
  clearSuccessTimers();
  activeSuccessId = null;
  activeSuccessDismissFn = null;
}
function toast(_a) {
  var props = __objRest(_a, []);
  const isSuccess = !props.variant || props.variant === "default" || props.variant === "success";
  if (isSuccess && activeSuccessId) {
    const currentId = activeSuccessId;
    const currentDismiss = activeSuccessDismissFn;
    clearSuccessTimers();
    dispatch({ type: actionTypes.UPDATE_TOAST, toast: { id: currentId, title: "Please wait\u2026", description: void 0 } });
    activeSuccessResetTimer = setTimeout(() => {
      dispatch({ type: actionTypes.UPDATE_TOAST, toast: { id: currentId, title: props.title, description: props.description } });
    }, PLEASE_WAIT_MS);
    activeSuccessExpireTimer = setTimeout(() => {
      currentDismiss();
      clearSuccessState();
    }, PLEASE_WAIT_MS + SUCCESS_DURATION);
    const update2 = (p) => dispatch({ type: actionTypes.UPDATE_TOAST, toast: __spreadProps(__spreadValues({}, p), { id: currentId }) });
    return { id: currentId, dismiss: currentDismiss, update: update2 };
  }
  const id = genId();
  const update = (p) => dispatch({ type: actionTypes.UPDATE_TOAST, toast: __spreadProps(__spreadValues({}, p), { id }) });
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: __spreadProps(__spreadValues({}, props), {
      id,
      createdAt: /* @__PURE__ */ new Date(),
      open: true,
      onOpenChange: (open) => {
        if (!open) {
          dismiss();
          if (isSuccess && activeSuccessId === id) clearSuccessState();
        }
      }
    })
  });
  if (isSuccess) {
    activeSuccessId = id;
    activeSuccessDismissFn = dismiss;
    clearSuccessTimers();
    activeSuccessExpireTimer = setTimeout(() => {
      dismiss();
      clearSuccessState();
    }, SUCCESS_DURATION);
  }
  return { id, dismiss, update };
}
function useToast() {
  const [state, setState] = React17.useState(memoryState);
  React17.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, [state]);
  return __spreadProps(__spreadValues({}, state), { toast, dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }) });
}

// src/components/Toast/toaster.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(ToastProvider, { duration: 3e3, children: [
    toasts.map((_a) => {
      var _b = _a, { id, title, description, action, createdAt: _createdAt } = _b, props = __objRest(_b, ["id", "title", "description", "action", "createdAt"]);
      const duration = 864e5;
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Toast, __spreadProps(__spreadValues({}, props), { duration, children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex-1 min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ToastTitle, { children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          ToastClose,
          {
            className: props.variant === "destructive" ? "top-2 translate-y-0 opacity-100" : void 0
          }
        )
      ] }), id);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ToastViewport, {})
  ] });
}

// src/components/AppIcon/index.tsx
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var ICON_MAP = {
  // Actions
  edit: import_lucide_react9.Pencil,
  delete: import_lucide_react9.Trash2,
  add: import_lucide_react9.Plus,
  remove: import_lucide_react9.Minus,
  close: import_lucide_react9.X,
  check: import_lucide_react9.Check,
  view: import_lucide_react9.Eye,
  hide: import_lucide_react9.EyeOff,
  download: import_lucide_react9.Download,
  upload: import_lucide_react9.Upload,
  refresh: import_lucide_react9.RefreshCw,
  copy: import_lucide_react9.Copy,
  print: import_lucide_react9.Printer,
  logout: import_lucide_react9.LogOut,
  lock: import_lucide_react9.Lock,
  unlock: import_lucide_react9.Unlock,
  // Navigation
  "arrow-left": import_lucide_react9.ArrowLeft,
  "arrow-right": import_lucide_react9.ArrowRight,
  "chevron-down": import_lucide_react9.ChevronDown,
  "chevron-up": import_lucide_react9.ChevronUp,
  "chevron-left": import_lucide_react9.ChevronLeft,
  "chevron-right": import_lucide_react9.ChevronRight,
  // UI
  search: import_lucide_react9.Search,
  filter: import_lucide_react9.Filter,
  settings: import_lucide_react9.Settings,
  list: import_lucide_react9.List,
  grid: import_lucide_react9.Grid2x2,
  // Domain
  user: import_lucide_react9.User,
  bell: import_lucide_react9.Bell,
  package: import_lucide_react9.Package,
  truck: import_lucide_react9.Truck,
  warehouse: import_lucide_react9.Warehouse,
  scan: import_lucide_react9.ScanBarcode,
  chart: import_lucide_react9.BarChart2,
  file: import_lucide_react9.FileText,
  pin: import_lucide_react9.MapPin,
  calendar: import_lucide_react9.Calendar,
  clock: import_lucide_react9.Clock,
  tag: import_lucide_react9.Tag,
  gate: import_lucide_react9.DoorOpen,
  // Status
  error: import_lucide_react9.AlertCircle,
  success: import_lucide_react9.CheckCircle2,
  info: import_lucide_react9.Info
};
function AppIcon({ name, size = 16, className }) {
  var _a;
  const IconComponent = (_a = ICON_MAP[name]) != null ? _a : import_lucide_react9.HelpCircle;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IconComponent, { size, className: cn(className) });
}
var APP_ICON_NAMES = Object.keys(ICON_MAP);

// src/components/LoadingButton/index.tsx
var React18 = __toESM(require("react"), 1);
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var LoadingButton = React18.forwardRef(
  (_a, ref) => {
    var _b = _a, { loading, disabled, children, variant, className } = _b, props = __objRest(_b, ["loading", "disabled", "children", "variant", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      Button,
      __spreadProps(__spreadValues({
        ref,
        variant,
        disabled: disabled || loading,
        className: cn("active:scale-95 transition-all duration-200", className)
      }, props), {
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react10.Loader2, { className: "animate-spin" }),
          children
        ]
      })
    );
  }
);
LoadingButton.displayName = "LoadingButton";

// src/components/SearchInput/index.tsx
var React19 = __toESM(require("react"), 1);
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var SearchInput = React19.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, placeholder = "Search..." } = _b, props = __objRest(_b, ["className", "placeholder"]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react11.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Input, __spreadValues({ ref, placeholder, className: cn("pl-9", className) }, props))
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/components/EmptyState/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: cn("flex flex-col items-center justify-center py-10 px-4 text-center", className), children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mb-3 text-muted-foreground", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm font-medium text-foreground", children: title }),
    description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-1 text-xs text-muted-foreground max-w-xs", children: description }),
    action && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mt-4", children: action })
  ] });
}

// src/components/ScanInput/index.tsx
var React20 = __toESM(require("react"), 1);
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function ScanInput({
  value,
  onChange,
  quantity,
  onQuantityChange,
  onScan,
  placeholder = "Scan barcode...",
  disabled = false,
  className,
  showQuantity = true
}) {
  const inputRef = React20.useRef(null);
  React20.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) onScan(value, quantity);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "relative flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react12.ScanBarcode, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Input,
        {
          ref: inputRef,
          value,
          onChange: (e) => onChange(e.target.value),
          onKeyDown: handleKeyDown,
          placeholder,
          disabled,
          className: "pl-9 h-10",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: false
        }
      )
    ] }),
    showQuantity && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: cn("flex items-center border rounded-md overflow-hidden shrink-0", disabled && "opacity-50 cursor-not-allowed"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => onQuantityChange(Math.max(1, quantity - 1)),
          disabled: disabled || quantity <= 1,
          className: "h-10 w-9 rounded-none border-r px-0 text-muted-foreground hover:text-foreground",
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react12.Minus, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: cn("w-10 text-center text-sm font-medium tabular-nums select-none", disabled && "text-muted-foreground"), children: quantity }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => onQuantityChange(quantity + 1),
          disabled,
          className: "h-10 w-9 rounded-none border-l px-0 text-muted-foreground hover:text-foreground",
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react12.Plus, { className: "h-3.5 w-3.5" })
        }
      )
    ] })
  ] });
}

// src/components/StatusBadge/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var defaultStatusMapping = {
  active: "success",
  inactive: "default",
  pending: "warning",
  processing: "info",
  completed: "success",
  cancelled: "error",
  shipped: "success",
  delivered: "success",
  returned: "warning",
  critical: "error",
  low: "warning",
  medium: "info",
  high: "success"
};
function getStatusVariant(status, statusMapping) {
  const mapping = statusMapping || defaultStatusMapping;
  return mapping[status.toLowerCase()] || "default";
}
function StatusBadge({ status, className, size = "default", statusMapping }) {
  const sizeClasses = {
    sm: "text-xs py-0 px-2",
    default: "text-xs py-1 px-2.5",
    lg: "text-sm py-1 px-3"
  };
  const variant = getStatusVariant(status, statusMapping);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Badge, { variant, className: cn(sizeClasses[size], className), children: status });
}

// src/components/QuantityInput/index.tsx
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function QuantityInput({ value, onChange, min = 0, max, step = 1, disabled = false, className }) {
  const decrement = () => {
    const next = value - step;
    if (next >= min) onChange(next);
  };
  const increment = () => {
    const next = value + step;
    if (max === void 0 || next <= max) onChange(next);
  };
  const canDecrement = !disabled && value - step >= min;
  const canIncrement = !disabled && (max === void 0 || value + step <= max);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: cn("flex items-center border rounded-md overflow-hidden w-fit", disabled && "opacity-50 cursor-not-allowed", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: decrement,
        disabled: !canDecrement,
        className: "h-10 w-10 sm:h-9 sm:w-9 rounded-none border-r px-0 text-muted-foreground hover:text-foreground",
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react13.Minus, { className: "h-3.5 w-3.5" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: cn("min-w-[2.5rem] px-2 text-center text-sm font-medium tabular-nums select-none", disabled && "text-muted-foreground"), children: value }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: increment,
        disabled: !canIncrement,
        className: "h-10 w-10 sm:h-9 sm:w-9 rounded-none border-l px-0 text-muted-foreground hover:text-foreground",
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react13.Plus, { className: "h-3.5 w-3.5" })
      }
    )
  ] });
}

// src/components/ConfirmDialog/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Dialog, { open, onOpenChange: (isOpen) => {
    if (!isOpen) onClose();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DialogContent, { hideCloseButton: true, className: cn("w-[calc(100vw-2rem)] max-w-md", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DialogDescription, { className: "pt-2", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DialogFooter, { className: "gap-2 sm:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(LoadingButton, { variant: "secondary", onClick: onClose, children: cancelText }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(LoadingButton, { variant: variant === "destructive" ? "destructive" : "primary", onClick: onConfirm, children: confirmText })
    ] })
  ] }) });
}

// src/components/SelectionModal/index.tsx
var React21 = __toESM(require("react"), 1);
var import_lucide_react15 = require("lucide-react");

// src/components/ImageGallery/index.tsx
var import_react2 = require("react");
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function ImageGallery({
  imageUrls,
  alt = "Image",
  className,
  imageClassName,
  compact = false,
  disableLightbox = false
}) {
  const [index, setIndex] = (0, import_react2.useState)(0);
  const [lightboxOpen, setLightboxOpen] = (0, import_react2.useState)(false);
  const [hasError, setHasError] = (0, import_react2.useState)(false);
  const safeIndex = Math.min(index, imageUrls.length - 1);
  (0, import_react2.useEffect)(() => {
    setHasError(false);
  }, [safeIndex]);
  if (!imageUrls.length) return null;
  const current = imageUrls[safeIndex];
  const hasMultiple = imageUrls.length > 1;
  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => Math.min(imageUrls.length - 1, i + 1));
  };
  const defaultImgClass = cn(
    "w-full aspect-square object-contain rounded-lg border bg-gray-50",
    !disableLightbox && "cursor-zoom-in"
  );
  const NavButtons = ({ size }) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "button",
      {
        type: "button",
        className: cn(
          "absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-r disabled:opacity-20",
          size === "sm" ? "p-0.5" : "p-1"
        ),
        disabled: safeIndex === 0,
        onClick: prev,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react14.ChevronLeft, { className: size === "sm" ? "h-3 w-3" : "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: cn(
      "absolute bottom-1 left-1/2 -translate-x-1/2 bg-black/40 text-white rounded pointer-events-none",
      size === "sm" ? "text-[8px] px-1" : "text-xs px-1.5 py-0.5"
    ), children: [
      safeIndex + 1,
      "/",
      imageUrls.length
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "button",
      {
        type: "button",
        className: cn(
          "absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-l disabled:opacity-20",
          size === "sm" ? "p-0.5" : "p-1"
        ),
        disabled: safeIndex === imageUrls.length - 1,
        onClick: next,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react14.ChevronRight, { className: size === "sm" ? "h-3 w-3" : "h-4 w-4" })
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cn("relative w-full", className), children: [
      hasError ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cn(
        "w-full aspect-square bg-gray-100 border border-gray-200 flex flex-col items-center justify-center rounded-lg gap-1",
        imageClassName
      ), children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-gray-300", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M21 15l-5-5L5 21" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-[9px] text-gray-400 uppercase tracking-wide", children: "No image" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "img",
        {
          src: current,
          alt,
          className: imageClassName != null ? imageClassName : defaultImgClass,
          onError: () => setHasError(true),
          onClick: () => !disableLightbox && setLightboxOpen(true)
        }
      ),
      hasMultiple && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(NavButtons, { size: compact ? "sm" : "lg" })
    ] }),
    lightboxOpen && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80",
        onClick: () => setLightboxOpen(false),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "button",
            {
              type: "button",
              className: "absolute top-4 right-4 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/70",
              onClick: () => setLightboxOpen(false),
              children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react14.X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "img",
            {
              src: current,
              alt,
              className: "max-h-[90vh] max-w-[90vw] object-contain rounded-lg",
              onClick: (e) => e.stopPropagation()
            }
          ),
          hasMultiple && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "button",
              {
                type: "button",
                className: "absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1.5 disabled:opacity-30",
                disabled: safeIndex === 0,
                onClick: prev,
                children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react14.ChevronLeft, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs bg-black/50 px-2 py-0.5 rounded-full pointer-events-none", children: [
              safeIndex + 1,
              " / ",
              imageUrls.length
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "button",
              {
                type: "button",
                className: "absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1.5 disabled:opacity-30",
                disabled: safeIndex === imageUrls.length - 1,
                onClick: next,
                children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react14.ChevronRight, { className: "h-5 w-5" })
              }
            )
          ] })
        ]
      }
    )
  ] });
}

// src/components/SelectionModal/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function SelectionModal({
  open,
  onClose,
  title,
  data,
  onConfirm,
  variant = "list",
  showImagePlaceholder = false,
  multiple = true,
  renderItem
}) {
  const [query, setQuery] = React21.useState("");
  const [selected, setSelected] = React21.useState(/* @__PURE__ */ new Set());
  React21.useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(/* @__PURE__ */ new Set());
    }
  }, [open]);
  const filtered = React21.useMemo(() => {
    if (!query.trim()) return data;
    const lower = query.toLowerCase();
    return data.filter(
      (item) => {
        var _a;
        return item.label.toLowerCase().includes(lower) || ((_a = item.sublabel) == null ? void 0 : _a.toLowerCase().includes(lower));
      }
    );
  }, [data, query]);
  function toggle(id) {
    if (!multiple) {
      setSelected(/* @__PURE__ */ new Set([id]));
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function selectAndClose(item) {
    onConfirm([item]);
    onClose();
  }
  function handleConfirm() {
    onConfirm(data.filter((item) => selected.has(item.id)));
    onClose();
  }
  const emptyState = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(EmptyState, { icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react15.SearchX, { className: "size-6" }), title: "No results", description: "Try a different search term.", className: "py-8" });
  function renderCardItem(item) {
    var _a;
    const isSelected = selected.has(item.id);
    if (renderItem) return renderItem(item, isSelected, () => toggle(item.id));
    const resolvedUrls = ((_a = item.imageUrls) == null ? void 0 : _a.length) ? item.imageUrls : item.imageUrl ? [item.imageUrl] : [];
    const showImage = resolvedUrls.length > 0 || showImagePlaceholder;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => multiple ? toggle(item.id) : selectAndClose(item),
        className: cn(
          "flex items-center gap-3 w-full text-left rounded-lg border p-3 transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30 hover:bg-muted/40"
        ),
        children: [
          showImage && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center", children: resolvedUrls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ImageGallery, { imageUrls: resolvedUrls, alt: item.label, compact: true, disableLightbox: true }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-xl font-bold text-gray-400 select-none", children: item.label.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-medium leading-snug truncate", children: item.label }),
            item.sublabel && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-muted-foreground mt-0.5 truncate font-mono", children: item.sublabel }),
            item.attributes && item.attributes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1", children: item.attributes.map((attr) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: attr.label }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-xs font-medium truncate", children: attr.value })
            ] }, attr.label)) })
          ] })
        ]
      },
      item.id
    );
  }
  function renderListItem(item) {
    const isSelected = selected.has(item.id);
    if (renderItem) return renderItem(item, isSelected, () => toggle(item.id));
    if (!multiple) {
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "button",
        {
          type: "button",
          className: "flex items-center gap-3 rounded-md px-2 py-2.5 w-full text-left cursor-pointer hover:bg-accent transition-colors",
          onClick: () => selectAndClose(item),
          children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-medium leading-none truncate", children: item.label }),
            item.sublabel && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: item.sublabel })
          ] })
        },
        item.id
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "flex items-center gap-3 rounded-md px-2 py-2.5 cursor-pointer hover:bg-accent transition-colors", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Checkbox, { checked: isSelected, onCheckedChange: () => toggle(item.id) }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-medium leading-none truncate", children: item.label }),
        item.sublabel && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: item.sublabel })
      ] })
    ] }, item.id);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Dialog, { open, onOpenChange: (o) => {
    if (!o) onClose();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    DialogContent,
    {
      className: cn("w-[calc(100vw-2rem)] p-0 gap-0", variant === "card" ? "sm:max-w-lg" : "sm:max-w-md"),
      hideCloseButton: true,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DialogHeader, { className: "px-6 pt-5 pb-4 border-b", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DialogTitle, { children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "px-6 pt-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SearchInput, { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search..." }) }),
        variant === "card" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "overflow-y-auto max-h-[420px] px-4 pb-2", children: filtered.length === 0 ? emptyState : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "flex flex-col gap-2 py-2", children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(React21.Fragment, { children: renderCardItem(item) }, item.id)) }) }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "overflow-y-auto max-h-[300px] px-4 pb-2", children: filtered.length === 0 ? emptyState : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "space-y-0.5 py-1", children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(React21.Fragment, { children: renderListItem(item) }, item.id)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center justify-between gap-3 px-6 py-4 border-t", children: [
          multiple ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-muted-foreground", children: selected.size > 0 ? `${selected.size} selected` : "None selected" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-muted-foreground", children: "Click an item to select" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LoadingButton, { variant: "secondary", onClick: onClose, children: "Cancel" }),
            multiple && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LoadingButton, { variant: "primary", disabled: selected.size === 0, onClick: handleConfirm, children: "Confirm" })
          ] })
        ] })
      ]
    }
  ) });
}

// src/components/ResponsiveTable/index.tsx
var React22 = __toESM(require("react"), 1);
var import_react3 = require("react");
var import_lucide_react16 = require("lucide-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var ACTIONS_KEY = "__actions__";
function TablePagination({
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions,
  dataLength
}) {
  const isFirst = page <= 1;
  const isLast = dataLength < pageSize;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 border-t", children: [
    onPageSizeChange ? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-xs text-muted-foreground", children: "Rows per page" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Select, { value: String(pageSize), onValueChange: (v) => {
        onPageSizeChange(Number(v));
        onPageChange(1);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SelectTrigger, { className: "h-7 w-[64px] text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SelectContent, { children: (pageSizeOptions != null ? pageSizeOptions : [10, 20, 50]).map((size) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SelectItem, { value: String(size), className: "text-xs", children: size }, size)) })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", {}),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, { variant: "outline", size: "sm", className: "h-7 px-2.5 text-xs gap-1", onClick: () => onPageChange(page - 1), disabled: isFirst, children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.ChevronLeft, { className: "h-3.5 w-3.5" }),
        "Prev"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, { variant: "outline", size: "sm", className: "h-7 px-2.5 text-xs gap-1", onClick: () => {
        if (!isLast) onPageChange(page + 1);
      }, disabled: isLast, children: [
        "Next",
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.ChevronRight, { className: "h-3.5 w-3.5" })
      ] })
    ] })
  ] });
}
function RowActions({ row, onView, onDelete }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-1.5", children: [
    onView && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, { variant: "ghost", size: "sm", className: "h-7 px-2 text-xs gap-1", onClick: () => onView(row), children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.Eye, { className: "h-3.5 w-3.5" }),
      "View"
    ] }),
    onDelete && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, { variant: "destructive", size: "sm", className: "h-7 px-2 text-xs gap-1", onClick: () => onDelete(row), children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.Trash2, { className: "h-3.5 w-3.5" }),
      "Delete"
    ] })
  ] });
}
function ResponsiveTable({
  columns,
  data,
  emptyTitle = "No data available",
  emptyDescription,
  className,
  onView,
  onDelete,
  pagination,
  defaultVisibleColumns,
  onColumnChange
}) {
  const isMobile = useMobile();
  const hasActions = !!(onView || onDelete);
  const dropdownEntries = React22.useMemo(
    () => [...columns, ...hasActions ? [{ key: ACTIONS_KEY, label: "Actions", hideable: true }] : []],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns, hasActions]
  );
  const [visibleKeys, setVisibleKeys] = (0, import_react3.useState)(
    () => new Set(defaultVisibleColumns != null ? defaultVisibleColumns : dropdownEntries.map((c) => c.key))
  );
  const toggleKey = (key) => {
    setVisibleKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      onColumnChange == null ? void 0 : onColumnChange([...next]);
      return next;
    });
  };
  const visibleDataColumns = columns.filter((c) => visibleKeys.has(c.key));
  const showActions = hasActions && visibleKeys.has(ACTIONS_KEY);
  const columnSelector = /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, { variant: "outline", size: "sm", className: "h-7 gap-1.5 text-xs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.Columns2, { className: "h-3.5 w-3.5" }),
      "Columns"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuContent, { align: "end", className: "w-40", children: dropdownEntries.map((entry) => {
      const isForced = entry.hideable === false;
      return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        DropdownMenuCheckboxItem,
        {
          checked: visibleKeys.has(entry.key),
          disabled: isForced,
          onCheckedChange: () => {
            if (!isForced) toggleKey(entry.key);
          },
          children: entry.label
        },
        entry.key
      );
    }) })
  ] });
  if (data.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "rounded-lg border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex justify-end px-4 py-2 border-b", children: columnSelector }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(EmptyState, { icon: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react16.TableIcon, { className: "size-7" }), title: emptyTitle, description: emptyDescription, className: "py-12" }),
      pagination && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TablePagination, __spreadProps(__spreadValues({}, pagination), { dataLength: data.length }))
    ] });
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: `space-y-3 ${className != null ? className : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex justify-end", children: columnSelector }),
      data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "rounded-lg border bg-card p-4 space-y-2 shadow-sm", children: [
        visibleDataColumns.map((col) => {
          const value = row[col.key];
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-xs text-muted-foreground shrink-0", children: col.label }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-sm font-medium text-right", children: col.render ? col.render(value, row) : value == null ? "\u2014" : String(value) })
          ] }, col.key);
        }),
        showActions && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "pt-2 mt-1 border-t", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(RowActions, { row, onView, onDelete }) })
      ] }, i)),
      pagination && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "rounded-lg border bg-card", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TablePagination, __spreadProps(__spreadValues({}, pagination), { dataLength: data.length })) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: `rounded-lg border ${className != null ? className : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex justify-end px-4 py-2 border-b", children: columnSelector }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(TableRow, { children: [
        visibleDataColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableHead, { children: col.label }, col.key)),
        showActions && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableHead, { className: "w-[140px]", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableBody, { children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(TableRow, { children: [
        visibleDataColumns.map((col) => {
          const value = row[col.key];
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableCell, { children: col.render ? col.render(value, row) : value == null ? "\u2014" : String(value) }, col.key);
        }),
        showActions && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(RowActions, { row, onView, onDelete }) })
      ] }, i)) })
    ] }) }),
    pagination && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TablePagination, __spreadProps(__spreadValues({}, pagination), { dataLength: data.length }))
  ] });
}

// src/components/FilterBar/index.tsx
var React23 = __toESM(require("react"), 1);
var import_lucide_react17 = require("lucide-react");
var import_jsx_runtime30 = require("react/jsx-runtime");
function FilterBar({
  filters = [],
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  onApply,
  onReset,
  values: controlledValues,
  onValuesChange,
  additionalFilters,
  filterTriggerClassName = "w-36 h-9 text-sm"
}) {
  const isMobile = useMobile();
  const [expanded, setExpanded] = React23.useState(false);
  const [internalValues, setInternalValues] = React23.useState({});
  const filterValues = controlledValues != null ? controlledValues : internalValues;
  function handleFilterChange(key, value) {
    const next = __spreadProps(__spreadValues({}, filterValues), { [key]: value });
    if (controlledValues === void 0) setInternalValues(next);
    onValuesChange == null ? void 0 : onValuesChange(next);
    onApply(__spreadValues({ search: searchValue }, next));
  }
  function handleApply() {
    onApply(__spreadValues({ search: searchValue }, filterValues));
  }
  function handleReset() {
    if (controlledValues === void 0) setInternalValues({});
    onValuesChange == null ? void 0 : onValuesChange({});
    onSearchChange == null ? void 0 : onSearchChange("");
    onReset();
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-2", children: [
        onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SearchInput, { className: "flex-1", value: searchValue, onChange: (e) => onSearchChange(e.target.value), placeholder: searchPlaceholder }),
        (!expanded || filters.length === 0 && !additionalFilters) && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingButton, { variant: "primary", onClick: handleApply, children: "Search" }),
        (filters.length > 0 || !!additionalFilters) && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: cn("h-9 w-9 shrink-0 transition-colors", expanded && "bg-accent text-accent-foreground border-accent"),
            onClick: () => setExpanded((prev) => !prev),
            "aria-expanded": expanded,
            "aria-label": "Toggle filters",
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react17.Filter, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: cn("grid transition-all duration-300 ease-in-out", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-3 pt-1 pb-1", children: [
        additionalFilters && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { children: additionalFilters }),
        filters.map((filter) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-medium", children: filter.label }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Select, { value: (_a = filterValues[filter.key]) != null ? _a : "", onValueChange: (val) => handleFilterChange(filter.key, val), children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectTrigger, { className: "w-full h-9 text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectValue, { placeholder: `Select ${filter.label}` }) }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectContent, { children: filter.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
            ] })
          ] }, filter.key);
        }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "pt-1 flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingButton, { variant: "secondary", onClick: handleReset, children: "Reset" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingButton, { variant: "primary", onClick: handleApply, children: "Search" })
        ] })
      ] }) }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [
      onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SearchInput, { className: "w-48", value: searchValue, onChange: (e) => onSearchChange(e.target.value), placeholder: searchPlaceholder }),
      additionalFilters && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "min-w-0", children: additionalFilters }),
      filters.map((filter) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Select, { value: (_a = filterValues[filter.key]) != null ? _a : "", onValueChange: (val) => handleFilterChange(filter.key, val), children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectTrigger, { className: filterTriggerClassName, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectValue, { placeholder: filter.label }) }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectContent, { children: filter.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
        ] }, filter.key);
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingButton, { variant: "secondary", onClick: handleReset, children: "Reset" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingButton, { variant: "primary", onClick: handleApply, children: "Search" })
    ] })
  ] });
}

// src/components/FormBuilder/index.tsx
var import_react4 = require("react");

// src/components/Textarea/index.tsx
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime31 = require("react/jsx-runtime");
var Textarea = React24.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "textarea",
    __spreadValues({
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref
    }, props)
  );
});
Textarea.displayName = "Textarea";

// src/components/RadioGroup/index.tsx
var React25 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_lucide_react18 = require("lucide-react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var RadioGroup2 = React25.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(RadioGroupPrimitive.Root, __spreadProps(__spreadValues({ className: cn("grid gap-2", className) }, props), { ref }));
});
RadioGroup2.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React25.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    RadioGroupPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_react18.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/FormBuilder/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["TEXT"] = "text";
  FieldType2["NUMBER"] = "number";
  FieldType2["DATE"] = "date";
  FieldType2["SELECT"] = "select";
  FieldType2["MULTI_SELECT"] = "multiSelect";
  FieldType2["RADIO"] = "radio";
  FieldType2["CHECKBOX"] = "checkbox";
  FieldType2["FILE"] = "file";
  FieldType2["CUSTOM"] = "custom";
  FieldType2["TEXTAREA"] = "textarea";
  FieldType2["GROUP"] = "group";
  FieldType2["DIVIDER"] = "divider";
  return FieldType2;
})(FieldType || {});
var FormBuilder = ({
  config,
  onSubmit,
  submitButtonText = "Submit",
  labelPlacement = "outside",
  onFormDataChange,
  className,
  onReset,
  resetButtonText = "Reset",
  isSubmitting = false
}) => {
  const [errors, setErrors] = (0, import_react4.useState)({});
  const validateField = (0, import_react4.useCallback)((value, rules) => {
    if (!rules) return "";
    if (rules.required && !value) return "This field is required";
    if (rules.minLength && String(value).length < rules.minLength)
      return `Minimum length is ${rules.minLength}`;
    if (rules.maxLength && String(value).length > rules.maxLength)
      return `Maximum length is ${rules.maxLength}`;
    if (rules.min && Number(value) < rules.min) return `Minimum value is ${rules.min}`;
    if (rules.max && Number(value) > rules.max) return `Maximum value is ${rules.max}`;
    if (rules.pattern && !rules.pattern.test(String(value))) return "Invalid format";
    if (rules.custom) {
      const result = rules.custom(value);
      if (typeof result === "string") return result;
      if (!result) return "Invalid value";
    }
    return "";
  }, []);
  const handleChange = (field, value) => {
    var _a;
    if (field == null ? void 0 : field.validation) {
      const error = validateField(value, field.validation);
      setErrors((prev) => __spreadProps(__spreadValues({}, prev), { [field.name]: error }));
    }
    (_a = field == null ? void 0 : field.onChange) == null ? void 0 : _a.call(
      field,
      field.type === "date" /* DATE */ ? new Date(value).toISOString() : field.type === "number" /* NUMBER */ ? Number(value) : value
    );
    onFormDataChange == null ? void 0 : onFormDataChange(field.name, value);
  };
  const handleSubmit = () => {
    const newErrors = {};
    let hasErrors = false;
    config.forEach((field) => {
      if (field.validation) {
        const error = validateField(field.value, field.validation);
        if (error) {
          newErrors[field.name] = error;
          hasErrors = true;
        }
      }
    });
    setErrors(newErrors);
    if (!hasErrors) onSubmit == null ? void 0 : onSubmit();
  };
  const renderField = (field, index) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const uniqueKey = `${field.key || field.name || "field"}-${index}`;
    const commonLabelProps = {
      className: cn("text-sm font-medium", errors[field.name] && "text-destructive")
    };
    const renderLabel = () => {
      var _a2;
      return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Label2, __spreadProps(__spreadValues({}, commonLabelProps), { children: [
        field.label,
        ((_a2 = field.validation) == null ? void 0 : _a2.required) && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-destructive", children: " *" })
      ] }));
    };
    const renderError = () => errors[field.name] ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-xs text-destructive mt-1", children: errors[field.name] }) : null;
    switch (field.type) {
      case "text":
      case "date":
      case "number":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-2", field.className), children: [
          renderLabel(),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Input,
            __spreadValues({
              type: field.type,
              name: field.name,
              value: (field == null ? void 0 : field.value) || "",
              onChange: (e) => handleChange(field, e.target.value),
              placeholder: field.placeholder || `Enter ${field.label}`,
              className: cn(errors[field.name] && "border-destructive")
            }, field.fieldProps)
          ),
          renderError()
        ] }, uniqueKey);
      case "divider":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "my-4 border-b border-gray-200 col-span-full" }, uniqueKey);
      case "textarea":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-2", field.className), children: [
          renderLabel(),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Textarea,
            __spreadValues({
              name: field.name,
              value: (field == null ? void 0 : field.value) || "",
              onChange: (e) => handleChange(field, e.target.value),
              placeholder: field.placeholder,
              className: cn(errors[field.name] && "border-destructive")
            }, field.fieldProps)
          ),
          renderError()
        ] }, uniqueKey);
      case "select":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-2", field.className), children: [
          renderLabel(),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            Select,
            __spreadProps(__spreadValues({
              name: field.name,
              value: field.value || "",
              onValueChange: (value) => handleChange(field, value)
            }, field.fieldProps), {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectTrigger, { className: cn(errors[field.name] && "border-destructive"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectValue, { placeholder: `Select ${field.label}` }) }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectContent, { children: ((_a = field.options) == null ? void 0 : _a.filter((option) => option.value != null).map((option) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  SelectItem,
                  {
                    value: option.value.toString(),
                    children: option.label
                  },
                  `${uniqueKey}-option-${option.value}`
                ))) || [] })
              ]
            })
          ),
          renderError()
        ] }, uniqueKey);
      case "radio":
        if (field.name === "actionType") {
          const numOptions = ((_b = field.options) == null ? void 0 : _b.length) || 0;
          return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-4", field.className), children: [
            renderLabel(),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              Tabs,
              {
                value: (_c = field == null ? void 0 : field.value) == null ? void 0 : _c.toString(),
                onValueChange: (value) => handleChange(field, value),
                className: "w-full",
                children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  TabsList,
                  {
                    className: cn(
                      "inline-flex flex-wrap md:flex-nowrap h-auto w-full rounded-lg bg-slate-100 p-0.5",
                      numOptions === 2 && "grid-cols-2",
                      numOptions === 3 && "grid-cols-3",
                      numOptions === 4 && "grid-cols-4"
                    ),
                    children: (_d = field.options) == null ? void 0 : _d.map((option) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      TabsTrigger,
                      {
                        value: option.value.toString(),
                        className: "flex-1 min-w-[calc(50%-4px)] md:min-w-0 m-0.5 rounded-md py-1.5 px-2 text-sm font-normal text-gray-600 ring-offset-background transition-all whitespace-normal break-words text-center data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-blue-500",
                        children: option.label
                      },
                      `${uniqueKey}-tab-${option.value}`
                    ))
                  }
                )
              }
            ),
            renderError()
          ] }, uniqueKey);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-2", field.className), children: [
          renderLabel(),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            RadioGroup2,
            __spreadProps(__spreadValues({
              name: field.name,
              value: (_e = field == null ? void 0 : field.value) == null ? void 0 : _e.toString(),
              onValueChange: (value) => handleChange(field, value),
              className: "flex gap-4"
            }, field.fieldProps), {
              children: (_f = field.options) == null ? void 0 : _f.map((option) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(RadioGroupItem, { value: option.value.toString(), id: `${field.name}-${option.value}` }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Label2, { htmlFor: `${field.name}-${option.value}`, children: option.label })
              ] }, `${uniqueKey}-radio-${option.value}`))
            })
          ),
          renderError()
        ] }, uniqueKey);
      case "checkbox":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("flex items-center space-x-2", field.className), children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Checkbox,
            __spreadValues({
              id: field.name,
              name: field.name,
              checked: (field == null ? void 0 : field.value) || false,
              onCheckedChange: (checked) => handleChange(field, checked)
            }, field.fieldProps)
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Label2, __spreadProps(__spreadValues({ htmlFor: field.name }, commonLabelProps), { children: [
            field.label,
            ((_g = field.validation) == null ? void 0 : _g.required) && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-destructive", children: " *" })
          ] })),
          renderError()
        ] }, uniqueKey);
      case "file":
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("space-y-2", field.className), children: [
          renderLabel(),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Input,
            __spreadValues({
              type: "file",
              name: field.name,
              onChange: (e) => {
                var _a2;
                return handleChange(field, (_a2 = e.target.files) == null ? void 0 : _a2[0]);
              },
              className: cn(errors[field.name] && "border-destructive")
            }, field.fieldProps)
          ),
          renderError()
        ] }, uniqueKey);
      case "custom":
        return (field == null ? void 0 : field.customComponent) && typeof (field == null ? void 0 : field.customComponent) === "function" ? field == null ? void 0 : field.customComponent(__spreadValues({
          key: uniqueKey,
          value: field == null ? void 0 : field.value,
          onChange: (value) => handleChange(field, value),
          error: errors[field.name],
          fieldOptions: field == null ? void 0 : field.fieldOptions,
          field
        }, field.fieldProps)) : (_h = field == null ? void 0 : field.customComponent) != null ? _h : null;
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", {}, uniqueKey);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className, children: config.map((field, index) => renderField(field, index.toString())) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex gap-2", children: [
      submitButtonText && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { type: "submit", onClick: handleSubmit, disabled: isSubmitting, children: submitButtonText }),
      resetButtonText && onReset && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { variant: "outline", onClick: onReset, disabled: isSubmitting, children: resetButtonText })
    ] })
  ] });
};

// src/components/MultiSelect/index.tsx
var React27 = __toESM(require("react"), 1);
var import_lucide_react19 = require("lucide-react");
var import_jsx_runtime34 = require("react/jsx-runtime");
function normalize(options) {
  return options.map((o) => typeof o === "string" ? { label: o, value: o } : o);
}
function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  className,
  triggerClassName,
  contentClassName,
  maxHeight = "200px"
}) {
  const [open, setOpen] = React27.useState(false);
  const normalized = normalize(options);
  const handleSelectAll = () => onChange(normalized.map((o) => o.value));
  const handleClearAll = () => onChange([]);
  const handleToggleOption = (value) => {
    onChange(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]);
  };
  const selectedLabels = selected.map((v) => {
    var _a, _b;
    return (_b = (_a = normalized.find((o) => o.value === v)) == null ? void 0 : _a.label) != null ? _b : v;
  });
  const triggerLabel = selected.length === 0 ? placeholder : selected.length === normalized.length && normalized.length > 1 ? "All selected" : selected.length === 1 ? selectedLabels[0] : `${selected.length} selected`;
  const tooltipLabel = selected.length === 0 ? placeholder : selected.length === 1 ? selectedLabels[0] : selectedLabels.join(", ");
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipProvider, { delayDuration: 300, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: cn("w-full justify-between min-w-0", triggerClassName), children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "min-w-0 truncate text-left", children: triggerLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react19.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipContent, { side: "bottom", className: "max-w-[320px] break-words", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { children: tooltipLabel }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(PopoverContent, { className: cn("p-0", contentClassName), style: { width: "var(--radix-popover-trigger-width)" }, align: "start", sideOffset: 5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "p-2 border-b", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "ghost", size: "sm", className: "text-xs h-8 px-2", onClick: handleSelectAll, children: "Select All" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "ghost", size: "sm", className: "text-xs h-8 px-2 text-destructive", onClick: handleClearAll, children: "Clear All" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: cn("overflow-y-auto", className), style: { maxHeight }, children: normalized.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
        "div",
        {
          className: "relative flex items-center justify-between rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent cursor-pointer",
          onClick: () => handleToggleOption(value),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { children: label }),
            selected.includes(value) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react19.Check, { className: "h-4 w-4 flex-shrink-0 text-primary" })
          ]
        },
        value
      )) })
    ] })
  ] });
}
function MultiSelectBadges({ selected, onRemove, className }) {
  if (selected.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: cn("flex flex-wrap gap-2", className), children: selected.map((value) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipProvider, { delayDuration: 300, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Badge, { variant: "outline", className: "flex items-center gap-1 max-w-[220px] cursor-default", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "min-w-0 truncate", children: value }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react19.X, { className: "h-3 w-3 shrink-0 cursor-pointer", onClick: (e) => {
        e.stopPropagation();
        onRemove(value);
      } })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(TooltipContent, { side: "bottom", className: "max-w-[320px] break-words", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { children: value }) })
  ] }) }, value)) });
}

// src/components/TabsWrapper/index.tsx
var React28 = __toESM(require("react"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
function TabsWrapper({ tabs, defaultValue, onChange, className, responsive = false }) {
  var _a;
  const initial = defaultValue != null ? defaultValue : (_a = tabs[0]) == null ? void 0 : _a.value;
  const [value, setValue] = React28.useState(initial);
  function handleChange(next) {
    setValue(next);
    onChange == null ? void 0 : onChange(next);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(Tabs, { value, onValueChange: handleChange, className, children: [
    responsive ? /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "block sm:hidden mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(Select, { value, onValueChange: handleChange, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SelectContent, { children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SelectItem, { value: tab.value, children: tab.label }, tab.value)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TabsList, { children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TabsTrigger, { value: tab.value, children: tab.label }, tab.value)) }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TabsList, { children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TabsTrigger, { value: tab.value, children: tab.label }, tab.value)) }),
    tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TabsContent, { value: tab.value, children: tab.content }, tab.value))
  ] });
}

// src/components/DropdownMenuWrapper/index.tsx
var React29 = __toESM(require("react"), 1);
var import_jsx_runtime36 = require("react/jsx-runtime");
var OPEN_STATE_CLASSES = {
  outline: "data-[state=open]:bg-gray-100",
  ghost: "data-[state=open]:bg-gray-100",
  secondary: "data-[state=open]:bg-gray-200",
  primary: "data-[state=open]:bg-blue-600",
  destructive: "data-[state=open]:bg-destructive/90"
};
function DropdownMenuWrapper({
  label,
  items,
  triggerVariant = "outline",
  align = "end",
  className
}) {
  const isMobile = useMobile();
  const effectiveAlign = isMobile ? "center" : align;
  const openStateClass = OPEN_STATE_CLASSES[triggerVariant != null ? triggerVariant : "outline"];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      LoadingButton,
      {
        variant: triggerVariant,
        className: cn("data-[state=open]:scale-95 focus-visible:ring-gray-300", openStateClass, className),
        children: label
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(DropdownMenuContent, { align: effectiveAlign, className: "min-w-[160px]", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(React29.Fragment, { children: [
      item.separator && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(DropdownMenuSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        DropdownMenuItem,
        {
          onClick: item.onClick,
          className: item.variant === "destructive" ? "text-destructive focus:text-destructive" : void 0,
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "mr-2 flex items-center", children: item.icon }),
            item.label
          ]
        }
      )
    ] }, i)) })
  ] });
}

// src/components/TimePicker/index.tsx
var React30 = __toESM(require("react"), 1);
var import_lucide_react20 = require("lucide-react");
var import_date_fns2 = require("date-fns");

// src/components/TimeSelector/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function TimeSelector({ value, onChange, height = "h-[300px]", isMobile = false }) {
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const handleTimeChange = (type, val) => {
    const newTime = value ? new Date(value) : /* @__PURE__ */ new Date();
    if (!value) {
      const now = /* @__PURE__ */ new Date();
      newTime.setHours(now.getHours());
      newTime.setMinutes(now.getMinutes());
    }
    if (type === "hour") {
      const isPM = newTime.getHours() >= 12;
      let newHours = val;
      if (isPM && newHours !== 12) newHours += 12;
      if (!isPM && newHours === 12) newHours = 0;
      newTime.setHours(newHours);
    } else if (type === "minute") {
      newTime.setMinutes(val);
    } else if (type === "ampm") {
      const h = newTime.getHours();
      if (val === "PM" && h < 12) newTime.setHours(h + 12);
      if (val === "AM" && h >= 12) newTime.setHours(h - 12);
    }
    onChange == null ? void 0 : onChange(newTime);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: cn("flex gap-2", height), children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ScrollArea, { className: cn("h-full w-16 border rounded-md", isMobile && "flex-1 w-auto"), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col p-1 gap-1", children: hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      Button,
      {
        size: "sm",
        variant: value && (value.getHours() % 12 || 12) === hour ? "default" : "ghost",
        className: "h-8 w-full",
        type: "button",
        onClick: () => handleTimeChange("hour", hour),
        children: hour
      },
      hour
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ScrollArea, { className: cn("h-full w-20 border rounded-md", isMobile && "flex-1 w-auto"), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col p-1 gap-1", children: minutes.map((minute) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      Button,
      {
        size: "sm",
        variant: value && value.getMinutes() === minute ? "default" : "ghost",
        className: "h-8 w-full text-xs",
        type: "button",
        onClick: () => handleTimeChange("minute", minute),
        children: minute.toString().padStart(2, "0")
      },
      minute
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col gap-2", children: ["AM", "PM"].map((ampm) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      Button,
      {
        size: "sm",
        variant: value && (ampm === "AM" && value.getHours() < 12 || ampm === "PM" && value.getHours() >= 12) ? "default" : "outline",
        className: cn("h-8 w-12", isMobile && "w-10"),
        type: "button",
        onClick: () => handleTimeChange("ampm", ampm),
        children: ampm
      },
      ampm
    )) })
  ] });
}

// src/components/TimePicker/index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
function TimePicker({ value, onChange, placeholder = "Pick time", disabled = false }) {
  const [time, setTime] = React30.useState(value);
  const [isOpen, setIsOpen] = React30.useState(false);
  React30.useEffect(() => {
    setTime(value);
  }, [value]);
  const handleTimeChange = (newTime) => {
    setTime(newTime);
    onChange == null ? void 0 : onChange(newTime);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Button, { variant: "outline", disabled, className: cn("w-full justify-start text-left font-normal", !time && "text-muted-foreground"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react20.Clock, { className: "mr-2 h-4 w-4" }),
      time ? (0, import_date_fns2.format)(time, "h:mm a") : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: placeholder })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col gap-4 p-4 min-w-[200px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react20.Clock, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: "Time" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(TimeSelector, { value: time, onChange: handleTimeChange })
    ] }) })
  ] });
}

// src/components/DatePicker/index.tsx
var React31 = __toESM(require("react"), 1);
var import_lucide_react21 = require("lucide-react");
var import_date_fns3 = require("date-fns");
var import_jsx_runtime39 = require("react/jsx-runtime");
function DatePicker({ value, onChange, placeholder = "Pick date", className }) {
  const [date, setDate] = React31.useState(value);
  React31.useEffect(() => {
    setDate(value);
  }, [value]);
  const handleSelect = (selected) => {
    setDate(selected);
    onChange == null ? void 0 : onChange(selected);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      Button,
      {
        variant: "outline",
        className: cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react21.CalendarIcon, { className: "mr-2 h-4 w-4" }),
          date ? (0, import_date_fns3.format)(date, "PPP") : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: placeholder })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Calendar, { mode: "single", selected: date, onSelect: (d) => handleSelect(d), initialFocus: true }) })
  ] });
}

// src/components/Card/index.tsx
var React32 = __toESM(require("react"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime40 = require("react/jsx-runtime");
var cardVariants = (0, import_class_variance_authority6.cva)(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      elevation: {
        default: "",
        resting: "elevation-resting",
        hovered: "elevation-hovered",
        pressed: "elevation-pressed",
        focused: "elevation-focused",
        elevated: "elevation-elevated",
        success: "elevation-success",
        warning: "elevation-warning",
        error: "elevation-error"
      },
      status: {
        default: "",
        success: "status-success",
        warning: "status-warning",
        error: "status-error",
        info: "status-info",
        neutral: "status-neutral"
      },
      interactive: {
        default: "",
        true: "cursor-pointer transition-all duration-200"
      }
    },
    defaultVariants: {
      elevation: "default",
      status: "default",
      interactive: "default"
    }
  }
);
var Card = React32.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, elevation, status, interactive } = _b, props = __objRest(_b, ["className", "elevation", "status", "interactive"]);
    let enhancedClasses = "";
    if (elevation || status || interactive) {
      enhancedClasses = createExpressiveClasses({
        status: status || void 0,
        elevation: elevation || void 0,
        interactive: Boolean(interactive)
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "div",
      __spreadValues({
        ref,
        className: cn(
          cardVariants({ elevation, status, interactive }),
          enhancedClasses,
          className
        )
      }, props)
    );
  }
);
Card.displayName = "Card";
var CardHeader = React32.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React32.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("text-2xl font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React32.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React32.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React32.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/components/Separator/index.tsx
var React33 = __toESM(require("react"), 1);
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"), 1);
var import_jsx_runtime41 = require("react/jsx-runtime");
var Separator3 = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      SeparatorPrimitive.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      }, props)
    );
  }
);
Separator3.displayName = SeparatorPrimitive.Root.displayName;

// src/components/Accordion/index.tsx
var React34 = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react22 = require("lucide-react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React34.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn("border-b", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React34.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react22.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React34.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/WmsToast/index.tsx
var import_react5 = __toESM(require("react"), 1);
var import_jsx_runtime43 = require("react/jsx-runtime");
function CopyButton({ message }) {
  const [copied, setCopied] = import_react5.default.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(message).catch(() => {
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "button",
    {
      type: "button",
      onClick: handleCopy,
      className: "inline-flex items-center rounded border border-white/20 bg-red-700/30 px-2.5 py-1 text-xs font-bold tracking-widest text-white hover:bg-red-700/50 transition-colors cursor-pointer",
      children: copied ? "COPIED" : "CLICK TO COPY"
    }
  );
}
function showSuccess(_message) {
  toast({ title: "Success!" });
}
function showError(message) {
  const now = /* @__PURE__ */ new Date();
  const datePart = now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const timePart = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const headerTimestamp = `${datePart} ${timePart}`;
  const { dismiss } = toast({
    variant: "destructive",
    className: "bg-red-600 border-red-700 text-white",
    title: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "font-bold text-sm tracking-wide", children: "ERROR" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-[11px] text-red-200 font-normal", children: headerTimestamp })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-sm text-white font-normal leading-snug", children: message })
    ] }),
    description: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CopyButton, { message }) })
  });
  setTimeout(() => dismiss(), 5e3);
}

// src/components/PageLayout/index.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function PageHeader({
  title,
  description,
  icon,
  titleSuffix,
  actions,
  actionsClassName,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: cn("flex flex-col md:flex-row justify-between items-start md:items-center mb-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("h1", { className: "text-2xl font-bold flex items-center gap-2", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "mr-2", children: icon }),
        title,
        titleSuffix
      ] }),
      description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: description })
    ] }),
    actions && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: cn("mt-4 md:mt-0 flex items-center gap-2", actionsClassName), children: actions })
  ] });
}
function StatsCard({ label, value, delta, deltaType = "neutral", className }) {
  const deltaColor = deltaType === "increase" ? "text-green-500" : deltaType === "decrease" ? "text-red-500" : "text-gray-500";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: cn("p-4 border rounded-lg bg-card", className), children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-sm text-gray-500", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-2xl font-bold", children: value }),
      delta && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: `text-sm ${deltaColor}`, children: delta })
    ] })
  ] }) });
}
function StatsGrid({ stats, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", className), children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(StatsCard, __spreadValues({}, stat), index)) });
}
function PageLayout({ children, header, stats, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: cn("p-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PageHeader, __spreadValues({}, header)),
    stats && stats.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(StatsGrid, { stats }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "space-y-6", children })
  ] });
}
function ContentSection({ title, description, children, className, actions }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: cn("space-y-4", className), children: [
    (title || actions) && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h2", { className: "text-lg font-semibold", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: description })
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "flex items-center gap-2", children: actions })
    ] }),
    children
  ] });
}

// src/components/SortOptions/index.tsx
var import_react6 = require("react");
var import_lucide_react23 = require("lucide-react");
var import_jsx_runtime45 = require("react/jsx-runtime");
function SortOptions({
  onSortByChange,
  onSortOrderChange,
  sortByOptions,
  sortOrderOptions,
  sortByValue,
  sortOrderValue
}) {
  var _a, _b;
  const [selectedSortBy, setSelectedSortBy] = (0, import_react6.useState)(
    sortByValue || ((_a = sortByOptions == null ? void 0 : sortByOptions[0]) == null ? void 0 : _a.value)
  );
  const [selectedOrder, setSelectedOrder] = (0, import_react6.useState)(
    sortOrderValue || ((_b = sortOrderOptions == null ? void 0 : sortOrderOptions[0]) == null ? void 0 : _b.value)
  );
  (0, import_react6.useEffect)(() => {
    if (sortByValue) setSelectedSortBy(sortByValue);
  }, [sortByValue]);
  (0, import_react6.useEffect)(() => {
    if (sortOrderValue) setSelectedOrder(sortOrderValue);
  }, [sortOrderValue]);
  const handleSortByChange = (0, import_react6.useCallback)(
    (value) => {
      setSelectedSortBy(value);
      onSortByChange == null ? void 0 : onSortByChange(value);
    },
    [onSortByChange]
  );
  const handleOrderChange = (0, import_react6.useCallback)(
    (value) => {
      setSelectedOrder(value);
      onSortOrderChange == null ? void 0 : onSortOrderChange(value);
    },
    [onSortOrderChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_lucide_react23.ArrowUpDown, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(PopoverContent, { className: "w-56", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h4", { className: "font-medium mb-2", children: "Sort by" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RadioGroup2, { value: selectedSortBy, onValueChange: handleSortByChange, className: "space-y-1", children: sortByOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RadioGroupItem, { value: option.value, id: `sort-by-${option.value}` }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Label2, { htmlFor: `sort-by-${option.value}`, children: option.label })
        ] }, option.value)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h4", { className: "font-medium mb-2", children: "Order" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RadioGroup2, { value: selectedOrder, onValueChange: handleOrderChange, className: "space-y-1", children: sortOrderOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RadioGroupItem, { value: option.value, id: `sort-order-${option.value}` }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Label2, { htmlFor: `sort-order-${option.value}`, children: option.label })
        ] }, option.value)) })
      ] })
    ] }) })
  ] });
}

// src/components/SkuProductDetails/index.tsx
var import_react7 = require("react");
var import_lucide_react24 = require("lucide-react");
var import_date_fns4 = require("date-fns");
var import_jsx_runtime46 = require("react/jsx-runtime");
function SkuProductDetails({ skuDetails, batchInfo, compact = false }) {
  var _a, _b, _c;
  const [showAllAttributes, setShowAllAttributes] = (0, import_react7.useState)(false);
  if (!skuDetails) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "flex-1 flex items-center justify-center rounded-xl border border-dashed text-sm text-gray-300 min-h-[180px]", children: "Scan a SKU to see product details" });
  }
  const resolvedUrls = ((_a = skuDetails.imageUrls) == null ? void 0 : _a.filter(Boolean).length) ? skuDetails.imageUrls.filter(Boolean) : skuDetails.imageUrl ? [skuDetails.imageUrl] : ((_c = (_b = skuDetails.displayableAttributes) == null ? void 0 : _b["Image URL"]) == null ? void 0 : _c.trim()) ? [skuDetails.displayableAttributes["Image URL"].trim()] : [];
  const getMrp = () => {
    var _a2;
    const entry = Object.entries(skuDetails.displayableAttributes).find(([key]) => key.toLowerCase().includes("mrp") || key.toLowerCase().includes("price"));
    return entry ? (_a2 = entry[1]) == null ? void 0 : _a2.toString() : null;
  };
  const getAttributeItems = () => Object.entries(skuDetails.displayableAttributes).filter(([key]) => {
    const k = key.toLowerCase();
    return !(k.includes("image") || k.includes("mrp") || k.includes("price") || k.includes("brand") || k.includes("color") || k.includes("size") || k.includes("category") || k.includes("name"));
  }).map(([key, value]) => ({ key, value: (value == null ? void 0 : value.toString()) || "-" }));
  const extraAttributes = getAttributeItems();
  const initialVisibleCount = 6;
  const visibleAttributes = showAllAttributes ? extraAttributes : extraAttributes.slice(0, initialVisibleCount);
  const NoImagePlaceholder = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "w-full aspect-square bg-gray-100 border border-gray-200 flex flex-col items-center justify-center rounded-lg gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-gray-300", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { d: "M21 15l-5-5L5 21" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-[9px] text-gray-400 uppercase tracking-wide", children: "No image" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full md:w-3/4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `grid gap-2 md:gap-4 ${compact ? "grid-cols-[80px_1fr]" : "grid-cols-[100px_1fr] md:grid-cols-[160px_1fr]"}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-col items-center gap-1", children: [
        resolvedUrls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          ImageGallery,
          {
            imageUrls: resolvedUrls,
            alt: skuDetails.name || skuDetails.skuData.clientSkuId || "Product",
            compact: true
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(NoImagePlaceholder, {}),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-gray-800/70 text-white px-1.5 py-0.5 text-[9px] rounded w-full text-center truncate", children: skuDetails.skuData.clientSkuId })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `grid gap-1.5 content-start ${compact ? "grid-cols-1" : "grid-cols-2 md:gap-2"}`, children: [
        skuDetails.uomDefinition && skuDetails.skuData.isUom && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-amber-600 uppercase tracking-wide font-semibold", children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "text-sm font-medium text-amber-800", children: [
            "Carton \xB7 ",
            skuDetails.uomDefinition.eachQuantity,
            " pcs"
          ] })
        ] }),
        skuDetails.uomDefinition && skuDetails.skuData.isPartOfUom && !skuDetails.skuData.isUom && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "col-span-2 bg-blue-50 border border-blue-200 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-blue-600 uppercase tracking-wide font-semibold", children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium text-blue-800", children: "Individual Unit \xB7 part of carton" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "Brand" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: skuDetails.brandId || "-" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "MRP" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium", children: getMrp() ? `\u20B9${getMrp()}` : "-" })
        ] }),
        skuDetails.category && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "Category" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: skuDetails.category })
        ] }),
        skuDetails.color && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5 md:p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "Color" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: skuDetails.color })
        ] }),
        skuDetails.size && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "hidden md:block bg-gray-50 rounded-lg p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "Size" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: skuDetails.size })
        ] }),
        visibleAttributes.map((attr) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "hidden md:block bg-gray-50 rounded-lg p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide truncate", children: attr.key }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: attr.value || "-" })
        ] }, attr.key)),
        extraAttributes.length > initialVisibleCount && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "button",
          {
            className: "col-span-2 hidden md:flex text-xs text-blue-500 hover:text-blue-700 items-center gap-0.5 mt-1",
            onClick: () => setShowAllAttributes(!showAllAttributes),
            children: showAllAttributes ? "Show less" : `Show ${extraAttributes.length - visibleAttributes.length} more attributes`
          }
        )
      ] }),
      (skuDetails.size || visibleAttributes.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `${compact ? "hidden" : "col-span-2 md:hidden"}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "grid grid-cols-2 gap-1.5", children: [
          skuDetails.size && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide", children: "Size" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: skuDetails.size })
          ] }),
          visibleAttributes.map((attr) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-50 rounded-lg p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-[10px] text-gray-400 uppercase tracking-wide truncate", children: attr.key }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "text-sm font-medium truncate", children: attr.value || "-" })
          ] }, attr.key))
        ] }),
        extraAttributes.length > initialVisibleCount && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "button",
          {
            className: "text-xs text-blue-500 hover:text-blue-700 flex items-center gap-0.5 mt-2",
            onClick: () => setShowAllAttributes(!showAllAttributes),
            children: showAllAttributes ? "Show less" : `Show ${extraAttributes.length - visibleAttributes.length} more attributes`
          }
        )
      ] })
    ] }) }),
    batchInfo && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full md:w-1/4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "rounded-lg border border-blue-200 bg-blue-50/60 p-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-1.5 mb-1.5 text-blue-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react24.Package, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-xs font-semibold uppercase tracking-wide", children: "Batch Information" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-col gap-1.5 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-gray-500", children: "Batch ID: " }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "font-medium", children: batchInfo.externalBatchId || (batchInfo.batchId ? `#${batchInfo.batchId}` : "-") })
        ] }),
        batchInfo.mrp > 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-gray-500", children: "MRP: " }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { className: "font-medium", children: [
            "\u20B9",
            batchInfo.mrp
          ] })
        ] }),
        batchInfo.mfgDate && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react24.Calendar, { className: "h-3 w-3 text-gray-400" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-gray-500", children: "Mfg: " }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "font-medium", children: (0, import_date_fns4.format)(batchInfo.mfgDate, "dd MMM yyyy") })
        ] }),
        batchInfo.expiryDate && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react24.Calendar, { className: "h-3 w-3 text-gray-400" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-gray-500", children: "Exp: " }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "font-medium", children: (0, import_date_fns4.format)(batchInfo.expiryDate, "dd MMM yyyy") })
        ] })
      ] })
    ] }) })
  ] }) });
}

// src/components/SmallToteCard/index.tsx
var import_lucide_react25 = require("lucide-react");
var import_jsx_runtime47 = require("react/jsx-runtime");
function SmallToteCard({ toteId, itemCount, totalItems }) {
  const progressPercentage = totalItems > 0 ? itemCount / totalItems * 100 : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Card, { className: "w-auto", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CardContent, { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react25.PackageIcon, { className: "h-5 w-5 text-blue-600" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "text-sm font-semibold text-gray-900", children: toteId }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "text-xs text-gray-600", children: [
        itemCount,
        " / ",
        totalItems,
        " items"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-20 bg-gray-200 rounded-full h-1.5", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "div",
        {
          className: "bg-blue-600 h-1.5 rounded-full transition-all duration-300",
          style: { width: `${progressPercentage}%` }
        }
      ) })
    ] })
  ] }) }) });
}

// src/components/QuantityInputModal/index.tsx
var import_react8 = require("react");
var import_lucide_react26 = require("lucide-react");
var import_jsx_runtime48 = require("react/jsx-runtime");
function QuantityInputModal({
  isOpen,
  onClose,
  itemId,
  item,
  maxQuantity,
  maxQtyLabel = "available quantity",
  showOrderMappingLayout = false,
  onTransfer,
  isTransferring
}) {
  const [quantity, setQuantity] = (0, import_react8.useState)("");
  const [error, setError] = (0, import_react8.useState)("");
  (0, import_react8.useEffect)(() => {
    if (isOpen) {
      setQuantity("");
      setError("");
    }
  }, [isOpen]);
  if (!item) {
    return null;
  }
  const handleQuantityChange = (value) => {
    const numValue = parseInt(value);
    setQuantity(value);
    setError("");
    if (value && (isNaN(numValue) || numValue <= 0)) {
      setError("Please enter a valid positive number");
    } else if (value && numValue > maxQuantity) {
      setError(`Quantity cannot exceed ${maxQtyLabel} (${maxQuantity})`);
    }
  };
  const handleTransfer = () => {
    const numQuantity = parseInt(quantity);
    if (!quantity || isNaN(numQuantity) || numQuantity <= 0) {
      setError("Please enter a valid quantity");
      return;
    }
    if (numQuantity > maxQuantity) {
      setError(`Quantity cannot exceed ${maxQtyLabel} (${maxQuantity})`);
      return;
    }
    onTransfer(itemId, numQuantity);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !error && quantity) {
      handleTransfer();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_lucide_react26.Package, { className: "h-5 w-5" }),
      "Transfer Partial Quantity"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: showOrderMappingLayout ? "space-y-4" : "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: showOrderMappingLayout ? "p-4 border rounded-lg bg-muted/50" : "p-3 border rounded-lg bg-muted/50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "font-medium", children: item.clientSkuId || item.skuId }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex gap-1", children: [
            item.externalBatchId && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(Badge, { color: "secondary", className: "text-xs", children: [
              "Batch: ",
              item.externalBatchId
            ] }),
            showOrderMappingLayout && item.orderCode && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Badge, { variant: "outline", children: item.orderCode })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: showOrderMappingLayout ? "text-sm text-muted-foreground mb-3" : "text-sm text-muted-foreground mb-2", children: item.skuName }),
        showOrderMappingLayout ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "grid grid-cols-3 gap-4 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "font-semibold", children: item.totalQty }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-muted-foreground", children: "Total" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "font-semibold text-green-600", children: item.activeQty }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-muted-foreground", children: "Active" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "font-semibold text-red-600", children: item.cancelledQty }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-muted-foreground", children: "Cancelled" })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center justify-between bg-background px-3 py-2 rounded border", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-sm text-muted-foreground", children: "Total Quantity:" }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "font-semibold text-base text-blue-600", children: item.totalQty })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Label2, { htmlFor: "transfer-quantity", children: "Transfer Quantity" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Input,
          {
            id: "transfer-quantity",
            type: "number",
            min: "1",
            max: maxQuantity,
            value: quantity,
            onChange: (e) => handleQuantityChange(e.target.value),
            onKeyPress: handleKeyPress,
            placeholder: `Enter quantity (max: ${maxQuantity})`,
            className: "text-center text-lg font-medium"
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("p", { className: "text-sm text-destructive flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_lucide_react26.X, { className: "h-4 w-4 shrink-0" }),
          error
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex gap-2 justify-center", children: [
        [1, 2, 5].map((qty) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => handleQuantityChange(qty.toString()),
            disabled: qty > maxQuantity,
            children: qty
          },
          qty
        )),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => handleQuantityChange(maxQuantity.toString()),
            disabled: maxQuantity === 0,
            children: [
              "Max (",
              maxQuantity,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: showOrderMappingLayout ? "flex gap-2 pt-4" : "flex gap-2 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            disabled: isTransferring,
            className: "flex-1 border-red-500 text-red-600 hover:bg-red-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Button,
          {
            onClick: handleTransfer,
            disabled: !quantity || !!error || isTransferring || maxQuantity === 0,
            className: "flex-1",
            children: isTransferring ? "Transferring..." : "Transfer"
          }
        )
      ] })
    ] })
  ] }) });
}

// src/components/ImageCapture/ImageCaptureModal.tsx
var import_react9 = require("react");
var import_lucide_react29 = require("lucide-react");

// src/components/ImageCapture/ImageCard.tsx
var import_lucide_react27 = require("lucide-react");
var import_jsx_runtime49 = require("react/jsx-runtime");
function ImageCard({ image, onDelete, onEnlarge }) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "div",
    {
      className: "relative aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-300 transition-colors",
      onClick: () => onEnlarge(image),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: image.previewUrl, alt: "Captured", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-white hover:bg-white/20",
              onClick: (e) => {
                e.stopPropagation();
                onEnlarge(image);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_lucide_react27.ZoomIn, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-white hover:bg-red-500/50",
              onClick: (e) => {
                e.stopPropagation();
                onDelete(image.id);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_lucide_react27.Trash2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ]
    }
  );
}

// src/components/ImageCapture/ImagePreviewDialog.tsx
var import_lucide_react28 = require("lucide-react");
var import_jsx_runtime50 = require("react/jsx-runtime");
function ImagePreviewDialog({ image, isOpen, onClose, onDelete }) {
  if (!image) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(DialogContent, { className: "max-w-4xl w-[96vw] sm:w-full p-0 gap-0 border bg-background overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "border-b px-4 py-3 bg-muted/30", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-sm font-medium text-foreground", children: "Image preview" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "flex items-center justify-center p-4 sm:p-6 min-h-[320px] max-h-[72vh] bg-muted/20", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "img",
      {
        src: image.previewUrl,
        alt: "Preview",
        className: "max-w-full max-h-[calc(72vh-2rem)] object-contain rounded-md ring-1 ring-border shadow-md"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex gap-3 p-4 border-t bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Button, { variant: "outline", className: "flex-1", onClick: onClose, children: "Close" }),
      onDelete && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
        Button,
        {
          variant: "destructive",
          className: "flex-1",
          onClick: () => {
            onDelete(image.id);
            onClose();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_lucide_react28.Trash2, { className: "mr-2 h-4 w-4" }),
            "Delete"
          ]
        }
      )
    ] })
  ] }) });
}

// src/components/ImageCapture/image-compression.ts
var import_browser_image_compression = __toESM(require("browser-image-compression"), 1);
var DEFAULT_THRESHOLD_MB = 2;
function needsCompression(file, thresholdMB = DEFAULT_THRESHOLD_MB) {
  return file.size / 1024 / 1024 > thresholdMB;
}
async function compressImage(file, thresholdMB = DEFAULT_THRESHOLD_MB) {
  if (!needsCompression(file, thresholdMB)) return file;
  try {
    const compressed = await (0, import_browser_image_compression.default)(file, {
      maxSizeMB: thresholdMB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: file.type,
      initialQuality: 0.8
    });
    return new File([compressed], file.name, { type: compressed.type, lastModified: Date.now() });
  } catch (e) {
    return file;
  }
}

// src/components/ImageCapture/ImageCaptureModal.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
function ImageCaptureModal({
  isOpen,
  onClose,
  onSubmit,
  config,
  isUploading = false,
  uploadProgress,
  compressionThresholdMB = 2
}) {
  const [images, setImages] = (0, import_react9.useState)([]);
  const [previewImage, setPreviewImage] = (0, import_react9.useState)(null);
  const [isPreviewOpen, setIsPreviewOpen] = (0, import_react9.useState)(false);
  const [showCamera, setShowCamera] = (0, import_react9.useState)(false);
  const [cameraStream, setCameraStream] = (0, import_react9.useState)(null);
  const [showFlash, setShowFlash] = (0, import_react9.useState)(false);
  const [isCapturing, setIsCapturing] = (0, import_react9.useState)(false);
  const fileInputRef = (0, import_react9.useRef)(null);
  const videoRef = (0, import_react9.useRef)(null);
  const canvasRef = (0, import_react9.useRef)(null);
  const { targetLabel, maxImages = 5, title = "Capture Images", isMandatory = false } = config;
  const canAddMore = images.length < maxImages;
  const generateId = () => `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const handleFileSelect = (0, import_react9.useCallback)(async (e) => {
    const files = e.target.files;
    if (!files) return;
    const availableSlots = maxImages - images.length;
    if (availableSlots === 0) {
      toast({ title: "Maximum limit reached", description: `You can only upload up to ${maxImages} images.`, variant: "destructive" });
      return;
    }
    const filesToProcess = Math.min(files.length, availableSlots);
    const newImages = [];
    for (let i = 0; i < filesToProcess; i++) {
      let file = files[i];
      if (needsCompression(file, compressionThresholdMB)) {
        try {
          file = await compressImage(file, compressionThresholdMB);
        } catch (e2) {
        }
      }
      newImages.push({ id: generateId(), file, previewUrl: URL.createObjectURL(file), capturedAt: /* @__PURE__ */ new Date() });
    }
    if (files.length > availableSlots) {
      toast({
        title: "Some images were not added",
        description: `Only ${filesToProcess} of ${files.length} images were added. Maximum limit is ${maxImages}.`,
        variant: "destructive"
      });
    }
    setImages((prev) => [...prev, ...newImages]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [images.length, maxImages, compressionThresholdMB]);
  const startCamera = async () => {
    var _a;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      setCameraStream(stream);
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 100);
    } catch (e) {
      (_a = fileInputRef.current) == null ? void 0 : _a.click();
    }
  };
  const stopCamera = (0, import_react9.useCallback)(() => {
    cameraStream == null ? void 0 : cameraStream.getTracks().forEach((track) => track.stop());
    setCameraStream(null);
    setShowCamera(false);
  }, [cameraStream]);
  const capturePhoto = (0, import_react9.useCallback)(async () => {
    var _a;
    if (!videoRef.current || !canvasRef.current || isCapturing || !canAddMore) return;
    setIsCapturing(true);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 200);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(video, 0, 0);
    canvas.toBlob(async (blob) => {
      if (!blob) {
        setIsCapturing(false);
        return;
      }
      let file = new File([blob], `capture-${Date.now()}.jpg`, { type: "image/jpeg" });
      if (needsCompression(file, compressionThresholdMB)) {
        try {
          file = await compressImage(file, compressionThresholdMB);
        } catch (e) {
        }
      }
      const newImages = [...images, { id: generateId(), file, previewUrl: URL.createObjectURL(file), capturedAt: /* @__PURE__ */ new Date() }];
      setImages(newImages);
      setIsCapturing(false);
      if (newImages.length >= maxImages) stopCamera();
    }, "image/jpeg", 0.9);
  }, [images, maxImages, stopCamera, isCapturing, canAddMore, compressionThresholdMB]);
  const handleDelete = (0, import_react9.useCallback)((id) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id);
      if (img) URL.revokeObjectURL(img.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
  }, []);
  const handleDiscard = () => {
    if (isUploading) return;
    images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    setImages([]);
    stopCamera();
    onClose();
  };
  const handleSubmit = () => {
    stopCamera();
    onSubmit(images);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("style", { children: `@keyframes wms-flash { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }` }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Dialog, { open: isOpen, onOpenChange: (open) => {
      if (!open && !isUploading) {
        stopCamera();
        setImages([]);
        onClose();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(DialogContent, { className: "max-w-3xl w-[96vw] sm:w-full p-0 gap-0 overflow-hidden flex flex-col h-[90vh]", children: [
      !showCamera && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(DialogHeader, { className: "px-6 py-4 border-b", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(DialogTitle, { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(DialogDescription, { className: "sr-only", children: [
          "Upload or capture images for ",
          targetLabel
        ] })
      ] }),
      showCamera && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "absolute inset-0 z-50 bg-black", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: true, className: "w-full h-full object-contain" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("canvas", { ref: canvasRef, className: "hidden" }),
        showFlash && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "absolute inset-0 bg-white", style: { animation: "wms-flash 0.2s ease-out" } }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("button", { type: "button", onClick: stopCamera, className: "text-white p-2 hover:bg-white/20 rounded-full transition", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.X, { className: "h-5 w-5" }) }) }) }),
        images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "absolute bottom-28 left-0 right-0 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex gap-2 overflow-x-auto pb-2", children: images.map((img) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { src: img.previewUrl, alt: "Captured", className: "w-full h-full object-cover" }) }, img.id)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center justify-center gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("input", { ref: fileInputRef, type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: handleFileSelect }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                var _a;
                return (_a = fileInputRef.current) == null ? void 0 : _a.click();
              },
              disabled: !canAddMore,
              className: "text-white p-3 hover:bg-white/20 rounded-full transition disabled:opacity-50",
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.FileImage, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "button",
            {
              type: "button",
              onClick: capturePhoto,
              disabled: !canAddMore || isCapturing,
              className: "w-16 h-16 rounded-full bg-white hover:bg-white/90 disabled:opacity-50 shadow-xl flex items-center justify-center transition active:scale-95",
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: `w-14 h-14 rounded-full border-2 border-black transition ${isCapturing ? "scale-90" : ""}` })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "w-12" })
        ] }) })
      ] }),
      !showCamera && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "p-6 border-b", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
            "button",
            {
              type: "button",
              onClick: startCamera,
              disabled: !canAddMore || isUploading,
              className: "h-24 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2 transition-all",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.Camera, { className: "h-8 w-8 text-gray-600" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-sm font-medium text-gray-600", children: "Camera" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => {
                var _a;
                return (_a = fileInputRef.current) == null ? void 0 : _a.click();
              },
              disabled: !canAddMore || isUploading,
              className: "h-24 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2 transition-all",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.Upload, { className: "h-8 w-8 text-gray-600" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-sm font-medium text-gray-600", children: "Upload" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("input", { ref: fileInputRef, type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: handleFileSelect })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ScrollArea, { className: "flex-1 min-h-0", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "p-6", children: images.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.Images, { className: "h-16 w-16 text-gray-300 mb-3" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-sm font-medium text-gray-600", children: "No images captured" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-xs text-gray-400 mt-1", children: "Use camera or upload to add images" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "grid grid-cols-3 gap-4", children: images.map((image) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        ImageCard,
        {
          image,
          onDelete: handleDelete,
          onEnlarge: (img) => {
            setPreviewImage(img);
            setIsPreviewOpen(true);
          }
        },
        image.id
      )) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "p-6 border-t bg-gray-50/50", children: !isUploading ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-sm text-gray-500", children: images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("span", { className: "font-medium text-gray-700", children: [
          images.length,
          " ",
          images.length === 1 ? "image" : "images",
          " selected"
        ] }) : "No images selected" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Button, { variant: "outline", onClick: handleDiscard, disabled: isMandatory, children: "Cancel" }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(Button, { onClick: handleSubmit, disabled: images.length === 0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react29.CloudUpload, { className: "mr-2 h-4 w-4" }),
            "Upload"
          ] })
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "w-2 h-2 bg-primary rounded-full animate-ping" }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "font-medium text-gray-700", children: "Uploading images..." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("span", { className: "font-semibold text-primary", children: [
            (uploadProgress == null ? void 0 : uploadProgress.current) || 0,
            "/",
            (uploadProgress == null ? void 0 : uploadProgress.total) || 0
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "relative h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "div",
          {
            className: "absolute inset-y-0 left-0 bg-primary transition-all duration-300",
            style: { width: `${(uploadProgress == null ? void 0 : uploadProgress.total) ? uploadProgress.current / uploadProgress.total * 100 : 0}%` }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-xs text-gray-500 text-center", children: "Please wait" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      ImagePreviewDialog,
      {
        image: previewImage,
        isOpen: isPreviewOpen,
        onClose: () => setIsPreviewOpen(false),
        onDelete: handleDelete
      }
    )
  ] });
}

// src/components/ImageCapture/ImageCaptureTrigger.tsx
var import_react10 = require("react");
var import_lucide_react30 = require("lucide-react");
var import_jsx_runtime52 = require("react/jsx-runtime");
function ImageCaptureTrigger({ config, onImagesCapture, capturedCount = 0, className }) {
  const [isModalOpen, setIsModalOpen] = (0, import_react10.useState)(false);
  const [localCount, setLocalCount] = (0, import_react10.useState)(capturedCount);
  const hasImages = localCount > 0;
  const handleSubmit = (images) => {
    setLocalCount(images.length);
    onImagesCapture(images);
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
      "div",
      {
        className: `flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${hasImages ? "border-emerald-200 bg-emerald-50 hover:bg-emerald-100" : "border-slate-200 bg-slate-50 hover:bg-slate-100"} ${className || ""}`,
        onClick: () => setIsModalOpen(true),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: `h-10 w-10 rounded-full flex items-center justify-center ${hasImages ? "bg-emerald-500" : "bg-slate-400"}`, children: hasImages ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react30.Check, { className: "h-5 w-5 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react30.Camera, { className: "h-5 w-5 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-sm font-medium text-slate-700", children: hasImages ? `${localCount} Image${localCount > 1 ? "s" : ""} Captured` : "Capture Images" }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-xs text-slate-500", children: "Optional" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react30.ChevronRight, { className: "h-5 w-5 text-slate-500" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      ImageCaptureModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        onSubmit: handleSubmit,
        config
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APP_ICON_NAMES,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AppIcon,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ConfirmDialog,
  ContentSection,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuWrapper,
  EmptyState,
  FieldType,
  FilterBar,
  FormBuilder,
  ImageCaptureModal,
  ImageCaptureTrigger,
  ImageCard,
  ImageGallery,
  ImagePreviewDialog,
  Input,
  Label,
  LoadingButton,
  MultiSelect,
  MultiSelectBadges,
  PageHeader,
  PageLayout,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  QuantityInput,
  QuantityInputModal,
  RadioGroup,
  RadioGroupItem,
  ResponsiveTable,
  ScanInput,
  ScrollArea,
  ScrollBar,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectionModal,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  SkuProductDetails,
  SmallToteCard,
  SortOptions,
  StatsCard,
  StatsGrid,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsWrapper,
  Textarea,
  TimePicker,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cardVariants,
  cn,
  compressImage,
  createExpressiveClasses,
  enhancedButtonClasses,
  enhancedStatusColors,
  getAnimationClasses,
  getButtonEnhancedClasses,
  getStatusClasses,
  getStatusVariant,
  needsCompression,
  showError,
  showSuccess,
  statusRingClasses,
  toast,
  useMediaQuery,
  useMobile,
  useToast
});
//# sourceMappingURL=index.cjs.map