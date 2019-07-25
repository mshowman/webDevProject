import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  align-items: center;

  @media (min-width: 917px) {
    justify-content: center;
    margin: 10px 0;
  }
`;

export default FormContainer;
