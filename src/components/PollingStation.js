import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PollingStation = () => {
  const [showresults, changeResultsDisplay] = useState(false);
  const [buttonStatus, changeButtonStatus] = useState(false);
  const [candidate1Votes, changeVote1] = useState("--");
  const [candidate2Votes, changeVote2] = useState("--");
  const [prompt, changePrompt] = useState("--");

  // useEffect(() => {
  //   const getInfo = async () => {
  //     // vote count stuff
  //     let voteCount = await window.contract.getVotes({
  //       prompt: localStorage.getItem("prompt"),
  //     });
  //     changeVote1(voteCount[0]);
  //     changeVote2(voteCount[1]);

  //     // vote checking stuff

  //     let didUserVote = await window.contract.didParticipate({
  //       prompt: localStorage.getItem("prompt"),
  //       user: window.accountId,
  //     });

  //     changeResultsDisplay(didUserVote);
  //     changeButtonStatus(didUserVote);
  //   };

  //   getInfo();
  // }, []);
  // var existingEntries = JSON.parse(localStorage.getItem("Election"));

  return (
    <Container>
      {/* {existingEntries.map(({ Name, image_url }) => {
        console.log(image_url);
      })} */}
      <Header>
        <h2>Welcome to BlockChain Voting Portal</h2>
      </Header>
      <Body>
        <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png" />
        </Card>

        <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png"></Image>
        </Card>
        <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Aam_Aadmi_Party_logo_%28English%29.svg/1200px-Aam_Aadmi_Party_logo_%28English%29.svg.png"></Image>
        </Card>
      </Body>
    </Container>
  );
};        

export default PollingStation;

const Container = styled.div`
  color: white;
  margin-top: 95px;
  @media (max-width: 724px) {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  h2 {
    font-size: 40px;
  }
  @media (max-width: 724px) {
    h2 {
      font-size: 20px;
    }
  }
`;
const Body = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  user-select: none;

  @media (max-width: 724px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 380px;
  height: 450px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid silver;
  @media (max-width: 724px) {
    width: 200px;
    height: 200px;
    margin: auto;
  }
`;

// const PartyName = styled.div`
//   text-align: center;
//   font-size: 30px;
//   background-color: firebrick;
// `;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
`;
