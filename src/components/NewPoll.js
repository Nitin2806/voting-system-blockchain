import React, { useState, useRef } from "react";
import styled from "styled-components";

const NewPoll = () => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();
  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();

  const formRef = useRef();

  const [disableButton, changeDisable] = useState(false);

  const sendToBlockChain = async (e) => {
    changeDisable(true);
    e.preventDefault();

    await window.contract.addUrl({
      name: candidateName1.current.value,
      url: candidateName1URL.current.value,
    });

    await window.contract.addUrl({
      name: candidateName2.current.value,
      url: candidateName2URL.current.value,
    });

    await window.contract.addCandidatePair({
      prompt: promptRef.current.value,
      name1: candidateName1.current.value,
      name2: candidateName2.current.value,
    });

    await window.contract.addToPromptArray({
      prompt: promptRef.current.value,
    });

    if (formRef.current) formRef.current.reset();

    changeDisable(false);
    alert("head back to home page");
  };

  return (
    <Container>
      <Election>
        <Form onSubmit={sendToBlockChain} ref={formRef}>
          <Row>
            <Labeldiv>
              <Label htmlfor="name">Name :</Label>
            </Labeldiv>
            <Inputdiv>
              <Input
                type="text"
                ref={candidateName1}
                placeholder="Name"
                name="partyname"
              />
            </Inputdiv>
          </Row>
          <Row>
            <Labeldiv>
              <Label htmlfor="url">Image URL : </Label>
            </Labeldiv>
            <Inputdiv>
              <Input
                type="url"
                ref={candidateName1URL}
                placeholder="URL(.jpg / .png)"
                name="partyurl"
              />
            </Inputdiv>
          </Row>
          <Row>
            <Labeldiv>
              <Label htmlfor="name">Name :</Label>
            </Labeldiv>
            <Inputdiv>
              <Input
                type="text"
                ref={candidateName2}
                placeholder="Name"
                name="partyname"
              />
            </Inputdiv>
          </Row>
          <Row>
            <Labeldiv>
              <Label htmlfor="url">Image URL</Label>
            </Labeldiv>
            <Inputdiv>
              <Input
                type="url"
                ref={candidateName2URL}
                placeholder="URL(.jpg / .png)"
                name="partyurl"
              />
            </Inputdiv>
          </Row>
          <Row>
            <Labeldiv>
              <Label htmlfor="url">Prompt</Label>
            </Labeldiv>
            <Inputdiv>
              <Input
                type="text"
                ref={promptRef}
                placeholder="Election Name"
                name="election"
              />
            </Inputdiv>
          </Row>
          <Row>
            <Submit type="submit" disabled={disableButton}>
              {disableButton ? "Submitting" : "Add"}
            </Submit>
          </Row>
        </Form>
      </Election>
    </Container>
  );
};

export default NewPoll;

const Container = styled.div`
  color: white;
  margin-top: 95px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 724px) {
    margin-top: 0;
  }
`;

const Election = styled.div`
  margin: auto;
  width: 60%;
  padding: 10px;
  border: 1px solid silver;
  transform: translate(0, 50%);
  border-radius: 10px;
  @media (max-width: 724px) {
    margin-top: -200px;
  }
`;

const Row = styled.div`
  content: "";
  display: table;
  width: 100%;
  clear: both;
`;

const Form = styled.form`
  @media (max-width: 724px) {
  }
`;

const Labeldiv = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Label = styled.label`
  font-size: 20px;
  padding: 12px 12px 12px 0;
  display: inline-block;
  @media (max-width: 724px) {
    font-size: 14px;
  }
`;
const Inputdiv = styled.div`
  float: left;
  width: 55%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  @media (max-width: 724px) {
  }
`;

const Submit = styled.button`
  background-color: blueviolet;
  color: white;
  margin-top: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  @media (max-width: 724px) {
  }
`;
