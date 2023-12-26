import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import useKeyboard from "../../hooks/useKeyboard";
import usePortal from "../../hooks/usePortal";
import { KitchenComponent } from "../../types";
import { slideInUp, slideOutDown } from "../../utils/animate";
import { KeyCode } from "../../utils/codes";

type Props = {
  show: boolean;
  onDismiss?: () => void;
  onAnimationDone?: () => void;
  children?: React.ReactNode;
  height?: number;
};

export type DrawerProps = KitchenComponent<Props>;

const Drawer = styled(
  ({
    children,
    show,
    onDismiss,
    onAnimationDone,
    height,
    ...props
  }: DrawerProps) => {
    const portal = usePortal("drawer");
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [animationState, setAnimationState] = React.useState<
      "entrance" | "exit" | null
    >(null);

    const handleDismiss = React.useCallback(
      (isDismiss = true) => {
        if (animationState) setAnimationState("exit");
        if (isDismiss && onDismiss) onDismiss();
        setTimeout(() => {
          setAnimationState(null);
          if (onAnimationDone) onAnimationDone();
        }, 210);
      },
      [animationState, onDismiss, onAnimationDone],
    );

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleDismiss();
      }
    };

    const { bindings } = useKeyboard(
      () => {
        handleDismiss();
      },
      KeyCode.Escape,
      {
        disableGlobalEvent: true,
      },
    );

    React.useEffect(() => {
      if (show) {
        document.body.style.overflow = "hidden";
        setAnimationState("entrance");

        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.focus();
          }
        }, 100);
      } else {
        document.body.style.overflow = "unset";
        handleDismiss(false);
      }
    }, [handleDismiss, show]);

    if (!portal) return null;
    return createPortal(
      (show && animationState) || animationState ? (
        <div
          onClick={handleContainerClick}
          tabIndex={-1}
          ref={containerRef}
          {...bindings}
          {...props}
        >
          <Content animationState={animationState} height={height} tabIndex={0}>
            {children}
          </Content>
        </div>
      ) : null,
      portal,
    );
  },
)<DrawerProps>`
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  position: fixed;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div<{
  animationState: "entrance" | "exit";
  height?: number;
}>`
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.layout.lightest};
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  overflow-y: auto;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-name: ${({ animationState }) =>
    animationState === "entrance" ? slideInUp : slideOutDown};
  ${({ height }) => height && `height: ${height}px`};
`;

export default withScale(Drawer);
