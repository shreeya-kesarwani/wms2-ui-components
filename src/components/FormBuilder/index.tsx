"use client";
import * as React from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { LoadingButton } from "../LoadingButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Select";

export type FieldType = "text" | "number" | "select";
export interface FieldOption { label: string; value: string; }
export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: FieldOption[];
}

export interface FormBuilderProps {
  fields: FieldConfig[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  onSubmit: (values: Record<string, string>) => void;
  submitLabel?: string;
}

export function FormBuilder({ fields, values, onChange, onSubmit, submitLabel = "Submit" }: FormBuilderProps) {
  function handleSubmit(e: React.FormEvent) { e.preventDefault(); onSubmit(values); }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-1.5">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "select" ? (
            <Select value={values[field.name] ?? ""} onValueChange={(val) => onChange(field.name, val)}>
              <SelectTrigger id={field.name} className="w-full">
                <SelectValue placeholder={field.placeholder ?? `Select ${field.label}`} />
              </SelectTrigger>
              <SelectContent>
                {(field.options ?? []).map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              id={field.name} type={field.type}
              value={values[field.name] ?? ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              placeholder={field.placeholder ?? field.label}
            />
          )}
        </div>
      ))}
      <div className="pt-1">
        <LoadingButton type="submit" variant="primary">{submitLabel}</LoadingButton>
      </div>
    </form>
  );
}