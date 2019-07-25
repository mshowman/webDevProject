import React, { useState } from "react";
import styled from "styled-components";
import FormContainer from "../Components/FormContainer";
import Container from "../Components/Container";

const FormItem = styled.input`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 5px 0;
  text-align-last: center;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const FormSelect = styled.select`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 5px 0;
  text-align-last: center;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 5px 0;

  @media (min-width: 917px) {
    margin: 5px 30px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const ActionItem = ({ members }) => {
  var date = new Date(Date.now());
  const [member, setMember] = useState(members[1]);
  const [assignedMember, setAssignedMember] = useState(members[0]);

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
          <FormItem type="submit" name="Type" value="Assign Action Item" />
        </RowContainer>
      </FormContainer>
    </Container>
  );
};

export default ActionItem;
