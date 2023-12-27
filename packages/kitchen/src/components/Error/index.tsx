import React from "react";
import { RiErrorWarningLine, RiExternalLinkLine } from "react-icons/ri";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import { KitchenComponent, NormalSizes } from "../../types";
import Icon from "../Icon";
import Text from "../Text";

type Props = {
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

export type ErrorProps = KitchenComponent<Props>;

const Error = styled(
  ({ label = true, size, error, children, ...props }: ErrorProps) => {
    return (
      <div {...props}>
        <IconContainer>
          <Icon
            icon={RiErrorWarningLine}
            accent={"danger"}
            size={size === "small" ? 15 : size === "large" ? 20 : 18}
            align={"bottom"}
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
              <Action
                href={error.link}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
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
  },
)<ErrorProps>`
  display: flex;
  line-height: 1;

  *,
  *::before,
  *::after {
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
        return props.theme.size.tiny;
      case "large":
        return props.theme.size.normal;
      case "normal":
      default:
        return props.theme.size.small;
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

const Action = styled.a`
  display: inline-flex;
  font-size: inherit;
  color: inherit;
  margin-left: ${({ theme }) => theme.gap.tiny};
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
`;

const ActionIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.gap.tiny};
`;

export default withScale(Error);
