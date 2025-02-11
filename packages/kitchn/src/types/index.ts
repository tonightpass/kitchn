export * from "./theme";
export * from "./window";

export type KitchnComponent<P, N = React.HTMLAttributes<any>> = {
  /**
   * The root element.
   */
  as?: React.ElementType;
  /**
   * The content, duh.
   */
  children?: React.ReactNode;
  forwardedAs?: React.ElementType;
} & P &
  Omit<N, keyof P>;

export type NormalSizes = "small" | "normal" | "large";

export type TriggerTypes = "hover" | "click";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
