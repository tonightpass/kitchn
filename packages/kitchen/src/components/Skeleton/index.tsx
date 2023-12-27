import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import isString from "../../utils/isString";

type Props = {
  /**
   * The skeleton's appearance (if it's shown or not).
   */
  show?: boolean;

  /**
   * The skeleton's width.
   */
  width?: number | string;

  /**
   * The skeleton's height.
   */
  height?: number | string;

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

export type SkeletonProps = KitchenComponent<Props>;

const Skeleton = styled(
  ({
    as: Component = "span",
    children,
    width,
    height,
    show = true,
    animated = true,
    ...props
  }: SkeletonProps) => {
    if (!show && !children) return <></>;
    if (!show && children) return children as JSX.Element;
    return (
      <Component
        width={width}
        height={height}
        show={show}
        animated={animated}
        {...props}
      >
        {children}
      </Component>
    );
  },
)<SkeletonProps>`
  ${({
    children,
    show = true,
    width,
    height,
    shape,
    theme,
    animated = true,
  }) =>
    children
      ? `
        position: relative;
        display: block;
        width: ${width ? "100%" : "auto"};
        max-width: ${
          width ? (isString(width) ? width : `${width}px`) : "unset"
        };
        min-height: ${
          height ? (isString(height) ? height : `${height}px`) : "auto"
        };
        ${
          show
            ? `
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
                shape === "square" ? "0" : shape === "round" ? "99999px" : "8px"
              };
              background-image: linear-gradient(
                270deg,
                ${theme.colors.layout.darkest},
                ${theme.colors.layout.dark},
                ${theme.colors.layout.dark},
                ${theme.colors.layout.darkest}
              );
              background-size: 400% 100%;
              animation: ${
                animated ? "skeleton 8s ease-in-out infinite" : "none"
              };
            }
        `
            : ""
        }
      `
      : `
          display: block;
          width: 100%;
          user-select: none;
          cursor: default;
          max-width: ${
            width ? (isString(width) ? width : `${width}px`) : "24px"
          };
          min-height: ${
            height ? (isString(height) ? height : `${height}px`) : "24px"
          };
          border-radius: ${
            shape === "square" ? "0" : shape === "round" ? "99999px" : "8px"
          };
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
    Number.isFinite(height) &&
    boxHeight - ((height as number) || 24) > 0 &&
    `margin-bottom: ${boxHeight - ((height as number) || 24)}px`};

  @keyframes skeleton {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;

Skeleton.displayName = "Skeleton";
export default withScale(Skeleton);
