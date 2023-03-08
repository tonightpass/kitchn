// styled-components
import "./types/styled-components";
import { default as kitchen } from "styled-components/native";
export type { DefaultTheme } from "styled-components/native";

// ./types
export * from "./types";

// ./themes
export { default as themes, createTheme } from "./themes";

// ./components
export { default as KitchenProvider } from "./components/Provider";
export type { KitchenProviderProps } from "./components/Provider";

export { default as Text } from "./components/Text";
export type { TextProps } from "./components/Text";

// ./hooks
export { default as useTheme } from "./hooks/useTheme";

// .hoc
export { default as withScale } from "./hoc/withScale";
export type { ScaleProps } from "./hoc/withScale";

// ./utils
export * from "../utils/_collections";

export default kitchen;
