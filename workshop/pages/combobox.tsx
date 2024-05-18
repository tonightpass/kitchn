import {
  Combobox,
  ComboboxSearching,
  ComboboxEmpty,
  Text,
  Container,
  ComboboxOptions,
} from "kitchn";
import { NextPage } from "next";
import React from "react";

const ComboboxPage: NextPage = () => {
  const options = [
    { label: "London", value: "london" },
    { label: "Sydney", value: "sydney" },
    { label: "Shanghai", value: "shanghai" },
  ];

  const [options1, setOptions1] = React.useState<ComboboxOptions>();
  const searchHandler1 = (currentValue) => {
    if (!currentValue) return setOptions1([]);
    const relatedOptions = options.filter((item) =>
      item.value.includes(currentValue),
    );
    setOptions1(relatedOptions);
  };

  const [options2, setOptions2] = React.useState<ComboboxOptions>();
  const [searching1, setSearching1] = React.useState<boolean>(false);
  const timer = React.useRef<NodeJS.Timeout>();
  // triggered every time input
  const searchHandler2 = (currentValue) => {
    if (!currentValue) return setOptions2([]);
    setSearching1(true);
    const relatedOptions = options.filter((item) =>
      item.value.includes(currentValue),
    );
    // this is mock async request
    // you can get data in any way

    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setOptions2(relatedOptions);
      setSearching1(false);
      clearTimeout(timer.current);
    }, 1000);
  };

  return (
    <Container gap={"small"} maxWidth={700} margin={"0 auto"}>
      <Text>{"default"}</Text>
      <Container gap={10}>
        <Combobox placeholder={"Enter here"} options={options} />
      </Container>

      <Text>{"disabled"}</Text>
      <Container gap={10}>
        <Combobox disabled initialValue={"London"} options={options} />
      </Container>

      <Text>{"only allow selected"}</Text>
      <Container gap={10}>
        <Combobox disableFreeSolo options={options} initialValue={"sydney"} />
      </Container>

      <Text>{"search"}</Text>
      <Container gap={10}>
        <Combobox
          options={options1}
          placeholder={"Enter here"}
          onSearch={searchHandler1}
        />
      </Container>

      <Text>{"waiting in search"}</Text>
      <Container gap={10}>
        <Combobox
          searching={searching1}
          options={options2}
          placeholder={"Enter here"}
          onSearch={searchHandler2}
        />
      </Container>

      <Text>{"label"}</Text>
      <Container gap={10}>
        <Combobox options={labelOptions} placeholder={"Enter here"} />
      </Container>

      <Text>{"custom searching text"}</Text>
      <Container gap={10}>
        <Combobox searching placeholder={"Enter here"}>
          <ComboboxSearching>
            <span style={{ color: "red" }}>{"waiting..."}</span>
          </ComboboxSearching>
        </Combobox>
      </Container>

      <Text>{"custom no result"}</Text>
      <Container gap={10}>
        <Combobox options={[]} placeholder={"Enter here"}>
          <ComboboxEmpty>
            <span style={{ color: "red" }}>{"no result"}</span>
          </ComboboxEmpty>
        </Combobox>
      </Container>

      <Text>{"clearable"}</Text>
      <Container gap={10}>
        <Combobox clearable options={options} placeholder={"Enter here"} />
      </Container>
    </Container>
  );
};

export default ComboboxPage;
