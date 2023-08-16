import React from "react";

import { ThemeContext } from "../contexts/Theme";
import themes from "../themes";

const useTheme = () => {
  const context = React.useContext(ThemeContext);

  return { ...context, defaultThemes: themes };
};

export default useTheme;
