import { KitchnProvider } from "kitchn";
import { KitchnRegistry } from "kitchn/next/registry";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <KitchnRegistry>
          <KitchnProvider>{props.children}</KitchnProvider>
        </KitchnRegistry>
      </body>
    </html>
  );
}
