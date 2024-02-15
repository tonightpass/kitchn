import {
  Badge,
  Button,
  Container,
  Icon,
  InlineCode,
  Link,
  Spinner,
  Text,
  Tooltip,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import { RiInformationFill } from "react-icons/ri";

const TooltipPage: NextPage = () => {
  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container gap={"normal"} mt={"extraLarge"}>
        <Text>{"default"}</Text>
        <Container>
          <Tooltip text={"Push to Git and your website is live."}>
            {"Tooltip"}
          </Tooltip>
        </Container>

        <Text>{"trigger"}</Text>
        <Tooltip
          text={"Push to Git and your website is live."}
          trigger={"click"}
          type={"dark"}
        >
          <span>{"Click me"}</span>
        </Tooltip>

        <Text>{"with components"}</Text>
        <Container align={"center"} gap={"normal"} row>
          <Tooltip text={"Push to Git and your website is live."} type={"dark"}>
            <Button>{"Button"}</Button>
          </Tooltip>
          <Tooltip text={"Push to Git and your website is live."} type={"dark"}>
            <Badge>{"1000+"}</Badge>
          </Tooltip>
          <Tooltip text={"Push to Git and your website is live."} type={"dark"}>
            <Link href={"#"}>{"Hyperlink"}</Link>
          </Tooltip>
        </Container>

        <Text>{"custom content"}</Text>
        <Container gap={"normal"}>
          <Tooltip
            text={
              <>
                {"Perfect for working with a "}
                <InlineCode>{"CMS"}</InlineCode>
                {"."}
              </>
            }
          >
            <span>{"Top"}</span>
          </Tooltip>
          <Tooltip
            text={
              <>
                <Text weight={"bold"} span>
                  {"Perfect"}
                </Text>{" "}
                {"for working with a CMS."}
              </>
            }
            placement={"bottom"}
          >
            <span>{"Bottom"}</span>
          </Tooltip>
        </Container>

        <Text>{"types"}</Text>
        <Container align={"center"} gap={"normal"} row>
          <Container gap={"normal"}>
            <Tooltip text={"Perfect for working with a CMS."} type={"dark"}>
              <span>{"Dark"}</span>
            </Tooltip>
            <Tooltip text={"Perfect for working with a CMS."} type={"info"}>
              <span>{"Info"}</span>
            </Tooltip>
            <Tooltip text={"Perfect for working with a CMS."} type={"success"}>
              <span>{"Success"}</span>
            </Tooltip>
            <Tooltip text={"Perfect for working with a CMS."} type={"warning"}>
              <span>{"Warning"}</span>
            </Tooltip>
            <Tooltip text={"Perfect for working with a CMS."} type={"danger"}>
              <span>{"Danger"}</span>
            </Tooltip>
            <Tooltip
              text={"Perfect for working with a CMS."}
              type={"secondary"}
            >
              <span>{"Secondary"}</span>
            </Tooltip>
          </Container>
        </Container>

        <Text>{"components"}</Text>
        <Container gap={"normal"} align={"center"} row>
          <Container>
            <Tooltip text={"The Evil Rabbit Jumped over the Fence"}>
              <Icon icon={RiInformationFill} />
            </Tooltip>
          </Container>

          <Container>
            <Tooltip
              text={"The Evil Rabbit Jumped over the Fence"}
              placement={"bottom"}
            >
              <Button size={"small"}>{"Bottom"}</Button>
            </Tooltip>
          </Container>

          <Container>
            <Tooltip
              text={"The Evil Rabbit Jumped over the Fence"}
              placement={"left"}
            >
              <Badge size={"small"}>{"LEFT"}</Badge>
            </Tooltip>
          </Container>

          <Container>
            <Tooltip
              text={"The Evil Rabbit Jumped over the Fence"}
              placement={"right"}
            >
              <Spinner size={20} />
            </Tooltip>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default TooltipPage;
