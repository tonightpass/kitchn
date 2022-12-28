import React from "react";
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Icon from "../Icon";

export type SelectProps = KitchenComponent & {
  /**
   * The size of the select.
   * @default "normal"
   */
  size?: "small" | "normal" | "large";
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
  prefix?: IconType;
  /**
   * The suffix of the select.
   */
  suffix?: IconType;
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
          {prefix && (
            <Icon
              accent="dark"
              icon={prefix}
              size={size}
              style={{
                position: "absolute",
                left: size === "large" ? "8px" : "12px",
              }}
            />
          )}
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

const Selector = styled.select`
  padding-right: 36px;
  padding-left: 36px;
  height: 32px;
  color: ${({ theme }) => theme.colors.accent.dark};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Select;
