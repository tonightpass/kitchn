import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import usePortal from "../../hooks/usePortal";

export type DrawerProps = {
  show: boolean;
  onDismiss?: () => void;
  onAnimationDone?: () => void;
  children?: React.ReactNode;
  height?: number;
};

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

    const [animationState, setAnimationState] = React.useState<
      "entrance" | "exit" | null
    >(null);

    const handleDismiss = React.useCallback(() => {
      setAnimationState("exit");
      if (onDismiss) onDismiss();
      setTimeout(() => {
        setAnimationState(null);
        if (onAnimationDone) onAnimationDone();
      }, 210);
    }, [onDismiss, onAnimationDone]);

    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleDismiss();
      }
    };

    const handleEnter = React.useCallback(
      (event: any) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          handleDismiss();
        }
      },
      [handleDismiss]
    );

    React.useEffect(() => {
      if (show) {
        document.body.style.overflow = "hidden";
        setAnimationState("entrance");
      } else {
        document.body.style.overflow = "unset";
      }

      if (show) {
        document.addEventListener("keydown", handleEnter, false);
      }

      return () => {
        document.removeEventListener("keydown", handleEnter, false);
      };
    }, [handleEnter, show]);

    if (!portal) return null;
    return createPortal(
      (show && animationState) || animationState ? (
        <div onClick={handleWrapperClick} {...props}>
          <Content animationState={animationState} height={height}>
            {children}
          </Content>
        </div>
      ) : null,
      portal
    );
  }
)<DrawerProps>`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
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
    animationState === "entrance" ? "slideInUp" : "slideOutDown"};
  ${({ height }) => height && `height: ${height}px`};

  @keyframes slideInUp {
    0% {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes slideOutDown {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
`;

export default Drawer;
