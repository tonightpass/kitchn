import { KitchnProvider, StyleSheetManager } from "kitchn";
import React from "react";

import "kitchn/fonts.css";

export const wrapRootElement = ({ element }, pluginOptions) => (
  <StyleSheetManager
    enableVendorPrefixes={pluginOptions?.enableVendorPrefixes === false}
  >
    <KitchnProvider>{element}</KitchnProvider>
  </StyleSheetManager>
);
