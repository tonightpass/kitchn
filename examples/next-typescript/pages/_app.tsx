import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
