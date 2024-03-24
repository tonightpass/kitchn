import showcases from "data/showcases";
import kitchn, { Container, Text, Link } from "kitchn";

import ShowcaseCard from "./Card";

const ShowcaseList = () => {
  return (
    <Container row gap={"small"} mt={"large"} h={64} flex={"auto"}>
      {showcases.map(({ name, thumbnail }, i) => (
        <ShowcaseCard key={i} name={name} thumbnail={thumbnail} />
      ))}
      <YourCompany href={"https://github.com/tonightpass/kitchn/issues/new"}>
        <Text title={"Your company"} weight={"bold"} align={"center"} span>
          {"💖 Your company\r"}
        </Text>
      </YourCompany>
    </Container>
  );
};

const YourCompany = kitchn(Link)`
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  ${Text} {
    opacity: 0.3;
    transition: all 1s;
  }

  &:hover {
    transform: scale(1.05);
    ${Text} {
      opacity: 1;
    }
  }
`;

export default ShowcaseList;
