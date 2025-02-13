/// <reference types="csstype" />
import React, { CSSProperties } from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { Gap } from "../../types/theme";

type Direction = CSSProperties["flexDirection"];

type Props = {
  row?: boolean;
  flex?: CSSProperties["flex"];
  direction?: [Direction, Direction, Direction];
  gap?: keyof Gap | number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  header?: boolean;
  section?: boolean;
  form?: boolean;
  label?: boolean;
  footer?: boolean;
  nav?: boolean;
  aside?: boolean;
  main?: boolean;
  wrap?: CSSProperties["flexWrap"];
  transform?: CSSProperties["transform"];
};

export type ContainerProps = Props & React.ComponentPropsWithRef<"div">;

const ForwardedContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      header,
      section,
      form,
      label,
      footer,
      nav,
      aside,
      main,
      // This prevents 'row' and 'gap' from being passed to the DOM element, avoiding React warnings
      row: _row,
      gap: _gap,
      ...rest
    }: ContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const Component = header
      ? "header"
      : section
        ? "section"
        : form
          ? "form"
          : label
            ? "label"
            : footer
              ? "footer"
              : nav
                ? "nav"
                : aside
                  ? "aside"
                  : main
                    ? "main"
                    : "div";
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref={ref}
        role={header ? "banner" : section ? "region" : undefined}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

ForwardedContainer.displayName = "Container";

const ContainerComponent = styled(ForwardedContainer)<ContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    (props.direction && props.direction[props.direction.length - 1]) ||
    (props.row ? "row" : "column")};
  ${(props) => props.flex && `flex: ${props.flex};`}
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap};`}
  ${(props) => props.transform && `transform: ${props.transform};`}

  ${(props) =>
    props.gap &&
    `gap: ${props.theme.gap[props.gap as keyof Gap] || `${props.gap}px`};`}
  @media (max-width: ${(props) => props.theme.breakpoint.laptop}) {
    ${(props) =>
      props.direction &&
      props.direction[2] &&
      `flex-direction: ${props.direction[2]};`}
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    ${(props) =>
      props.direction &&
      props.direction[1] &&
      `flex-direction: ${props.direction[1]};`}
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    ${(props) =>
      props.direction &&
      props.direction[0] &&
      `flex-direction: ${props.direction[0]};`}
  }
`;

ContainerComponent.displayName = "KitchnContainer";
export const Container = withDecorator(ContainerComponent);
export default Container;
