import React from "react";

import { ComboboxConfig, ComboboxContext } from "../contexts";

export const useCombobox = (): ComboboxConfig =>
  React.useContext<ComboboxConfig>(ComboboxContext);
