import React from "react";
import { Button, Container, Modal, Text, useModal } from "@tonightpass/kitchen";
import { NextPage } from "next";

const DrawerPage: NextPage = () => {
  const [active1, open1, close1] = useModal();
  const [active2, open2, close2] = useModal();
  const [active3, open3, close3] = useModal();
  const [active4, open4, close4] = useModal();

  const submit = React.useCallback(() => {
    alert("You submitted the modal!");
    close3();
  }, []);

  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Text>default</Text>
        <Button size={"medium"} onClick={open1}>
          Open Modal
        </Button>
        <Modal.Modal active={active1} onClickOutside={close1}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>Modal</Modal.Title>
              <Modal.Subtitle>This is a modal.</Modal.Subtitle>
            </Modal.Header>

            <Text>Some content contained within the modal.</Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close1}>Cancel</Modal.Action>

            <Modal.Action onClick={close1}>Submit</Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
      <Container>
        <Text>disabled actions</Text>
        <Button size={"medium"} onClick={open2}>
          Open Modal (with disabled actions)
        </Button>
        <Modal.Modal active={active2} onClickOutside={close2}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>Modal</Modal.Title>
              <Modal.Subtitle>This is a modal.</Modal.Subtitle>
            </Modal.Header>

            <Text>Some content contained within the modal.</Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close2}>Cancel</Modal.Action>

            <Modal.Action onClick={close2} disabled>
              Submit
            </Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
      <Container>
        <Text>callback</Text>
        <Button size={"medium"} onClick={open3}>
          Open Modal (with callback)
        </Button>
        <Modal.Modal
          active={active3}
          onClickOutside={close3}
          onEnterKeyPress={submit}
        >
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>Modal</Modal.Title>
              <Modal.Subtitle>This is a modal.</Modal.Subtitle>
            </Modal.Header>

            <Text>Some content contained within the modal.</Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close3}>Cancel</Modal.Action>

            <Modal.Action onClick={submit}>Submit</Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>

      <Container>
        <Text>inset</Text>
        <Button size={"medium"} onClick={open4}>
          Open Modal (with inset)
        </Button>
        <Modal.Modal active={active4} onClickOutside={close4}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>Modal</Modal.Title>
              <Modal.Subtitle>This is a modal.</Modal.Subtitle>
            </Modal.Header>

            <Modal.Inset>
              <Text>Content within the inset.</Text>
            </Modal.Inset>

            <Text
              style={{
                marginTop: 20,
              }}
            >
              Content outside the inset.
            </Text>
          </Modal.Body>

          <Modal.Actions>
            <Modal.Action onClick={close4}>Cancel</Modal.Action>

            <Modal.Action onClick={close4}>Submit</Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      </Container>
    </Container>
  );
};

export default DrawerPage;
