import React from "react";

import { ThemeContext } from "../contexts/theme";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  return { ...context };
};
