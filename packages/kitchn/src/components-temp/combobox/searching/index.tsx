import React from "react";

import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";
import Container, { ContainerProps } from "../../container";
import Text, { TextProps } from "../../text";

type Props = {
  textProps?: TextProps;
};

export type ComboboxSearchingProps = KitchnComponent<Props, ContainerProps>;

const ComboboxSearchingComponent: React.FC<ComboboxSearchingProps> = ({
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

ComboboxSearchingComponent.displayName = "KitchenComboboxSearching";
export const ComboboxSearching = withDecorator(ComboboxSearchingComponent);
export default ComboboxSearching;
