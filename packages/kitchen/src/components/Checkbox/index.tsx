import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import convertRGBToRGBA from "../../utils/convertRGBToRGBA";

export type CheckboxProps = KitchenComponent & {
  checked?: boolean;

  indeterminate?: boolean;

  disabled?: boolean;

  label?: string;

  fullWidth?: boolean;

  value?: string;
};

const Checkbox = styled(
  ({
    children,
    checked: checkedProp,
    onChange,
    disabled,
    fullWidth,
    indeterminate,
    value,
    ...props
  }: CheckboxProps) => {
    const [checked, setChecked] = React.useState(checkedProp || value || false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return e.preventDefault();
      setChecked(e.target.checked);
      if (onChange) onChange(e);
    };
    return (
      <Container disabled={disabled} fullWidth={fullWidth}>
        <Check>
          <StyledCheckbox
            type={"checkbox"}
            value={value}
            checked={checked}
            onChange={handleChange}
            indeterminate={indeterminate}
            {...props}
          />
        </Check>
        {children && <Content>{children}</Content>}
      </Container>
    );
  }
)<CheckboxProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 10px;
  border-radius: 5px;
  background-color: "transparent";
  // border: 1px solid ${({ theme }) => theme.colors.accent.light};
`;

const Checkmark = styled.span<{
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

const Container = styled.label<{ disabled?: boolean; fullWidth?: boolean }>`
  display: inline-flex;
  align-items: flex-start;
  ${({ fullWidth }) => fullWidth && "width: 100%;"};

  :hover {
    ${Checkmark} {
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

const Check = styled.span`
  display: flex;
  align-items: center;
  padding: 2px;
  margin: -2px;
`;

const Content = styled.span`
  margin-left: 7px;
`;

const StyledCheckbox = styled.input<{ disabled?: boolean }>`
  cursor: inherit;
`;

export default Checkbox;
