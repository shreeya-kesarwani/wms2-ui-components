import { useState } from 'react';
import { Package, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ImageGallery } from '../ImageGallery';

export interface SkuProductDetailsData {
  skuData: {
    clientSkuId: string;
    isUom?: boolean;
    isPartOfUom?: boolean;
  };
  displayableAttributes: Record<string, unknown>;
  imageUrls?: string[] | null;
  imageUrl?: string | null;
  name?: string | null;
  brandId?: string | null;
  color?: string | null;
  size?: string | null;
  category?: string | null;
  uomDefinition?: { eachQuantity: number } | null;
}

export interface BatchInfo {
  batchId: number | null;
  externalBatchId: string;
  mfgDate: Date | null;
  expiryDate: Date | null;
  mrp: number;
}

interface SkuProductDetailsProps {
  skuDetails: SkuProductDetailsData | null;
  batchInfo?: BatchInfo | null;
  compact?: boolean;
}

export function SkuProductDetails({ skuDetails, batchInfo, compact = false }: SkuProductDetailsProps) {
  const [showAllAttributes, setShowAllAttributes] = useState(false);

  if (!skuDetails) {
    return (
      <div className="flex-1 flex items-center justify-center rounded-xl border border-dashed text-sm text-gray-300 min-h-[180px]">
        Scan a SKU to see product details
      </div>
    );
  }

  const resolvedUrls: string[] = skuDetails.imageUrls?.filter(Boolean).length
    ? skuDetails.imageUrls.filter(Boolean) as string[]
    : skuDetails.imageUrl
      ? [skuDetails.imageUrl]
      : (skuDetails.displayableAttributes?.["Image URL"] as string)?.trim()
        ? [(skuDetails.displayableAttributes["Image URL"] as string).trim()]
        : [];

  const getMrp = () => {
    const entry = Object.entries(skuDetails.displayableAttributes)
      .find(([key]) => key.toLowerCase().includes('mrp') || key.toLowerCase().includes('price'));
    return entry ? entry[1]?.toString() : null;
  };

  const getAttributeItems = () =>
    Object.entries(skuDetails.displayableAttributes)
      .filter(([key]) => {
        const k = key.toLowerCase();
        return !(
          k.includes('image') || k.includes('mrp') || k.includes('price') ||
          k.includes('brand') || k.includes('color') || k.includes('size') ||
          k.includes('category') || k.includes('name')
        );
      })
      .map(([key, value]) => ({ key, value: value?.toString() || '-' }));

  const extraAttributes = getAttributeItems();
  const initialVisibleCount = 6;
  const visibleAttributes = showAllAttributes ? extraAttributes : extraAttributes.slice(0, initialVisibleCount);

  const NoImagePlaceholder = () => (
    <div className="w-full aspect-square bg-gray-100 border border-gray-200 flex flex-col items-center justify-center rounded-lg gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[9px] text-gray-400 uppercase tracking-wide">No image</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
        {/* SKU details */}
        <div className="w-full md:w-3/4">
          <div className={`grid gap-2 md:gap-4 ${compact ? 'grid-cols-[80px_1fr]' : 'grid-cols-[100px_1fr] md:grid-cols-[160px_1fr]'}`}>
            {/* Image */}
            <div className="flex flex-col items-center gap-1">
              {resolvedUrls.length > 0 ? (
                <ImageGallery
                  imageUrls={resolvedUrls}
                  alt={skuDetails.name || skuDetails.skuData.clientSkuId || "Product"}
                  compact
                />
              ) : (
                <NoImagePlaceholder />
              )}
              <div className="bg-gray-800/70 text-white px-1.5 py-0.5 text-[9px] rounded w-full text-center truncate">
                {skuDetails.skuData.clientSkuId}
              </div>
            </div>

            {/* Key attributes beside the image */}
            <div className={`grid gap-1.5 content-start ${compact ? 'grid-cols-1' : 'grid-cols-2 md:gap-2'}`}>
              {skuDetails.uomDefinition && skuDetails.skuData.isUom && (
                <div className="col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-1.5 md:p-2">
                  <div className="text-[10px] text-amber-600 uppercase tracking-wide font-semibold">Type</div>
                  <div className="text-sm font-medium text-amber-800">
                    Carton · {skuDetails.uomDefinition.eachQuantity} pcs
                  </div>
                </div>
              )}
              {skuDetails.uomDefinition && skuDetails.skuData.isPartOfUom && !skuDetails.skuData.isUom && (
                <div className="col-span-2 bg-blue-50 border border-blue-200 rounded-lg p-1.5 md:p-2">
                  <div className="text-[10px] text-blue-600 uppercase tracking-wide font-semibold">Type</div>
                  <div className="text-sm font-medium text-blue-800">Individual Unit · part of carton</div>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-1.5 md:p-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Brand</div>
                <div className="text-sm font-medium truncate">{skuDetails.brandId || '-'}</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-1.5 md:p-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">MRP</div>
                <div className="text-sm font-medium">{getMrp() ? `₹${getMrp()}` : '-'}</div>
              </div>

              {skuDetails.category && (
                <div className="bg-gray-50 rounded-lg p-1.5 md:p-2">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Category</div>
                  <div className="text-sm font-medium truncate">{skuDetails.category}</div>
                </div>
              )}

              {skuDetails.color && (
                <div className="bg-gray-50 rounded-lg p-1.5 md:p-2">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Color</div>
                  <div className="text-sm font-medium truncate">{skuDetails.color}</div>
                </div>
              )}

              {skuDetails.size && (
                <div className="hidden md:block bg-gray-50 rounded-lg p-2">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Size</div>
                  <div className="text-sm font-medium truncate">{skuDetails.size}</div>
                </div>
              )}

              {visibleAttributes.map((attr) => (
                <div key={attr.key} className="hidden md:block bg-gray-50 rounded-lg p-2">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide truncate">{attr.key}</div>
                  <div className="text-sm font-medium truncate">{attr.value || '-'}</div>
                </div>
              ))}

              {extraAttributes.length > initialVisibleCount && (
                <button
                  className="col-span-2 hidden md:flex text-xs text-blue-500 hover:text-blue-700 items-center gap-0.5 mt-1"
                  onClick={() => setShowAllAttributes(!showAllAttributes)}
                >
                  {showAllAttributes ? 'Show less' : `Show ${extraAttributes.length - visibleAttributes.length} more attributes`}
                </button>
              )}
            </div>

            {/* Mobile: size + extra attrs */}
            {(skuDetails.size || visibleAttributes.length > 0) && (
              <div className={`${compact ? 'hidden' : 'col-span-2 md:hidden'}`}>
                <div className="grid grid-cols-2 gap-1.5">
                  {skuDetails.size && (
                    <div className="bg-gray-50 rounded-lg p-1.5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide">Size</div>
                      <div className="text-sm font-medium truncate">{skuDetails.size}</div>
                    </div>
                  )}
                  {visibleAttributes.map((attr) => (
                    <div key={attr.key} className="bg-gray-50 rounded-lg p-1.5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide truncate">{attr.key}</div>
                      <div className="text-sm font-medium truncate">{attr.value || '-'}</div>
                    </div>
                  ))}
                </div>
                {extraAttributes.length > initialVisibleCount && (
                  <button
                    className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-0.5 mt-2"
                    onClick={() => setShowAllAttributes(!showAllAttributes)}
                  >
                    {showAllAttributes ? 'Show less' : `Show ${extraAttributes.length - visibleAttributes.length} more attributes`}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Batch Information */}
        {batchInfo && (
          <div className="w-full md:w-1/4">
            <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-2.5">
              <div className="flex items-center gap-1.5 mb-1.5 text-blue-700">
                <Package className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold uppercase tracking-wide">Batch Information</span>
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                <div>
                  <span className="text-gray-500">Batch ID: </span>
                  <span className="font-medium">{batchInfo.externalBatchId || (batchInfo.batchId ? `#${batchInfo.batchId}` : '-')}</span>
                </div>
                {batchInfo.mrp > 0 && (
                  <div>
                    <span className="text-gray-500">MRP: </span>
                    <span className="font-medium">₹{batchInfo.mrp}</span>
                  </div>
                )}
                {batchInfo.mfgDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-500">Mfg: </span>
                    <span className="font-medium">{format(batchInfo.mfgDate, 'dd MMM yyyy')}</span>
                  </div>
                )}
                {batchInfo.expiryDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-500">Exp: </span>
                    <span className="font-medium">{format(batchInfo.expiryDate, 'dd MMM yyyy')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SkuProductDetails;