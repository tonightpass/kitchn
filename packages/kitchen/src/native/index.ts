// styled-components
import "./types/styled-components";
import { default as kitchen } from "styled-components/native";
export type { DefaultTheme } from "styled-components/native";

// ./types
export * from "./types";

// ./themes
export { default as themes, createTheme } from "./themes";

// ./components
export {
  default as KitchenProvider,
  type KitchenProviderProps,
} from "./components/Provider";

export { default as Button, type ButtonProps } from "./components/Button";

export {
  default as Container,
  type ContainerProps,
} from "./components/Container";

export { default as Icon, type IconProps } from "./components/Icon";

export {
  default as Input,
  type InputProps,
  type InputChangeEventData,
} from "./components/Input";

export { default as Text, type TextProps } from "./components/Text";

// ./hooks
export { default as useTheme } from "./hooks/useTheme";

// ./hoc
export { default as withScale, type ScaleProps } from "./hoc/withScale";

// ./utils
export * from "../utils/_collections";

export default kitchen;
