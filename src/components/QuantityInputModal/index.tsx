"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Dialog";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Badge } from "../Badge";
import { Package, X } from "lucide-react";
import type { QuantityInputModalProps } from "./types";

export type { TransferItem, QuantityInputModalProps } from "./types";

export function QuantityInputModal({
  isOpen,
  onClose,
  itemId,
  item,
  maxQuantity,
  maxQtyLabel = "available quantity",
  showOrderMappingLayout = false,
  onTransfer,
  isTransferring,
}: QuantityInputModalProps) {
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setQuantity("");
      setError("");
    }
  }, [isOpen]);

  if (!item) {
    return null;
  }

  const handleQuantityChange = (value: string) => {
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !error && quantity) {
      handleTransfer();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Transfer Partial Quantity
          </DialogTitle>
        </DialogHeader>

        <div className={showOrderMappingLayout ? "space-y-4" : "space-y-3"}>
          {/* SKU Information */}
          <div className={showOrderMappingLayout ? "p-4 border rounded-lg bg-muted/50" : "p-3 border rounded-lg bg-muted/50"}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{item.clientSkuId || item.skuId}</div>
              <div className="flex gap-1">
                {item.externalBatchId && (
                  <Badge color="secondary" className="text-xs">
                    Batch: {item.externalBatchId}
                  </Badge>
                )}
                {showOrderMappingLayout && item.orderCode && (
                  <Badge variant="outline">{item.orderCode}</Badge>
                )}
              </div>
            </div>
            <div className={showOrderMappingLayout ? "text-sm text-muted-foreground mb-3" : "text-sm text-muted-foreground mb-2"}>
              {item.skuName}
            </div>

            {showOrderMappingLayout ? (
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold">{item.totalQty}</div>
                  <div className="text-muted-foreground">Total</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-green-600">{item.activeQty}</div>
                  <div className="text-muted-foreground">Active</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-600">{item.cancelledQty}</div>
                  <div className="text-muted-foreground">Cancelled</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-background px-3 py-2 rounded border">
                <span className="text-sm text-muted-foreground">Total Quantity:</span>
                <span className="font-semibold text-base text-blue-600">{item.totalQty}</span>
              </div>
            )}
          </div>

          {/* Quantity Input */}
          <div className="space-y-2">
            <Label htmlFor="transfer-quantity">Transfer Quantity</Label>
            <Input
              id="transfer-quantity"
              type="number"
              min="1"
              max={maxQuantity}
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Enter quantity (max: ${maxQuantity})`}
              className="text-center text-lg font-medium"
            />
            {error && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <X className="h-4 w-4 shrink-0" />
                {error}
              </p>
            )}
          </div>

          {/* Quick Quantity Buttons */}
          <div className="flex gap-2 justify-center">
            {[1, 2, 5].map((qty) => (
              <Button
                key={qty}
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange(qty.toString())}
                disabled={qty > maxQuantity}
              >
                {qty}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(maxQuantity.toString())}
              disabled={maxQuantity === 0}
            >
              Max ({maxQuantity})
            </Button>
          </div>

          {/* Action Buttons */}
          <div className={showOrderMappingLayout ? "flex gap-2 pt-4" : "flex gap-2 pt-2"}>
            <Button
              variant="outline"
              onClick={onClose}
              disabled={isTransferring}
              className="flex-1 border-red-500 text-red-600 hover:bg-red-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleTransfer}
              disabled={!quantity || !!error || isTransferring || maxQuantity === 0}
              className="flex-1"
            >
              {isTransferring ? "Transferring..." : "Transfer"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}