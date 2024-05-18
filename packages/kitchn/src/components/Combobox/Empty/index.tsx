import React from "react";

import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";
import Container, { ContainerProps } from "../../Container";
import Text, { TextProps } from "../../Text";

type Props = {
  textProps?: TextProps;
};

export type ComboboxEmptyProps = KitchnComponent<Props, ContainerProps>;

const ComboboxEmptyComponent: React.FC<ComboboxEmptyProps> = ({
  children,
  textProps,
  ...props
}) => {
  return (
    <Container
      gap={"small"}
      padding={"small"}
      align={"center"}
      justify={"center"}
      {...props}
    >
      <Text align={"center"} size={"compact"} color={"light"} {...textProps}>
        {children}
      </Text>
    </Container>
  );
};

ComboboxEmptyComponent.displayName = "KitchenComboboxEmpty";
export const ComboboxEmpty = withDecorator(ComboboxEmptyComponent);
export default ComboboxEmpty;
