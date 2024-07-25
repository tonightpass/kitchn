import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { Gap } from "../../types/theme";

type Direction = "row" | "column";

type Props = {
  row?: boolean;
  flex?: number | string;
  direction?: [Direction, Direction, Direction];
  gap?: keyof Gap | number;
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  header?: boolean;
  section?: boolean;
  form?: boolean;
  label?: boolean;
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "unset";
  transform?: string;
};

export type ContainerProps = Props & React.ComponentPropsWithRef<"div">;

const ForwardedContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { children, header, section, form, label, ...rest }: ContainerProps,
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
