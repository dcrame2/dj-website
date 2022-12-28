import React, { useRef } from 'react';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import styled from 'styled-components';
import { H3Styles, H2Styles, PSecondary } from '../styles/Type';
import { useState, useEffect } from 'react';
import LinkButton from '../sub_components/LinkButton';
import { motion, useInView } from 'framer-motion';
import Zoom from 'react-reveal/Zoom';

// Google analytics
const Section = styled.section`
    position: relative;
    width: 100%;
    padding-top: 85px;
    padding-bottom: 185px;
    background-color: ${Variables.color14};
    //background-color: ${Variables.black};

    @media ${Variables.tablet} {
        padding-bottom: 140px;
    }

    @media ${Variables.mobile} {
        padding-bottom: 100px;
    }

    .inner-section {
        ${Container}
        display: flex;
        flex-direction: column;
        align-items: start;

        @media ${MediaQueries.tablet} {
            align-items: center;
        }

        .heading-container {
            margin: 44px 0 62px;
            max-width: 540px;

            @media ${Variables.tablet} {
                margin: 24px 0 40px;
            }
            h2 {
                ${H2Styles}

                text-transform: uppercase;
                margin-bottom: 14px;
            }
            h3 {
                ${PSecondary}

                max-width: 650px;
            }
        }

        .ServiceContainer {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 42px;
            justify-content: center;

            @media ${MediaQueries.tablet} {
                gap: 42px;
                flex-direction: column;
                align-items: center;
            }
            @media ${MediaQueries.mobile} {
                padding-right: unset;
                padding-left: unset;
            }

            button {
                border: unset;
                display: flex;
                flex-wrap: wrap;
                height: auto;
                background-color: ${Variables.color12};
                border: 1px solid ${Variables.color2};
                color: ${Variables.white};
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                gap: 10px;
                padding: 45px;
                border-radius: 40px;
                max-width: 540px;
                transition: background-color ease 0.7s;

                box-shadow: 1px 1px 10px 2px ${Variables.color18};
                -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color18};
                -moz-box-shadow: 1px 1px 10px 2px ${Variables.color18};

                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

                @media ${MediaQueries.desktop} {
                    flex: 1 1 0px;
                }

                @media ${MediaQueries.mobile} {
                    border-radius: 30px;
                }

                &:hover
            /*&:focus*/ {
                    @media ${MediaQueries.desktop} {
                        background-color: ${Variables.color10};
                        transition: background-color ease 0.45s;
                    }

                    img {
                        transform: rotateY(360deg);
                        /* top: -75px; */
                        transition: 3s;
                    }
                }
                @media (max-width: 767px) {
                    width: unset;
                    padding: 34px;
                }
                img {
                    position: relative;
                    max-width: 120px;
                    height: auto;
                    opacity: 0.8;

                    @media ${MediaQueries.tablet} {
                        max-width: 150px;
                    }
                    @media ${MediaQueries.mobile} {
                        max-width: 100px;
                    }
                }
                &:nth-child(1) {
                    span.num {
                        ${H2Styles}
                        color: ${Variables.color4};
                    }
                }
                &:nth-child(2) {
                    span.num {
                        ${H2Styles}
                        color: ${Variables.color3};
                    }
                }
                &:nth-child(3) {
                    span.num {
                        ${H2Styles}
                        color: ${Variables.color1};
                    }
                }
                h2 {
                    ${H3Styles}
                    color: ${Variables.white};
                    text-transform: uppercase;
                }

                .dropdown {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    max-height: 0;
                    opacity: 0;
                    transition: max-height 0.26s ease, opacity ease 0.25s;
                    p {
                        /* color: ${Variables.color1}; */
                        font-size: 1.75rem;
                        line-height: 25px;
                        overflow: hidden;
                    }
                }
                &.active {
                    transition: background-color ease 0.45s;
                    background-color: ${Variables.color16};
                    .dropdown {
                        max-height: 245px; // TODO: find solution to using auto height :)
                        transition: max-height 0.25s ease, opacity ease 0.26s;
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

const data = {
    services: [
        {
            num: '01',
            img: '/orange_icons/content-creator.png',
            name: 'Design',
            desc: 'Quality designs made to catch users attention and show your business model',
        },
        {
            num: '02',
            img: '/orange_icons/coding.png',
            name: 'Develop',
            desc: 'Professional developers executing modern websites your user will remember visiting',
        },
        {
            num: '03',
            img: '/orange_icons/browser.png',
            name: 'Support',
            desc: 'Internal developers to help maintain and support your website for any update needs',
        },
    ],
    heading: 'Services We Offer',
    subheading: `Managing a business demands a lot. Save time and resources and leave it to ${Variables.companyName} to help build and expand your online presence for your business. Below is a few of our focal services.`, //We offer a wide range of web related services that are a must-have for any business.
};

const Services = () => {
    const [active, setActive] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const activeToggle = (index) => {
        if (index === active) {
            setActive(null);
        } else {
            setActive(index);
        }
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        setLoaded(true);
    }, [loaded]);

    return (
        <Section id='services' className={active ? 'active' : ''}>
            <div className='inner-section'>
                <div ref={ref} className='heading-container'>
                    <motion.h2
                        style={{
                            transform: isInView ? 'none' : 'translateY(-200px)',
                            opacity: isInView ? 1 : 0,
                            transition:
                                'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >
                        {data.heading}
                    </motion.h2>
                    <h3>{data.subheading}</h3>
                </div>
                <div className='ServiceContainer'>
                    {data.services.map((service, i) => {
                        return (
                            <Zoom>
                                <button
                                    className={active === i ? 'active' : ''}
                                    onClick={() => activeToggle(i)}
                                    key={`button-${i}`}
                                >
                                    <img src={`${service.img}`} />
                                    <span className='num'>{service.num}</span>
                                    <h2>{service.name}</h2>
                                    <span className='dropdown'>
                                        <p>{service.desc}</p>
                                        <LinkButton
                                            text='Learn More'
                                            href={`#${service.name.toLowerCase()}Section`}
                                        ></LinkButton>
                                    </span>
                                </button>
                            </Zoom>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Services;
