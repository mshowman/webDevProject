import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border: 2px solid black;
  padding: 10px;
  margin: 0;

  @media (min-width: 917px) {
    margin: 10px 0;
  }
`;

export default FormContainer;
