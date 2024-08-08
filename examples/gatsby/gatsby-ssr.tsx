import { KitchnProvider, ServerStyleSheet, StyleSheetManager } from "kitchn";
import React from "react";

import "kitchn/fonts.css";

const sheetByPathname = new Map();

export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <KitchnProvider>{element}</KitchnProvider>
    </StyleSheetManager>
  );
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheet = sheetByPathname.get(pathname);
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};
