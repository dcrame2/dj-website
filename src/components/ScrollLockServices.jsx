import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, PSecondary } from '../styles/Type';
import { MediaQueries, GlassEffect } from '../styles/Utilities';

const data = {
    tiles: [
        {
            heading: 'Test',
            body: 'test test test est t tttest test etitties titties test',
        },
        {
            heading: 'Test2',
            body: 'test test test est t tttest test etitties titties test',
        },
        {
            heading: 'Test3',
            body: 'test test test est t tttest test etitties titties test',
        },
        {
            heading: 'Test4',
            body: 'test test test est t tttest test etitties titties test',
        },
        {
            heading: 'Test5',
            body: 'test test test est t tttest test etitties titties test',
        },
        {
            heading: 'Test6',
            body: 'test test test est t tttest test etitties titties test',
        },
    ],
};

const OuterContainer = styled.section`
    position: relative;
    min-height: 250vh;
    background-color: ${Variables.color4};
`;

const InnerContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 158.5px 50px 50px;
    max-width: 1770px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 65px 55px;

    @media ${MediaQueries.tablet} {
        padding-top: 168px;
    }
`;

const Tile = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 24px;
    padding: 24px 18px;
    ${GlassEffect}
    box-shadow: rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px, rgba(10,37,64,0.35) 0px -2px 6px 0px inset;
    border: 2px solid ${Variables.color2};
    background-color: ${Variables.color2};

    h2 {
        ${H2Styles}
        color: red;
    }
`;

export default function ScrollLockServices({ ...props }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center'],
    });

    const y1 = useTransform(scrollYProgress, [0.1, 0.2], [200, 0]);
    const y1s = useSpring(y1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const rx1 = useTransform(scrollYProgress, [0.1, 0.2], [90, 0]);
    const rx1s = useSpring(rx1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const y2 = useTransform(scrollYProgress, [0.2, 0.3], [200, 0]);
    const y2s = useSpring(y2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const rx2 = useTransform(scrollYProgress, [0.2, 0.3], [90, 0]);
    const rx2s = useSpring(rx2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const y3 = useTransform(scrollYProgress, [0.3, 0.4], [200, 0]);
    const y3s = useSpring(y3, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o3 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const rx3 = useTransform(scrollYProgress, [0.3, 0.4], [90, 0]);
    const rx3s = useSpring(rx3, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const y4 = useTransform(scrollYProgress, [0.4, 0.5], [200, 0]);
    const y4s = useSpring(y4, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o4 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const rx4 = useTransform(scrollYProgress, [0.4, 0.5], [90, 0]);
    const rx4s = useSpring(rx4, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const y5 = useTransform(scrollYProgress, [0.5, 0.6], [200, 0]);
    const y5s = useSpring(y5, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o5 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const rx5 = useTransform(scrollYProgress, [0.5, 0.6], [90, 0]);
    const rx5s = useSpring(rx5, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const y6 = useTransform(scrollYProgress, [0.6, 0.7], [200, 0]);
    const y6s = useSpring(y6, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const o6 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
    const rx6 = useTransform(scrollYProgress, [0.6, 0.7], [90, 0]);
    const rx6s = useSpring(rx6, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const containerTransform = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const containerSpring = useSpring(containerTransform, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const selectStyle = (index, yToggle, oToggle, rxToggle) => {
        switch (index) {
            case 0:
                if (yToggle) {
                    return y1s;
                }
                if (oToggle) {
                    return o1;
                }
                if (rxToggle) {
                    return rx1s;
                }
                break;
            case 1:
                if (yToggle) {
                    return y2s;
                }
                if (oToggle) {
                    return o2;
                }
                if (rxToggle) {
                    return rx2s;
                }
                break;
            case 2:
                if (yToggle) {
                    return y3s;
                }
                if (oToggle) {
                    return o3;
                }
                if (rxToggle) {
                    return rx3s;
                }
                break;
            case 3:
                if (yToggle) {
                    return y4s;
                }
                if (oToggle) {
                    return o4;
                }
                if (rxToggle) {
                    return rx4s;
                }
                break;
            case 4:
                if (yToggle) {
                    return y5s;
                }
                if (oToggle) {
                    return o5;
                }
                if (rxToggle) {
                    return rx5s;
                }
                break;
            case 5:
                if (yToggle) {
                    return y6s;
                }
                if (oToggle) {
                    return o6;
                }
                if (rxToggle) {
                    return rx6s;
                }
                break;
        }
    };

    return (
        <OuterContainer ref={ref}>
            <InnerContainer>
                {data.tiles.map((item, index) => {
                    return (
                        <motion.div
                            style={{
                                y: selectStyle(index, true, false),
                                opacity: selectStyle(index, false, true),
                                // rotateX: selectStyle(index, false, false, true),
                                scale: selectStyle(index, false, true, false),
                            }}
                        >
                            <Tile>
                                <h2>{item.heading}</h2>
                            </Tile>
                        </motion.div>
                    );
                })}
            </InnerContainer>
        </OuterContainer>
    );
}
