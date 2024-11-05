import React from "react";
import styled from "styled-components";

import { NavigationMenuContent } from "..";
import { NavigationMenuItemContext } from "../../../contexts/NavigationMenuItem";
import { getId } from "../../../utils";

type NavigationMenuItemProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLLIElement>;

const NavigationMenuItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const NavigationMenuItemWithContext = ({
  children,
  ...props
}: NavigationMenuItemProps) => {
  const itemId = getId();

  // Check if this menu item has a NavigationMenu.Content child
  const hasContent = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type as any)?.name === NavigationMenuContent.name,
  );

  return (
    <NavigationMenuItemContext.Provider value={{ id: itemId, hasContent }}>
      <NavigationMenuItem data-id={itemId} {...props}>
        {children}
      </NavigationMenuItem>
    </NavigationMenuItemContext.Provider>
  );
};

export default NavigationMenuItemWithContext;
