import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";
import { convertRGBToRGBA } from "../../utils/convert-rgb-to-rgba";

type Props = React.PropsWithChildren;

export type ScrollerProps = KitchnComponent<Props>;

const ScrollerComponent = styled(({ children, ...props }: ScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const updateGradients = () => {
        const hasVerticalScrollbar =
          container.scrollHeight > container.clientHeight;
        const hasHorizontalScrollbar =
          container.scrollWidth > container.clientWidth;

        setShowTopGradient(container.scrollTop > 0 && hasVerticalScrollbar);
        setShowBottomGradient(
          container.scrollHeight - container.scrollTop >
            container.clientHeight && hasVerticalScrollbar,
        );
        setShowLeftGradient(container.scrollLeft > 0 && hasHorizontalScrollbar);
        setShowRightGradient(
          container.scrollWidth - container.scrollLeft >
            container.clientWidth && hasHorizontalScrollbar,
        );
      };

      container.addEventListener("scroll", updateGradients);

      updateGradients();

      return () => {
        container.removeEventListener("scroll", updateGradients);
      };
    }

    return undefined;
  }, [children]);

  return (
    <Container {...props}>
      <ScrollerContainer ref={containerRef}>{children}</ScrollerContainer>
      <TopGradient show={showTopGradient} />
      <BottomGradient show={showBottomGradient} />
      <LeftGradient show={showLeftGradient} />
      <RightGradient show={showRightGradient} />
    </Container>
  );
})<ScrollerProps>`
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ScrollerContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  scrollbar-width: none;
`;

const Gradient = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const TopGradient = styled(Gradient)`
  top: 0;
  left: 0;
  height: 20px;
  background: ${({ theme }) => `
      linear-gradient(
    to top,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.1)},
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.3)} 30%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.5)} 50%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.7)} 70%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 1)} 100%
  )
  `};
`;

const BottomGradient = styled(Gradient)`
  bottom: 0;
  left: 0;
  height: 20px;
  background: ${({ theme }) => `
      linear-gradient(
    to bottom,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.1)},
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.3)} 30%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.5)} 50%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.7)} 70%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 1)} 100%
  )
  `};
`;

const LeftGradient = styled(Gradient)`
  left: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  background: ${({ theme }) => `
      linear-gradient(
    to left,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.1)},
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.3)} 30%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.5)} 50%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.7)} 70%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 1)} 100%
  )
  `};
`;

const RightGradient = styled(Gradient)`
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  background: ${({ theme }) => `
      linear-gradient(
    to right,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.1)},
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.3)} 30%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.5)} 50%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 0.7)} 70%,
    ${convertRGBToRGBA(theme.colors.layout.darkest, 1)} 100%
  )
  `};
`;

ScrollerComponent.displayName = "KitchnSelect";
export const Scroller = withDecorator(ScrollerComponent);
export default Scroller;
