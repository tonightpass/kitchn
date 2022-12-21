import isMac from "./isMac";

const getCtrlKeysByPlatform = (): Record<string, "metaKey" | "ctrlKey"> => {
  return {
    CtrlCmd: isMac() ? "metaKey" : "ctrlKey",
    WinCtrl: isMac() ? "ctrlKey" : "metaKey",
  };
};

export default getCtrlKeysByPlatform;
