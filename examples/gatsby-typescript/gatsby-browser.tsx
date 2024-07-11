import { KitchnProvider } from "kitchn";
import React from "react";

export const wrapRootElement = ({ element }) => (
  <KitchnProvider>{element}</KitchnProvider>
);
