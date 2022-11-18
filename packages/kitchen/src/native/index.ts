import "./types/styled-components";
import kitchen from "styled-components/native";

import KitchenProvider from "./components/Provider";
import Text from "./components/Text";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const ReactNative = require("react-native") as Awaited<
  typeof import("react-native")
>;

export { KitchenProvider, Text };

export default kitchen;
