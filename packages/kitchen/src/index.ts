import "./types/styled-components";
import kitchen from "styled-components";

import KitchenProvider from "./components/Provider";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Code from "./components/Code";
import Container from "./components/Container";
import Note from "./components/Note";
import OrderedList from "./components/OrderedList";
import UnorderedList from "./components/UnorderedList";
import ListItem from "./components/ListItem";
import Icon from "./components/Icon";
import InlineCode from "./components/InlineCode";
import Skeleton from "./components/Skeleton";
import Spinner from "./components/Spinner";
import Text from "./components/Text";

export {
  KitchenProvider,
  Badge,
  Button,
  Code,
  Container,
  Icon,
  InlineCode,
  Note,
  OrderedList,
  ListItem,
  UnorderedList,
  Skeleton,
  Spinner,
  Text,
};

export { useTheme } from "styled-components";
export type { DefaultTheme } from "styled-components";

export default kitchen;
