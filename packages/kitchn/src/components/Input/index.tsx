import React, { forwardRef, useImperativeHandle } from "react";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent, NormalSizes } from "../../types";
import { AccentColors } from "../../types/theme";
import { convertRGBToRGBA } from "../../utils/convert-rgb-to-rgba";
import { isNumber } from "../../utils/is-number";
import Container, { ContainerProps } from "../Container";
import Error from "../Error";
import Icon, { IconProps } from "../Icon";
import Text, { TextProps } from "../Text";

const simulateChangeEvent = (
  el: HTMLInputElement,
  event: React.MouseEvent<SVGElement>,
): React.ChangeEvent<HTMLInputElement> => {
  return {
    ...event,
    target: el,
    currentTarget: el,
  };
};

type Props = {
  placeholder?: string;
  size?: NormalSizes;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  prefixIcon?: IconProps["icon"];
  suffixIcon?: IconProps["icon"];
  onIconClick?: (_event: React.MouseEvent<SVGSVGElement>) => void;
  clickableIcon?: boolean;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  prefixContainer?: boolean;
  suffixContainer?: boolean;
  clearable?: boolean;
  width?: number | string;
  w?: Props["width"];
  error?: string;
  readOnly?: boolean;
  onClearClick?: (_event: React.MouseEvent<SVGElement>) => void;
  type?: keyof AccentColors;
  label?: string;
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

export type InputProps = KitchnComponent<
  Props,
  React.InputHTMLAttributes<HTMLInputElement>
>;

const ForwardedInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "normal",
      prefix,
      suffix,
      // prefixIcon,
      suffixIcon,
      onIconClick,
      clickableIcon,
      disabled = false,
      prefixContainer = true,
      suffixContainer = true,
      prefixStyling = true,
      suffixStyling = true,
      clearable = false,
      value,
      initialValue = "",
      readOnly = false,
      onChange,
      width,
      w,
      onClearClick,
      onFocus,
      onBlur,
      error,
      type,
      label,
      htmlType,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [selfValue, setSelfValue] = React.useState<string>(initialValue);
    const [focus, setFocus] = React.useState<boolean>(false);
    const [clearIconHover, setClearIconHover] = React.useState<boolean>(false);
    const isControlledComponent = React.useMemo(
      () => value !== undefined,
      [value],
    );

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const Wrapper = label ? InputWrapper : React.Fragment;

    const controlledValue = isControlledComponent
      ? { value: selfValue }
      : { defaultValue: initialValue };

    const inputProps = {
      ...props,
      ...controlledValue,
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      setFocus(true);
      onFocus && onFocus(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      setFocus(false);
      onBlur && onBlur(event);
    };

    const handleClearIconEnter = () => {
      if (disabled || readOnly) return;
      setClearIconHover(true);
    };

    const handleClearIconLeave = () => {
      if (disabled || readOnly) return;
      setClearIconHover(false);
    };

    const handleClear = (event: React.MouseEvent<SVGElement>) => {
      if (disabled || readOnly) return;
      setSelfValue("");
      onClearClick && onClearClick(event);
      /* istanbul ignore next */
      if (!inputRef.current) return;

      const changeEvent = simulateChangeEvent(inputRef.current, event);
      changeEvent.target.value = "";
      onChange && onChange(changeEvent);
      inputRef.current.focus();
    };

    const iconClickHandler = (e: React.MouseEvent<SVGSVGElement>) => {
      if (disabled) return;
      onIconClick && onIconClick(e);
    };

    const iconProps = React.useMemo(
      () => ({
        clickable: clickableIcon,
        onClick: iconClickHandler,
      }),
      [clickableIcon, iconClickHandler],
    );

    React.useEffect(() => {
      if (isControlledComponent) {
        setSelfValue(value as string);
      }
    }, [isControlledComponent, value]);

    return (
      <Wrapper>
        {label && <InputLabel>{label}</InputLabel>}
        <InputContainer disabled={disabled} width={width || w} size={size}>
          {prefix && prefixContainer && (
            <InputPrefix
              size={size}
              disabled={disabled}
              prefixStyling={prefixStyling}
              focus={focus}
              error={error}
              type={type}
            >
              {prefix}
            </InputPrefix>
          )}
          <InputField
            ref={inputRef}
            size={size}
            prefix={prefix}
            suffix={suffix}
            prefixContainer={prefixContainer}
            suffixContainer={suffixContainer}
            suffixIcon={suffixIcon}
            prefixStyling={prefixStyling}
            suffixStyling={suffixStyling}
            disabled={disabled}
            clearable={clearable}
            value={value}
            onChange={handleChange}
            error={error}
            onFocus={handleFocus}
            onBlur={handleBlur}
            focus={focus}
            $type={type}
            type={htmlType}
            {...inputProps}
          />
          {clearable && value !== undefined && (
            <InputClear
              size={size}
              disabled={disabled}
              suffix={suffix}
              suffixContainer={suffixContainer}
              suffixStyling={suffixStyling}
              error={error}
              focus={focus}
              type={type}
              visible={Boolean(
                inputRef.current && inputRef.current.value !== "",
              )}
              lastItem={!suffixIcon}
            >
              <Icon
                icon={RiCloseLine}
                onMouseEnter={handleClearIconEnter}
                onMouseLeave={handleClearIconLeave}
                onClick={handleClear}
                color={
                  clearIconHover && !disabled && !readOnly
                    ? "lightest"
                    : "light"
                }
                size={size === "small" ? 16 : size === "large" ? 24 : 20}
              />
            </InputClear>
          )}
          {suffixIcon && (
            <InputSuffixPart
              size={size}
              disabled={disabled}
              suffix={suffix}
              suffixContainer={suffixContainer}
              suffixStyling={suffixStyling}
              error={error}
              focus={focus}
              type={type}
              lastItem
            >
              <Icon
                icon={suffixIcon}
                color={!disabled && !readOnly ? "lightest" : "light"}
                size={size === "small" ? 16 : size === "large" ? 24 : 20}
                {...iconProps}
              />
            </InputSuffixPart>
          )}
          {suffix && suffixContainer && (
            <InputSuffix
              size={size}
              disabled={disabled}
              suffixStyling={suffixStyling}
              focus={focus}
              error={error}
              type={type}
            >
              {suffix}
            </InputSuffix>
          )}
        </InputContainer>
        {error && (
          <InputError size={size} width={width || w}>
            {error}
          </InputError>
        )}
      </Wrapper>
    );
  },
);

ForwardedInput.displayName = "Input";

const InputWrapper = styled((props: ContainerProps) => (
  <Container label {...props} />
))``;

const InputComponent = styled(ForwardedInput)`
  font: inherit;
  width: 100%;
  min-width: 0;
  display: inline-flex;
  appearance: none;
  line-height: normal;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  border-radius: ${({ theme }) => theme.radius.square};
  color: ${({ theme, error, type }) =>
    error
      ? theme.colors.accent.danger
      : type
        ? theme.colors.accent[type]
        : theme.colors.text.lightest};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  ${({ disabled }) => disabled && "cursor: not-allowed;"}

  ::placeholder {
    color: ${({ theme, error, type }) =>
      error
        ? convertRGBToRGBA(theme.colors.accent.danger, 0.5)
        : type
          ? convertRGBToRGBA(theme.colors.accent[type], 0.5)
          : theme.colors.text.light};
    font-weight: ${({ theme }) => theme.weight.semiBold};
  }
`;

export const InputContainer = styled.div<{
  disabled: InputProps["disabled"];
  width: InputProps["width"];
  size: InputProps["size"];
}>`
  display: flex;
  align-items: center;
  width: ${({ width }) =>
    width ? (isNumber(width) ? `${width}px` : width) : "100%"};
  max-width: 100%;
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.size.compact;
      case "large":
        return theme.size.normal;
      case "normal":
      default:
        return theme.size.small;
    }
  }};
  border-radius: ${({ theme }) => theme.radius.square};
  ${({ disabled }) => disabled && "cursor: not-allowed;"}
`;

export const InputField = styled.input<
  InputProps & {
    $type: InputProps["type"];
    focus: boolean;
  }
>`
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

  border: 1px solid
    ${({ theme, error, focus, $type }) =>
      error
        ? theme.colors.accent.danger
        : $type
          ? theme.colors.accent[$type]
          : focus
            ? theme.colors.layout.lighter
            : theme.colors.layout.dark};

  ${({ prefix, prefixContainer }) =>
    prefix &&
    prefixContainer &&
    `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}
  ${({ suffix, suffixContainer, suffixIcon, clearable, value }) =>
    ((suffix && suffixContainer) ||
      suffixIcon ||
      (clearable && value !== undefined)) &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
  ${({ prefix, prefixContainer, prefixStyling }) =>
    prefix && prefixContainer && !prefixStyling && "border-left: none;"}
  ${({
    suffix,
    suffixContainer,
    suffixIcon,
    suffixStyling,
    clearable,
    value,
  }) =>
    ((suffix && suffixContainer && !suffixStyling) ||
      suffixIcon ||
      (clearable && value !== undefined)) &&
    "border-right: none;"}
`;

export const InputPrefix = styled.span<{
  size: InputProps["size"];
  disabled: InputProps["disabled"];
  prefixStyling: InputProps["prefixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.light};
  border: 1px solid
    ${({ theme, error, focus, prefixStyling, type }) =>
      error && !prefixStyling
        ? theme.colors.accent.danger
        : type && !prefixStyling
          ? theme.colors.accent[type]
          : focus && !prefixStyling
            ? theme.colors.layout.lighter
            : theme.colors.layout.dark};
  border-right: none;
  font-size: inherit;
  transition: border-color 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.radius.square} 0 0
    ${({ theme }) => theme.radius.square};
  padding: 0 ${({ theme }) => theme.gap.small};
  background-color: ${({ theme, prefixStyling, disabled }) =>
    prefixStyling || disabled
      ? theme.colors.layout.darker
      : theme.colors.layout.darkest};
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

  svg {
    width: ${({ size }) =>
      size === "small" ? 16 : size === "large" ? 24 : 20}px;
    height: ${({ size }) =>
      size === "small" ? 16 : size === "large" ? 24 : 20}px;
  }
`;

export const InputSuffix = styled.span<{
  size: InputProps["size"];
  disabled: InputProps["disabled"];
  suffixStyling: InputProps["suffixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
}>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.light};
  border: 1px solid
    ${({ theme, error, focus, suffixStyling, type }) =>
      error && !suffixStyling
        ? theme.colors.accent.danger
        : type && !suffixStyling
          ? theme.colors.accent[type]
          : focus && !suffixStyling
            ? theme.colors.layout.lighter
            : theme.colors.layout.dark};
  border-left: none;
  font-size: inherit;
  transition: border-color 0.2s ease-in-out;
  border-radius: 0 ${({ theme }) => theme.radius.square}
    ${({ theme }) => theme.radius.square} 0;
  padding: 0 ${({ theme }) => theme.gap.small};
  background-color: ${({ theme, suffixStyling, disabled }) =>
    suffixStyling || disabled
      ? theme.colors.layout.darker
      : theme.colors.layout.darkest};
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

  svg {
    width: ${({ size }) =>
      size === "small" ? 16 : size === "large" ? 24 : 20}px;
    height: ${({ size }) =>
      size === "small" ? 16 : size === "large" ? 24 : 20}px;
  }
`;

export const InputSuffixPart = styled.span<{
  disabled: InputProps["disabled"];
  size: InputProps["size"];
  suffix: InputProps["suffix"];
  suffixContainer: InputProps["suffixContainer"];
  suffixStyling: InputProps["suffixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
  lastItem?: boolean;
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text.light};
  border: 1px solid
    ${({ theme, error, focus, type }) =>
      error
        ? theme.colors.accent.danger
        : type
          ? theme.colors.accent[type]
          : focus
            ? theme.colors.layout.lighter
            : theme.colors.layout.dark};
  border-left: none;
  padding-right: ${({ theme, lastItem }) =>
    lastItem ? theme.gap.small : theme.gap.tiny};
  ${({ theme, disabled }) =>
    disabled && `background-color: ${theme.colors.layout.darker};`};
  ${({ theme, suffix, suffixContainer }) =>
    suffix && suffixContainer
      ? `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `
      : `
    border-radius: 0 ${theme.radius.square}
    ${theme.radius.square} 0;
  `}
  ${({ suffix, suffixContainer, suffixStyling, lastItem }) =>
    ((suffix && suffixContainer && !suffixStyling) || !lastItem) &&
    "border-right: none;"}
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

  ${Icon} {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const InputClear = styled(InputSuffixPart)<{
  visible: boolean;
}>`
  ${Icon} {
    transition:
      color,
      opacity 0.2s ease-in-out;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  }
`;

export const InputError = styled(Error)<{
  width: InputProps["width"];
}>`
  margin-top: ${({ theme }) => theme.gap.tiny};
  width: ${({ width }) =>
    width ? (isNumber(width) ? `${width}px` : width) : "auto"};
`;

export const InputLabel = styled((props: TextProps) => (
  <Text
    size={"compact"}
    weight={"medium"}
    mb={"tiny"}
    color={"light"}
    span
    {...props}
  />
))``;

InputComponent.displayName = "KitchnInput";
export const Input = withDecorator(InputComponent);
export default Input;
