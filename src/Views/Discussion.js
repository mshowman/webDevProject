import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import Hero from "../Components/Hero";
import ActionItem from "./ActionItem";

const PageContainer = styled(Container)`
  width: 90%;
  margin: 0 auto;
`;

const Checkbox = styled.input`
  margin: 5px;
`;

const Select = styled.select`
  width: 100%;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  width: 90%;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 50%;
  margin: 0 auto 10px;
`;

const Row = styled.div`
  display: flex;
  margin: 10px;
`;

const Cell = styled.div`
  display: flex;
  flex: 45%;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-left: 5%;
`;

const Discussion = ({ members }) => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Hero>Discussion</Hero>
      <PageContainer>
        <Row>
          <Cell>
            <Checkbox type="checkbox" id="meh" value="yes" />
            Meh
            <Checkbox type="checkbox" id="sad" value="yes" />
            Sad
          </Cell>
          <Cell>
            <Label>Document discussion below:</Label>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Select size="5">
              <option key="1" name="this">
                this
              </option>
            </Select>
          </Cell>
          <Cell>
            <TextArea rows="6" cols="60" />
          </Cell>
        </Row>
        <Button onClick={() => setModal(!modal)}>Add New Action Item...</Button>
        {modal && <ActionItem members={members} />}
      </PageContainer>
    </Container>
  );
};

export default Discussion;
