import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";

export type SelectProps = KitchenComponent & {
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
  prefix?: SVGElement;
  /**
   * The suffix of the select.
   */
  suffix?: SVGElement;
  disabled?: boolean;
};

const Select = styled(
  ({
    size,
    label,
    placeholder,
    prefix,
    suffix,
    disabled,
    children,
    ...props
  }: SelectProps) => {
    return (
      <Container {...props}>
        {label && <Label>{label}</Label>}
        <SelectorContainer>
          {prefix && <Prefix>{prefix}</Prefix>}
          <Selector
            placeholder={placeholder}
            disabled={disabled}
            style={{
              appearance: !prefix || !suffix ? "auto" : "none",
              height:
                size === "small" ? "32px" : size === "large" ? "48px" : "40px",
              width:
                size === "small" ? "86px" : size === "large" ? "93px" : "98px",
              fontSize: size === "large" ? "16px" : "14px",
            }}
          >
            {placeholder && (
              <option value={placeholder} disabled label={placeholder} selected>
                {children}
              </option>
            )}
          </Selector>
          {suffix && <Suffix>{suffix}</Suffix>}
        </SelectorContainer>
      </Container>
    );
  }
)<SelectProps>`
  display: inline-flex;
  user-select: none;
  color: ${({ theme }) => theme.colors.accent.dark};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Container = styled.label`
  box-sizing: border-box;
  display: block;
  height: 32px;
`;

const Label = styled.div`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.accent.light};
`;

const SelectorContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  position: relative;
`;

const Prefix = styled.span`
  box-sizing: border-box;
  display: flex;
  height: 18px;
  left: 4px;
  position: absolute;
  color: ${({ theme }) => theme.colors.accent.light};
  width: 18px;
`;

const Selector = styled.select<{
  prefix: SelectProps["prefix"];
  suffix: SelectProps["suffix"];
  disabled: SelectProps["disabled"];
}>`
  align-items: center;
  box-sizing: border-box;
  display: block;
  height: 32px;
  margin: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-left: ${({ prefix }) => (!prefix ? "20px" : "12px")};
  color: ${({ theme }) => theme.colors.accent.light};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ theme }) => theme.colors.accent.dark};
  border-radius: 5px;
`;

const Suffix = styled.span`
  box-sizing: border-box;
  display: flex;
  height: 18px;
  right: 14px;
  position: absolute;
  color: ${({ theme }) => theme.colors.accent.light};
  width: 18px;
`;

export default Select;
