import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import { PREFIX } from "../constants";
import useCookie from "../hooks/useCookie";
import useThemeDetector from "../hooks/useThemeDetector";
import themes from "../themes";

const ThemeContext = React.createContext<{
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
  storedTheme: keyof typeof themes | "system" | string | undefined;
  setStoredTheme: (themeName: keyof typeof themes | "system" | string) => void;
}>({
  theme: themes.dark,
  setTheme: (_theme: DefaultTheme) => {},
  storedTheme: "system",
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
  const nextTheme = useNextTheme();
  const isDarkTheme = useThemeDetector();

  const [storedTheme, setStoredTheme] = useCookie<
    keyof typeof themes | "system" | string | undefined
  >(`${PREFIX}-theme`, undefined);

  const [theme, setTheme] = React.useState<DefaultTheme>(
    customTheme ||
      (storedTheme === "system"
        ? isDarkTheme
          ? themes.dark
          : themes.light
        : themes[storedTheme as keyof typeof themes]) ||
      themes.dark,
  );

  React.useEffect(() => {
    if (storedTheme === undefined) {
      nextTheme.setTheme("system");
      setTheme(isDarkTheme ? themes.dark : themes.light);
    }
    if (storedTheme === "system") {
      nextTheme.setTheme("system");
      setTheme(isDarkTheme ? themes.dark : themes.light);
    } else {
      nextTheme.setTheme(themes[storedTheme as keyof typeof themes].scheme);
      setTheme(themes[storedTheme as keyof typeof themes]);
    }
  }, [isDarkTheme, storedTheme]);

  return (
    <ThemeContext.Provider
      value={{ ...nextTheme, theme, setTheme, storedTheme, setStoredTheme }}
      {...props}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
