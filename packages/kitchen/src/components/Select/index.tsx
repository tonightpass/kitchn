import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";
import Icon from "../Icon";

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
          {prefix && <SelectIcon accent="dark" icon={prefix} size={size} />}
          <Selector
            placeholder={placeholder}
            disabled={disabled}
            style={{
              appearance: !prefix || !suffix ? "auto" : "none",
              height:
                size === "small" ? "32px" : size === "large" ? "48px" : "40px",
            }}
          >
            {placeholder && (
              <option value={placeholder} disabled label={placeholder} selected>
                {children}
              </option>
            )}
          </Selector>
          {suffix && (
            <Icon
              accent="dark"
              icon={suffix}
              size={size}
              style={{ position: "absolute", right: "10px" }}
            />
          )}
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.accent.light};
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  left: ${({ size }) => (size === "large" ? "8px" : "12px")};
`;

const Selector = styled.select`
  padding-right: 36px;
  padding-left: 36px;
  height: 32px;
  color: ${({ theme }) => theme.colors.accent.dark};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Select;
