"use client";
import * as React from "react";
import type { ToastActionElement, ToastProps } from "./toast";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000;
const SUCCESS_DURATION = 1000;
const PLEASE_WAIT_MS = 350;

type ToasterToast = Omit<ToastProps, "title"> & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  createdAt?: Date;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ActionType = typeof actionTypes;
type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: string }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: string };

interface State { toasts: ToasterToast[] }

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case actionTypes.UPDATE_TOAST:
      return { ...state, toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t) };
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;
      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));
      return { ...state, toasts: state.toasts.map((t) => t.id === toastId || toastId === undefined ? { ...t, open: false } : t) };
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) return { ...state, toasts: [] };
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.toastId) };
  }
};

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

let activeSuccessId: string | null = null;
let activeSuccessDismissFn: (() => void) | null = null;
let activeSuccessExpireTimer: ReturnType<typeof setTimeout> | null = null;
let activeSuccessResetTimer: ReturnType<typeof setTimeout> | null = null;

function clearSuccessTimers() {
  if (activeSuccessExpireTimer) { clearTimeout(activeSuccessExpireTimer); activeSuccessExpireTimer = null; }
  if (activeSuccessResetTimer)  { clearTimeout(activeSuccessResetTimer);  activeSuccessResetTimer  = null; }
}
function clearSuccessState() {
  clearSuccessTimers();
  activeSuccessId = null;
  activeSuccessDismissFn = null;
}

// Allow ReactNode for title/description even though base Toast type uses string for native HTML title
interface Toast extends Omit<ToasterToast, "id" | "title" | "description"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

function toast({ ...props }: Toast) {
  const isSuccess = !props.variant || props.variant === "default" || props.variant === "success";

  if (isSuccess && activeSuccessId) {
    const currentId = activeSuccessId;
    const currentDismiss = activeSuccessDismissFn!;
    clearSuccessTimers();
    dispatch({ type: actionTypes.UPDATE_TOAST, toast: { id: currentId, title: "Please wait…", description: undefined } });
    activeSuccessResetTimer = setTimeout(() => {
      dispatch({ type: actionTypes.UPDATE_TOAST, toast: { id: currentId, title: props.title, description: props.description } });
    }, PLEASE_WAIT_MS);
    activeSuccessExpireTimer = setTimeout(() => { currentDismiss(); clearSuccessState(); }, PLEASE_WAIT_MS + SUCCESS_DURATION);
    const update = (p: ToasterToast) => dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...p, id: currentId } });
    return { id: currentId, dismiss: currentDismiss, update };
  }

  const id = genId();
  const update = (p: ToasterToast) => dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...p, id } });
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props, id, createdAt: new Date(), open: true,
      onOpenChange: (open) => {
        if (!open) { dismiss(); if (isSuccess && activeSuccessId === id) clearSuccessState(); }
      },
    },
  });

  if (isSuccess) {
    activeSuccessId = id;
    activeSuccessDismissFn = dismiss;
    clearSuccessTimers();
    activeSuccessExpireTimer = setTimeout(() => { dismiss(); clearSuccessState(); }, SUCCESS_DURATION);
  }

  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, [state]);
  return { ...state, toast, dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }) };
}

export { useToast, toast };