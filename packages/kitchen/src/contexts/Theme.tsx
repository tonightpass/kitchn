import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import themes from "../themes";

const ThemeContext = React.createContext<{
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
  storedTheme: keyof typeof themes | "system" | undefined;
  setStoredTheme: (theme: keyof typeof themes | "system" | undefined) => void;
}>({
  theme: themes.dark,
  setTheme: (_theme: DefaultTheme) => {},
  storedTheme: undefined,
  setStoredTheme: (_theme: keyof typeof themes | "system" | undefined) => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: DefaultTheme;
};

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const nextTheme = useNextTheme();

  const [storedTheme, setStoredTheme] = React.useState<
    keyof typeof themes | "system" | undefined
  >(nextTheme.resolvedTheme as keyof typeof themes);

  const [theme, setTheme] = React.useState<DefaultTheme>(
    themes[storedTheme as keyof typeof themes] || themes.dark,
  );

  React.useEffect(() => {
    if (storedTheme && storedTheme !== nextTheme.resolvedTheme) {
      nextTheme.setTheme(storedTheme);
    }
    setTheme(themes[storedTheme as keyof typeof themes] || themes.dark);
  }, [nextTheme.resolvedTheme, setTheme, storedTheme]);

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
