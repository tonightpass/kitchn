import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";
import { DefaultTheme } from "styled-components";

import { PREFIX } from "../../constants";
import {
  ThemeProvider,
  ThemeProviderProps,
  Themes,
} from "../../contexts/Theme";
import {
  defaultToastLayout,
  ToastsContent,
  ToastsContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from "../../contexts/Toasts";
import useCurrentState from "../../hooks/useCurrentState";
import defaultThemes, { generateThemes } from "../../themes";
import GlobalStyle from "../GlobalStyle";
import ToastContainer from "../Toast/Container";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: ThemeProviderProps["theme"];
  enableSystem?: boolean;
  defaultTheme?: keyof Themes | "system";
  themes?: Record<string, DefaultTheme>;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  enableSystem = true,
  defaultTheme = enableSystem ? "system" : "dark",
  themes: customThemes = {},
}: KitchenProviderProps) => {
  const staticThemes = { ...defaultThemes, ...customThemes };
  const themes = React.useMemo(
    () => generateThemes(staticThemes),
    [customThemes],
  );

  const [lastUpdateToastId, setLastUpdateToastId] =
    React.useState<ToastsContextParams["lastUpdateToastId"]>(null);
  const [toasts, setToasts, toastsRef] = useCurrentState<
    ToastsContextParams["toasts"]
  >([]);
  const [toastLayout, setToastLayout, toastLayoutRef] =
    useCurrentState<ToastsContextParams["toastLayout"]>(defaultToastLayout);
  const updateToasts: UpdateToastsFunction = (fn) => {
    const nextToasts = fn(toastsRef.current);
    setToasts(nextToasts);
  };
  const updateToastLayout: UpdateToastsLayoutFunction = (fn) => {
    const nextLayout = fn(toastLayoutRef.current);
    setToastLayout(nextLayout);
  };
  const updateLastToastId: UpdateToastsIDFunction = (fn) => {
    setLastUpdateToastId(fn());
  };

  const initialValue = React.useMemo<ToastsContextParams>(
    () => ({
      toasts,
      toastLayout,
      updateToasts,
      lastUpdateToastId,
      updateToastLayout,
      updateLastToastId,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toasts, toastLayout, lastUpdateToastId],
  );

  return (
    <NextThemeProvider
      storageKey={`${PREFIX}-theme`}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      themes={Object.keys(themes).map((key) => key.toString())}
    >
      <ThemeProvider themes={themes}>
        <GlobalStyle staticThemes={staticThemes} />
        <ToastsContent.Provider value={initialValue}>
          {children}
          <ToastContainer />
        </ToastsContent.Provider>
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default KitchenProvider;
