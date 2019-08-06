import React, { useState, useEffect } from "react";
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

  @media (min-width: 992px) {
    margin: 5px;
  }
`;

const FormItem = styled.input`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  width: 100%;

  @media (min-width: 992px) {
    margin: 5px;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 0;
  width: 100%;

  :last-of-type {
    margin-top: 30px;
  }

  @media (min-width: 992px) {
    margin: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

const Column = styled.span`
  flex-direction: column;
  margin: 5px;
  width: 90%;

  @media (min-width: 992px) {
    width: 40%;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 5px;
`;

const Team = ({ members }) => {
  const [member, setMember] = useState(members[0]);
  const [removedMember, setRemovedMember] = useState(members[0]);
  const [memberList, setMemberList] = useState(members);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [addedMember, setAddedMember] = useState({});
  const [id, setId] = useState(4);

  useEffect(() => {
    return () => {
      function removeMember() {
        return memberList.filter(m => m.name !== removedMember);
      }

      function addMember(m) {
        setMemberList([...memberList, { id: id, name: m }]);
        setId(id => id + 1);
        setAdd(false);
      }

      if (add) {
        addMember(addedMember);
        setAddedMember({});
      }

      if (remove) {
        setMemberList(removeMember());
        setRemovedMember(memberList[0]);
        setRemove(false);
      }
    };
  });

  return (
    <TeamContainer>
      <Hero>Manage Team</Hero>
      <Wrapper>
        <Column>
          <FormLabel htmlFor="memberSelect">Author:</FormLabel>
          <FormSelect
            id="author"
            name="Author"
            onChange={e => setMember(e.target.value)}
            value={member}
          >
            {memberList.map(m => (
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
            {memberList.map(m => (
              <option key={m.id} name={m.name}>
                {m.name}
              </option>
            ))}
          </FormSelect>
          <Button onClick={() => alert("Saved.")}>Save Members</Button>
        </Column>
        <Column>
          <FormLabel>Enter New Member's Name:</FormLabel>
          <FormItem
            id="name"
            type="text"
            onChange={e => setAddedMember(e.target.value)}
            placeholder="Enter the member's First Name and Last Initial..."
          />
          <Button onClick={() => setAdd(true)}>Add Member</Button>
          <FormLabel htmlFor="removeMember">Remove a new member:</FormLabel>
          <FormSelect
            id="removeMember"
            name="removeMember"
            onChange={e => setRemovedMember(e.target.value)}
            value={removedMember}
          >
            {memberList.map(m => (
              <option key={m.id} name={m.name}>
                {m.name}
              </option>
            ))}
          </FormSelect>
          <Button onClick={() => setRemove(true)}>Remove Member</Button>
        </Column>
      </Wrapper>
    </TeamContainer>
  );
};

export default Team;
