import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc";
import { useCombobox } from "../../../hooks";
import { KitchnComponent } from "../../../types";
import Container, { ContainerProps } from "../../Container";
import Text from "../../Text";

type Props = {
  value: string;
  isLabelOnly?: boolean;
};

export type ComboboxItemProps = KitchnComponent<Props, ContainerProps>;

const ComboboxItemComponent = styled(
  ({
    value: identValue,
    children,
    isLabelOnly,
    ...props
  }: ComboboxItemProps) => {
    const { value, updateValue, updateVisible } = useCombobox();
    const selectHandler = () => {
      updateValue && updateValue(identValue);
      updateVisible && updateVisible(false);
    };

    const isActive = React.useMemo(
      () => value === identValue,
      [identValue, value],
    );

    return (
      <Container
        br={"square"}
        p={"tiny"}
        cursor={"pointer"}
        onClick={selectHandler}
        bg={isActive ? "dark" : "darkest"}
        {...props}
      >
        {isLabelOnly ? (
          <Text size={"compact"} truncate span>
            {children}
          </Text>
        ) : (
          <Text size={"compact"} span>
            {"children"}
          </Text>
        )}
      </Container>
    );
  },
)`
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.layout.dark};
  }
`;

ComboboxItemComponent.displayName = "KitchenComboboxItem";
export const ComboboxItem = withDecorator(ComboboxItemComponent);
export default ComboboxItem;
