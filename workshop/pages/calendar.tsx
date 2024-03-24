import { Calendar, Container, DateRange, Text } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const CalendarPage: NextPage = () => {
  const [selected, setSelected] = React.useState<Date>();
  const [days, setDays] = React.useState<Date[] | undefined>();
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <Container mx={"auto"} py={"large"} gap={"small"} maxW={"laptop"}>
      <Container gap={"small"}>
        <Text>{"Single"}</Text>
        <Calendar mode={"single"} selected={selected} onSelect={setSelected} />
      </Container>

      <Container gap={"small"}>
        <Text>{"Multiple"}</Text>
        <Calendar mode={"multiple"} selected={days} onSelect={setDays} />
      </Container>

      <Container gap={"small"}>
        <Text>{"Range"}</Text>
        <Calendar mode={"range"} selected={range} onSelect={setRange} />
      </Container>
    </Container>
  );
};

export default CalendarPage;
