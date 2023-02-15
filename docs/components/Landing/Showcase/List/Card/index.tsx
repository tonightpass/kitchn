import kitchen, { Image, themes } from "@tonightpass/kitchen";
import { Showcase } from "types/showcase";

export type ShowcaseCardProps = {
  name: Showcase["name"];
  thumbnail: Showcase["thumbnail"];
};

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  name,
  thumbnail,
  ...props
}: ShowcaseCardProps) => {
  return (
    <Container title={name} {...props}>
      <ThumbnailImage
        src={`/static/images/showcases/thumbnails/${thumbnail}`}
        alt={name}
        height={50}
        width={150}
      />
    </Container>
  );
};

const ThumbnailImage = kitchen(Image)`
  opacity: 0.3;
  width: 60%;
  height: 100%;
  max-height: 24px;
  transition: all 1s;
  filter: ${({ theme }) =>
    theme.id === themes.light.id && "grayscale(0) brightness(0) invert(0)"};
`;

const Container = kitchen.div`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  border-radius: 10px;
  width: 160px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  :hover {
    transform: scale(1.05);
    ${ThumbnailImage} {
      opacity: 1;
    }
  }
`;

export default ShowcaseCard;
