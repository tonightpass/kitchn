import React from "react";

import { Toast, ToastLayout } from "../hooks/use-toasts";

export type UpdateToastsFunction = (fn: (toasts: Toast[]) => Toast[]) => void;
export type UpdateToastsLayoutFunction = (
  fn: (layout: Required<ToastLayout>) => Required<ToastLayout>,
) => void;
export type UpdateToastsIDFunction = (fn: () => string | null) => void;

export interface ToastsContextParams {
  toasts: Toast[];
  updateToasts: UpdateToastsFunction;
  toastLayout: Required<ToastLayout>;
  updateToastLayout: UpdateToastsLayoutFunction;
  lastUpdateToastId: string | null;
  updateLastToastId: UpdateToastsIDFunction;
}

export const defaultToastLayout: Required<ToastLayout> = {
  padding: "12px 16px",
  margin: "8px 0",
  width: "420px",
  maxWidth: "90vw",
  maxHeight: "75px",
  placement: "bottomRight",
};

const defaultParams: ToastsContextParams = {
  toasts: [],
  toastLayout: defaultToastLayout,
  updateToastLayout: (t) => t,
  updateToasts: (t) => t,
  lastUpdateToastId: null,
  updateLastToastId: () => null,
};

export const ToastsContent: React.Context<ToastsContextParams> =
  React.createContext<ToastsContextParams>(defaultParams);

export const useToastsContext = (): ToastsContextParams =>
  React.useContext<ToastsContextParams>(ToastsContent);
