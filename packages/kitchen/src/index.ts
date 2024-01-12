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
export * from "./components/Provider";
export * from "./components/Avatar";
export * from "./components/Avatar/Group";
export * from "./components/Badge";
export * from "./components/Button";
export * from "./components/Checkbox";
export * from "./components/Code";
export * from "./components/Code/Inline";
export * from "./components/Collapse";
export * from "./components/Container";
export * from "./components/Drawer";
export * from "./components/Error";
export * from "./components/Footer";
export * from "./components/Icon";

export { default as Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { default as ControlledInput } from "./components/Input/Controlled";

export { default as Image } from "./components/Image";
export type { ImageProps } from "./components/Image";

export { default as ListItem } from "./components/List/Item";
export { default as OrderedList } from "./components/List/Ordered";
export { default as UnorderedList } from "./components/List/Unordered";

export { default as Link } from "./components/Link";
export type { LinkProps } from "./components/Link";
export { default as FragmentLink } from "./components/Link/Fragment";
export type { FragmentLinkProps } from "./components/Link/Fragment";

export { default as Modal } from "./components/Modal";
export type { ModalProps, ModalActionProps } from "./components/Modal";

export { default as Note } from "./components/Note";
export type { NoteProps } from "./components/Note";

export { default as Progress } from "./components/Progress";
export type { ProgressProps } from "./components/Progress";

export { default as Select } from "./components/Select";
export type { SelectProps } from "./components/Select";

export { default as Skeleton } from "./components/Skeleton";
export type { SkeletonProps } from "./components/Skeleton";

export { default as Spacer } from "./components/Spacer";
export type { SpacerProps } from "./components/Spacer";

export { default as Spinner } from "./components/Spinner";
export type { SpinnerProps } from "./components/Spinner";

export { default as Tabs } from "./components/Tabs";
export type { TabsProps } from "./components/Tabs";

export { default as Text } from "./components/Text";
export type { TextProps } from "./components/Text";

export { default as Textarea } from "./components/Textarea";
export type { TextareaProps } from "./components/Textarea";

export { default as ToastActions } from "./components/Toast/Actions";
export type { ToastActionsProps } from "./components/Toast/Actions";

export { default as ToastItem } from "./components/Toast/Item";
export type { ToastItemProps } from "./components/Toast/Item";

export { default as ToastContainer } from "./components/Toast/Container";

export { default as Toggle } from "./components/Toggle";
export type { ToggleProps } from "./components/Toggle";

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
