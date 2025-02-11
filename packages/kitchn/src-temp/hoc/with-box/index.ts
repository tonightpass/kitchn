import { useWarning } from "../../hooks";
import { DecoratorProps, withDecorator } from "../with-decorator";

export type BoxProps = DecoratorProps;

export const withBox = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useWarning("withBox is deprecated, please use withDecorator instead.");
  return withDecorator(WrappedComponent);
};
