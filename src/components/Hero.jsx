import React from 'react';
import styled from 'styled-components';
// import HeroImg from "../assets/img/hero1.mp4";
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const InnerSection = styled.div`
    ${Container}
`;

const HeroBg = styled.video`
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    //   background: red;
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
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    top: 35%;
    gap: 20px;
    max-width: 700px;
    left: 10%;
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
            <HeroBg src='space.mp4' muted loop autoPlay></HeroBg>
            <OpaqueFilter />
            <InnerSection>
                <ContentContainer>
                    <Title>Welcome to Digital Joy</Title>
                    <Para>We make badass shit for the web</Para>
                </ContentContainer>
            </InnerSection>
            {/* <HeroBg />; */}
        </Section>
    );
};

export default Hero;
