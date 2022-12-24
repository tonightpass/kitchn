import React from "react";
import { defaultToastLayout, useToastsContext } from "../contexts/Toasts";
import { AccentColors } from "../types/theme";
import getId from "../utils/getId";

export interface ToastAction {
  name: string;
  handler: (
    event: React.MouseEvent<HTMLButtonElement>,
    cancel: () => void
  ) => void;
  passive?: boolean;
}
export type ToastTypes = keyof AccentColors;

export type ToastLayout = {
  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];
  width?: React.CSSProperties["width"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
};
export interface ToastInput {
  text: string | React.ReactNode;
  type?: ToastTypes;
  id?: string;
  delay?: number;
  actions?: Array<ToastAction>;
}
export type ToastInstance = {
  visible: boolean;
  cancel: () => void;
  _timeout: null | number;
  _internalIdent: string;
};

export type Toast = Required<ToastInput> & ToastInstance;

const defaultToast = {
  delay: 2000,
  type: "default" as ToastTypes,
};

export type UseToastsResult = {
  toasts: Array<Toast>;
  setToast: (toast: ToastInput) => void;
  removeAll: () => void;
  findOneToastByID: (ident: string) => Toast | undefined;
  removeOneToastByID: (ident: string) => void;
};

const useToasts = (layout?: ToastLayout): UseToastsResult => {
  const { updateToasts, toasts, updateToastLayout, updateLastToastId } =
    useToastsContext();

  React.useEffect(() => {
    if (!layout) return;
    updateToastLayout(() =>
      layout
        ? {
            ...defaultToastLayout,
            ...layout,
          }
        : defaultToastLayout
    );
  }, []);

  const cancel = (internalId: string) => {
    updateToasts((currentToasts: Array<Toast>) =>
      currentToasts.map((item) => {
        if (item._internalIdent !== internalId) return item;
        return { ...item, visible: false };
      })
    );
    updateLastToastId(() => internalId);
  };
  const removeAll = () => {
    updateToasts((last) => last.map((toast) => ({ ...toast, visible: false })));
  };

  const findOneToastByID = (id: string) => toasts.find((t) => t.id === id);

  const removeOneToastByID = (id: string) => {
    updateToasts((last) =>
      last.map((toast) => {
        if (toast.id !== id) return toast;
        return {
          ...toast,
          visible: false,
        };
      })
    );
  };

  const setToast = (toast: ToastInput): void => {
    const internalIdent = `toast-${getId()}`;
    const delay = toast.delay || defaultToast.delay;
    if (toast.id) {
      const hasIdent = toasts.find((t) => t.id === toast.id);
      if (hasIdent) {
        // eslint-disable-next-line prettier/prettier
        throw new Error('Toast: Already have the same key: "ident"');
      }
    }

    updateToasts((last: Array<Toast>) => {
      const newToast: Toast = {
        delay,
        text: toast.text,
        visible: true,
        type: toast.type || defaultToast.type,
        id: toast.id || internalIdent,
        actions: toast.actions || [],
        _internalIdent: internalIdent,
        _timeout: window.setTimeout(() => {
          cancel(internalIdent);
          if (newToast._timeout) {
            window.clearTimeout(newToast._timeout);
            newToast._timeout = null;
          }
        }, delay),
        cancel: () => cancel(internalIdent),
      };
      return [...last, newToast];
    });
  };

  return {
    toasts,
    setToast,
    removeAll,
    findOneToastByID,
    removeOneToastByID,
  };
};

export default useToasts;
