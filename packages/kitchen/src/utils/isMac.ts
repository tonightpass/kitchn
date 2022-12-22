import isBrowser from "./isBrowser";

const isMac = (): boolean => {
  if (!isBrowser()) return false;
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
};

export default isMac;
