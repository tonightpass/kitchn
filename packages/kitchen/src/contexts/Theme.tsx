import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import defaultThemes from "../themes";

export type Themes = Record<string, DefaultTheme>;

export type ThemeContextParams = {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
  storedTheme?: keyof Themes | "system";
  setStoredTheme: (theme: keyof Themes | "system") => void;
  themes: Record<string, DefaultTheme>;
};

const ThemeContext = React.createContext<ThemeContextParams>({
  theme: defaultThemes.dark,
  setTheme: (_theme: DefaultTheme) => {},
  storedTheme: "system",
  setStoredTheme: (_theme: keyof Themes | "system") => {},
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
        setTheme,
        storedTheme: nextTheme.resolvedTheme,
        setStoredTheme: nextTheme.setTheme,
        themes,
      }}
      {...props}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
