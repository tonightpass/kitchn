import { isMac } from "./is-mac";

export const getCtrlKeysByPlatform = (): Record<
  string,
  "metaKey" | "ctrlKey"
> => {
  return {
    CtrlCmd: isMac() ? "metaKey" : "ctrlKey",
    WinCtrl: isMac() ? "ctrlKey" : "metaKey",
  };
};
