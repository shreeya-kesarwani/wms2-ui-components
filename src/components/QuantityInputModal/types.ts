export interface TransferItem {
  id: string;
  skuId: string;
  clientSkuId?: string;
  skuName: string;
  totalQty: number;
  activeQty: number;
  cancelledQty: number;
  orderCode?: string;
  externalBatchId?: string;
}

export interface QuantityInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Opaque identifier passed back to onTransfer — may be item.id or item.skuId depending on caller */
  itemId: string;
  /** Caller resolves from its source container (Tote / Box) before passing in */
  item: TransferItem | null;
  /** Caller computes based on feature rules (activeQty vs cancelledQty vs totalQty) */
  maxQuantity: number;
  /** Label used in over-limit error messages. Defaults to "available quantity" */
  maxQtyLabel?: string;
  /** true = 3-column qty grid + order badge; false = single-row total display */
  showOrderMappingLayout?: boolean;
  onTransfer: (itemId: string, qty: number) => void;
  isTransferring: boolean;
}