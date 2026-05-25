import React, { useState, useRef, useCallback, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../Dialog';
import { Button } from '../Button';
import { ScrollArea } from '../ScrollArea';
import {
  Camera,
  Upload,
  X,
  Trash2,
  ZoomIn,
  ChevronRight,
  Check,
  Images,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CapturedImage {
  id: string;
  file: File;
  previewUrl: string;
  capturedAt: Date;
}

export interface ImageCaptureConfig {
  targetLabel?: string;
  maxImages?: number;
  title?: string;
  isMandatory?: boolean;
}

export interface ImageCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (images: CapturedImage[]) => void;
  config: ImageCaptureConfig;
  isUploading?: boolean;
  uploadProgress?: { current: number; total: number };
}

export interface ImageCardProps {
  image: CapturedImage;
  onDelete: (id: string) => void;
  onEnlarge: (image: CapturedImage) => void;
}

export interface ImagePreviewDialogProps {
  image: CapturedImage | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export interface ImageCaptureTriggerProps {
  config: ImageCaptureConfig;
  onImagesCapture: (images: CapturedImage[]) => void;
  capturedCount?: number;
  className?: string;
}

// ── Compression utilities ──────────────────────────────────────────────────────

const COMPRESSION_THRESHOLD_MB = 2;

export function needsCompression(file: File): boolean {
  return file.size / 1024 / 1024 > COMPRESSION_THRESHOLD_MB;
}

export async function compressImage(file: File): Promise<File> {
  if (!needsCompression(file)) return file;
  try {
    const compressed = await imageCompression(file, {
      maxSizeMB: COMPRESSION_THRESHOLD_MB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.8,
    });
    return new File([compressed], file.name, { type: compressed.type, lastModified: Date.now() });
  } catch {
    return file;
  }
}

// ── ImageCard ──────────────────────────────────────────────────────────────────

export const ImageCard: React.FC<ImageCardProps> = ({ image, onDelete, onEnlarge }) => (
  <div
    className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-300 transition-colors"
    onClick={() => onEnlarge(image)}
  >
    <img src={image.previewUrl} alt="Captured" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white hover:bg-white/20"
          onClick={e => { e.stopPropagation(); onEnlarge(image); }}
        >
          <ZoomIn size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white hover:bg-red-500/50"
          onClick={e => { e.stopPropagation(); onDelete(image.id); }}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  </div>
);

// ── ImagePreviewDialog ─────────────────────────────────────────────────────────

export const ImagePreviewDialog: React.FC<ImagePreviewDialogProps> = ({
  image,
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!image) return null;
  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[96vw] sm:w-full p-0 gap-0 border bg-background overflow-hidden">
        <div className="border-b px-4 py-3 bg-muted/30">
          <p className="text-sm font-medium text-foreground">Image preview</p>
        </div>
        <div className="flex items-center justify-center p-4 sm:p-6 min-h-[320px] max-h-[72vh] bg-muted/20">
          <img
            src={image.previewUrl}
            alt="Preview"
            className="max-w-full max-h-[calc(72vh-2rem)] object-contain rounded-md ring-1 ring-border shadow-md"
          />
        </div>
        <div className="flex gap-3 p-4 border-t bg-muted/10">
          <Button variant="outline" className="flex-1" onClick={onClose}>Close</Button>
          {onDelete && (
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => { onDelete(image.id); onClose(); }}
            >
              <Trash2 size={16} className="mr-2" />
              Delete
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ── ImageCaptureModal ──────────────────────────────────────────────────────────

const generateId = () => `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const ImageCaptureModal: React.FC<ImageCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  config,
  isUploading = false,
  uploadProgress,
}) => {
  const [images, setImages] = useState<CapturedImage[]>([]);
  const [previewImage, setPreviewImage] = useState<CapturedImage | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [showFlash, setShowFlash] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { maxImages = 5, title = 'Capture Images', isMandatory = false } = config;
  const canAddMore = images.length < maxImages;

  const stopCamera = useCallback(() => {
    cameraStream?.getTracks().forEach(t => t.stop());
    setCameraStream(null);
    setShowCamera(false);
  }, [cameraStream]);

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const slots = maxImages - images.length;
    if (slots === 0) return;

    const newImages: CapturedImage[] = [];
    const count = Math.min(files.length, slots);
    for (let i = 0; i < count; i++) {
      const orig = files[i];
      const processed = needsCompression(orig) ? await compressImage(orig).catch(() => orig) : orig;
      newImages.push({ id: generateId(), file: processed, previewUrl: URL.createObjectURL(processed), capturedAt: new Date() });
    }
    setImages(prev => [...prev, ...newImages]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [images.length, maxImages]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      setCameraStream(stream);
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
      }, 100);
    } catch {
      fileInputRef.current?.click();
    }
  };

  const capturePhoto = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || isCapturing || !canAddMore) return;
    setIsCapturing(true);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 200);

    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);

    canvas.toBlob(async blob => {
      if (!blob) { setIsCapturing(false); return; }
      let file = new File([blob], `capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
      if (needsCompression(file)) file = await compressImage(file).catch(() => file);
      const updated = [...images, { id: generateId(), file, previewUrl: URL.createObjectURL(file), capturedAt: new Date() }];
      setImages(updated);
      setIsCapturing(false);
      if (updated.length >= maxImages) stopCamera();
    }, 'image/jpeg', 0.9);
  }, [images, maxImages, stopCamera, isCapturing, canAddMore]);

  const handleDelete = useCallback((id: string) => {
    setImages(prev => {
      const img = prev.find(i => i.id === id);
      if (img) URL.revokeObjectURL(img.previewUrl);
      return prev.filter(i => i.id !== id);
    });
  }, []);

  const handleDiscard = () => {
    if (isUploading) return;
    images.forEach(img => URL.revokeObjectURL(img.previewUrl));
    setImages([]);
    stopCamera();
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={open => { if (!open && !isUploading) { stopCamera(); setImages([]); onClose(); } }}>
        <DialogContent className="max-w-3xl w-[96vw] sm:w-full p-0 gap-0 overflow-hidden flex flex-col h-[90vh]">
          {!showCamera && (
            <DialogHeader className="px-6 py-4 border-b">
              <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
              <DialogDescription className="sr-only">Upload or capture images</DialogDescription>
            </DialogHeader>
          )}

          {showCamera && (
            <div className="absolute inset-0 z-50 bg-black">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-contain" />
              <canvas ref={canvasRef} className="hidden" />
              {showFlash && <div className="absolute inset-0 bg-white opacity-0 animate-ping" />}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent flex justify-end">
                <button onClick={stopCamera} className="text-white p-2 hover:bg-white/20 rounded-full transition">
                  <X size={20} />
                </button>
              </div>
              {images.length > 0 && (
                <div className="absolute bottom-28 left-0 right-0 px-4">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map(img => (
                      <div key={img.id} className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                        <img src={img.previewUrl} alt="Captured" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-center gap-8">
                  <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileSelect} />
                  <button onClick={() => fileInputRef.current?.click()} disabled={!canAddMore} className="text-white p-3 hover:bg-white/20 rounded-full transition disabled:opacity-40">
                    <Upload size={24} />
                  </button>
                  <button
                    onClick={capturePhoto}
                    disabled={!canAddMore || isCapturing}
                    className="w-16 h-16 rounded-full bg-white hover:bg-white/90 disabled:opacity-50 shadow-xl flex items-center justify-center transition active:scale-95"
                  >
                    <div className={`w-14 h-14 rounded-full border-2 border-black transition ${isCapturing ? 'scale-90' : ''}`} />
                  </button>
                  <div className="w-12" />
                </div>
              </div>
            </div>
          )}

          {!showCamera && (
            <div className="p-6 border-b">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={startCamera}
                  disabled={!canAddMore || isUploading}
                  className="h-24 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2 transition-all"
                >
                  <Camera size={28} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">Camera</span>
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!canAddMore || isUploading}
                  className="h-24 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2 transition-all"
                >
                  <Upload size={28} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">Upload</span>
                </button>
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileSelect} />
            </div>
          )}

          <ScrollArea className="flex-1 min-h-0">
            <div className="p-6">
              {images.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Images size={48} className="text-gray-300 mb-3" />
                  <p className="text-sm font-medium text-gray-600">No images captured</p>
                  <p className="text-xs text-gray-400 mt-1">Use camera or upload to add images</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {images.map(image => (
                    <ImageCard
                      key={image.id}
                      image={image}
                      onDelete={handleDelete}
                      onEnlarge={img => { setPreviewImage(img); setIsPreviewOpen(true); }}
                    />
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-6 border-t bg-gray-50/50">
            {!isUploading ? (
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  {images.length > 0
                    ? <span className="font-medium text-gray-700">{images.length} {images.length === 1 ? 'image' : 'images'} selected</span>
                    : 'No images selected'}
                </span>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={handleDiscard} disabled={isMandatory}>Cancel</Button>
                  <Button onClick={() => { stopCamera(); onSubmit(images); }} disabled={images.length === 0}>
                    <Upload size={16} className="mr-2" />
                    Upload
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">Uploading images...</span>
                  <span className="font-semibold">{uploadProgress?.current || 0}/{uploadProgress?.total || 0}</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-300"
                    style={{ width: `${uploadProgress?.total ? (uploadProgress.current / uploadProgress.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ImagePreviewDialog
        image={previewImage}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

// ── ImageCaptureTrigger ────────────────────────────────────────────────────────

export const ImageCaptureTrigger: React.FC<ImageCaptureTriggerProps> = ({
  config,
  onImagesCapture,
  capturedCount = 0,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localCount, setLocalCount] = useState(capturedCount);
  const hasImages = localCount > 0;

  const handleSubmit = (images: CapturedImage[]) => {
    setLocalCount(images.length);
    onImagesCapture(images);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
          hasImages ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
        } ${className ?? ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${hasImages ? 'bg-emerald-500' : 'bg-slate-400'}`}>
          {hasImages ? <Check size={18} className="text-white" /> : <Camera size={18} className="text-white" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-700">
            {hasImages ? `${localCount} Image${localCount > 1 ? 's' : ''} Captured` : 'Capture Images'}
          </p>
          <p className="text-xs text-slate-500">{config.isMandatory ? 'Required' : 'Optional'}</p>
        </div>
        <ChevronRight size={18} className="text-slate-400" />
      </div>

      <ImageCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        config={config}
      />
    </>
  );
};