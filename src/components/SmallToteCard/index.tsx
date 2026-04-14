"use client";

import * as React from "react";
import { Card, CardContent } from "../Card";
import { PackageIcon } from "lucide-react";

export interface SmallToteCardProps {
  toteId: string;
  itemCount: number;
  totalItems: number;
}

export function SmallToteCard({ toteId, itemCount, totalItems }: SmallToteCardProps) {
  const progressPercentage = totalItems > 0 ? (itemCount / totalItems) * 100 : 0;

  return (
    <Card className="w-auto">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <PackageIcon className="h-5 w-5 text-blue-600" />
          </div>

          <div className="space-y-1">
            <div className="text-sm font-semibold text-gray-900">{toteId}</div>
            <div className="text-xs text-gray-600">
              {itemCount} / {totalItems} items
            </div>

            {/* Progress bar */}
            <div className="w-20 bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}