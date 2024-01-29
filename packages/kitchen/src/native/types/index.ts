// eslint-disable-next-line @typescript-eslint/no-explicit-any
export * from "./theme";

export type KitchenComponent<P, N = object> = {
  /**
   * The root element.
   */
  as?: React.ElementType;
  /**
   * The content, duh.
   */
  children?: React.ReactNode;
} & P &
  Omit<N, keyof P>;

export type NormalSizes = "small" | "normal" | "large";
