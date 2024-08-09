import React from "react";
import styled from "styled-components";

import {
  DecoratorProps,
  handleValue,
  withDecorator,
} from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";

type Props = {
  /**
   * The skeleton's appearance (if it's shown or not).
   */
  show?: boolean;

  /**
   * The skeleton's width.
   */
  width?: DecoratorProps["width"];

  /**
   * The skeleton's width.
   */
  w?: DecoratorProps["w"];

  /**
   * The skeleton's height.
   */
  height?: DecoratorProps["height"];

  /**
   * The skeleton's height.
   */
  h?: DecoratorProps["h"];

  /**
   * The skeleton's box height.
   */
  boxHeight?: number;

  /**
   * The skeleton's mode (animated or not).
   */
  animated?: boolean;

  /**
   * The skeleton's shape.
   */
  shape?: "normal" | "square" | "round";

  /**
   * The skeleton's children.
   */
  children?: React.ReactNode;

  /**
   * The skeleton's key.
   */
  [key: string]: any;
};

export type SkeletonProps = KitchnComponent<Props>;

const SkeletonComponent = styled(
  ({
    as: Component = "span",
    children,
    width,
    w,
    height,
    h,
    show = true,
    animated: _animated = true,
    // Prevents the 'boxHeight' prop from being passed to the DOM element
    boxHeight: _boxHeight,
    ...props
  }: SkeletonProps) => {
    if (!show && !children) return <></>;
    if (!show && children) return children as JSX.Element;
    return (
      <Component
        role={"status"}
        aria-busy={show ? "true" : "false"}
        aria-hidden={!show}
        width={width || w}
        height={height || h}
        {...props}
      >
        {children}
      </Component>
    );
  },
)<SkeletonProps>`
  position: relative;
  display: block;
  user-select: none;
  cursor: default;
  overflow: hidden;
  border-radius: ${({ shape, theme }) =>
    shape === "square"
      ? "0"
      : shape === "round"
        ? theme.radius.round
        : theme.radius.square};

  ${({ children, shape, width, w, height, h, theme, animated = true }) =>
    children
      ? `
        width: ${width ? "100%" : "auto"};
        max-width: ${width ? handleValue(theme, width || w) : "unset"};
        min-height: ${height ? handleValue(theme, height || h) : "auto"};
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          user-select: none;
          cursor: default;
          border-radius: ${
            shape === "square"
              ? "0"
              : shape === "round"
                ? theme.radius.round
                : theme.radius.square
          };
          background-image: linear-gradient(
            270deg,
            ${theme.colors.layout.darkest},
            ${theme.colors.layout.dark},
            ${theme.colors.layout.dark},
            ${theme.colors.layout.darkest}
          );
          background-size: 400% 100%;
          animation: ${animated ? "skeleton 8s ease-in-out infinite" : "none"};
        }
      `
      : `
        width: 100%;
        max-width: ${width ? handleValue(theme, width || w) : "24px"};
        min-height: ${height ? handleValue(theme, height || h) : "24px"};
        background-size: 400% 100%;
        background-image: linear-gradient(
          270deg,
          ${theme.colors.layout.darkest},
          ${theme.colors.layout.dark},
          ${theme.colors.layout.dark},
          ${theme.colors.layout.darkest}
        );
        animation: ${animated ? "skeleton 8s ease-in-out infinite" : "none"};
  `}

  ${({ boxHeight, height }) =>
    boxHeight &&
    height &&
    `margin-bottom: calc(${boxHeight}px - ${height || 24}px);`}

  @keyframes skeleton {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;

SkeletonComponent.displayName = "KitchnSkeleton";
export const Skeleton = withDecorator(SkeletonComponent, ["width", "height"]);
export default Skeleton;
