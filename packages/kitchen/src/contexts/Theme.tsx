import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import useThemeDetector from "../hooks/useThemeDetector";
import themes from "../themes";

const ThemeContext = React.createContext({
  theme: themes.dark,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: (_theme: DefaultTheme) => {},
  storedTheme: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setStoredTheme: (_themeId: number) => {},
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
  const isDarkTheme = useThemeDetector();

  const [storedTheme, setStoredTheme] = useLocalStorage<number>(
    "theme",
    customTheme ? customTheme.id : 0
  );

  const [theme, setTheme] = React.useState<DefaultTheme>(
    customTheme || storedTheme === 0
      ? isDarkTheme
        ? themes.dark
        : themes.light
      : storedTheme === 1
      ? themes.dark
      : storedTheme === 2
      ? themes.light
      : themes.dark
  );

  React.useEffect(() => {
    if (customTheme) {
      setTheme(customTheme);
    } else if (storedTheme === 0) {
      setTheme(isDarkTheme ? themes.dark : themes.light);
    } else if (storedTheme === 1) {
      setTheme(themes.dark);
    } else if (storedTheme === 2) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }, [customTheme, isDarkTheme, storedTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, storedTheme, setStoredTheme }}
      {...props}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
