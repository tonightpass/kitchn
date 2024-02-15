import React from "react";
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  // GestureResponderEvent, because
} from "react-native/types";
import styled, { useTheme } from "styled-components/native";

import { capitalize } from "../../../utils/capitalize";
import { convertRGBToRGBA } from "../../../utils/convertRGBToRGBA";
import { isNumber } from "../../../utils/isNumber";
import { withScale } from "../../hoc/withScale";
import { AccentColors, KitchenComponent, NormalSizes } from "../../types";
import Icon, { IconProps } from "../Icon";
import Text from "../Text";

type Props = {
  name?: string;
  placeholder?: string;
  size?: NormalSizes;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  prefixContainer?: boolean;
  suffixContainer?: boolean;
  clearable?: boolean;
  width?: number | string;
  error?: string;
  readOnly?: boolean;
  // temporary any because 0.70.6 is not compatible with 0.73.0
  onClearClick?: (_event: any /* GestureResponderEvent */) => void;
  type?: keyof AccentColors;
  label?: string;
  onChange?: (_event: NativeSyntheticEvent<InputChangeEventData>) => void;
  onChangeText?: (_value: string) => void;
  pattern?: { [key: string]: RegExp };
};

export type InputProps = KitchenComponent<Props, TextInputProps>;

export type InputChangeEventData = TextInputChangeEventData & {
  name?: string;
  pattern?: { [key: string]: RegExp };
};

const defaultProps: Props = {
  size: "normal",
  disabled: false,
  prefixStyling: true,
  suffixStyling: true,
  prefixContainer: true,
  suffixContainer: true,
  clearable: false,
  initialValue: "",
  readOnly: false,
};

const InputComponent: React.FC<InputProps> = React.forwardRef<
  TextInput,
  React.PropsWithChildren<InputProps>
>(
  (
    {
      name,
      size,
      prefix,
      suffix,
      disabled,
      prefixContainer,
      suffixContainer,
      prefixStyling,
      suffixStyling,
      clearable,
      value,
      initialValue,
      readOnly,
      onChange,
      onChangeText,
      width,
      onClearClick,
      onFocus,
      onBlur,
      error,
      type,
      label,
      pattern,
      ...props
    }: InputProps & typeof defaultProps,
    ref: React.ForwardedRef<TextInput>,
  ) => {
    const theme = useTheme();
    const inputRef = React.useRef<TextInput>(null);
    React.useImperativeHandle(ref, () => inputRef.current as TextInput);

    const [selfValue, setSelfValue] = React.useState<string | undefined>(
      initialValue,
    );
    const isControlledComponent = React.useMemo(
      () => value !== undefined,
      [value],
    );
    const [focus, setFocus] = React.useState<boolean>(false);

    const handleChange = (
      event: NativeSyntheticEvent<InputChangeEventData>,
    ) => {
      event.nativeEvent.name = name;
      event.nativeEvent.pattern = pattern;
      if (disabled || readOnly) return;
      setSelfValue(event.nativeEvent.text);
      onChange && onChange(event);
    };

    const handleChangeText = (value: string) => {
      if (disabled || readOnly) return;
      setSelfValue(value);
      onChangeText && onChangeText(value);
    };

    const handleFocus = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || readOnly) return;
      setFocus(true);
      onFocus && onFocus(event);
    };

    const handleBlur = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || readOnly) return;
      setFocus(false);
      onBlur && onBlur(event);
    };

    const handleClear = (event: any /* GestureResponderEvent */) => {
      if (disabled || readOnly) return;
      setSelfValue("");
      onClearClick && onClearClick(event);
      if (!inputRef.current) return;

      inputRef.current.clear();
      inputRef.current.focus();
      onChange && onChange(event as any);
      onChangeText && onChangeText("");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
      if (isControlledComponent) {
        setSelfValue(value as string);
      }
    });

    const controlledValue = isControlledComponent
      ? { value: selfValue }
      : { defaultValue: initialValue };

    const inputProps = {
      ...props,
      ...controlledValue,
    };

    return (
      <Wrapper>
        {label && (
          <Text size={"small"} weight={"medium"} color={"light"} mb={"tiny"}>
            {label}
          </Text>
        )}
        <Container disabled={disabled} width={width} size={size}>
          {prefix && prefixContainer && (
            <Prefix
              size={size}
              disabled={disabled}
              prefixStyling={prefixStyling}
              focus={focus}
              error={error}
              type={type}
            >
              {prefix}
            </Prefix>
          )}
          <Field
            ref={inputRef}
            size={size}
            prefix={prefix}
            suffix={suffix}
            prefixContainer={prefixContainer}
            suffixContainer={suffixContainer}
            prefixStyling={prefixStyling}
            suffixStyling={suffixStyling}
            disabled={disabled}
            clearable={clearable}
            error={error}
            focus={focus}
            type={type}
            value={value}
            selfValue={selfValue}
            onChange={handleChange}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={readOnly}
            {...inputProps}
            placeholderTextColor={
              error
                ? convertRGBToRGBA(theme.colors.accent.danger, 0.5)
                : type
                ? convertRGBToRGBA(theme.colors.accent[type], 0.5)
                : theme.colors.text.light
            }
            {...props}
          />
          {clearable && selfValue !== undefined && (
            <Clear
              size={size}
              disabled={disabled}
              suffix={suffix}
              suffixContainer={suffixContainer}
              suffixStyling={suffixStyling}
              error={error}
              focus={focus}
              type={type}
              onPress={handleClear}
            >
              <ClearIcon
                name={"close-circle"}
                size={
                  size === "large"
                    ? "normal"
                    : size === "small"
                    ? "tiny"
                    : "small"
                }
                visible={Boolean(selfValue !== "")}
                fill
              />
            </Clear>
          )}
          {suffix && (
            <Suffix
              size={size}
              disabled={disabled}
              suffixStyling={suffixStyling}
              focus={focus}
              error={error}
              type={type}
            >
              {suffix}
            </Suffix>
          )}
        </Container>
        {error && (
          <Text
            size={
              size === "small" ? "tiny" : size === "large" ? "small" : "small"
            }
            width={width}
            accent={"danger"}
            mt={"tiny"}
          >
            {error}
          </Text>
        )}
      </Wrapper>
    );
  },
);

const Wrapper = styled.View``;

const Container = styled.View<{
  disabled: InputProps["disabled"];
  width: InputProps["width"];
  size: InputProps["size"];
}>`
  flex-direction: row;
  align-items: center;
  width: ${({ width }) =>
    width ? (isNumber(width) ? `${width}px` : width) : "100%"};
  max-width: 100%;
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
  border-radius: ${({ theme }) => theme.radius.square};
`;

const Field = styled.TextInput<
  InputProps & {
    ref: React.ForwardedRef<TextInput>;
    focus: boolean;
    selfValue: string | undefined;
  }
>`
  font-family: ${({ theme }) => {
    const weight = "regular";
    return `${theme.family.primary}_${theme.weight[weight]}${capitalize(
      weight,
    )}`;
  }};
  flex: 1;
  min-width: 0;
  border-radius: ${({ theme }) => theme.radius.square};
  color: ${({ theme, error, type }) =>
    error
      ? theme.colors.accent.danger
      : type
      ? theme.colors.accent[type]
      : theme.colors.text.lightest};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};

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

  border: 1px solid
    ${({ theme, error, focus, type }) =>
      error
        ? theme.colors.accent.danger
        : type
        ? theme.colors.accent[type]
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
  ${({ suffix, suffixContainer, clearable, selfValue }) =>
    ((suffix && suffixContainer) || (clearable && selfValue !== undefined)) &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
  ${({ prefix, prefixContainer, prefixStyling }) =>
    prefix && prefixContainer && !prefixStyling && "border-left-width: 0;"}
  ${({ suffix, suffixContainer, suffixStyling, clearable, selfValue }) =>
    ((suffix && suffixContainer && !suffixStyling) ||
      (clearable && selfValue !== undefined)) &&
    "border-right-width: 0;"}
`;

const Prefix = styled.View<{
  size: InputProps["size"];
  disabled: InputProps["disabled"];
  prefixStyling: InputProps["prefixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
}>`
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid
    ${({ theme, error, focus, prefixStyling, type }) =>
      error && !prefixStyling
        ? theme.colors.accent.danger
        : type && !prefixStyling
        ? theme.colors.accent[type]
        : focus && !prefixStyling
        ? theme.colors.layout.lighter
        : theme.colors.layout.dark};
  border-right-width: 0;
  border-top-left-radius: ${({ theme }) => theme.radius.square};
  border-bottom-left-radius: ${({ theme }) => theme.radius.square};
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
`;

const Suffix = styled.View<{
  size: InputProps["size"];
  disabled: InputProps["disabled"];
  suffixStyling: InputProps["suffixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
}>`
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid
    ${({ theme, error, focus, suffixStyling, type }) =>
      error && !suffixStyling
        ? theme.colors.accent.danger
        : type && !suffixStyling
        ? theme.colors.accent[type]
        : focus && !suffixStyling
        ? theme.colors.layout.lighter
        : theme.colors.layout.dark};
  border-left-width: 0;
  border-top-right-radius: ${({ theme }) => theme.radius.square};
  border-bottom-right-radius: ${({ theme }) => theme.radius.square};
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
`;

const Clear = styled.Pressable<{
  disabled: InputProps["disabled"];
  size: InputProps["size"];
  suffix: InputProps["suffix"];
  suffixContainer: InputProps["suffixContainer"];
  suffixStyling: InputProps["suffixStyling"];
  error: InputProps["error"];
  focus: boolean;
  type: InputProps["type"];
}>`
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
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
  border-left-width: 0;
  padding-right: ${({ theme }) => theme.gap.small};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  ${({ theme, suffix, suffixContainer }) =>
    suffix && suffixContainer
      ? `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `
      : `
    border-top-right-radius: ${theme.radius.square};
    border-bottom-right-radius: ${theme.radius.square};
  `}
  ${({ suffix, suffixContainer, suffixStyling }) =>
    suffix && suffixContainer && !suffixStyling && "border-right-width: 0;"}
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
`;

const ClearIcon = styled(Icon)<
  IconProps & {
    visible: boolean;
  }
>`
  ${({ visible }) => `opacity: ${visible ? 1 : 0};`}
`;

InputComponent.defaultProps = defaultProps;
InputComponent.displayName = "KitchenInput";
const Input = withScale(InputComponent);
export default Input;
