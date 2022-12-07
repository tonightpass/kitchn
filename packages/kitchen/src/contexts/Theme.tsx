import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import useThemeDetector from "../hooks/useThemeDetector";
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

const ThemeProvider = ({
  children,
  theme: customTheme,
  ...props
}: ThemeProviderProps) => {
  const isDarkTheme = useThemeDetector();
  const [theme, setTheme] = React.useState(customTheme || themes.dark);

  React.useEffect(() => {
    if (!customTheme) setTheme(isDarkTheme ? themes.dark : themes.light);
  }, [customTheme, isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} {...props}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
