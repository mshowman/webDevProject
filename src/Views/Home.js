import React from "react";
import styled from "styled-components";
import gmLogo from "../Images/gmLogo.png";
import Container from "../Components/Container";

const Hero = styled.h1`
  align-self: center;
  color: #f26c0d;
  font-family: Arial;
  font-weight: 700;
  font-size: 4vw;
  margin: 0 auto;
`;

const CopyText = styled.p`
  align-self: flex-start;
  min-width: 140px;
  margin: 0 20px;
`;

const Image = styled.img`
  float: left;
  margin: 5px 20px 10px 0;
  max-width: 40%;
  height: auto;
`;

const Home = () => {
  return (
    <Container>
      <Hero>
        <Image src={gmLogo} alt="Gigmasters Logo" /> Sprint Retrospective
      </Hero>
      <CopyText>
        &#8195;This is text for the page. lkasdjfaadflkajdfa dfalkdsjfaldskfj
        asldfk aldsfjadfalkjdf adflakjd f sdl slfkjsd fsldkjs dlksfjldkjfsd
        lfksdjflskdjf sldkfjsdl fksjdflksdfs s dfslkdfs dlfsd fskldfjsdf sdlf
        sdfkjsdlkfsj dfs ldfskldjfslkd fsldkfjsdflksjdflskjdf sdlkjfsd
        fsdflkjsdfkj lsdfs dfslkdjfsd sdflk sdfslkdfjsd d dlksdjfslkd klfjsdlf
        lkdjfl lkj el. Thestlkjdfslkdjfa asdflkajd ae sldkfjs elksd doige s
        djdsdfs e sd df sdisd esljdflskdfjsoi esfjsldkfs el sefsdhkjsjlfja jerf
        dfjsif weifjwe ifjdslkfjsdlkfjw efjakdjfadslkfja ;dkfasdfjadslf adf sdfl
        akjsdflksd fslkfjflk jak jflkjfsldkfjlskdjas ldkajfl ksdjalkdsj falkdsjf
        alkdsjfalkjlkdjflskdfjsdlfkjdslfkajdflkjwefsjfoijvx nc.k.slkfjweoijawo
        eijasdkfjdlfksjdfaj dfajdsfl adf adlkfjaiej sdfa laksdjf foai
        dfaoidjflkjdfsiefj sefs!
      </CopyText>
    </Container>
  );
};

export default Home;
