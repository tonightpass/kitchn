import React from "react";

import { ReactiveDomReact } from "../hooks";

export type NavigationMenuContextType = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  handleMouseOver: (event: React.MouseEvent<HTMLElement>, id: string) => void;
  handleMouseLeave: () => void;
  handleTooltipMouseEnter: () => void;
  handleTooltipMouseLeave: () => void;
  activeId: string | null;
  previousId: string | null;
  tooltipContent: React.ReactNode | null;
  setTooltipContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  displayHighlight: boolean;
  setDisplayHighlight: React.Dispatch<React.SetStateAction<boolean>>;
  rect: ReactiveDomReact;
  setRect: (
    event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
    getContainer?: () => HTMLElement | null,
  ) => void;
  isTooltipHovered: boolean;
  setIsTooltipHovered: React.Dispatch<React.SetStateAction<boolean>>;
  highlight: boolean;
  hoverHeightRatio: number;
  hoverWidthRatio: number;
  menuItems: string[];
  setMenuItems: React.Dispatch<React.SetStateAction<string[]>>;
};

export const NavigationMenuContext =
  React.createContext<NavigationMenuContextType | null>(null);
