import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = ({ changeCandidates }) => {
  const [promptList, changePromptList] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      changePromptList(await window.contract.getAllPrompts());
      // console.log(await window.contract.getAllPrompts());
    };
    getPrompts();
  }, []);
  const navigate = useNavigate();

  const handleClick = (el) => {
    if (el === "Vote") {
      navigate("/pollingstation");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    changeCandidates();
  }, [changeCandidates]);

  const deletecolumn = async (prompt) => {
    console.log(prompt);
    await window.contract.deletePrompt({ prompt });
  };

  const clearAll = async () => {
    await window.contract.clearPromptArray();
  };
  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            <th>No.</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
            <DeleteAll
              onClick={() => {
                clearAll();
              }}
            >
              Delete
            </DeleteAll>
          </tr>
        </thead>
        <tbody>
          {promptList.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleClick(el);
                      changeCandidates(el);
                    }}
                  >
                    Click here
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      deletecolumn(el);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  color: white;
  margin-top: 95px;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const StyledTable = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  text-align: center;

  td,
  th {
    border: none;
    padding: 8px;
  }

  td {
  }

  tbody {
    width: 100%;
  }
  tbody tr {
    vertical-align: middle;

    :nth-of-type(odd) {
    }
    :hover {
    }
  }
  thead > tr {
    height: 50px;
    background-color: blueviolet;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
const DeleteMessage = styled.div`
  position: relative;
  display: none;
`;

const DeleteAll = styled.th`
  cursor: pointer;
  :hover {
    color: red;
  }
`;
