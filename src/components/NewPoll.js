import React, { useState, useRef } from "react";
import styled from "styled-components";

const NewPoll = () => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();
  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [disableButton, changeDisable] = useState(false);

  const sendToBlockChain = async (e) => {
    changeDisable(true);
    e.preventDefault();
    console.log(candidateName1);
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

    await window.contract.addToPromptArray({ prompt: promptRef.current.value });

    if (formRef.current) formRef.current.reset();

    changeDisable(false);
    alert("head back to home page");
  };

  return (
    <Container>
      <Election>
        <Form onSubmit={sendToBlockChain} ref={formRef}>
          <Labeldiv>
            <Label htmlfor="name">Name of the Party</Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="text"
              ref={candidateName1}
              placeholder="Party Name"
              name="partyname"
            />
          </Inputdiv>
          <Labeldiv>
            <Label htmlfor="url">Image URL</Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="url"
              ref={candidateName1URL}
              placeholder="URL"
              name="partyurl"
            />
          </Inputdiv>
          <Labeldiv>
            <Label htmlfor="name">Name of the Party</Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="text"
              ref={candidateName2}
              placeholder="Party Name"
              name="partyname"
            />
          </Inputdiv>{" "}
          <Labeldiv>
            <Label htmlfor="url">Image URL</Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="url"
              ref={candidateName2URL}
              placeholder="URL"
              name="partyurl"
            />
          </Inputdiv>
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
          <Submit type="submit" disabled={disableButton}>
            {disableButton ? "Submitting" : "Add"}
          </Submit>
        </Form>
      </Election>
    </Container>
  );
};

export default NewPoll;

const Container = styled.div`
  color: white;
  margin-top: 95px;
  @media (max-width: 724px) {
    margin-top: 0;
  }
`;

const Election = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid silver;
  transform: translate(0, 50%);
  border-radius: 10px;
  @media (max-width: 724px) {
  }
`;
const Form = styled.form`
  padding: 10px;
  display: inline-block;
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
  display: inline-block;
  @media (max-width: 724px) {
    font-size: 15px;
  }
`;
const Inputdiv = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 10px;
  @media (max-width: 724px) {
  }
`;

const Submit = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 180px;
  background-color: blueviolet;
  @media (max-width: 724px) {
  }
`;
