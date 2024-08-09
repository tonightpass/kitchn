import { KitchnProvider } from "kitchn";

import Template from "./Template";

import "kitchn/fonts.css";

export default function App() {
  return (
    <KitchnProvider>
      <Template />
    </KitchnProvider>
  );
}
