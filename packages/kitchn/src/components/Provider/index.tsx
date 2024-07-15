import isPropValid from "@emotion/is-prop-valid";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types";
import React from "react";
import {
  DefaultTheme,
  StyleSheetManager,
  ShouldForwardProp,
} from "styled-components";

import { PREFIX } from "../../constants";
import { ThemeProvider, ThemeProviderProps } from "../../contexts/Theme";
import {
  defaultToastLayout,
  ToastsContent,
  ToastsContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from "../../contexts/Toasts";
import { withDecorator } from "../../hoc/withDecorator";
import { useCurrentState } from "../../hooks/useCurrentState";
import { defaultThemes, generateThemes } from "../../themes";
import { Themes } from "../../types";
import GlobalStyle from "../GlobalStyle";
import ToastContainer from "../Toast/Container";

export type KitchnProviderProps = {
  children?: React.ReactNode;
  theme?: ThemeProviderProps["theme"];
  enableSystem?: boolean;
  defaultTheme?: keyof Themes | "system";
  forcedTheme?: keyof Themes | "system";
  themes?: Record<string, DefaultTheme>;
  dangerouslyDisableNextThemeProvider?: boolean;
  attribute?: string | "class";
};

export const KitchnProviderComponent: React.FC<KitchnProviderProps> = ({
  children,
  enableSystem = true,
  defaultTheme = enableSystem ? "system" : "dark",
  themes: customThemes = {},
  forcedTheme,
  attribute = "data-theme",
  dangerouslyDisableNextThemeProvider,
}: KitchnProviderProps) => {
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
    <NextThemeProviderWrapper
      storageKey={`${PREFIX}-theme`}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      themes={Object.keys(themes).map((key) => key.toString())}
      forcedTheme={forcedTheme}
      dangerouslyDisableNextThemeProvider={dangerouslyDisableNextThemeProvider}
      attribute={attribute}
    >
      <StyleSheetManager
        shouldForwardProp={shouldForwardProp}
        enableVendorPrefixes
      >
        <ThemeProvider themes={themes}>
          <GlobalStyle staticThemes={staticThemes} attribute={attribute} />
          <ToastsContent.Provider value={initialValue}>
            {children}
            <ToastContainer />
          </ToastsContent.Provider>
        </ThemeProvider>
      </StyleSheetManager>
    </NextThemeProviderWrapper>
  );
};

export const shouldForwardProp: ShouldForwardProp<"web"> = (
  propName,
  target,
) => {
  if (typeof target === "string") {
    return isPropValid(propName);
  }

  return true;
};

export type NextThemeProviderWrapperProps = NextThemeProviderProps & {
  dangerouslyDisableNextThemeProvider?: boolean;
};

export const NextThemeProviderWrapper: React.FC<
  NextThemeProviderWrapperProps
> = ({
  children,
  dangerouslyDisableNextThemeProvider,
  ...props
}: NextThemeProviderWrapperProps) => {
  if (dangerouslyDisableNextThemeProvider) {
    return <>{children}</>;
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

KitchnProviderComponent.displayName = "KitchnProvider";
export const KitchnProvider = withDecorator(KitchnProviderComponent);
export default KitchnProvider;
