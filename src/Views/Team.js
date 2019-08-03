import React, { useState } from "react";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
import styled from "styled-components";

const TeamContainer = styled(Container)`
  margin: 0;
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
    width: 30%;
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
    width: 30%;
  }
`;

const Button = styled.button`
  width: 30%;
  margin: 5px 30px;
`;

const Team = ({ members }) => {
  const [member, setMember] = useState(members[0]);

  return (
    <TeamContainer>
      <Hero>Manage Team</Hero>
      <div>
        <FormLabel htmlFor="memberSelect">Author:</FormLabel>
        <FormSelect
          id="author"
          name="Author"
          onChange={event => setMember(members[event.target.key])}
          value={member}
        >
          {members.map(m => (
            <option key={m.id} name={m.name}>
              {m.name}
            </option>
          ))}
        </FormSelect>
        <FormLabel htmlFor="attendingMembers">Attending Members:</FormLabel>
        <FormSelect
          id="attendingMembers"
          name="AttendingMembers"
          size="10"
          multiple
        >
          {members.map(m => (
            <option key={m.id} name={m.name}>
              {m.name}
            </option>
          ))}
        </FormSelect>
        <Button onClick={() => alert("Saved.")}>Save Members</Button>
      </div>
    </TeamContainer>
  );
};

export default Team;
