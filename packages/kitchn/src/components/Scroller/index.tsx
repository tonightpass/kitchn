import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";

type Props = {
  /**
   * The width of the scroller.
   */
  width?: string | number;

  /**
   * The height of the scroller.
   */
  height?: string | number;

  /**
   * The scroller's children.
   */
  children?: React.ReactNode;
};

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
      {showTopGradient && <TopGradient />}
      {showBottomGradient && <BottomGradient />}
      {showLeftGradient && <LeftGradient />}
      {showRightGradient && <RightGradient />}
    </Container>
  );
})<ScrollerProps>`
  position: relative;
  overflow: hidden;
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
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

const Gradient = styled.div`
  position: absolute;
  width: 100%;
`;

const TopGradient = styled(Gradient)`
  top: 0;
  left: 0;
  height: 20px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3) 30%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.5) 50%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.7) 70%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 1) 100%
  );
`;

const BottomGradient = styled(Gradient)`
  bottom: 0;
  left: 0;
  height: 20px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3) 30%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.5) 50%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.7) 70%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 1) 100%
  );
`;

const LeftGradient = styled(Gradient)`
  left: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3) 30%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.5) 50%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.7) 70%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 1) 100%
  );
`;

const RightGradient = styled(Gradient)`
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3) 30%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.5) 50%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 0.7) 70%,
    /* Adjust the percentage as needed */ rgba(0, 0, 0, 1) 100%
  );
`;

ScrollerComponent.displayName = "KitchnSelect";
export const Scroller = withDecorator(ScrollerComponent);
export default Scroller;
