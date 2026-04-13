"use client";
import { useToast } from "./use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={3000}>
      {toasts.map(({ id, title, description, action, createdAt: _createdAt, ...props }) => {
        const duration = 86_400_000;
        return (
          <Toast key={id} {...props} duration={duration}>
            <div className="flex-1 min-w-0">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose
              className={props.variant === "destructive" ? "top-2 translate-y-0 opacity-100" : undefined}
            />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}