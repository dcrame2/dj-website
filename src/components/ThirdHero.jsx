import React from "react";
import styled from "styled-components";
import { H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";

const HeroWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  mix-blend-mode: multiply;
  text-transform: uppercase;
`;

const HeroText = styled.h1`
  font-weight: 800;
  font-size: 25rem;

  @media ${MediaQueries.tablet} {
    font-size: 22rem;
  }
  @media ${MediaQueries.mobile} {
    font-size: 11rem;
  }
`;

const ThirdHero = () => {
  return (
    <HeroWrapper>
      <VideoBackground
        src="video.mp4"
        type="video/mp4"
        autoPlay
        playsInline
        muted
        loop
      ></VideoBackground>
      <TextBox>
        <HeroText>
          Our
          <br />
          Work
        </HeroText>
      </TextBox>
    </HeroWrapper>
  );
};

export default ThirdHero;
