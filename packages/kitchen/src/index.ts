// styled-components
import "./types/styled-components";
import { default as kitchen } from "styled-components";
export { createGlobalStyle } from "styled-components";
export type { DefaultTheme } from "styled-components";

// ./themes
export { default as themes, createTheme } from "./themes";

// ./components
export { default as KitchenProvider } from "./components/Provider";
export type { KitchenProviderProps } from "./components/Provider";

export { default as Avatar } from "./components/Avatar";
export type { AvatarProps } from "./components/Avatar";

export { default as AvatarGroup } from "./components/Avatar/Group";
export type { AvatarGroupProps } from "./components/Avatar/Group";

export { default as Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { default as Checkbox } from "./components/Checkbox";
export type { CheckboxProps } from "./components/Checkbox";

export { default as Code } from "./components/Code";
export type { CodeProps } from "./components/Code";

export { default as InlineCode } from "./components/Code/Inline";

export { default as Container } from "./components/Container";
export type { ContainerProps } from "./components/Container";

export { default as Drawer } from "./components/Drawer";
export type { DrawerProps } from "./components/Drawer";

export { default as Error } from "./components/Error";
export type { ErrorProps } from "./components/Error";

export { default as Icon } from "./components/Icon";
export type { IconProps } from "./components/Icon";

export { default as Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { default as Link } from "./components/Link";
export type { LinkProps } from "./components/Link";

export { default as FragmentLink } from "./components/Link/Fragment";
export type { FragmentLinkProps } from "./components/Link/Fragment";

export { default as ListItem } from "./components/List/Item";
export { default as OrderedList } from "./components/List/Ordered";
export { default as UnorderedList } from "./components/List/Unordered";

export { default as Modal } from "./components/Modal";
export type { ModalProps, ModalActionProps } from "./components/Modal";

export { default as Note } from "./components/Note";
export type { NoteProps } from "./components/Note";

export { default as Progress } from "./components/Progress";
export type { ProgressProps } from "./components/Progress";

export { default as Skeleton } from "./components/Skeleton";
export type { SkeletonProps } from "./components/Skeleton";

export { default as Spinner } from "./components/Spinner";
export type { SpinnerProps } from "./components/Spinner";

export { default as Tabs } from "./components/Tabs";
export type { TabsProps } from "./components/Tabs";

export { default as Text } from "./components/Text";
export type { TextProps } from "./components/Text";

export { default as ToastActions } from "./components/Toast/Actions";
export type { ToastActionsProps } from "./components/Toast/Actions";

export { default as ToastItem } from "./components/Toast/Item";
export type { ToastItemProps } from "./components/Toast/Item";

export { default as ToastContainer } from "./components/Toast/Container";

// ./contexts
export { ToastsContent, useToastsContext } from "./contexts/Toasts";
export type {
  ToastsContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from "./contexts/Toasts";

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

// ./utils
export { default as capitalize } from "./utils/capitalize";
export { KeyCode, KeyMod } from "./utils/codes";
export { default as convertRGBToRGBA } from "./utils/convertRGBToRGBA";
export { default as getActiveModMap } from "./utils/getActiveModMap";
export { default as getCtrlKeysByPlatform } from "./utils/getCtrlKeysByPlatform";
export { default as getElementOffset } from "./utils/getElementOffset";
export { default as getId } from "./utils/getId";
export { default as getTranslateByPlacement } from "./utils/getTranslateByPlacement";
export { default as isBrowser } from "./utils/isBrowser";
export { default as isMac } from "./utils/isMac";
export { default as isNumber } from "./utils/isNumber";
export { default as isRefTarget } from "./utils/isRefTarget";
export { default as isString } from "./utils/isString";
export { default as shortenName } from "./utils/shortenName";

export default kitchen;
