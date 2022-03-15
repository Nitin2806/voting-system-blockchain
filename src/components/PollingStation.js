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

  const addVote = async (index) => {
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
          {buttonStatus ? (
            <VotedMessage>You have Already voted</VotedMessage>
          ) : (
            <Message>Click to Vote</Message>
          )}

          <Card key={candidate1Votes}>
            <Button disabled={buttonStatus} onClick={() => addVote(0)}>
              <Image src={candidate1URL} />
            </Button>
          </Card>
          {showresults ? <Votes>{candidate1Votes}</Votes> : null}
        </Containerone>

        <ContainerTwo>
          {buttonStatus ? (
            <VotedMessage>You have Already voted</VotedMessage>
          ) : (
            <Message>Click to Vote</Message>
          )}

          <Card key={candidate2URL}>
            <Button disabled={buttonStatus} onClick={() => addVote(1)}>
              <Image src={candidate2URL} />
            </Button>
          </Card>

          {showresults ? <Votes>{candidate2Votes}</Votes> : null}
        </ContainerTwo>
      </Body>
      {buttonStatus ? <Voted>Thank you for Voting</Voted> : null}
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
  text-align: center;
  font-size: 30px;
  border-radius: 10px;
  border: 2px solid silver;
  background-color: red;
  position: absolute;
  margin: 180px 0px 0px 120px;
`;
const VotedMessage = styled.div`
  display: none;
  text-align: center;
  font-size: 30px;
  border-radius: 10px;
  border: 2px solid silver;
  background-color: red;
  position: absolute;
  margin: 180px 0px 0px 40px;
`;

const Containerone = styled.div`
  cursor: pointer;

  &:hover {
    ${VotedMessage} {
      display: inline-block;
    }
    ${Message} {
      display: inline-block;
    }
  }
`;
const ContainerTwo = styled.div`
  cursor: pointer;

  &:hover {
    ${VotedMessage} {
      display: inline-block;
    }
    ${Message} {
      display: inline-block;
    }
  }
`;

const Card = styled.div`
  position: relative;
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
  z-index: -1;
`;

const Votes = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: center;
  font-size: 15px;
  padding: 10px;
  border-radius: 7px;
  background-color: gray;
`;
const Voted = styled.h2`
  text-align: center;
`;

{
  /* <ButtonContainer>
            <Button disabled={buttonStatus} onClick={() => addVote(1)}>
              Vote
            </Button>
          </ButtonContainer> */
}
