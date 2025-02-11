import React from "react";

import { defaultToastLayout, useToastsContext } from "../contexts/toasts";
import { AccentColors } from "../types/theme";
import { getId } from "../utils/get-id";

export interface ToastAction {
  name: string;
  handler: (
    event: React.MouseEvent<HTMLButtonElement>,
    cancel: () => void,
  ) => void;
  passive?: boolean;
}

export type ToastPlacement =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export type ToastTypes = keyof AccentColors;

export type ToastLayout = {
  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];
  width?: React.CSSProperties["width"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  placement?: ToastPlacement;
};
export interface ToastInput {
  text: string | React.ReactNode;
  type?: ToastTypes;
  id?: string;
  delay?: number;
  actions?: ToastAction[];
  preserve?: boolean;
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
  type: "primary" as ToastTypes,
};

export type UseToastsResult = {
  toasts: Toast[];
  setToast: (toast: ToastInput) => void;
  removeAll: () => void;
  findOneToastByID: (ident: string) => Toast | undefined;
  removeOneToastByID: (ident: string) => void;
};

export const useToasts = (layout?: ToastLayout): UseToastsResult => {
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
        : defaultToastLayout,
    );
  }, []);

  const cancel = (internalId: string) => {
    updateToasts((currentToasts: Toast[]) =>
      currentToasts.map((item) => {
        if (item._internalIdent !== internalId) return item;
        if (item._timeout) {
          window.clearTimeout(item._timeout);
        }
        return { ...item, visible: false, _timeout: null };
      }),
    );
    updateLastToastId(() => internalId);
  };

  const removeAll = () => {
    updateToasts((last) =>
      last.map((toast) => {
        if (toast._timeout) {
          window.clearTimeout(toast._timeout);
        }
        return { ...toast, visible: false, _timeout: null };
      }),
    );
  };

  const findOneToastByID = (id: string) => toasts.find((t) => t.id === id);

  const removeOneToastByID = (id: string) => {
    updateToasts((last) =>
      last.map((toast) => {
        if (toast.id !== id) return toast;
        if (toast._timeout) {
          window.clearTimeout(toast._timeout);
        }
        return {
          ...toast,
          visible: false,
          _timeout: null,
        };
      }),
    );
  };

  const setToast = (toast: ToastInput): void => {
    const internalIdent = `toast-${getId()}`;
    if (toast.id) {
      const hasIdent = toasts.find((t) => t.id === toast.id);
      if (hasIdent) {
        // eslint-disable-next-line quotes
        throw new Error(`Toast: Already have the same key: "ident"`);
      }
    }

    const hasNonPassiveAction =
      toast.actions?.some((action) => !action.passive) ?? false;
    const shouldPreserve = toast.preserve ?? hasNonPassiveAction ?? false;

    const delay = toast.delay || (shouldPreserve ? 0 : defaultToast.delay);

    const createTimeout = (internalId: string) =>
      window.setTimeout(() => {
        cancel(internalId);
      }, delay);

    updateToasts((last: Toast[]) => {
      const newToast: Toast = {
        delay,
        text: toast.text,
        visible: true,
        type: toast.type || defaultToast.type,
        id: toast.id || internalIdent,
        actions:
          toast.actions?.map((action) => ({
            ...action,
            handler: (event, cancelFn) => {
              action.handler(event, cancelFn);
              if (
                !action.passive &&
                !toast.preserve &&
                newToast._timeout === null
              ) {
                newToast._timeout = createTimeout(internalIdent);
              }
            },
          })) || [],
        preserve: shouldPreserve,
        _internalIdent: internalIdent,
        _timeout: shouldPreserve ? null : createTimeout(internalIdent),
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
