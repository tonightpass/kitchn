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
      <Text>
        Your stored theme is:{" "}
        {storedTheme === 0
          ? "system"
          : storedTheme === 1
          ? "dark"
          : storedTheme === 2
          ? "light"
          : "custom"}
      </Text>
      <Text>Your system theme is: {isDarkTheme ? "dark" : "light"}</Text>
      <Container gap={10} row>
        <Button type={"dark"} onClick={() => setStoredTheme(0)}>
          System
        </Button>
        <Button
          type={"dark"}
          onClick={() => setStoredTheme(defaultThemes.light.id)}
        >
          Light
        </Button>
        <Button
          type={"dark"}
          onClick={() => setStoredTheme(defaultThemes.dark.id)}
        >
          Dark
        </Button>
      </Container>

      <Link href={"/avatar"}>Avatar</Link>
      <Link href={"/grid"}>Grid</Link>
      <Link href={"/badge"}>Badge</Link>
      <Link href={"/button"}>Button</Link>
      <Link href={"/checkbox"}>Checkbox</Link>
      <Link href={"/drawer"}>Drawer</Link>
      <Link href={"/error"}>Error</Link>
      <Link href={"/icon"}>Icon</Link>
      <Link href={"/input"}>Input</Link>
      <Link href={"/link"}>Link</Link>
      <Link href={"/modal"}>Modal</Link>
      <Link href={"/note"}>Note</Link>
      <Link href={"/progress"}>Progress</Link>
      <Link href={"/spacer"}>Spacer</Link>
      <Link href={"/tabs"}>Tabs</Link>
      <Link href={"/text"}>Text</Link>
      <Link href={"/toast"}>Toast</Link>
      <Link href={"/skeleton"}>Skeleton</Link>
    </Container>
  );
};

export default IndexPage;
