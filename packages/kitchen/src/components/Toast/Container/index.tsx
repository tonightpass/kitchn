import React, { useMemo } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ToastItem } from "../../..";
import { useToastsContext } from "../../../contexts/Toasts";
import useCurrentState from "../../../hooks/useCurrentState";
import usePortal from "../../../hooks/usePortal";

const ToastContainer = styled((props) => {
  const portal = usePortal("toast");
  const [, setHovering, hoveringRef] = useCurrentState<boolean>(false);
  const { toasts, updateToasts, toastLayout, lastUpdateToastId } =
    useToastsContext();
  const memoizedLayout = useMemo(() => toastLayout, [toastLayout]);
  const toastElements = useMemo(
    () =>
      toasts.map((toast) => (
        <ToastItem
          toast={toast}
          layout={memoizedLayout}
          key={toast._internalIdent}
        />
      )),
    [toasts, memoizedLayout]
  );

  const hoverHandler = (isHovering: boolean) => {
    setHovering(isHovering);
    if (isHovering) {
      return updateToasts((last) =>
        last.map((toast) => {
          if (!toast.visible) return toast;
          toast._timeout && window.clearTimeout(toast._timeout);
          return {
            ...toast,
            timeout: null,
          };
        })
      );
    }

    updateToasts((last) =>
      last.map((toast, index) => {
        if (!toast.visible) return toast;
        toast._timeout && window.clearTimeout(toast._timeout);
        return {
          ...toast,
          _timeout: (() => {
            const timer = window.setTimeout(() => {
              toast.cancel();
              window.clearTimeout(timer);
            }, toast.delay + index * 100);
            return timer;
          })(),
        };
      })
    );
  };

  React.useEffect(() => {
    const index = toasts.findIndex(
      (r) => r._internalIdent === lastUpdateToastId
    );
    const toast = toasts[index];
    if (!toast || toast.visible || !hoveringRef.current) return;
    const hasVisible = toasts.find((r, i) => i < index && r.visible);
    if (hasVisible || !hoveringRef.current) return;
    hoverHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts, lastUpdateToastId]);

  React.useEffect(() => {
    let timeout: null | number = null;
    const timer = window.setInterval(() => {
      if (toasts.length === 0) return;
      timeout = window.setTimeout(() => {
        const allInvisible = !toasts.find((r) => r.visible);
        allInvisible && updateToasts(() => []);
        timeout && clearTimeout(timeout);
      }, 350);
    }, 5000);

    return () => {
      timer && clearInterval(timer);
      timeout && clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  if (!portal) return null;
  if (!toasts || toasts.length === 0) return null;
  return createPortal(
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      {...props}
    >
      {toastElements}
    </div>,
    portal
  );
})`
  position: fixed;
  width: auto;
  max-width: 100%;
  right: ${({ theme }) => theme.gap.normal};
  bottom: ${({ theme }) => theme.gap.normal};
  z-index: 2000;
  transition: all 400ms ease;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export default ToastContainer;
