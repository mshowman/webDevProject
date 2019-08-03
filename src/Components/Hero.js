import styled from "styled-components";

const Hero = styled.h1`
  justify-content: center;
  align-items: center;
  color: #f26c0d;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin: 0 auto;
  background-color: lightgreen;
  display: flex;
  width: 100%;
  height: 50px;

  @media (min-width: 917px) {
    height: 100px;
  }

  @media (min-width: 917px) {
    font-size: 58px;
  }
`;

export default Hero;
