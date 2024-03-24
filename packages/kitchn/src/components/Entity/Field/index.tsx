import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";
import Container, { ContainerProps } from "../../Container";
import Skeleton from "../../Skeleton";
import Text, { TextProps } from "../../Text";

export type EntityFieldTitleProps = TextProps & {
  active?: boolean;
  label?: boolean;
};

export const EntityFieldTitle = styled(
  ({ ...props }: EntityFieldTitleProps) => {
    return (
      <Text
        size={props.label ? "small" : "compact"}
        weight={props.label ? "regular" : "semiBold"}
        color={props.label ? "light" : !props.active ? "light" : "lightest"}
        transform={props.label ? "uppercase" : "none"}
        truncate
        span
        lineHeight={1}
        {...props}
      />
    );
  },
)``;

export const EntityFieldDescription = styled(({ ...props }: TextProps) => {
  return (
    <Text
      size={"compact"}
      color={"light"}
      truncate
      span
      lineHeight={1}
      {...props}
    />
  );
})``;

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  active?: boolean;
  label?: boolean;
  placeholder?: boolean;
  avatar?: React.ReactNode;
} & ContainerProps;

export type EntityFieldProps = KitchnComponent<Props>;

const EntityFieldComponent = styled(
  ({ active = true, ...props }: EntityFieldProps) => {
    return (
      <Container
        align={"center"}
        flex={1}
        minW={1}
        maxW={"100%"}
        active={active}
        gap={"tiny"}
        row
        {...props}
      >
        <Container gap={"tiny"} minW={1} maxW={"100%"}>
          {props.title && (
            <Skeleton show={props.placeholder}>
              <EntityFieldTitle label={props.label} active={active}>
                {props.title}
              </EntityFieldTitle>
            </Skeleton>
          )}
          {props.description && (
            <Skeleton show={props.placeholder}>
              <EntityFieldDescription>
                {props.description}
              </EntityFieldDescription>
            </Skeleton>
          )}
        </Container>
        {props.avatar}
      </Container>
    );
  },
)``;

EntityFieldComponent.displayName = "KitchnEntityField";
export const EntityField = withDecorator(EntityFieldComponent);
export default EntityField;
