import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";
import { withKitchen } from "@tonightpass/kitchen/next";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withKitchen(App);
