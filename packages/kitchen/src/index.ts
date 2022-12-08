import "./types/styled-components";
import kitchen from "styled-components";

import KitchenProvider from "./components/Provider";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
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

import useLocalStorage from "./hooks/useLocalStorage";
import useTheme from "./hooks/useTheme";
import useThemeDetector from "./hooks/useThemeDetector";

import themes, { createTheme } from "./themes";

export {
  KitchenProvider,
  Badge,
  Button,
  Checkbox,
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
  useLocalStorage,
  useTheme,
  useThemeDetector,
  themes,
  createTheme,
};

export default kitchen;
