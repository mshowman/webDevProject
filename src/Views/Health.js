import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container";

const FieldSet = styled.fieldset`
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  height: auto;
  background-color: ${props => props.color};
`;

const Legend = styled.legend`
  background-color: white;
  border: 1px solid black;
  padding: 5px;
`;

const Cell = styled.div`
  flex: 45%;
  margin: 15px;
`;

const Row = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const Label = styled.label`
  width: 100px;
  margin: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 5px;
`;

const Select = styled.select`
  width: 100%;
  height: ${props => (props.box ? "100%" : "auto")};
  margin: 5px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  margin: 5px;
`;

const SaveButton = styled(Button)`
  width: auto;
  height: auto;
  margin: 5px 5px 5px 30px;
`;

const Health = ({ members }) => {
  const [member, setMember] = useState(0);
  const [name, setName] = useState(members[0].name);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [happy, setHappy] = useState([]);
  const [meh, setMeh] = useState([]);
  const [sad, setSad] = useState([]);
  let iter = 0;
  const memberList = members;

  function clearFields() {
    setMember(0);
    setName(memberList[0].name);
    setFeedback("");
    setScore(0);
  }

  return (
    <Container>
      <FieldSet color="lightgreen">
        <Legend>Happy</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select
              onChange={e => {
                setMember(e.target.key);
                setName(e.target.value);
              }}
              value={memberList[member]}
            >
              {memberList.map(m => (
                <option key={m.id} name={m.name}>
                  {m.name}
                </option>
              ))}
            </Select>
            <Label>Feedback:</Label>
            <TextArea
              onChange={e => setFeedback(e.target.value)}
              value={feedback}
            />
            <Button
              onClick={() => {
                if (score > 0) setScore(score - 1);
              }}
            >
              -
            </Button>
            <Label>{score}</Label>
            <Button
              onClick={() => {
                if (score < memberList.length) setScore(score + 1);
              }}
            >
              +
            </Button>
            <SaveButton
              onClick={() => {
                setHappy([
                  ...happy,
                  {
                    name: name,
                    feedback: feedback,
                    score: score
                  }
                ]);
                clearFields();
              }}
            >
              Save Feedback
            </SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              {happy.map(m => (
                <option key={++iter}>
                  {m.name + ": " + m.score + " - " + m.feedback}
                </option>
              ))}
            </Select>
          </Cell>
        </Row>
      </FieldSet>
      <FieldSet color="lightyellow">
        <Legend>Meh</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select
              onChange={e => {
                setMember(e.target.key);
                setName(e.target.value);
              }}
              value={memberList[member]}
            >
              {memberList.map(m => (
                <option key={m.id} name={m.name}>
                  {m.name}
                </option>
              ))}
            </Select>
            <Label>Feedback:</Label>
            <TextArea
              onChange={e => setFeedback(e.target.value)}
              value={feedback}
            />
            <Button
              onClick={() => {
                if (score > 0) setScore(score - 1);
              }}
            >
              -
            </Button>
            <Label>{score}</Label>
            <Button
              onClick={() => {
                if (score < memberList.length) setScore(score + 1);
              }}
            >
              +
            </Button>
            <SaveButton
              onClick={() => {
                setMeh([
                  ...meh,
                  {
                    name: name,
                    feedback: feedback,
                    score: score
                  }
                ]);
                clearFields();
              }}
            >
              Save Feedback
            </SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              {meh.map(m => (
                <option key={++iter}>
                  {m.name + ": " + m.score + " - " + m.feedback}
                </option>
              ))}
            </Select>
          </Cell>
        </Row>
      </FieldSet>
      <FieldSet color="pink">
        <Legend>Sad</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select
              onChange={e => {
                setMember(e.target.key);
                setName(e.target.value);
              }}
              value={memberList[member]}
            >
              {memberList.map(m => (
                <option key={m.id} name={m.name}>
                  {m.name}
                </option>
              ))}
            </Select>
            <Label>Feedback:</Label>
            <TextArea
              onChange={e => setFeedback(e.target.value)}
              value={feedback}
            />
            <Button
              onClick={() => {
                if (score > 0) setScore(score - 1);
              }}
            >
              -
            </Button>
            <Label>{score}</Label>
            <Button
              onClick={() => {
                if (score < memberList.length) setScore(score + 1);
              }}
            >
              +
            </Button>
            <SaveButton
              onClick={() => {
                setSad([
                  ...sad,
                  {
                    name: name,
                    feedback: feedback,
                    score: score
                  }
                ]);
                clearFields();
              }}
            >
              Save Feedback
            </SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              {sad.map(m => (
                <option key={++iter}>
                  {m.name + ": " + m.score + " - " + m.feedback}
                </option>
              ))}
            </Select>
          </Cell>
        </Row>
      </FieldSet>
    </Container>
  );
};

export default Health;
