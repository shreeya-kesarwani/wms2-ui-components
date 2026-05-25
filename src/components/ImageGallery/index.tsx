import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Package } from 'lucide-react';

export interface ImageGalleryProps {
  imageUrls: string[];
  alt: string;
  compact?: boolean;
  disableLightbox?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  imageUrls,
  alt,
  compact = false,
  disableLightbox = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const validUrls = imageUrls?.filter(Boolean) ?? [];

  const prev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex(i => (i - 1 + validUrls.length) % validUrls.length);
  }, [validUrls.length]);

  const next = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex(i => (i + 1) % validUrls.length);
  }, [validUrls.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, prev, next]);

  if (validUrls.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
        <Package className="text-gray-300" size={compact ? 24 : 40} />
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-full flex flex-col">
        <div
          className={`relative flex-1 overflow-hidden rounded-lg ${!disableLightbox ? 'cursor-pointer' : ''}`}
          onClick={() => !disableLightbox && setLightboxOpen(true)}
        >
          <img
            src={validUrls[activeIndex]}
            alt={alt}
            className="w-full h-full object-contain"
          />
          {validUrls.length > 1 && (
            <>
              <button
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition"
                onClick={prev}
              >
                <ChevronLeft size={14} />
              </button>
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition"
                onClick={next}
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}
        </div>

        {validUrls.length > 1 && (
          <div className="flex justify-center gap-1 mt-1">
            {validUrls.map((_, i) => (
              <button
                key={i}
                className={`rounded-full transition-all ${i === activeIndex ? 'w-3 h-1.5 bg-gray-700' : 'w-1.5 h-1.5 bg-gray-300'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      {!disableLightbox && lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={20} />
          </button>

          {validUrls.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
                onClick={prev}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
                onClick={next}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={validUrls[activeIndex]}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />

          {validUrls.length > 1 && (
            <div className="absolute bottom-4 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {activeIndex + 1} / {validUrls.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};