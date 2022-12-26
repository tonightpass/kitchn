import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Icon from "../Icon";
import Text from "../Text";
import Link from "../Link";

export type ErrorProps = KitchenComponent & {
  /**
   * The label of the error.
   * @default true
   */
  label?: boolean | string;

  /**
   * The size of the error.
   * @default "normal"
   */
  size?: "small" | "normal" | "large";

  error?: { message: string; action?: string; link?: string };
};

const Error = styled(
  ({
    as: Component = "div",
    label = true,
    size,
    error,
    children,
    ...props
  }: ErrorProps) => {
    return (
      <Component {...props}>
        <IconContainer>
          <Icon icon={RiErrorWarningLine} accent={"danger"} size={size} />
        </IconContainer>
        <TextContainer>
          <Text size={size} accent={"danger"}>
            {label && (
              <Label>
                {typeof label === "string" ? label : "Error"}
                {label ? ": " : ""}
              </Label>
            )}
            <Content>{error ? error.message : children}</Content>
            {error && (
              <Action href={error.link} variant="blend">
                {error.action}
              </Action>
            )}
          </Text>
        </TextContainer>
      </Component>
    );
  }
)<ErrorProps>`
  display: inline-flex;
  user-select: none;
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return props.theme.size.small;
      case "large":
        return props.theme.size.medium;
      case "normal":
      default:
        return props.theme.size.normal;
    }
  }};
`;

const IconContainer = styled.div`
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
`;

const Label = styled.span`
  font-size: inherit;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.accent.danger};
`;

const Content = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.accent.danger};
`;

const Action = styled(Link)``;

export default Error;
