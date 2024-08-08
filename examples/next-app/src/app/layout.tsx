import { KitchnProvider } from "kitchn";
import { KitchnRegistry } from "kitchn/next";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html>
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
