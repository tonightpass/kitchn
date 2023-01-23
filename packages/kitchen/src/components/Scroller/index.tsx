import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

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

export type ScrollerProps = KitchenComponent<Props>;

const Scroller = styled(({ children, ...props }: ScrollerProps) => {
  return <Container {...props}>{children}</Container>;
})<ScrollerProps>`
  display: flex;
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
  overflow: auto;
`;

export default Scroller;
