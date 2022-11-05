import React from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
  useTheme,
} from "styled-components";
import convertRGBToRGBA from "../../utils/convertRGBToRGBA";
import Icon from "../Icon";
import Spinner from "../Spinner";

interface Props
  extends Omit<StyledComponent<any, DefaultTheme, any, never>, "prefix"> {
  children?: React.ReactNode;
  mode?: "normal" | "success" | "alert" | "darker" | "darkest" | "lightest";
  size?: "small" | "medium" | "large";
  shape?: "square" | "round";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  width?: number;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  as?: React.ElementType;
  normal?: {
    background: string;
    color: string;
    border: string;
  };
  hover?: {
    background: string;
    color: string;
    border: string;
  };
}

const Button = styled(
  ({
    children,
    prefix,
    suffix,
    onClick,
    width,
    loading,
    disabled,
    shape = "round",
    as: Component = "button",
    ...props
  }: Props) => {
    const theme = useTheme();

    const rippleContainerRef = React.useRef<HTMLDivElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!rippleContainerRef.current) return;
      const container = rippleContainerRef.current;
      const button = event.currentTarget;

      const circle = document.createElement("span");
      const diameter = Math.max(container.clientWidth, container.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = container.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      container.appendChild(circle);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        return event.preventDefault();
      }

      createRipple(event);

      if (onClick) onClick(event);
    };

    return (
      <Component {...props} onClick={handleClick}>
        <RippleContainer shape={shape} ref={rippleContainerRef} />
        {(prefix || loading) && (
          <Prefix hasContent={children != undefined}>
            {loading ? (
              <Spinner size={18} color={theme.colors.text.dark} />
            ) : (
              prefix
            )}
          </Prefix>
        )}
        <Content width={width}>{children}</Content>
        {suffix && <Suffix>{suffix}</Suffix>}
      </Component>
    );
  }
)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: center;
  outline: none;
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
  font-family: ${({ theme }) => theme.family.primary};
  border-radius: ${({ shape }) => (shape === "square" ? "5px" : "99999px")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: ${({ width }) => (width ? `${width}px` : "auto")};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 12px";
      case "medium":
        return "12px 16px";
      case "large":
        return "16px 20px";
      default:
        return "10px 14px";
    }
  }};

  background: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.layout.darkest}`;

    if (props.normal?.background) return props.normal.background;

    if (props.mode === "success") return `${props.theme.colors.accent.success}`;
    if (props.mode === "darker") return `${props.theme.colors.layout.darker}`;
    if (props.mode === "darkest") return `${props.theme.colors.layout.darkest}`;
    if (props.mode === "lightest")
      return `${props.theme.colors.layout.lightest}`;
    if (props.mode === "alert") return `${props.theme.colors.accent.danger}`;

    return props.theme.colors.accent.primary;
  }};

  color: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.text.lightest}`;

    if (props.normal?.color) return props.normal.color;

    if (props.mode === "darker") return `${props.theme.colors.text.lightest}`;
    if (props.mode === "darkest") return `${props.theme.colors.text.lightest}`;
    if (props.mode === "lightest") return `${props.theme.colors.text.darkest}`;
    return props.theme.colors.accent.light;
  }};

  border: ${(props) => {
    if (props.loading || props.disabled)
      return `1px solid ${props.theme.colors.layout.darker}`;

    if (props.normal?.border) return props.normal.border;

    if (props.mode === "alert")
      return `1px solid ${props.theme.colors.accent.danger}`;
    if (props.mode === "success")
      return `1px solid ${props.theme.colors.accent.success}`;
    if (props.mode === "darker")
      return `1px solid ${props.theme.colors.layout.darker}`;
    if (props.mode === "darkest")
      return `1px solid ${props.theme.colors.layout.darkest}`;
    if (props.mode === "lightest")
      return `1px solid ${props.theme.colors.layout.lightest}`;

    return `1px solid ${props.theme.colors.accent.primary}`;
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return props.theme.size.small;
      default:
        return props.theme.size.normal;
    }
  }};

  ${Icon} {
    font-size: ${(props) => {
      switch (props.size) {
        case "small":
          return props.theme.size.small;
        default:
          return props.theme.size.normal;
      }
    }};
  }

  cursor: ${(props) =>
    props.disabled || props.loading ? "not-allowed" : "pointer"};

  :hover {
    ${(props) =>
      props.hover?.background && `background: ${props.hover.background}`};
    ${(props) => props.hover?.color && `color: ${props.hover.background}`};

    filter: brightness(
      ${(props) => {
        if (props.disabled || props.loading) return "1";
        return "0.8";
      }}
    );
  }
`;

const Content = styled.span<{ width?: number }>`
  ${({ width }) =>
    width &&
    "text-overflow: ellipsis; overflow: hidden;  white-space: nowrap;"};
`;
const Prefix = styled.span<{ hasContent: boolean }>`
  ${({ hasContent }) => hasContent && "margin-right: 7px;"}
`;
const Suffix = styled.span`
  margin-left: 7px;
`;

const RippleContainer = styled.div<{ shape?: "square" | "round" }>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ shape }) => (shape === "square" ? "5px" : "99999px")};
  pointer-events: none;
  z-index: 1;

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: ${(props) =>
      convertRGBToRGBA(props.theme.colors.layout.lightest, 0.7)};
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export default Button;
