import React from "react";
import styled from "styled-components";
// import HeroImg from "../assets/img/hero1.mp4";

const HeroBg = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  //   background: red;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  //   position: absolute;
  //   z-index: 1;

  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  margin: 10%;
  gap: 20px;
`;

const Para = styled.h2`
  font-size: 2rem;
  color: #ccc;

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <Section>
      <HeroBg src="space.mp4" muted loop autoPlay></HeroBg>
      <Container>
        <Title>Welcome to Digital Joy</Title>
        <Para>We make badass shit for the web</Para>
      </Container>
      {/* <HeroBg />; */}
    </Section>
  );
};

export default Hero;
