import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";
import { RiArrowDownSLine } from "react-icons/ri";

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

const Select = styled(
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
      <Container size={size}>
        {label && <Label>{label}</Label>}
        <SelectorContainer>
          {prefix && <Prefix>{prefix}</Prefix>}
          {suffix && <Suffix>{suffix}</Suffix>}
          <Selector
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
          </Selector>
        </SelectorContainer>
      </Container>
    );
  }
)<SelectProps>`
  outline: none;
  transition: border-color 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  appearance: none;
`;

const Container = styled.label<{
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

const Label = styled.div`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.text.lightest};
`;

const Prefix = styled.span`
  box-sizing: border-box;
  display: flex;
  left: 8px;
  position: absolute;
  pointer-events: none;
`;

const Suffix = styled.span`
  box-sizing: border-box;
  display: flex;
  right: 8px;
  position: absolute;
  pointer-events: none;
`;

const SelectorContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  position: relative;

  ${Prefix}, ${Suffix} {
    transition: color 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.text.lighter};
  }

  :hover {
    ${Prefix}, ${Suffix} {
      color: ${({ theme }) => theme.colors.text.lightest};
    }
  }
`;

const Selector = styled.select<SelectProps>`
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
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  ${({ theme, prefix }) => prefix && `padding-left: ${theme.gap.large};`}
  ${({ theme, suffix }) => suffix && `padding-right: ${theme.gap.large};`}

  option {
    font-size: inherit;
  }

  :hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.layout.light};
  }
`;

export default Select;
