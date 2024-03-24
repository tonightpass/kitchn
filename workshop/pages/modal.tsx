import { Button, Container, Modal, Text, useModal } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const ModalPage: NextPage = () => {
  const [active1, open1, close1] = useModal();
  const [active2, open2, close2] = useModal();
  const [active3, open3, close3] = useModal();
  const [active4, open4, close4] = useModal();

  const submit = React.useCallback(() => {
    alert("You submitted the modal!");
    close3();
  }, [close3]);

  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Text>{"default"}</Text>
        <Button size={"normal"} onClick={open1}>
          {"Open Modal\r"}
        </Button>
        <Modal.Modal active={active1} onClickOutside={close1}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>{"Create Token"}</Modal.Title>
              <Modal.Subtitle>
                {
                  "Enter a unique name for your token to differentiate it from other tokens and then select the scope."
                }
              </Modal.Subtitle>
            </Modal.Header>

            <Text>{"Some content contained within the modal."}</Text>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Action onClick={close1} type={"dark"}>
              {"Cancel"}
            </Modal.Action>

            <Modal.Action onClick={close1} type={"light"}>
              {"Submit"}
            </Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
      <Container>
        <Text>{"disabled actions"}</Text>
        <Button size={"normal"} onClick={open2}>
          {"Open Modal (with disabled actions)\r"}
        </Button>
        <Modal.Modal active={active2} onClickOutside={close2}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>{"Modal"}</Modal.Title>
              <Modal.Subtitle>{"This is a modal."}</Modal.Subtitle>
            </Modal.Header>

            <Text>{"Some content contained within the modal."}</Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close2} type={"dark"}>
              {"Cancel"}
            </Modal.Action>

            <Modal.Action onClick={close2} type={"light"} disabled>
              {"Submit\r"}
            </Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
      <Container>
        <Text>{"callback"}</Text>
        <Button size={"normal"} onClick={open3}>
          {"Open Modal (with callback)\r"}
        </Button>
        <Modal.Modal
          active={active3}
          onClickOutside={close3}
          onEnterKeyPress={submit}
        >
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>{"Modal"}</Modal.Title>
              <Modal.Subtitle>{"This is a modal."}</Modal.Subtitle>
            </Modal.Header>

            <Text>{"Some content contained within the modal."}</Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action type={"dark"} onClick={close3}>
              {"Cancel"}
            </Modal.Action>

            <Modal.Action type={"light"} onClick={submit}>
              {"Submit"}
            </Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>

      <Container>
        <Text>{"inset"}</Text>
        <Button size={"normal"} onClick={open4}>
          {"Open Modal (with inset)\r"}
        </Button>
        <Modal.Modal active={active4} onClickOutside={close4}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>{"Modal"}</Modal.Title>
              <Modal.Subtitle>{"This is a modal."}</Modal.Subtitle>
            </Modal.Header>

            <Modal.Inset>
              <Text>{"Content within the inset."}</Text>
            </Modal.Inset>

            <Text
              style={{
                marginTop: 20,
              }}
            >
              {"Content outside the inset.\r"}
            </Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close4} type={"dark"}>
              {"Cancel"}
            </Modal.Action>

            <Modal.Action onClick={close4} type={"light"}>
              {"Submit"}
            </Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
    </Container>
  );
};

export default ModalPage;
