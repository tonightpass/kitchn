import React from "react";

export type NavigationMenuItemContextType = {
  id: string | null;
  hasContent: boolean;
  position: number;
};

export const NavigationMenuItemContext =
  React.createContext<NavigationMenuItemContextType>({
    id: null,
    hasContent: false,
    position: 0,
  });
