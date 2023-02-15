import kitchen, { Container, Link, Text } from "@tonightpass/kitchen";
import showcases from "data/showcases";
import ShowcaseCard from "./Card";

const ShowcaseList = () => {
  return (
    <Container row gap={"small"} mt={"large"} h={64} flex={"auto"}>
      {showcases.map(({ name, thumbnail }, i) => (
        <ShowcaseCard key={i} name={name} thumbnail={thumbnail} />
      ))}
      <YourCompany href={"https://github.com/tonightpass/kitchen/issues/new"}>
        <Text title={"Your company"} weight={"bold"} align={"center"} span>
          💖 Your company
        </Text>
      </YourCompany>
    </Container>
  );
};

const YourCompany = kitchen(Link)`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  border-radius: 10px;
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

  :hover {
    transform: scale(1.05);
    ${Text} {
      opacity: 1;
    }
  }
`;

export default ShowcaseList;
