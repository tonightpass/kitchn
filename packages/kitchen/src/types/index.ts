export * from "./theme";
export * from "./styled-components";

export type KitchenComponent<P, N = React.HTMLAttributes<any>> = {
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
