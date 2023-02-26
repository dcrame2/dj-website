import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, PSecondary } from '../styles/Type';
import { MediaQueries } from '../styles/Utilities';

const Section = styled.section`
    background-color: ${Variables.color3};
`;

const InnerContainer = styled.div`
    ${Container}
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    gap: 75px;

    @media ${MediaQueries.tablet} {
        padding-top: 120px;
        padding-bottom: 120px;
        flex-direction: column-reverse;
    }
`;

const TextContainer = styled.div`
    max-width: 450px;

    h2 {
        ${H2Styles}
        overflow: visible;
        margin-bottom: 8px;

        span {
            display: inline-block;
        }
    }
    p {
        ${PSecondary}
    }
`;

const Img = styled.img`
    max-width: 680px;
    width: 100%;
    height: auto;
`;

const data = {
    heading: 'Grow your business',
    subheading: `your trusted partner in web development and online success. We specialize in delivering high-quality web applications and websites to businesses of all sizes. With years of experience and a team of talented developers, we have built a reputation for delivering outstanding results and exceptional customer service.`, //We offer a wide range of web related services that are a must-have for any business.
};

export default function ServicesV2() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center'],
    });

    const scrollPercentage1 = useTransform(
        scrollYProgress,
        [0.2, 0.3],
        [180, 0]
    );

    const scrollPercentageSpring1 = useSpring(scrollPercentage1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage2 = useTransform(
        scrollYProgress,
        [0.3, 0.4],
        [180, 0]
    );

    const scrollPercentageSpring2 = useSpring(scrollPercentage2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage3 = useTransform(
        scrollYProgress,
        [0.4, 0.5],
        [180, 0]
    );

    const scrollPercentageSpring3 = useSpring(scrollPercentage3, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const imgPercentage = useTransform(scrollYProgress, [0.2, 0.65], [90, 0]);

    const imgPercentageSpring = useSpring(imgPercentage, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const imgOpacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);

    const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

    const paraOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

    // split heading into spans
    const sentenceArray = data.heading.split(' ');

    const pickPercentage = (index) => {
        switch (index) {
            case 0:
                return scrollPercentageSpring1;
                break;
            case 1:
                return scrollPercentageSpring2;
                break;
            case 2:
                return scrollPercentageSpring3;
                break;
        }
    };

    const pickOpacity = (index) => {
        switch (index) {
            case 0:
                return opacity1;
                break;
            case 1:
                return opacity2;
                break;
            case 2:
                return opacity3;
                break;
        }
    };

    return (
        <Section ref={ref}>
            <InnerContainer>
                <TextContainer>
                    <h2>
                        {sentenceArray.map((item, index) => {
                            return (
                                <motion.span
                                    key={`word${index}`}
                                    id={`word${index}`}
                                    className='word'
                                    initial={{ opacity: 0 }}
                                    style={{
                                        opacity: pickOpacity(index),
                                        x: pickPercentage(index),
                                    }}
                                >
                                    {`${item}\u00A0`}
                                </motion.span>
                            );
                        })}
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        style={{
                            opacity: paraOpacity,
                        }}
                    >
                        {data.subheading}
                    </motion.p>
                </TextContainer>
                <motion.div
                    initial={{
                        opacity: 0,
                        rotateX: 90,
                    }}
                    style={{
                        transformPerspective: '800px',
                        transformOrigin: 'bottom center',
                        rotateX: imgPercentageSpring,
                        opacity: imgOpacity,
                    }}
                >
                    <Img src='/homepage.png' alt='test' />
                </motion.div>
            </InnerContainer>
        </Section>
    );
}
