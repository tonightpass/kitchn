import {
  capitalize,
  Container,
  createTheme,
  DefaultTheme,
  Input,
  Text,
  useTheme,
} from "kitchn";

export type BuilderProps = {
  workspace: keyof DefaultTheme;
};

const Builder: React.FC<BuilderProps> = ({ workspace }: BuilderProps) => {
  const { theme, setThemeStyle } = useTheme();

  const renderFields = (object: object, parentKey = "", depth = 0) => {
    return Object.keys(object).map((key) => {
      const nestedKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof object[key] === "object") {
        const Tag = `h${Math.min(6, depth + 3)}` as keyof JSX.IntrinsicElements;
        return (
          <Container gap={"small"} key={nestedKey}>
            <Tag
              className={
                "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-8 nx-text-2xl"
              }
            >
              {capitalize(key)}
              <a
                href={`#${nestedKey}`}
                id={nestedKey}
                className={"subheading-anchor"}
                aria-label={"Permalink for this section"}
              />
            </Tag>
            <Container bw={1} mt={"small"} br={"square"} overflow={"hidden"}>
              {renderFields(object[key], nestedKey, depth + 1)}
            </Container>
          </Container>
        );
      }

      if (workspace === "colors") {
        let textColor = "lightest";
        let textAccent = undefined;
        if (
          nestedKey.includes("layout.light") ||
          nestedKey.includes("text.light")
        ) {
          textColor = "darkest";
        }
        if (nestedKey.includes("accent")) {
          textColor = undefined;
          textAccent = "light";
        }
        if (nestedKey.includes("accent.light")) {
          textColor = undefined;
          textAccent = "dark";
        }
        return (
          <Container
            key={nestedKey}
            gap={"tiny"}
            bg={object[key]}
            h={150}
            p={"normal"}
            justify={"space-between"}
          >
            <Text
              size={"title"}
              weight={"black"}
              color={textColor}
              accent={textAccent}
            >
              {capitalize(key)}
            </Text>

            <Container gap={"tiny"}>
              <Text size={"small"} color={textColor} accent={textAccent}>
                {object[key]}
              </Text>
            </Container>
          </Container>
        );
      }

      return (
        <Container key={nestedKey} gap={"tiny"}>
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

  return <Container mt={"normal"}>{renderFields(theme[workspace])}</Container>;
};

export default Builder;
