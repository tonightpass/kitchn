import React from "react";

import { withDecorator } from "../../../hoc";
import { useCombobox } from "../../../hooks";
import { KitchnComponent } from "../../../types";
import Container from "../../Container";
import Dropdown from "../../Dropdown";

type Props = {
  visible: boolean;
  disableMatchWidth?: boolean;
};

export type ComboboxDropdownProps = KitchnComponent<Props>;

const ComboboxDropdownComponent: React.FC<ComboboxDropdownProps> = ({
  visible,
  disableMatchWidth,
  children,
}) => {
  const { ref } = useCombobox();

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return (
    <Dropdown
      parent={ref}
      visible={visible}
      disableMatchWidth={disableMatchWidth}
    >
      <Container
        br={"square"}
        bc={"dark"}
        bg={"darkest"}
        p={"tiny"}
        onClick={clickHandler}
      >
        {children}
      </Container>
    </Dropdown>
  );
};

ComboboxDropdownComponent.displayName = "KitchenComboboxDropdown";
export const ComboboxDropdown = withDecorator(ComboboxDropdownComponent);
export default ComboboxDropdown;
