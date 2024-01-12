import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import defaultThemes from "../themes";
import { Themes } from "../types";

export type ThemeContextParams = {
  theme: DefaultTheme;
  setTheme: (theme: keyof Themes | "system") => void;
  resolvedTheme?: keyof Themes | "system";
  forcedTheme?: keyof Themes | "system";
  systemTheme?: keyof Themes;
  storedTheme?: keyof Themes | "system";
  themes: Record<string, DefaultTheme>;
};

const ThemeContext = React.createContext<ThemeContextParams>({
  theme: defaultThemes.dark,
  setTheme: (_theme: keyof Themes | "system") => {},
  resolvedTheme: "system",
  systemTheme: "system",
  forcedTheme: undefined,
  themes: defaultThemes,
});

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: DefaultTheme;
  themes: ThemeContextParams["themes"];
};

const ThemeProvider = ({ children, themes, ...props }: ThemeProviderProps) => {
  const nextTheme = useNextTheme();

  const [theme, setTheme] = React.useState<DefaultTheme>(
    themes[nextTheme.resolvedTheme as keyof Themes] || themes.dark,
  );

  React.useEffect(() => {
    setTheme(themes[nextTheme.resolvedTheme as keyof Themes] || themes.dark);
  }, [nextTheme.resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        ...nextTheme,
        theme,
        setTheme: nextTheme.setTheme,
        resolvedTheme: nextTheme.resolvedTheme,
        systemTheme: nextTheme.systemTheme,
        forcedTheme: nextTheme.forcedTheme,
        storedTheme: nextTheme.theme,
        themes,
      }}
      {...props}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
