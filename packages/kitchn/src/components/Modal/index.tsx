import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { useBreakpoint } from "../../hooks/use-breakpoint";
import { useKeyboard } from "../../hooks/use-keyboard";
import { usePortal } from "../../hooks/use-portal";
import { KitchnComponent } from "../../types";
import { fadeInDown, fadeOutUp } from "../../utils/animate";
import { KeyCode } from "../../utils/codes";
import Button, { ButtonProps } from "../Button";
import Container, { ContainerProps } from "../Container";
import Drawer from "../Drawer";
import Text, { TextProps } from "../Text";

type Props = {
  active: boolean;
  onAnimationDone?: () => void;
  onClickOutside?: () => void;
  onEnterKeyPress?: () => void;
  children?: React.ReactNode;
};

export type ModalProps = KitchnComponent<Props>;

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
          role={"dialog"}
          aria-modal={"true"}
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
  width: 540px;
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

const ModalHeader = styled(({ ...props }: ContainerProps) => (
  <Container header gap={"small"} mb={"small"} {...props} />
))``;

const ModalTitle = styled(({ ...props }: TextProps) => (
  <Text h3 size={"large"} weight={"semiBold"} {...props} />
))``;

const ModalSubtitle = styled(({ ...props }: TextProps) => (
  <Text {...props} />
))``;

const ModalActions = styled.footer`
  position: sticky;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  background-color: ${({ theme }) => theme.colors.layout.darker};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`;

export type ModalActionProps = KitchnComponent<
  {
    disabled?: boolean;
  },
  ButtonProps
>;

const ModalAction = styled((props: ModalActionProps) => {
  return <Button {...props} />;
})<ModalActionProps>``;

const ModalInset = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.dark};
  background-color: ${({ theme }) => theme.colors.layout.darker};
  margin: 0 -20px;
`;

export const Modal = {
  Modal: withDecorator(ModalComponent),
  Body: withDecorator(ModalBody),
  Header: withDecorator(ModalHeader),
  Title: withDecorator(ModalTitle),
  Subtitle: withDecorator(ModalSubtitle),
  Actions: withDecorator(ModalActions),
  Action: withDecorator(ModalAction),
  Inset: withDecorator(ModalInset),
};

export default Modal;
