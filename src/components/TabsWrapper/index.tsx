"use client";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Select";

export interface TabItem { label: string; value: string; content: React.ReactNode; }

export interface TabsWrapperProps {
  tabs: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  responsive?: boolean;
}

export function TabsWrapper({ tabs, defaultValue, onChange, className, responsive = false }: TabsWrapperProps) {
  const initial = defaultValue ?? tabs[0]?.value;
  const [value, setValue] = React.useState(initial);

  function handleChange(next: string) { setValue(next); onChange?.(next); }

  return (
    <Tabs value={value} onValueChange={handleChange} className={className}>
      {responsive ? (
        <>
          <div className="block sm:hidden mb-3">
            <Select value={value} onValueChange={handleChange}>
              <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
              <SelectContent>
                {tabs.map((tab) => <SelectItem key={tab.value} value={tab.value}>{tab.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="hidden sm:block">
            <TabsList>
              {tabs.map((tab) => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
            </TabsList>
          </div>
        </>
      ) : (
        <TabsList>
          {tabs.map((tab) => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
        </TabsList>
      )}
      {tabs.map((tab) => <TabsContent key={tab.value} value={tab.value}>{tab.content}</TabsContent>)}
    </Tabs>
  );
}