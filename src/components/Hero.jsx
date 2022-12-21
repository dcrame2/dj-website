import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import { H1Styles, PBaseStyles } from "../styles/Type";
import { GlassEffect } from "../styles/Utilities";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const InnerSection = styled.div`
  ${Container}
  height: 100%;
`;

const HeroBg = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  @media ${MediaQueries.mobile} {
    background: black;
  }
`;

const OpaqueFilter = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(125, 125, 125, 0) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.8;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80%;
  z-index: 1;

  @media ${MediaQueries.tablet} {
    width: 100%;

    ${GlassEffect}
  }
`;

const SlideIn = keyframes`
    to { left: 64px;}
`;

const SlideInTablet = keyframes`
    to { left: 64px;}
`;

const SlideInMobile = keyframes`
    to { left: 24px;}
`;

const SlideOut = keyframes`
    to {left: -100%}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 35%;
  left: -100%;
  gap: 25px;
  max-width: 700px;
  width: 100%;
  transition: left ease 3s;

  &.loaded {
    animation: ${SlideIn} 0.8s ease;
    animation-fill-mode: forwards;

    @media ${MediaQueries.tablet} {
      animation: ${SlideInTablet} 0.8s ease;
      animation-fill-mode: forwards;
    }

    @media ${MediaQueries.mobile} {
      animation: ${SlideInMobile} 0.8s ease;
      animation-fill-mode: forwards;
    }
  }

  @media ${MediaQueries.tablet} {
    max-width: 400px;
  }

  @media ${MediaQueries.mobile} {
    width: 90%;
  }

  h1 {
    ${H1Styles}
    text-transform: uppercase;
    font-weight: 600;
  }
  h2 {
    ${PBaseStyles}
  }
`;

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Section>
      <HeroBg
        src="video.mp4"
        type="video/mp4"
        muted
        loop
        autoPlay
        playsInline
      ></HeroBg>
      <OpaqueFilter />
      <InnerSection>
        <ContentContainer className={`${loaded ? "loaded" : "null"}`}>
          <h1>{`Experience ${Variables.companyName}`}</h1>
          <h2>We make websites and web applications</h2>
        </ContentContainer>
      </InnerSection>
    </Section>
  );
};

export default Hero;
