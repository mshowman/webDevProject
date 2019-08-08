import React from "react";
import styled from "styled-components";
import Container from "../Components/Container";

const FieldSet = styled.fieldset`
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: auto;
`;

const Legend = styled.legend`
  text-align: ${props => props.align};
`;

const Cell = styled.div`
  flex: 50%;
`;

const Row = styled.div`
  width: 90%;
  margin: 0;
  display: flex;
`;

const Label = styled.label`
  width: 100px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
`;

const Select = styled.select`
  width: 100%;
`;

const Health = () => {
  return (
    <Container>
      <FieldSet>
        <Legend align="left">Happy</Legend>
        <Row>
          <Cell>
            <Label>Member:</Label>
            <Select>
              <option>this</option>
            </Select>
            <Label>Feedback:</Label>
            <TextArea></TextArea>
            <button>-</button>
            <Label>2</Label>
            <button>+</button>
            <button>Save Feedback</button>
          </Cell>
          <Cell>
            <Select size="8">
              <option>that</option>
            </Select>
          </Cell>
        </Row>
      </FieldSet>
      <FieldSet>
        <Legend align="center">Meh</Legend>
        <Cell>
          <Label>Member:</Label>
          <Select>
            <option>this</option>
          </Select>
          <Label>Feedback:</Label>
          <TextArea></TextArea>
          <button>-</button>
          <Label>2</Label>
          <button>+</button>
          <button>Save Feedback</button>
        </Cell>
        <Row>
          <Select size="4">
            <option>that</option>
          </Select>
        </Row>
      </FieldSet>
      <FieldSet>
        <Legend align="right">Sad</Legend>
        <Cell>
          <Label>Member:</Label>
          <Select>
            <option>this</option>
          </Select>
          <Label>Feedback:</Label>
          <TextArea></TextArea>
          <button>-</button>
          <Label>2</Label>
          <button>+</button>
          <button>Save Feedback</button>
        </Cell>
        <Cell>
          <Select size="4">
            <option>that</option>
          </Select>
        </Cell>
      </FieldSet>
    </Container>
  );
};

export default Health;
