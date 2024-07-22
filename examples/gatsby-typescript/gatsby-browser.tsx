import { KitchnProvider, StyleSheetManager } from "kitchn";
import React from "react";

import "kitchn/fonts.css";

export const wrapRootElement = ({ element }) => (
  <StyleSheetManager>
    <KitchnProvider>{element}</KitchnProvider>
  </StyleSheetManager>
);
