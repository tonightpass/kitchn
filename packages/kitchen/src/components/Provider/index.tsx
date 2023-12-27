import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";
import { DefaultTheme } from "styled-components";

import { ThemeProvider } from "../../contexts/Theme";
import {
  defaultToastLayout,
  ToastsContent,
  ToastsContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from "../../contexts/Toasts";
import useCurrentState from "../../hooks/useCurrentState";
import GlobalStyle from "../GlobalStyle";
import ToastContainer from "../Toast/Container";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  theme,
}: KitchenProviderProps) => {
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
    <NextThemeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastsContent.Provider value={initialValue}>
          {children}
          <ToastContainer />
        </ToastsContent.Provider>
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default KitchenProvider;
