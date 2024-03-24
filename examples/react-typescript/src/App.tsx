import kitchn, {
  Container,
  convertRGBToRGBA,
  Image,
  KitchnProvider,
  Text,
  Link,
  rotate,
} from "kitchn";

import "kitchn/fonts.css";

export default function App() {
  return (
    <KitchnProvider>
      <Container
        maxW={"laptop"}
        mx={"auto"}
        p={"extraLarge"}
        h={"100vh"}
        justify={"space-between"}
        align={"center"}
      >
        <Container w={"100%"} align={"center"} justify={"space-between"} row>
          <Card p={"small"} br={"square"} align={"center"} active row>
            {"Get started by editing\r"}
            <Text ml={"tiny"} monospace span>
              {"src/App.tsx\r"}
            </Text>
          </Card>
          <Link href={"https://tonightpass.com"}>
            <Text weight={"semiBold"} size={"small"}>
              {"by\r"}
            </Text>
            <KitchnTypo
              src={"/tonightpass.svg"}
              alt={"TonightPass"}
              w={100}
              h={24}
              ml={"tiny"}
            />
          </Link>
        </Container>
        <Centered
          py={"extraLarge"}
          justify={"center"}
          align={"center"}
          gap={18}
          row
        >
          <KitchnIcon>
            <Image src={"/icon.svg"} alt={"Kitchn Icon"} h={50} />
          </KitchnIcon>
          <KitchnTypo src={"/typo.svg"} alt={"Kitchn Typo"} h={42} />
        </Centered>
        <Container w={"100%"} gap={"small"} row>
          <Card
            as={Link}
            href={"https://kitchn.tonightpass.com/docs"}
            p={"small"}
            flex={1}
            br={"square"}
          >
            <Text size={"large"} weight={"bold"}>
              {"Docs\r"}
            </Text>
            <Text size={"small"} color={"light"} mt={"small"}>
              {"Find in-depth information about Kitchn components, hooks and\r"}
              {"more.\r"}
            </Text>
          </Card>

          <Card
            as={Link}
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
                "Join the community and ask questions, share ideas, and get help\r"
              }
              {"from experts.\r"}
            </Text>
          </Card>

          <Card
            as={Link}
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
            as={Link}
            href={
              "https://vercel.com/new/git/external?repository-url=https://github.com/tonightpass/kitchn/tree/master/examples/react-typescript&project-name=kitchn-app&repository-name=kitchn-app"
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
                "Instantly deploy your Vite React site to a shareable URL with\r"
              }
              {"Vercel.\r"}
            </Text>
          </Card>
        </Container>
      </Container>
    </KitchnProvider>
  );
}

const Card = kitchn(Container)<{
  active?: boolean;
}>`
  border: 1px solid ${({ theme, active }) =>
    active ? theme.colors.layout.dark : "transparent"};
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

const KitchnTypo = kitchn(Image)`
  @media (prefers-color-scheme: dark) {
    filter: invert(1) hue-rotate(180deg) brightness(1) contrast(1);
  }
`;

const KitchnIcon = kitchn.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: ${({ theme }) => theme.radius.square};
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px ${({ theme }) =>
    convertRGBToRGBA(theme.colors.layout.lightest, 0.1)};

  &::before, &::after {
    content: '';
    position: absolute;
    z-index: -1;
  }

  &::before {
    animation: 6s ${rotate} linear infinite;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 1)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.6)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.5)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.4)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.3)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.3)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 1)}
    );
  }

  &::after {
    inset: 0;
    padding: 1px;
    border-radius: ${({ theme }) => theme.radius.square};
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.8)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.4)}
    );
    background-clip: content-box;
  }
`;
