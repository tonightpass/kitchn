import React from "react";

import { NavigationMenuContext } from "../contexts/navigation-menu";

const useNavigationMenu = () => {
  const context = React.useContext(NavigationMenuContext);
  if (!context) {
    throw new Error(
      "Navigation menu components must be used within NavigationMenu.Container",
    );
  }
  return context;
};

export default useNavigationMenu;
