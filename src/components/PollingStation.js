import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PollingStation = () => {
  const [candidate1URL, changeCandidate1Url] = useState();
  const [candidate2URL, changeCandidate2Url] = useState();
  const [showresults, changeResultsDisplay] = useState(false);
  const [buttonStatus, changeButtonStatus] = useState(false);
  const [candidate1Votes, changeVote1] = useState("--");
  const [candidate2Votes, changeVote2] = useState("--");
  const [prompt, changePrompt] = useState("--");

  useEffect(() => {
    const getInfo = async () => {
      // vote count stuff
      let voteCount = await window.contract.getVotes({
        prompt: localStorage.getItem("prompt"),
      });
      changeVote1(voteCount[0]);
      changeVote2(voteCount[1]);

      // image stuff

      changeCandidate1Url(
        await window.contract.getUrl({
          name: localStorage.getItem("Candidate1"),
        })
      );
      changeCandidate2Url(
        await window.contract.getUrl({
          name: localStorage.getItem("Candidate2"),
        })
      );

      changePrompt(localStorage.getItem("prompt"));

      // vote checking stuff

      let didUserVote = await window.contract.didParticipate({
        prompt: localStorage.getItem("prompt"),
        user: window.accountId,
      });

      changeResultsDisplay(didUserVote);
      changeButtonStatus(didUserVote);
    };

    getInfo();
  }, []);
  let count = 0;

  const addVote = async (index) => {
    if (count === 1) {
      alert("You can only vote for once");
      changeResultsDisplay(true);
    }
    count = 1;
    changeButtonStatus(true);
    await window.contract.addVote({
      prompt: localStorage.getItem("prompt"),
      index: index,
    });

    await window.contract.recordUser({
      prompt: localStorage.getItem("prompt"),
      user: window.accountId,
    });

    let voteCount = await window.contract.getVotes({
      prompt: localStorage.getItem("prompt"),
    });
    changeVote1(voteCount[0]);
    changeVote2(voteCount[1]);
    changeResultsDisplay(true);
  };

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(JSON.parse(localStorage.getItem("Election")));
  }, []);

  return (
    <Container>
      <Header>
        <h2>Welcome to BlockChain Voting Portal</h2>
      </Header>
      <Body>
        <Containerone>
          <Hovermessage>
            <Card onClick={() => addVote(0)} key={candidate1Votes}>
              <Image src={candidate1URL} />
            </Card>
            <Message>Click to vote</Message>
          </Hovermessage>

          {showresults ? <Votes>{candidate1Votes}</Votes> : null}
          {/* <ButtonContainer>
            <Button disabled={buttonStatus} onClick={() => addVote(0)}>
              Vote
            </Button>
          </ButtonContainer> */}
        </Containerone>
        <ContainerTwo>
          <Hovermessage>
            <Card onClick={() => addVote(1)} key={candidate2URL}>
              <Image src={candidate2URL} />
            </Card>
            <Message>Click to vote</Message>
          </Hovermessage>

          {showresults ? <Votes>{candidate2Votes}</Votes> : null}

          {/* <ButtonContainer>
            <Button disabled={buttonStatus} onClick={() => addVote(1)}>
              Vote
            </Button>
          </ButtonContainer> */}
        </ContainerTwo>
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
const Message = styled.div`
  display: none;
`;
const Hovermessage = styled.div`
  :hover {
    opacity: 0.6;
    ${Message} {
      display: inline-block;
      display: flex;

      justify-content: center;
    }
  }
`;

const Card = styled.div`
  width: 380px;
  height: 400px;
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
const Button = styled.button``;
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
const ButtonContainer = styled.div``;
const Containerone = styled.div``;
const ContainerTwo = styled.div``;

const Votes = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: center;
  font-size: 15px;
  padding: 10px;
  border-radius: 7px;
  background-color: gray;
`;
{
  /* <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png" />
        </Card>

        <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png"></Image>
        </Card>
        <Card>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Aam_Aadmi_Party_logo_%28English%29.svg/1200px-Aam_Aadmi_Party_logo_%28English%29.svg.png"></Image>
        </Card> */
}
