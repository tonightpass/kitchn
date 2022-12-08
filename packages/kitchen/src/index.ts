// styled-components
import "./types/styled-components";
import kitchen from "styled-components";
export type { DefaultTheme } from "styled-components";

// ./themes
export { default as themes, createTheme } from "./themes";

// ./components
export { default as KitchenProvider } from "./components/Provider";
export { default as Badge } from "./components/Badge";
export { default as Button } from "./components/Button";
export { default as Code } from "./components/Code";
export { default as Container } from "./components/Container";
export { default as Note } from "./components/Note";
export { default as OrderedList } from "./components/OrderedList";
export { default as UnorderedList } from "./components/UnorderedList";
export { default as ListItem } from "./components/ListItem";
export { default as Icon } from "./components/Icon";
export { default as InlineCode } from "./components/InlineCode";
export { default as Skeleton } from "./components/Skeleton";
export { default as Spinner } from "./components/Spinner";
export { default as Text } from "./components/Text";

// ./hooks
export { default as useLocalStorage } from "./hooks/useLocalStorage";
export { default as useTheme } from "./hooks/useTheme";
export { default as useThemeDetector } from "./hooks/useThemeDetector";

// ./utils
export { default as capitalize } from "./utils/capitalize";
export { default as convertRGBToRGBA } from "./utils/convertRGBToRGBA";
export { default as isNumber } from "./utils/isNumber";
export { default as isString } from "./utils/isString";

export default kitchen;
