import React, { useState, useRef } from "react";
import styled from "styled-components";

const NewPoll = () => {
  const candidate1Name = useRef();
  const candidate1Url = useRef();
  const candidate2Name = useRef();
  const candidate2Url = useRef();

  // var obj = {};
  // const [Ename, setName] = useState("");
  // const [url, seturl] = useState("");

  // function addItemToArray(obj) {
  //   var existingEntries = JSON.parse(localStorage.getItem("Election"));
  //   if (existingEntries == null) existingEntries = [];
  //   existingEntries.push(obj);
  //   localStorage.clear("Election");
  //   localStorage.setItem("Election", JSON.stringify(existingEntries));
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   obj["Name"] = Ename;
  //   obj["image_url"] = `${url}`;
  //   addItemToArray(obj);
  // };

  // const sendToBlockChain = async () => {
  //   changeDisable(true);
  //   await window.contract.addUrl({
  //     name: candidateName1.current.value,
  //     url: candidateName1URL.current.value,
  //   });

  //   await window.contract.addUrl({
  //     name: candidateName2.current.value,
  //     url: candidateName2URL.current.value,
  //   });

  //   await window.contract.addCandidatePair({
  //     prompt: promptRef.current.value,
  //     name1: candidateName1.current.value,
  //     name2: candidateName2.current.value,
  //   });

  //   await window.contract.addToPromptArray({ prompt: promptRef.current.value });

  //   alert("Back to Home Page");
  // };

  return (
    <Container>
      <Election>
        <Form>
          <Labeldiv>
            <Label htmlfor="name">Name of the Party 1 </Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="text"
              ref={candidate1Name}
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
              ref={candidate1Url}
              placeholder="URL"
              name="partyurl"
            />
          </Inputdiv>

          <Labeldiv>
            <Label htmlfor="name">Name of the Party 2 </Label>
          </Labeldiv>
          <Inputdiv>
            <Input
              type="text"
              ref={candidate2Name}
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
              ref={candidate2Url}
              placeholder="URL"
              name="partyurl"
            />
          </Inputdiv>
          <Submit>Add Party</Submit>
        </Form>
      </Election>
    </Container>
  );
};

export default NewPoll;

const Container = styled.div`
  color: white;

  margin-top: 95px;
`;

const Election = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid silver;
  transform: translate(0, 50%);
  border-radius: 10px;
`;
const Form = styled.form`
  padding: 10px;
  display: inline-block;
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
`;

const Submit = styled.button`
  padding: 10px;
  border-radius: 10px;

  border: none;
  cursor: pointer;
  width: 180px;
  background-color: blueviolet;
`;
