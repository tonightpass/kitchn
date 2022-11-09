import "./types/styled-components";
import kitchen from "styled-components";

import KitchenProvider from "./components/Provider";
import KitchenDocument from "./components/Document";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Spinner from "./components/Spinner";

import withKitchen from "./hoc/withKitchen";

export { KitchenProvider, KitchenDocument, Button, Icon, Spinner, withKitchen };
export default kitchen;
