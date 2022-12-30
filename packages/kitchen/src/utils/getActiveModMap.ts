import { KeyMod } from "./codes";

const getActiveModMap = (
  bindings: number[]
): Record<keyof typeof KeyMod, boolean> => {
  const modBindings = bindings.filter((item: number) => !!KeyMod[item]);
  const activeModMap: Record<keyof typeof KeyMod, boolean> = {
    CtrlCmd: false,
    Shift: false,
    Alt: false,
    WinCtrl: false,
  };
  modBindings.forEach((code) => {
    const modKey = KeyMod[code] as keyof typeof KeyMod;
    activeModMap[modKey] = true;
  });
  return activeModMap;
};

export default getActiveModMap;
