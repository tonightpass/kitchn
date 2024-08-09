import kitchn, {
  Container,
  convertRGBToRGBA,
  Image,
  Text,
  Link,
  useBreakpoint,
} from "kitchn";

export default function Template() {
  const { isMobile } = useBreakpoint();
  return (
    <Container
      maxW={"laptop"}
      mx={"auto"}
      p={"normal"}
      h={"100vh"}
      justify={"space-between"}
      align={"center"}
    >
      <Container w={"100%"} align={"center"} justify={"space-between"} row>
        <Container p={"small"} br={"square"} align={"center"} bw={1} row>
          <Text span>
            {"Get started by editing \r"}
            <Text size={"compact"} monospace span>
              {"src/pages/index.tsx\r"}
            </Text>
          </Text>
        </Container>
        {!isMobile && (
          <Link href={"https://tonightpass.com"}>
            <Text weight={"semiBold"} size={"small"}>
              {"by\r"}
            </Text>
            <TonightPassLogo
              src={"/tonightpass.svg"}
              alt={"TonightPass"}
              w={100}
              h={24}
              ml={"tiny"}
            />
          </Link>
        )}
      </Container>
      <Centered
        py={"extraLarge"}
        justify={"center"}
        align={"center"}
        gap={"medium"}
        direction={["column", "row", "row"]}
        row
      >
        <KitchnIcon src={"/icon.svg"} alt={"Kitchn Icon"} h={75} w={"auto"} />
        <KitchnTypo src={"/typo.svg"} alt={"Kitchn Typo"} h={45} w={"auto"} />
      </Centered>
      <Container
        w={"100%"}
        gap={"small"}
        direction={["column", "column", "row"]}
        row
      >
        <Container
          flex={1}
          gap={"small"}
          direction={["column", "row", "row"]}
          row
        >
          <Card
            forwardedAs={Link}
            href={"https://kitchn.tonightpass.com/docs"}
            p={"small"}
            flex={1}
            br={"square"}
          >
            <Text size={"large"} weight={"bold"}>
              {"Docs\r"}
            </Text>
            <Text size={"small"} color={"light"} mt={"small"}>
              {
                "Find in-depth information about Kitchn components, hooks and more.\r"
              }
            </Text>
          </Card>

          <Card
            forwardedAs={Link}
            href={"https://discord.gg/VvvAkPqQ98"}
            p={"small"}
            flex={1}
            br={"square"}
          >
            <Text size={"large"} weight={"bold"}>
              {"Discuss\r"}
            </Text>
            <Text size={"small"} color={"light"} mt={"small"}>
              {
                "Join the community and ask questions, share ideas, and get help from\r"
              }
              {"experts.\r"}
            </Text>
          </Card>
        </Container>

        <Container
          flex={1}
          gap={"small"}
          direction={["column", "row", "row"]}
          row
        >
          <Card
            forwardedAs={Link}
            href={"https://patreon.com/onruntime"}
            p={"small"}
            flex={1}
            br={"square"}
          >
            <Text size={"large"} weight={"bold"}>
              {"Sponsor us\r"}
            </Text>
            <Text size={"small"} color={"light"} mt={"small"}>
              {"Help us build Kitchn and support the open-source community.\r"}
            </Text>
          </Card>

          <Card
            forwardedAs={Link}
            href={
              "https://vercel.com/new/git/external?repository-url=https://github.com/tonightpass/kitchn/tree/master/examples/next-pages&project-name=kitchn-app&repository-name=kitchn-app"
            }
            p={"small"}
            flex={1}
            br={"square"}
          >
            <Text size={"large"} weight={"bold"}>
              {"Deploy\r"}
            </Text>
            <Text size={"small"} color={"light"} mt={"small"}>
              {
                "Instantly deploy your Next.js site to a shareable URL with Vercel.\r"
              }
            </Text>
          </Card>
        </Container>
      </Container>
    </Container>
  );
}

const Card = kitchn(Container)`
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  }
`;

const Centered = kitchn(Container)`
  position: relative;

  &::before, &::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  &::before {
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.3)}
    );
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  &::after {
    background: radial-gradient(
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.4)}, 
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)}
    );
    width: 240px;
    height: 180px;
    z-index: -1;
  }
`;

const TonightPassLogo = kitchn(Image)`
  filter: brightness(0);
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;

const KitchnTypo = kitchn(Image)`
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;

const KitchnIcon = kitchn(Image)`
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;
