import { useWarning } from "../../hooks";
import { DecoratorProps, withDecorator } from "../with-decorator";

export type ScaleProps = DecoratorProps;

export const withScale = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useWarning("withScale is deprecated, please use withDecorator instead.");
  return withDecorator(WrappedComponent);
};
