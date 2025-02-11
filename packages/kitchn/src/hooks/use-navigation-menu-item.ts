import React from "react";

import { NavigationMenuItemContext } from "../contexts/NavigationMenuItem";

const useNavigationMenuItem = () => {
  const context = React.useContext(NavigationMenuItemContext);
  if (!context) {
    throw new Error(
      "Navigation menu item components must be used within NavigationMenu.Item",
    );
  }
  return context;
};

export default useNavigationMenuItem;
