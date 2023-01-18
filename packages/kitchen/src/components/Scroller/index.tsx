import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";

export type ScrollerProps = KitchenComponent & {
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

const Scroller = styled(({ children, ...props }: ScrollerProps) => {
  return (
    <Container {...props}>
      {children}
      <Overlay {...props}>
        <Scroll {...props}></Scroll>
      </Overlay>
    </Container>
  );
})<ScrollerProps>`
  display: flex;
  background-color: lime;
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
`;

const Container = styled.div<{
  width: ScrollerProps["width"];
  height: ScrollerProps["height"];
}>`
  box-sizing: border-box;
  display: block;
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  position: relative;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
`;

const Overlay = styled.div<{
  width: ScrollerProps["width"];
  height: ScrollerProps["height"];
}>`
  box-sizing: border-box;
  display: block;
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  position: absolute;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  z-index: 2;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }
`;

const Scroll = styled.div<{
  width: ScrollerProps["width"];
  height: ScrollerProps["height"];
}>`
  box-sizing: border-box;
  display: block;
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  position: relative;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
`;

export default Scroller;
