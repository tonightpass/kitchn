import React from "react";
import { RiCheckLine, RiSubtractLine } from "react-icons/ri";
import styled from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import convertRGBToRGBA from "../../utils/convertRGBToRGBA";
import Icon from "../Icon";

type Props = {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  fullWidth?: boolean;
};

export type CheckboxProps = KitchenComponent<
  Props,
  React.InputHTMLAttributes<HTMLInputElement>
>;

const CheckboxComponent = styled(
  ({
    children,
    checked,
    onChange,
    disabled,
    fullWidth,
    indeterminate,
    label,
    ...props
  }: CheckboxProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return e.preventDefault();
      if (onChange) onChange(e);
    };

    return (
      <CheckboxContainer
        disabled={disabled}
        fullWidth={fullWidth}
        label={label}
        {...props}
      >
        {label && <CheckboxLabel>{label}</CheckboxLabel>}
        <CheckboxCheckContainer label={!!label}>
          <CheckboxCheck>
            <StyledCheckbox
              type={"checkbox"}
              checked={checked}
              onChange={handleChange}
            />
            <CheckboxCheckmark
              checked={checked}
              indeterminate={indeterminate}
              disabled={disabled}
            >
              {checked ? (
                <Icon
                  icon={RiCheckLine}
                  color={disabled ? "darker" : "darkest"}
                  size={16}
                />
              ) : (
                indeterminate && (
                  <Icon icon={RiSubtractLine} color={"darker"} size={16} />
                )
              )}
            </CheckboxCheckmark>
          </CheckboxCheck>
          {children && <CheckboxContent>{children}</CheckboxContent>}
        </CheckboxCheckContainer>
      </CheckboxContainer>
    );
  },
)<CheckboxProps>`
  * {
    box-sizing: border-box;
  }
`;

export const CheckboxCheckmark = styled.span<{
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: 3px;
  height: 1rem;
  width: 1rem;
  position: relative;
  transition: all 0.2s;
  transform: rotate(0.000001deg);
  background-color: ${(props) => {
    if (props.disabled)
      return convertRGBToRGBA(props.theme.colors.layout.lightest, 0.1);
    if (props.checked) return props.theme.colors.layout.lightest;
    return "transparent";
  }};

  color: ${(props) => {
    if (props.disabled) return props.theme.colors.text.light;

    if (props.checked) return props.theme.colors.layout.darkest;
    if (props.indeterminate) return props.theme.colors.layout.light;
    return "transparent";
  }};
`;

export const CheckboxContainer = styled.label<{
  disabled?: boolean;
  fullWidth?: boolean;
  label: boolean;
}>`
  ${({ label }) =>
    !label &&
    `
  display: inline-flex;
  align-items: flex-start;
  user-select: none;
  `}
  ${({ fullWidth }) => fullWidth && "width: 100%;"};

  &:hover {
    ${CheckboxCheckmark} {
      border-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.layout.dark : theme.colors.layout.light};
    }
  }

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ theme, disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    color: ${theme.colors.text.light};
    filter: brightness(0.8);
  `}
`;

export const CheckboxLabel = styled.div`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.text.dark};
`;

export type CheckboxCheckContainerProps = KitchenComponent<
  {
    label?: boolean;
  },
  React.HTMLAttributes<HTMLDivElement>
>;

const BaseCheckboxCheckContainer: React.FC<CheckboxCheckContainerProps> = ({
  children,
  label,
  ...props
}: CheckboxCheckContainerProps) =>
  label ? <div {...props}>{children}</div> : <>{children}</>;

export const CheckboxCheckContainer = styled(BaseCheckboxCheckContainer)`
  display: inline-flex;
  align-items: flex-start;
  user-select: none;
`;

export const CheckboxCheck = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  padding: 2px;
  margin: -2px;
`;

export const CheckboxContent = styled.span`
  margin-left: 8px;
  font-size: inherit;
`;

export const StyledCheckbox = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

CheckboxComponent.displayName = "KitchenCheckbox";
export const Checkbox = withScale(CheckboxComponent);
export default Checkbox;
