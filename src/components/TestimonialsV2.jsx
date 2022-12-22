import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Container, MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, H3Styles, PSecondary } from '../styles/Type';
import Arrow from '../sub_components/svg/Arrow';

const ModuleContainer = styled.div`
    position: relative;
`;

const InnerContainer = styled.div`
    ${Container}
    padding-top: 160px;
    padding-bottom: 160px;
    background-color: ${Variables.color14};

    display: flex;
    flex-direction: column;
    gap: 50px;

    @media ${MediaQueries.tablet} {
        gap: 42px;
    }

    @media ${MediaQueries.mobile} {
        padding-top: 110px;
        padding-bottom: 110px;
    }

    .heading-container {
        text-align: center;

        h2 {
            ${H2Styles}
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        h3 {
            ${PSecondary}
        }
    }

    .carousel-wrapper {
        display: flex;
        justify-content: center;
        gap: 50px;

        @media ${MediaQueries.tablet} {
            gap: 30px;
        }

        @media ${MediaQueries.mobile} {
            gap: 12px;
        }
        .content-wrapper {
            display: grid;
            justify-items: center;

            .tile {
                grid-row: 1;
                grid-column: 1;
                text-align: center;
                opacity: 0;
                transform: translateY(120px);
                transition: opacity ease 0.4s, transform ease 0.35s;

                display: flex;
                justify-content: center;
                flex-direction: column;

                max-width: 660px;
                border: 1px solid ${Variables.color2};
                padding: 26px 32px 28px;
                border-radius: 24px;

                @media ${MediaQueries.tablet} {
                    padding: 20px 26px 24px;
                }

                &.active {
                    opacity: 1;
                    transform: translateY(0px);
                    transition: opacity ease 0.4s, transform ease 0.35s;
                }

                h4 {
                    ${H3Styles}
                    margin-bottom: 12px;
                }

                p.content {
                    ${PSecondary}
                }
            }
        }
        button {
            background-color: unset;
            border: unset;

            &.prev {
                transform: rotate(180deg);
            }

            svg {
                transition: transform ease 0.3s;
            }

            &:hover {
                svg {
                    transform: scale(1.15);
                    transition: transform ease 0.2s;
                }
            }
        }
    }
    ul.indicators {
        display: flex;
        list-style: none;
        gap: 20px;
        justify-content: center;
        z-index: 1;

        @media ${MediaQueries.mobile} {
            gap: 16px;
        }

        li {
            button {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: unset;
                background-color: ${Variables.color5};
                transition: transform ease 0.2s, color ease 0.2s;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

                &:hover {
                    transform: scale(1.1);
                    transition: transform ease 0.2s;
                }
            }

            &.active {
                button {
                    transform: scale(1.3);
                    background-color: ${Variables.color9};
                }
            }
        }
    }
`;

const data = {
    heading: 'Hear what people are saying',
    subheading: `Testimonials from ${Variables.companyName} customers`,
    testimonials: [
        {
            name: 'Cynthia L.',
            content: `I would highly recommend ${Variables.companyName} for your website needs. I've never received better communication with a business before!`,
        },
        {
            name: 'Tim C.',
            content: `${Variables.companyName} transformed my business to a new level which increased my site viewers over 100%.`,
        },
        {
            name: 'Anna J.',
            content: `I can't thank ${Variables.companyName} enough for building our website. The design and support they provided is unmatched.`,
        },
        {
            name: 'Bill A.',
            content: `${Variables.companyName} makes the best websites I have ever seen. They tripled my website viewers in 2 months.`,
        },
    ],
};

export default function TestimonialsV2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const max = data.testimonials.length - 1;

    const nextPressed = () => {
        if (activeIndex < max) {
            setActiveIndex((activeIndex) => activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const prevPressed = () => {
        if (activeIndex > 0) {
            setActiveIndex((activeIndex) => activeIndex - 1);
        } else {
            setActiveIndex(max);
        }
    };

    return (
        <ModuleContainer>
            <InnerContainer>
                <div className='heading-container'>
                    <h2>{data.heading}</h2>
                    <h3>{data.subheading}</h3>
                </div>
                <div className='carousel-wrapper'>
                    <button className='prev' onClick={prevPressed}>
                        <Arrow />
                    </button>
                    <div className='content-wrapper'>
                        {data.testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={`tile-${index}`}
                                    className={`tile ${
                                        activeIndex === index ? 'active' : ''
                                    }`}
                                >
                                    <h4>{testimonial.name}</h4>
                                    <p className='content'>
                                        {testimonial.content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <button className='next' onClick={nextPressed}>
                        <Arrow />
                    </button>
                </div>
                <ul className='indicators'>
                    {data.testimonials.map((item, index) => {
                        return (
                            <li
                                key={`button-${index}`}
                                className={`${
                                    activeIndex === index ? 'active' : ''
                                }`}
                            >
                                <button
                                    onClick={(activeIndex) =>
                                        setActiveIndex(index)
                                    }
                                ></button>
                            </li>
                        );
                    })}
                </ul>
            </InnerContainer>
        </ModuleContainer>
    );
}
