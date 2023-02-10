import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import { H1Styles, PBaseStyles } from '../styles/Type';
import { GlassEffect } from '../styles/Utilities';
import { motion, useAnimationControls } from 'framer-motion';

const glow = keyframes`
  
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0008e6,
                0 0 40px #0008e6, 0 0 50px #0008e6, 0 0 60px #0008e6,
                0 0 70px #0008e6;
        }
        to {
            text-shadow: 0 0 20px #fff, 0 0 30px #00d9ff, 0 0 40px #00d9ff,
                0 0 50px #00d9ff, 0 0 60px #00d9ff, 0 0 70px #00d9ff,
                0 0 80px #00d9ff;
        }
    
`;

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 40vh;
        background: #ffffff00;
        background: -webkit-linear-gradient(top, #ffffff00, #060011);
        background: -moz-linear-gradient(top, #ffffff00, #060011);
        background: linear-gradient(to bottom, #ffffff00, #060011);
    }
`;

const InnerSection = styled.div`
    ${Container}
    height: 100%;
    background-color: ${Variables.color2};
    display: flex;
    justify-content: center;
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

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    top: 35%;
    gap: 25px;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    width: 900px;

    @media ${MediaQueries.mobile} {
        width: 90%;
    }

    h1 {
        /* ${H1Styles}
        text-transform: capitalize;
        font-weight: 400;
        font-size: 12rem;

        @media (max-width: 667px) {
            font-size: 4.2rem;
            line-height: 4.4rem;
        }

        @media (max-width: 400px) {
            font-size: 2rem;
        } */
        font-family: ${Variables.joseph};

        span.cursive {
            font-family: ${Variables.Pacifico};
            -webkit-animation: ${glow} 1s ease-in-out alternate;
            -moz-animation: ${glow} 1s ease-in-out alternate;
            animation: ${glow} 1s ease-in-out alternate;
            animation-fill-mode: forwards;
            font-size: 4rem;
            line-height: 93px;

            @media (max-width: 667px) {
                line-height: 73px;
            }

            @media (max-width: 400px) {
                font-size: 3rem;
            }
        }
    }
    h2 {
        /* ${PBaseStyles}
        text-align: center;
        margin-top: 15px; */

        @media (max-width: 667px) {
            margin-top: 0px;
        }
        @media (max-width: 400px) {
        }
    }

    @media ${MediaQueries.tablet} {
        max-width: 400px;
    }

    @media ${MediaQueries.mobile} {
        width: 90%;
    }

    /* h1 {
        ${H1Styles}
        text-transform: uppercase;
        font-weight: 600;
        font-size: 11rem;
        text-align: center;
        position: relative;
        overflow: visible;
    }
    h2 {
        ${PBaseStyles}
    } */
`;

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const controls = useAnimationControls();

    useEffect(() => {
        if (loaded === false) {
            controls.start({ x: 0, opacity: 1, scale: 1 });
            console.log(controls);
        }
        setLoaded(true);
    }, [loaded]);

    return (
        <Section>
            <OpaqueFilter />
            <InnerSection>
                <ContentContainer className={`${loaded ? 'loaded' : 'null'}`}>
                    <h1>
                        <motion.span
                            className='cursive'
                            initial={{ x: -100, opacity: 0, scale: 0 }}
                            animate={controls}
                            transition={{ delay: 1, duration: 5 }}
                        >
                            Experience
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ x: '-100px', opacity: 0 }}
                            animate={controls}
                            transition={{ delay: 2 }}
                        >
                            Digital
                        </motion.span>
                        <motion.span
                            initial={{ x: '200px', opacity: 0 }}
                            animate={controls}
                            transition={{ delay: 3 }}
                        >
                            Delight
                        </motion.span>
                    </h1>
                    <h2>
                        Bringing you websites and <br />
                        web applications
                    </h2>
                </ContentContainer>
            </InnerSection>
        </Section>
    );
};

export default Hero;
