import React, { useState } from "react";
import styled from "styled-components";
import FormContainer from "../Components/FormContainer";
import Container from "../Components/Container";

const FormItem = styled.input`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  text-align-last: center;
  width: 100%;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  text-align-last: center;
  align-items: center;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const FormSelect = styled.select`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  text-align-last: center;
  width: 100%;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  width: 100%;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 917px) {
    flex-direction: row;
  }
`;

const Radio = styled.input`
  display: flex;
  flex-direction: row;
`;

const FormTextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  width: 100%;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const RadioAndLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const ActionItem = ({ members }) => {
  var date = new Date(Date.now());
  const [member, setMember] = useState(members[1]);
  const [assignedMember, setAssignedMember] = useState(members[0]);
  const [optionSelected, setOptionSelected] = useState("no");

  return (
    <Container>
      <FormContainer
        action="mailto:mdshowman@gmail.com?subject=You've been assigned an action item..."
        method="post"
        encType="text/plain"
      >
        <RowContainer>
          <FormLabel htmlFor="date">Date: </FormLabel>
          <FormItem id="date" name="Date" type="text" value={date} readOnly />
        </RowContainer>
        <RowContainer>
          <FormLabel htmlFor="memberSelect">Writer:</FormLabel>
          <FormSelect
            id="writer"
            name="Writer"
            onChange={event => setMember(members[event.target.key])}
            value={member}
          >
            {members.map(m => (
              <option key={m.id} name={m.name}>
                {m.name}
              </option>
            ))}
          </FormSelect>
        </RowContainer>
        <RowContainer>
          <FormLabel htmlFor="assignedSelect">
            Member Assigned to Action Item:
          </FormLabel>
          <FormSelect
            id="assignedMember"
            name="AssignedMember"
            onChange={event =>
              setAssignedMember(assignedMember[event.target.key])
            }
            value={assignedMember}
          >
            {members.map(m => (
              <option key={m.id} name={m.name}>
                {m.name}
              </option>
            ))}
          </FormSelect>
        </RowContainer>
        <RowContainer>
          <FormLabel htmlFor="description">Description:</FormLabel>
          <FormTextArea
            id="description"
            name="Description"
            cols="60"
            rows="5"
          />
        </RowContainer>
        <RowContainer>
          <FormLabel>Has this action item been completed?</FormLabel>
          <RadioAndLabel>
            <Radio
              type="radio"
              name="Completed?"
              value="no"
              onChange={() => setOptionSelected("no")}
              checked={optionSelected === "no"}
            />
            No
          </RadioAndLabel>
          <RadioAndLabel>
            <Radio
              type="radio"
              name="Completed?"
              value="yes"
              onChange={() => setOptionSelected("yes")}
              checked={optionSelected === "yes"}
            />
            Yes
          </RadioAndLabel>
        </RowContainer>
        <RowContainer>
          <Button type="submit">Assign Action Item</Button>
        </RowContainer>
      </FormContainer>
    </Container>
  );
};

export default ActionItem;
