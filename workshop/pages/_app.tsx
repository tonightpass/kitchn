import {
  KitchnProvider,
  createTheme,
  tonightpassTheme,
} from "@tonightpass/kitchn";
import { AppProps } from "next/app";

import "@tonightpass/kitchn/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchnProvider
      themes={{
        tonightpass: createTheme(tonightpassTheme),
      }}
      forcedTheme={(Component as any).theme || null}
    >
      <Component {...pageProps} />
    </KitchnProvider>
  );
};

export default App;
