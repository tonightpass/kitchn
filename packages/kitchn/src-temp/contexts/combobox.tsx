import React, { MutableRefObject } from "react";

export interface ComboboxConfig {
  value?: string;
  updateValue?: (val: string) => unknown;
  visible?: boolean;
  updateVisible?: (next: boolean) => unknown;
  ref?: MutableRefObject<HTMLElement | null>;
}

const defaultContext = {
  visible: false,
};

export const ComboboxContext =
  React.createContext<ComboboxConfig>(defaultContext);
