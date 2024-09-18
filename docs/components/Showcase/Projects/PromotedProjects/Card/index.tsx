import {
  Container,
  ContainerProps,
  Icon,
  Image,
  KitchnComponent,
  Link,
  ScaleProps,
  Text,
} from "kitchn";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import { SortedProject } from "types/showcase";

export type CardProps = KitchnComponent<
  {
    project: SortedProject;
  },
  ContainerProps & ScaleProps
>;

const Card: React.FC<CardProps> = ({ project, ...props }: CardProps) => {
  return (
    <Container
      flex={1}
      br={"square"}
      overflow={"hidden"}
      bw={1}
      pos={"relative"}
      justify={"flex-end"}
      {...props}
    >
      <Image
        src={project.src}
        alt={project.title}
        w={"100%"}
        h={"100%"}
        htmlWidth={1280}
        htmlHeight={720}
        objectFit={"cover"}
      />
      <Container p={"normal"} gap={"normal"} justify={"space-between"} row>
        <Text weight={"bold"} size={"large"} h3>
          {project.title}
        </Text>
        <Container gap={"small"} row align={"center"}>
          {project.repo && (
            <Link href={project.repo}>
              <Icon icon={RiGithubFill} size={"medium"} />
            </Link>
          )}

          <Link href={project.url}>
            <Icon icon={RiExternalLinkFill} size={"medium"} />
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;
