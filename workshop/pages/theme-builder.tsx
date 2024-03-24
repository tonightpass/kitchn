import {
  Button,
  Container,
  Input,
  Link,
  Text,
  createTheme,
  useClipboard,
  useTheme,
} from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const ThemeBuilderPage: NextPage = () => {
  const { theme, setThemeStyle } = useTheme();
  const { copy } = useClipboard();

  const renderFields = (object: object, parentKey = "") => {
    return Object.keys(object).map((key) => {
      const nestedKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof object[key] === "object") {
        return (
          <Container
            gap={"small"}
            key={nestedKey}
            p={"small"}
            bc={"lightest"}
            w={"100%"}
          >
            <Text>{nestedKey}</Text>
            <Container wrap={"wrap"} gap={"small"} row>
              {renderFields(object[key], nestedKey)}
            </Container>
          </Container>
        );
      }

      return (
        <Container w={"17%"} key={nestedKey} row gap={"tiny"}>
          {nestedKey.includes("colors") && (
            <Container w={"20px"} bg={object[key]} br={"square"} />
          )}
          <Input
            label={nestedKey}
            value={object[key]}
            onChange={(e) => {
              const updatedTheme = { ...theme };
              let currentLevel = updatedTheme;
              const keys = nestedKey.split(".");
              keys.forEach((k, index) => {
                if (index === keys.length - 1) {
                  currentLevel[k] = e.target.value;
                } else {
                  if (!currentLevel[k]) {
                    currentLevel[k] = {};
                  }
                  currentLevel = currentLevel[k];
                }
              });
              setThemeStyle(createTheme(updatedTheme));
            }}
          />
        </Container>
      );
    });
  };

  return (
    <Container
      maxW={"laptop"}
      mx={"auto"}
      gap={"small"}
      p={"normal"}
      bc={"lightest"}
    >
      <Text>{"theme"}</Text>
      {renderFields(theme)}

      <Container gap={"small"} align={"flex-start"}>
        <Text>{"Export your theme"}</Text>
        <Button
          onClick={() => {
            copy(JSON.stringify(theme, null, 2));
          }}
        >
          {"Copy"}
        </Button>
        <Text>{"Explore components to see your changes"}</Text>
        <Link href={"/"}>
          <Button>{"Go to components"}</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default ThemeBuilderPage;
