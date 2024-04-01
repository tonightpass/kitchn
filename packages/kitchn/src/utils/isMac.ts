import { isBrowser } from "./isBrowser";

export const isMac = (): boolean => {
  if (!isBrowser()) return false;
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
};
