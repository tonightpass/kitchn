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
  >(`${PREFIX}-theme`, customTheme?.scheme || "system");

  const [theme, setTheme] = React.useState<DefaultTheme>(() => {
    if (customTheme) {
      return customTheme;
    }
    if (storedTheme === "system") {
      return isDarkTheme ? themes.dark : themes.light;
    }
    return themes[storedTheme as keyof typeof themes] || themes.dark;
  });

  React.useEffect(() => {
    if (storedTheme === "system") {
      nextTheme.setTheme("system");
      setTheme(isDarkTheme ? themes.dark : themes.light);
    } else {
      nextTheme.setTheme(themes[storedTheme as keyof typeof themes].scheme);
      setTheme(themes[storedTheme as keyof typeof themes]);
    }
  }, [themes, isDarkTheme, storedTheme, customTheme, nextTheme, setTheme]);

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
