import {
  KitchenProvider,
  createTheme,
  tonightpassTheme,
} from "@tonightpass/kitchen";
import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider
      themes={{
        tonightpass: createTheme(tonightpassTheme),
      }}
    >
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
