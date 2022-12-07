import React from "react";
import { ThemeContext } from "../contexts/Theme";

const useTheme = () => {
  const context = React.useContext(ThemeContext);

  return context;
};

export default useTheme;
