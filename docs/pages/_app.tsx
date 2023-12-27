import GlobalStyle from "@components/GlobalStyle";
import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
