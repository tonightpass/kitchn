import { KitchnDocument } from "kitchn/next/document";
import { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends KitchnDocument {
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
