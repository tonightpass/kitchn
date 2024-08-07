import kitchn from "kitchn";
import { Company, SortedProject } from "types/showcase";

export type ShowcaseCardProps = {
  company: Company | SortedProject["owner"];
};

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  company,
}: ShowcaseCardProps) => {
  const { logo: Logo } = company;

  return (
    <Container>
      <Logo />
    </Container>
  );
};

const Container = kitchn.span`
  position: relative;
  height: 2rem;
  margin: 0 1rem;
  bottom: 0;
  opacity: 0.8;
  transition: opacity 125ms ease-in-out;

  .dark & {
    filter: brightness(0) invert(1);
  }

  svg {
    height: 100%;
    max-width: 128px;
  }

  &:hover {
    opacity: 1;
  }
`;

export default ShowcaseCard;
