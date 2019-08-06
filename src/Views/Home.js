import React from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import Hero from "../Components/Hero";

const CopyText = styled.p`
  display: flex;
  flex-direction: column;
  min-width: 140px;
  margin: 20px;
  width: 90%;
  text-align: justify;

  @media (min-width: 992px) {
    width: 100%;
  }
`;

const CopyTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 992px) {
    width: 70%;
  }
`;

const Image = styled.img`
  display: flex;
  width: 50%;
  height: 50%;
  margin: 5px;
`;

const BodyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const IFrame = styled.iframe`
  align-content: center;
  margin: 30px auto;
  width: 50%;
  height: 30%;

  @media (min-width: 992px) {
    width: 560px;
    height: 315px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Hero>Sprint Retrospective</Hero>
      <IFrame
        src="https://www.youtube.com/embed/bHfbeucM7Tg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <BodyContainer>
        <CopyTextContainer>
          <CopyText>
            At my company, TheBash.com, we hold biweekly sprint retrospectives.
            During these meetings, members are given the opportunity to provide
            feedback about the most recent sprint. Feedback is given in the form
            of "I am (happy|meh|sad)...". As members provide feedback, other
            teammates can plus one (+1) that statement to show agreement or in
            order to ensure that the topic will be discussed.
          </CopyText>
          <Image
            src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2017-03/SprintRetro.png"
            alt="typical model"
          />
          <ul>
            <li>Happy - What worked well?</li>
            <li>Meh - What could be improved?</li>
            <li>Sad - What needs immediate discussion?</li>
          </ul>
          <CopyText>
            During the discussion phase, we speak in greater detail about the
            Sad and Meh items. We vary in style, sometimes using the votes to
            decide the topics discussed, sometimes starting with the Sad
            comments then finish with Meh.
          </CopyText>
        </CopyTextContainer>
      </BodyContainer>
    </Container>
  );
};

export default Home;
