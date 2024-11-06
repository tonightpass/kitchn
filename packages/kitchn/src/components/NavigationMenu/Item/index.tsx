import React from "react";
import styled from "styled-components";

import { NavigationMenuItemContext } from "../../../contexts/NavigationMenuItem";
import useNavigationMenu from "../../../hooks/useNavigationMenu";
import { getId } from "../../../utils";
import NavigationMenuContent from "../Content";

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
  const { menuItems, setMenuItems } = useNavigationMenu();
  const [itemId] = React.useState(getId());

  const hasContent = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) && child.type === NavigationMenuContent,
  );

  React.useEffect(() => {
    if (menuItems.includes(itemId)) return;
    setMenuItems((prev) => {
      const newItems = [...prev];
      if (!newItems.includes(itemId)) {
        newItems.push(itemId);
      }
      return newItems;
    });

    return () => {
      setMenuItems((prev) => prev.filter((id) => id !== itemId));
    };
  }, []);

  return (
    <NavigationMenuItemContext.Provider
      value={{
        id: itemId,
        hasContent,
        position: menuItems.indexOf(itemId),
      }}
    >
      <NavigationMenuItem data-id={itemId} {...props}>
        {children}
      </NavigationMenuItem>
    </NavigationMenuItemContext.Provider>
  );
};

export default NavigationMenuItemWithContext;
