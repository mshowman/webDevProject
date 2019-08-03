import React from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import Container from "../Components/Container";

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;

  @media (min-width: 917px) {
    flex-direction: row;
    justify-content: center;
    margin: 0 50px 20px;
  }
`;

const CopyText = styled.p`
  display: flex;
  padding: 10px 0;
  text-align: justify;
  width: 100%;
  margin: 0;

  @media (min-width: 917px) {
    width: 30%;
    margin: 0 20px;
  }
`;

const IFrame = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Image = styled.img`
  display: flex;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 917px) {
    width: 20%;
    margin: 0;
  }
`;

const Link = styled.a`
  display: contents;
  margin: 0 5px;
`;

const Review = () => {
  return (
    <Container>
      <Hero>Review</Hero>
      <Copy>
        <CopyText>
          Typically, a Retro meeting would start with reviewing past assigned
          action items. A review would be a simple check in, confirming if the
          item has been completed or not. After that, you would move on to the
          current meeting and continue with Happy, Meh, Sad (what others may
          call sprint reflection).
        </CopyText>
        <Image
          height="230"
          width="180"
          src="http://3.bp.blogspot.com/_o4q-Oo0kiJs/R9P-vzwGW7I/AAAAAAAAA14/HR0yNGJP2Oo/s320/action-item-1.jpg"
        />
        <CopyText>
          An action item is a task assigned to a team member or an entire
          department. I found an interesting{" "}
          <Link href="https://www.agile-goodies.com/followup-sprint-retrospectives/">
            website
          </Link>
          {"  "}
          that nicely illustrates an action item and even how to construct a
          "good one".
        </CopyText>
      </Copy>
      <IFrame
        src="https://www.agile-goodies.com/followup-sprint-retrospectives/"
        height="300"
        width="85%"
      />
    </Container>
  );
};

export default Review;
