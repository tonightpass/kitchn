import kitchn, { Container, keyframes } from "kitchn";
import React from "react";
import { Company } from "types/showcase";

import ShowcaseCard from "./Card";

const getSlide = (childIndex: number, reverse?: boolean) => keyframes`
  from {
    transform: translateX(${childIndex * 100}%);
  }
  to {
    transform: translateX(${(reverse ? -100 : 100) + 100 * childIndex}%);
  }
`;

export type ShowcaseListProps = {
  companies: Company[];
  reverse?: boolean;
};

const ShowcaseList: React.FC<ShowcaseListProps> = ({
  companies,
  reverse = false,
}: ShowcaseListProps) => {
  const [animationPaused, setAnimationPaused] = React.useState(false);

  companies =
    companies.length < 10
      ? Array.from(
          { length: 10 },
          (_, index) => companies[index % companies.length],
        )
      : companies;

  const toggleAnimation = () => {
    setAnimationPaused((prevState) => !prevState);
  };

  return (
    <Container align={"center"} h={80} pos={"relative"} overflow={"hidden"} row>
      <CompaniesSlider
        $offset={-1}
        $reverse={reverse}
        onClick={toggleAnimation}
        style={{ animationPlayState: animationPaused ? "paused" : "running" }}
      >
        <Container wrap={"nowrap"} overflow={"hidden"} py={"small"}>
          {companies.map((company, index) => (
            <ShowcaseCard key={index} company={company} />
          ))}
        </Container>
      </CompaniesSlider>
      <CompaniesSlider
        $offset={0}
        $reverse={reverse}
        onClick={toggleAnimation}
        style={{ animationPlayState: animationPaused ? "paused" : "running" }}
      >
        <Container wrap={"nowrap"} overflow={"hidden"} py={"small"}>
          {companies.map((company, index) => (
            <ShowcaseCard key={index} company={company} />
          ))}
        </Container>
      </CompaniesSlider>
      <CompaniesSlider
        $offset={1}
        $reverse={reverse}
        onClick={toggleAnimation}
        style={{ animationPlayState: animationPaused ? "paused" : "running" }}
      >
        <Container wrap={"nowrap"} overflow={"hidden"} py={"small"}>
          {companies.map((company, index) => (
            <ShowcaseCard key={index} company={company} />
          ))}
        </Container>
      </CompaniesSlider>
    </Container>
  );
};

const CompaniesSlider = kitchn.span<{ $offset?: number; $reverse?: boolean }>`
  display: inline-block;
  animation: ${({ $offset, $reverse }) => getSlide($offset || 0, $reverse)} 150s
    linear infinite;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  
  ${Container} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row" : "row-reverse")};
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

export default ShowcaseList;
