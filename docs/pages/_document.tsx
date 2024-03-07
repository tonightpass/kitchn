import { KitchenDocument } from "@tonightpass/kitchen/next";
import { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends KitchenDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
