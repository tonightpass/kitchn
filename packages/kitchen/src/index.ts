// styled-components
import { default as kitchen } from "styled-components";
export { createGlobalStyle } from "styled-components";
export type { DefaultTheme } from "styled-components";

// ./types
export * from "./types";

// ./themes
export { default as defaultThemes, createTheme } from "./themes";
export { default as tonightpassTheme } from "./themes/tonightpass";

// ./components
export * from "./components";

// ./contexts
export { ToastsContent, useToastsContext } from "./contexts/Toasts";
export type {
  ToastsContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from "./contexts/Toasts";

export { ThemeContext, ThemeProvider } from "./contexts/Theme";
export type { ThemeContextParams } from "./contexts/Theme";

// ./hooks
export { default as useBreakpoint } from "./hooks/useBreakpoint";
export type { UseBreakpointResult } from "./hooks/useBreakpoint";

export { default as useCheckbox } from "./hooks/useCheckbox";
export type { UseCheckboxValue, UseCheckboxResult } from "./hooks/useCheckbox";

export { default as useClipboard } from "./hooks/useClipboard";
export type {
  UseClipboardOptions,
  UseClipboardResult,
} from "./hooks/useClipboard";

export { default as useCookie } from "./hooks/useCookie";

export { default as useKeyboard } from "./hooks/useKeyboard";
export type {
  UseKeyboard,
  UseKeyboardHandler,
  KeyboardOptions,
  KeyboardResult,
} from "./hooks/useKeyboard";

export { default as useLocalStorage } from "./hooks/useLocalStorage";
export type {
  UseLocalStorageOptions,
  UseLocalStorageParser,
  UseLocalStorageSerializer,
  UseLocalStorageSetter,
} from "./hooks/useLocalStorage";

export { default as useMediaQuery } from "./hooks/useMediaQuery";

export { default as useModal } from "./hooks/useModal";
export type { UseModalResult } from "./hooks/useModal";

export { default as usePortal } from "./hooks/usePortal";

export { default as usePrevious } from "./hooks/usePrevious";

export {
  default as useRect,
  getRefRect,
  getEventRect,
  isUnplacedRect,
} from "./hooks/useRect";
export type { ReactiveDomReact } from "./hooks/useRect";

export { default as useSSR } from "./hooks/useSSR";
export type { SSRState } from "./hooks/useSSR";

export { default as useTheme } from "./hooks/useTheme";
export { default as useThemeDetector } from "./hooks/useThemeDetector";

export { default as useToasts } from "./hooks/useToasts";
export type {
  UseToastsResult,
  Toast,
  ToastAction,
  ToastInput,
} from "./hooks/useToasts";

export { default as useWarning } from "./hooks/useWarning";

// .hoc
export { default as withScale } from "./hoc/withScale";
export type { ScaleProps } from "./hoc/withScale";

// ./utils
export * from "./utils/_collections";
export * from "./utils/_layout";

export default kitchen;
