import styled from "styled-components/native";
import { Size, Weight } from "../../../types/theme";
import capitalize from "../../../utils/capitalize";

const Text = styled.Text<{
  color?: string;
  margin?: string;
  padding?: string;

  // use one of the props of Weight
  weight?: keyof Weight;
  size?: keyof Size;

  left?: boolean;
  right?: boolean;
  center?: boolean;
}>`
  color: ${({ theme, color }) => color ?? theme.colors.text.lightest};
  margin: ${({ margin }) => margin ?? 0};
  padding: ${({ padding }) => padding ?? 0};

  font-family: ${({ theme, weight = "regular" }) => {
    return `${theme.family.primary}_${theme.weight[weight]}${capitalize(
      weight
    )}`;
  }};

  font-size: ${({ theme, size }) =>
    size ? theme.size[size] : theme.size.normal};

  ${({ left, center, right }) => {
    switch (true) {
      case left:
        return "text-align: left;";
      case center:
        return "text-align: center;";
      case right:
        return "text-align: right;";

      default:
        return "text-align: left;";
    }
  }}
`;

export default Text;
