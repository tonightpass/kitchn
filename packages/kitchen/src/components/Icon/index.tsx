import styled from "styled-components";
//import "remixicon/fonts/remixicon.css";

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    never
  > {
  align?: "top" | "middle" | "bottom";
  size?: number;
  name: string;
  fill?: boolean;
  simple?: boolean;
  color?: string;
  className?: string;
}

/**
 * @description
 * This is a styled component that renders an icon from remixicon.
 */
const Icon = styled(
  ({ name, fill, simple = false, className, ...rest }: Props) => {
    const finalName = `ri-${name}${!simple ? (fill ? "-fill" : "-line") : ""}`;
    const finalClassName = `${finalName} ${className || ""}`;
    return <i {...rest} className={finalClassName} />;
  }
)<Props>`
  font-size: ${({ size, theme }) => (size ? `${size}px` : theme.size.normal)};
  ${({ color }) => color && `color: ${color}`};
  vertical-align: ${({ align }) => {
    switch (align) {
      case "top":
        return "text-top";
      case "middle":
        return "middle";
      case "bottom":
        return "text-bottom";
      default:
        return "middle";
    }
  }};
`;

export default Icon;
