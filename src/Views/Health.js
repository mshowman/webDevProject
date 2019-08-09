import React from "react";
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
  text-align: ${props => props.align};
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
  height: 32px;
  margin: 5px 5px 5px 30px;
`;

const Health = () => {
  return (
    <Container>
      <FieldSet color="lightgreen">
        <Legend align="left">Happy</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select>
              <option>this</option>
            </Select>
            <Label>Feedback:</Label>
            <TextArea></TextArea>
            <Button>-</Button>
            <Label>2</Label>
            <Button>+</Button>
            <SaveButton>Save Feedback</SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              <option>that</option>
            </Select>
          </Cell>
        </Row>
      </FieldSet>
      <FieldSet color="lightyellow">
        <Legend align="center">Meh</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select>
              <option>this</option>
            </Select>
            <Label>Feedback:</Label>
            <TextArea></TextArea>
            <Button>-</Button>
            <Label>2</Label>
            <Button>+</Button>
            <SaveButton>Save Feedback</SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              <option>that</option>
            </Select>
          </Cell>
        </Row>
      </FieldSet>
      <FieldSet color="pink">
        <Legend align="right">Sad</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select>
              <option>this</option>
            </Select>
            <Label>Feedback:</Label>
            <TextArea></TextArea>
            <Button>-</Button>
            <Label>2</Label>
            <Button>+</Button>
            <SaveButton>Save Feedback</SaveButton>
          </Cell>
          <Cell>
            <Select size="8" box>
              <option>that</option>
            </Select>
          </Cell>
        </Row>
      </FieldSet>
    </Container>
  );
};

export default Health;
