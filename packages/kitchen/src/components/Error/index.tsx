import React from "react";
import { RiErrorWarningLine, RiExternalLinkLine } from "react-icons/ri";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";
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
  size?: NormalSizes;

  error?: { message: string; action?: string; link?: string };
};

const Error = styled(
  ({ label = true, size, error, children, ...props }: ErrorProps) => {
    return (
      <div {...props}>
        <IconContainer>
          <Icon
            icon={RiErrorWarningLine}
            accent={"danger"}
            size={size === "small" ? 18 : size === "large" ? 24 : 20}
            align="bottom"
          />
        </IconContainer>
        <TextContainer>
          <ErrorText size={size} accent={"danger"}>
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
                <ActionIcon
                  accent={"danger"}
                  icon={RiExternalLinkLine}
                  size={size}
                />
              </Action>
            )}
          </ErrorText>
        </TextContainer>
      </div>
    );
  }
)<ErrorProps>`
  display: flex;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const IconContainer = styled.div``;

const TextContainer = styled.div`
  margin-left: 8px;
`;

const ErrorText = styled(Text)<{ size: ErrorProps["size"] }>`
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
  word-break: break-word;
`;

const Label = styled.b`
  font-size: inherit;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.accent.danger};
`;

const Content = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.accent.danger};
`;

const Action = styled(Link)`
  display: inline-block;
  margin-left: ${({ theme }) => theme.gap.tiny};
`;

const ActionIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.gap.tiny};
`;

export default Error;
