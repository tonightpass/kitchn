import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchenComponent, NormalSizes } from "../../types";
import Container, { ContainerProps } from "../Container";
import Text, { TextProps } from "../Text";

type Props = {
  /**
   * The size of the select.
   * @default "normal"
   */
  size?: NormalSizes;
  /**
   * The label of the select.
   */
  label?: string;
  /**
   * The placeholder of the select.
   */
  placeholder?: string;
  /**
   * The prefix of the select.
   */
  prefix?: JSX.Element | string;
  /**
   * The suffix of the select.
   */
  suffix?: JSX.Element | string;
  disabled?: boolean;
};

export type SelectProps = KitchenComponent<
  Props,
  React.SelectHTMLAttributes<HTMLSelectElement>
>;

const SelectComponent = styled(
  ({
    size = "normal",
    label,
    placeholder,
    prefix,
    suffix = <RiArrowDownSLine />,
    disabled,
    children,
    ...props
  }: SelectProps) => {
    return (
      <SelectContainer size={size}>
        {label && <SelectLabel>{label}</SelectLabel>}
        <SelectSelectorContainer>
          {prefix && <SelectPrefix>{prefix}</SelectPrefix>}
          {suffix && <SelectSuffix>{suffix}</SelectSuffix>}
          <SelectSelector
            aria-label={label}
            size={size}
            prefix={prefix}
            suffix={suffix}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={placeholder}
            {...props}
          >
            {placeholder && (
              <option disabled value={placeholder}>
                {placeholder}
              </option>
            )}
            {children}
          </SelectSelector>
        </SelectSelectorContainer>
      </SelectContainer>
    );
  },
)<SelectProps>``;

const SelectContainer = styled((props: ContainerProps) => (
  <Container {...props} label />
))<{
  size: SelectProps["size"];
}>`
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.size.tiny;
      case "large":
        return theme.size.normal;
      case "normal":
      default:
        return theme.size.small;
    }
  }};
`;

const SelectLabel = styled((props: TextProps) => (
  <Text
    size={"compact"}
    weight={"medium"}
    mb={"small"}
    color={"light"}
    span
    {...props}
  />
))``;

const SelectPrefix = styled.span`
  box-sizing: border-box;
  display: flex;
  left: 8px;
  position: absolute;
  pointer-events: none;
`;

const SelectSuffix = styled.span`
  box-sizing: border-box;
  display: flex;
  right: 8px;
  position: absolute;
  pointer-events: none;
`;

const SelectSelectorContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  position: relative;

  ${SelectPrefix}, ${SelectSuffix} {
    transition: color 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.text.lighter};
  }

  &:hover {
    ${SelectPrefix}, ${SelectSuffix} {
      color: ${({ theme }) => theme.colors.text.lightest};
    }
  }
`;

export const SelectSelector = styled.select<SelectProps>`
  width: 100%;
  padding: 0 ${({ theme }) => theme.gap.small};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "30px";
      case "large":
        return "50px";
      case "normal":
      default:
        return "40px";
    }
  }};
  font-size: inherit;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  appearance: none;
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  ${({ theme, prefix }) => prefix && `padding-left: ${theme.gap.large};`}
  ${({ theme, suffix }) => suffix && `padding-right: ${theme.gap.large};`}

  option {
    font-size: inherit;
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.layout.light};
  }
`;

SelectComponent.displayName = "KitchenSelect";
export const Select = withDecorator(SelectComponent);
export default Select;
