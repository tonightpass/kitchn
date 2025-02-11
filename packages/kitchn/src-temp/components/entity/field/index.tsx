import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";
import Container, { ContainerProps } from "../../container";
import Skeleton from "../../skeleton";
import Text, { TextProps } from "../../text";

export type EntityFieldTitleProps = KitchnComponent<
  {
    active?: boolean;
    label?: boolean;
  },
  TextProps
>;

export const EntityFieldTitle = styled(
  ({ active, label, ...props }: EntityFieldTitleProps) => {
    return (
      <Text
        size={label ? "small" : "compact"}
        weight={label ? "regular" : "semiBold"}
        color={label ? "light" : !active ? "light" : "lightest"}
        transform={label ? "uppercase" : "none"}
        truncate
        span
        {...props}
      />
    );
  },
)``;

export const EntityFieldDescription = styled(({ ...props }: TextProps) => {
  return <Text size={"compact"} color={"light"} truncate span {...props} />;
})``;

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  active?: boolean;
  label?: boolean;
  placeholder?: boolean;
  avatar?: React.ReactNode;
};

export type EntityFieldProps = KitchnComponent<Props, ContainerProps>;

const EntityFieldComponent = styled(
  ({
    active = true,
    title,
    label,
    description,
    placeholder,
    ...props
  }: EntityFieldProps) => {
    return (
      <Container
        align={"center"}
        flex={1}
        minW={1}
        maxW={"100%"}
        gap={"tiny"}
        row
        {...props}
      >
        <Container
          minW={1}
          gap={placeholder ? "tiny" : undefined}
          maxW={"100%"}
        >
          {title && (
            <Skeleton show={placeholder}>
              <EntityFieldTitle label={label} active={active}>
                {title}
              </EntityFieldTitle>
            </Skeleton>
          )}
          {description && (
            <Skeleton show={placeholder}>
              <EntityFieldDescription>{description}</EntityFieldDescription>
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
