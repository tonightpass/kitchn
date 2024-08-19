import * as components from "kitchn";
import * as react from "react";
import * as reactDom from "react-dom";

const scope = {
  ...react,
  ...reactDom,
  ...components,
};

delete scope.default;

export default scope;
