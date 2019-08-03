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

const Team = ({ members }) => {
  const [member, setMember] = useState(members[0]);

  return (
    <TeamContainer>
      <Hero>Manage Team</Hero>
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
    </TeamContainer>
  );
};

export default Team;
