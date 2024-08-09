import { KitchnProvider } from "kitchn";
import { KitchnRegistry } from "kitchn/next";

import "kitchn/fonts.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>{"Create Kitchn Next"}</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </head>
      <body>
        <KitchnRegistry>
          <KitchnProvider>{children}</KitchnProvider>
        </KitchnRegistry>
      </body>
    </html>
  );
}
