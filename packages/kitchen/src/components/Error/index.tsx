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

const ErrorComponent = styled(
  ({ label = true, size, error, children, ...props }: ErrorProps) => {
    return (
      <div {...props}>
        <ErrorIconContainer>
          <Icon
            icon={RiErrorWarningLine}
            accent={"danger"}
            size={size === "small" ? 15 : size === "large" ? 20 : 18}
            align={"bottom"}
          />
        </ErrorIconContainer>
        <ErrorTextContainer>
          <ErrorText size={size} accent={"danger"}>
            {label && (
              <ErrorLabel>
                {typeof label === "string" ? label : "Error"}
                {label ? ": " : ""}
              </ErrorLabel>
            )}
            <ErrorContent>{error ? error.message : children}</ErrorContent>
            {error && (
              <ErrorAction
                href={error.link}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {error.action}
                <ErrorActionIcon
                  accent={"danger"}
                  icon={RiExternalLinkLine}
                  size={size}
                />
              </ErrorAction>
            )}
          </ErrorText>
        </ErrorTextContainer>
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

export const ErrorIconContainer = styled.div``;

export const ErrorTextContainer = styled.div`
  margin-left: 8px;
`;

export const ErrorText = styled(Text)<{ size: ErrorProps["size"] }>`
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

export const ErrorLabel = styled.b`
  font-size: inherit;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.accent.danger};
`;

export const ErrorContent = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.accent.danger};
`;

export const ErrorAction = styled.a`
  display: inline-flex;
  font-size: inherit;
  color: inherit;
  margin-left: ${({ theme }) => theme.gap.tiny};
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
`;

export const ErrorActionIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.gap.tiny};
`;

ErrorComponent.displayName = "KitchenError";
export const Error = withScale(ErrorComponent);
export default Error;
