import { useTheme } from "styled-components";

import { useMediaQuery } from "./use-media-query";

export type UseBreakpointResult = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

export const useBreakpoint = (): UseBreakpointResult => {
  const theme = useTheme();

  return {
    isMobile: useMediaQuery(`(max-width: ${theme.breakpoint.mobile})`),
    isTablet: useMediaQuery(`(max-width: ${theme.breakpoint.tablet})`),
    isLaptop: useMediaQuery(`(max-width: ${theme.breakpoint.laptop})`),
    isDesktop: useMediaQuery(`(max-width: ${theme.breakpoint.desktop})`),
  };
};
