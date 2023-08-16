import React from "react";
import { useColorScheme } from "react-native";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";

import themes from "../themes";

const ThemeContext = React.createContext({
  theme: themes.dark,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: (_theme: DefaultTheme) => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: DefaultTheme;
};

/**
 * System: 0
 * Dark: 1
 * Light: 2
 */

const ThemeProvider = ({
  children,
  theme: customTheme,
  ...props
}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const isDarkTheme = colorScheme === "dark";

  const [theme, setTheme] = React.useState<DefaultTheme>(
    customTheme || (isDarkTheme ? themes.dark : themes.light),
  );

  React.useEffect(() => {
    if (customTheme) {
      setTheme(customTheme);
    } else if (!isDarkTheme) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }, [customTheme, isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} {...props}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
