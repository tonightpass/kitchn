import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import useBreakpoint from "../../hooks/useBreakpoint";
import useKeyboard from "../../hooks/useKeyboard";
import usePortal from "../../hooks/usePortal";
import { KitchenComponent } from "../../types";
import { fadeInDown, fadeOutUp } from "../../utils/animate";
import { KeyCode } from "../../utils/codes";
import Drawer from "../Drawer";

type Props = {
  active: boolean;
  onAnimationDone?: () => void;
  onClickOutside?: () => void;
  onEnterKeyPress?: () => void;
  children?: React.ReactNode;
};

export type ModalProps = KitchenComponent<Props>;

const ModalComponent = styled(
  ({
    active,
    children,
    onClickOutside,
    onEnterKeyPress,
    onAnimationDone,
    ...props
  }: ModalProps) => {
    const portal = usePortal("modal");
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { isMobile } = useBreakpoint();

    const [animationState, setAnimationState] = React.useState<
      "entrance" | "exit" | null
    >(null);

    const handleDismiss = React.useCallback(
      (isClickOutside = true) => {
        if (animationState) setAnimationState("exit");
        if (isClickOutside && onClickOutside) onClickOutside();
        setTimeout(() => {
          setAnimationState(null);
          if (onAnimationDone) onAnimationDone();
        }, 210);
      },
      [animationState, onClickOutside, onAnimationDone],
    );

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleDismiss();
      }
    };

    React.useEffect(() => {
      if (isMobile) setAnimationState(null);
      if (active) {
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
    }, [active, animationState, handleDismiss, isMobile, onAnimationDone]);

    const { bindings } = useKeyboard(
      (e) => {
        switch (e.keyCode) {
          case KeyCode.Enter:
            onEnterKeyPress && onEnterKeyPress();
            break;
          case KeyCode.Escape:
            onClickOutside && onClickOutside();
            break;
        }
      },
      [KeyCode.Escape, KeyCode.Enter],
      {
        disableGlobalEvent: true,
      },
    );

    if (!portal) return null;

    if (isMobile) {
      return (
        <Drawer
          show={active}
          onDismiss={handleDismiss}
          onAnimationDone={onAnimationDone}
          {...bindings}
        >
          {children}
        </Drawer>
      );
    }

    return createPortal(
      (active && animationState) || animationState ? (
        <div
          onClick={handleContainerClick}
          ref={containerRef}
          tabIndex={-1}
          {...bindings}
          {...props}
        >
          <ModalContent animationState={animationState}>
            <ModalOverflow>{children}</ModalOverflow>
          </ModalContent>
        </div>
      ) : null,
      portal,
    );
  },
)`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div<{
  animationState: "entrance" | "exit";
}>`
  width: 420px;
  max-height: 80vh;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.layout.lightest};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  overflow: hidden;
  overflow-y: auto;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-name: ${({ animationState }) =>
    animationState === "entrance" ? fadeInDown : fadeOutUp};
`;

const ModalOverflow = styled.div`
  overflow: auto;
  display: block;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ModalHeader = styled.header`
  padding: 15px 5px;
  text-align: center;
  text-transform: uppercase;
`;

const ModalTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const ModalSubtitle = styled.p`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.layout.light};
`;

const ModalActions = styled.footer`
  position: sticky;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  display: flex;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`;

export type ModalActionProps = KitchenComponent<
  {
    disabled?: boolean;
  },
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const ModalAction = styled((props: ModalActionProps) => (
  <button type={"button"} {...props} />
))<ModalActionProps>`
  color: ${({ theme }) => theme.colors.text.lightest};
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.small};
  outline: none;
  padding: 20px 0;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.layout.dark};

  ${({ theme, disabled }) =>
    disabled &&
    `
    color: ${theme.colors.layout.light};
    background-color: ${theme.colors.layout.darkest};
    cursor: not-allowed;
  `}

  &:first-child {
    border-left: none;
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
      background-color: ${theme.colors.layout.darker};
      color: ${theme.colors.text.lightest};
    `}
  }
`;

const ModalInset = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.dark};
  background-color: ${({ theme }) => theme.colors.layout.darker};
  margin: 0 -20px;
`;

export const Modal = {
  Modal: withScale(ModalComponent),
  Body: withScale(ModalBody),
  Header: withScale(ModalHeader),
  Title: withScale(ModalTitle),
  Subtitle: withScale(ModalSubtitle),
  Actions: withScale(ModalActions),
  Action: withScale(ModalAction),
  Inset: withScale(ModalInset),
};

export default Modal;
