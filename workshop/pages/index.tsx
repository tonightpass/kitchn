import {
  Button,
  Container,
  Text,
  useTheme,
  useThemeDetector,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
  const { defaultThemes, storedTheme, setStoredTheme } = useTheme();

  const isDarkTheme = useThemeDetector();

  return (
    <Container align="center" gap={10} style={{ paddingTop: 100 }}>
      <Text>Your stored theme is: {storedTheme}</Text>
      <Text>Your system theme is: {isDarkTheme ? "dark" : "light"}</Text>
      <Container gap={10} row>
        <Button type={"dark"} onClick={() => setStoredTheme("system")}>
          System
        </Button>
        <Button
          type={"dark"}
          onClick={() => setStoredTheme(defaultThemes.light.name)}
        >
          Light
        </Button>
        <Button
          type={"dark"}
          onClick={() => setStoredTheme(defaultThemes.dark.name)}
        >
          Dark
        </Button>
      </Container>

      <Link href={"/avatar"}>Avatar</Link>
      <Link href={"/badge"}>Badge</Link>
      <Link href={"/button"}>Button</Link>
      <Link href={"/checkbox"}>Checkbox</Link>
      <Link href={"/collapse"}>Collapse</Link>
      <Link href={"/drawer"}>Drawer</Link>
      <Link href={"/error"}>Error</Link>
      <Link href={"/footer"}>Footer</Link>
      <Link href={"/grid"}>Grid</Link>
      <Link href={"/icon"}>Icon</Link>
      <Link href={"/image"}>Image</Link>
      <Link href={"/input"}>Input</Link>
      <Link href={"/link"}>Link</Link>
      <Link href={"/modal"}>Modal</Link>
      <Link href={"/note"}>Note</Link>
      <Link href={"/progress"}>Progress</Link>
      <Link href={"/select"}>Select</Link>
      <Link href={"/skeleton"}>Skeleton</Link>
      <Link href={"/spacer"}>Spacer</Link>
      <Link href={"/tabs"}>Tabs</Link>
      <Link href={"/text"}>Text</Link>
      <Link href={"/textarea"}>Textarea</Link>
      <Link href={"/toast"}>Toast</Link>
      <Link href={"/toggle"}>Toggle</Link>
    </Container>
  );
};

export default IndexPage;
