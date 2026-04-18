"use client";
import React, { useState, FC, useCallback } from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";
import { Textarea } from "../Textarea";
import { Checkbox } from "../Checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { Tabs, TabsList, TabsTrigger } from "../Tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Select";
import { cn } from "../../lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
};

export type OptionType = {
  label: string;
  value: string | number;
};

export interface CustomComponentProps {
  value: any;
  onChange: (value: any) => void;
  error?: string;
  field: FieldConfig;
  [key: string]: any;
}

export enum FieldType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  SELECT = "select",
  MULTI_SELECT = "multiSelect",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  FILE = "file",
  CUSTOM = "custom",
  TEXTAREA = "textarea",
  GROUP = "group",
  DIVIDER = "divider",
}

export type FieldConfig = {
  name: string;
  key: string;
  label: string;
  type: FieldType;
  options?: OptionType[];
  validation?: ValidationRule;
  className?: string;
  placeholder?: string;
  fieldOptions?: any[];
  value?: any;
  fieldProps?: any;
  children?: FieldConfig[];
  payloadType?: string;
  onChange?: (value: any) => void;
  customComponent?: (props: CustomComponentProps) => React.ReactElement;
};

export type FormBuilderProps = {
  id?: string;
  config: FieldConfig[];
  submitButtonText?: string;
  cols?: { sm: number; md: number; lg: number };
  labelPlacement?: "outside" | "inside";
  radioDirection?: "row" | "column";
  onSubmit?: () => void;
  onFormDataChange?: (fieldName: string, value: any) => void;
  className?: string;
  onReset?: () => void;
  resetButtonText?: string;
  isSubmitting?: boolean;
};

// ── Component ─────────────────────────────────────────────────────────────────

const FormBuilder: FC<FormBuilderProps> = ({
  config,
  onSubmit,
  submitButtonText = "Submit",
  labelPlacement = "outside",
  onFormDataChange,
  className,
  onReset,
  resetButtonText = "Reset",
  isSubmitting = false,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = useCallback((value: any, rules?: ValidationRule): string => {
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

  const handleChange = (field: FieldConfig, value: any) => {
    if (field?.validation) {
      const error = validateField(value, field.validation);
      setErrors((prev) => ({ ...prev, [field.name]: error }));
    }
    field?.onChange?.(
      field.type === FieldType.DATE
        ? new Date(value).toISOString()
        : field.type === FieldType.NUMBER
        ? Number(value)
        : value
    );
    onFormDataChange?.(field.name, value);
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
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
    if (!hasErrors) onSubmit?.();
  };

  const renderField = (field: FieldConfig, index: string) => {
    const uniqueKey = `${field.key || field.name || "field"}-${index}`;
    const commonLabelProps = {
      className: cn("text-sm font-medium", errors[field.name] && "text-destructive"),
    };

    const renderLabel = () => (
      <Label {...commonLabelProps}>
        {field.label}
        {field.validation?.required && <span className="text-destructive"> *</span>}
      </Label>
    );

    const renderError = () =>
      errors[field.name] ? (
        <p className="text-xs text-destructive mt-1">{errors[field.name]}</p>
      ) : null;

    switch (field.type) {
      case "text":
      case "date":
      case "number":
        return (
          <div key={uniqueKey} className={cn("space-y-2", field.className)}>
            {renderLabel()}
            <Input
              type={field.type}
              name={field.name}
              value={field?.value || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={field.placeholder || `Enter ${field.label}`}
              className={cn(errors[field.name] && "border-destructive")}
              {...field.fieldProps}
            />
            {renderError()}
          </div>
        );

      case "divider":
        return <div key={uniqueKey} className="my-4 border-b border-gray-200 col-span-full" />;

      case "textarea":
        return (
          <div key={uniqueKey} className={cn("space-y-2", field.className)}>
            {renderLabel()}
            <Textarea
              name={field.name}
              value={field?.value || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={field.placeholder}
              className={cn(errors[field.name] && "border-destructive")}
              {...field.fieldProps}
            />
            {renderError()}
          </div>
        );

      case "select":
        return (
          <div key={uniqueKey} className={cn("space-y-2", field.className)}>
            {renderLabel()}
            <Select
              name={field.name}
              value={field.value || ""}
              onValueChange={(value) => handleChange(field, value)}
              {...field.fieldProps}
            >
              <SelectTrigger className={cn(errors[field.name] && "border-destructive")}>
                <SelectValue placeholder={`Select ${field.label}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options
                  ?.filter((option) => option.value != null)
                  .map((option) => (
                    <SelectItem
                      key={`${uniqueKey}-option-${option.value}`}
                      value={option.value.toString()}
                    >
                      {option.label}
                    </SelectItem>
                  )) || []}
              </SelectContent>
            </Select>
            {renderError()}
          </div>
        );

      case "radio":
        if (field.name === "actionType") {
          const numOptions = field.options?.length || 0;
          return (
            <div key={uniqueKey} className={cn("space-y-4", field.className)}>
              {renderLabel()}
              <Tabs
                value={field?.value?.toString()}
                onValueChange={(value) => handleChange(field, value)}
                className="w-full"
              >
                <TabsList
                  className={cn(
                    "inline-flex flex-wrap md:flex-nowrap h-auto w-full rounded-lg bg-slate-100 p-0.5",
                    numOptions === 2 && "grid-cols-2",
                    numOptions === 3 && "grid-cols-3",
                    numOptions === 4 && "grid-cols-4"
                  )}
                >
                  {field.options?.map((option) => (
                    <TabsTrigger
                      key={`${uniqueKey}-tab-${option.value}`}
                      value={option.value.toString()}
                      className="flex-1 min-w-[calc(50%-4px)] md:min-w-0 m-0.5 rounded-md py-1.5 px-2 text-sm font-normal text-gray-600 ring-offset-background transition-all whitespace-normal break-words text-center data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-blue-500"
                    >
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              {renderError()}
            </div>
          );
        }
        return (
          <div key={uniqueKey} className={cn("space-y-2", field.className)}>
            {renderLabel()}
            <RadioGroup
              name={field.name}
              value={field?.value?.toString()}
              onValueChange={(value) => handleChange(field, value)}
              className="flex gap-4"
              {...field.fieldProps}
            >
              {field.options?.map((option) => (
                <div key={`${uniqueKey}-radio-${option.value}`} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value.toString()} id={`${field.name}-${option.value}`} />
                  <Label htmlFor={`${field.name}-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
            {renderError()}
          </div>
        );

      case "checkbox":
        return (
          <div key={uniqueKey} className={cn("flex items-center space-x-2", field.className)}>
            <Checkbox
              id={field.name}
              name={field.name}
              checked={field?.value || false}
              onCheckedChange={(checked) => handleChange(field, checked)}
              {...field.fieldProps}
            />
            <Label htmlFor={field.name} {...commonLabelProps}>
              {field.label}
              {field.validation?.required && <span className="text-destructive"> *</span>}
            </Label>
            {renderError()}
          </div>
        );

      case "file":
        return (
          <div key={uniqueKey} className={cn("space-y-2", field.className)}>
            {renderLabel()}
            <Input
              type="file"
              name={field.name}
              onChange={(e) => handleChange(field, e.target.files?.[0])}
              className={cn(errors[field.name] && "border-destructive")}
              {...field.fieldProps}
            />
            {renderError()}
          </div>
        );

      case "custom":
        return field?.customComponent && typeof field?.customComponent === "function"
          ? field?.customComponent({
              key: uniqueKey,
              value: field?.value,
              onChange: (value: any) => handleChange(field, value),
              error: errors[field.name],
              fieldOptions: field?.fieldOptions,
              field,
              ...field.fieldProps,
            })
          : (field?.customComponent as unknown as React.ReactElement | null) ?? null;

      default:
        return <div key={uniqueKey} />;
    }
  };

  return (
    <div className="space-y-4">
      <div className={className}>
        {config.map((field, index) => renderField(field, index.toString()) as React.ReactNode)}
      </div>
      <div className="flex gap-2">
        {submitButtonText && (
          <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            {submitButtonText}
          </Button>
        )}
        {resetButtonText && onReset && (
          <Button variant="outline" onClick={onReset} disabled={isSubmitting}>
            {resetButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export { FormBuilder };
export default FormBuilder;