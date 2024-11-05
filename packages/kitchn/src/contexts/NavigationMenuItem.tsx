import React from "react";

export type NavigationMenuItemContextType = {
  id: string | null;
  hasContent: boolean;
};

export const NavigationMenuItemContext =
  React.createContext<NavigationMenuItemContextType>({
    id: null,
    hasContent: false,
  });
