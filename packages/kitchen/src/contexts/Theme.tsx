import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import { PREFIX } from "../constants";
import useCookie from "../hooks/useCookie";
import useThemeDetector from "../hooks/useThemeDetector";
import themes from "../themes";

const ThemeContext = React.createContext({
  theme: themes.dark,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setTheme: (_theme: DefaultTheme) => {},
  storedTheme: "system",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setStoredTheme: (_themeName: keyof typeof themes | "system" | string) => {},
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

  const [storedTheme, setStoredTheme] = useCookie<
    keyof typeof themes | "system" | string
  >(`${PREFIX}-theme`, customTheme?.name || "system");

  const [theme, setTheme] = React.useState<DefaultTheme>(
    customTheme ||
      (storedTheme === "system"
        ? isDarkTheme
          ? themes.dark
          : themes.light
        : themes[storedTheme as keyof typeof themes]),
  );

  React.useEffect(() => {
    if (storedTheme === "system") {
      setTheme(isDarkTheme ? themes.dark : themes.light);
    } else {
      setTheme(themes[storedTheme as keyof typeof themes]);
    }
  }, [isDarkTheme, storedTheme]);

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
