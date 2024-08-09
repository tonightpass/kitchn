import { KitchnProvider } from "kitchn";
import { AppProps } from "next/app";

import "kitchn/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchnProvider>
      <Component {...pageProps} />
    </KitchnProvider>
  );
};

export default App;
