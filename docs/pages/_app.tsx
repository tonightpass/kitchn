import GlobalStyle from "@components/GlobalStyle";
import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";
import { useTheme as useNextraTheme } from "nextra-theme-docs";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { resolvedTheme } = useNextraTheme();

  return (
    <KitchenProvider
      forcedTheme={resolvedTheme}
      attribute={"class"}
      dangerouslyDisableNextThemeProvider
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
