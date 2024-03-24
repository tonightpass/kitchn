import { KitchnProvider } from "@tonightpass/kitchn";
import { AppProps } from "next/app";

import "@tonightpass/kitchn/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchnProvider>
      <Component {...pageProps} />
    </KitchnProvider>
  );
};

export default App;
