import { TonightPassLogo } from "@components/Brand";
import { Button, Container, Icon, Input, Link, Text } from "kitchn";
import React from "react";
import { RiGithubFill } from "react-icons/ri";

const AuthenticationExample: React.FC = () => {
  return (
    <Container h={400} minH={"80vh"} row>
      <Container bg={"darker"} flex={1} brw={1}>
        <Container flex={1} align={"flex-start"} p={"large"}>
          <Container>
            <TonightPassLogo height={30} width={"auto"} />
          </Container>

          <Container mt={"auto"} gap={"tiny"}>
            <Text>
              {"“TonightPass is the best way to find events near you.”"}
            </Text>
            <Text size={"small"}>{"Lucas Bodin"}</Text>
          </Container>
        </Container>
      </Container>
      <Container bg={"darkest"} flex={1} align={"center"} justify={"center"}>
        <Container maxW={300} w={"100%"} align={"center"}>
          <Text weight={"bold"} size={"large"} align={"center"}>
            {"Create an account"}
          </Text>
          <Text mt={"small"} color={"light"} align={"center"} size={"compact"}>
            {"To continue, please enter your email address."}
          </Text>
          <Container gap={"tiny"} w={"100%"} mt={"large"}>
            <Input placeholder={"Email"} />
            <Button>{"Continue"}</Button>

            <Container my={"normal"} row gap={"small"} align={"center"}>
              <Container h={1} w={"100%"} bg={"light"} />
              <Container>
                <Text
                  color={"light"}
                  size={"tiny"}
                  transform={"uppercase"}
                  truncate
                >
                  {"or continue with"}
                </Text>
              </Container>
              <Container h={1} w={"100%"} bg={"light"} />
            </Container>

            <Button
              type={"light"}
              prefix={<Icon color={"inherit"} icon={RiGithubFill} />}
            >
              {"GitHub"}
            </Button>

            <Text size={"small"} color={"light"} mt={"medium"} align={"center"}>
              {"By clicking continue, you agree to our"}
              <Link href={"#"}>
                <Text
                  color={"lightest"}
                  size={"inherit"}
                  decoration={"underline"}
                >
                  {"Terms of Service"}
                </Text>
              </Link>
              {" and "}
              <Link href={"#"}>
                <Text
                  color={"lightest"}
                  size={"inherit"}
                  decoration={"underline"}
                >
                  {"Privacy Policy"}
                </Text>
              </Link>
              {"."}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default AuthenticationExample;
