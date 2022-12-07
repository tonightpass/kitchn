import {
  Button,
  Container,
  Text,
  themes,
  useTheme,
  useThemeDetector,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
  const { setTheme } = useTheme();

  const isDarkTheme = useThemeDetector();

  return (
    <Container align="center" gap={10} style={{ paddingTop: 100 }}>
      <Text>Your system theme is: {isDarkTheme ? "dark" : "light"}</Text>
      <Container gap={10} row>
        <Button type={"light"} onClick={() => setTheme(themes.light)}>
          Light
        </Button>
        <Button type={"dark"} onClick={() => setTheme(themes.dark)}>
          Dark
        </Button>
      </Container>

      <Link href={"/grid"}>Grid</Link>
      <Link href={"/badge"}>Badge</Link>
      <Link href={"/button"}>Button</Link>
      <Link href={"/text"}>Text</Link>
      <Link href={"/icon"}>Icon</Link>
      <Link href={"/note"}>Note</Link>
      <Link href={"/skeleton"}>Skeleton</Link>
    </Container>
  );
};

export default IndexPage;
