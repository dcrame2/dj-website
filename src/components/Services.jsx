import React from 'react';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import styled from 'styled-components';
import { H3Styles, H2Styles, PSecondary } from '../styles/Type';
import { useState, useEffect } from 'react';

const Section = styled.section`
    /* height: auto; */
    position: relative;
    width: 100%;
    /* padding: 8% 5%; */
    padding-top: 85px;
    padding-bottom: 85px;
    background-color: ${Variables.color1};

    .ServiceContainer {
        ${Container}
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
            background-color: ${Variables.color2};
            color: ${Variables.white};
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 10px;
            padding: 45px;
            border-radius: 15px;
            max-width: 540px;
            transition: background-color ease 0.7s;

            box-shadow: 1px 1px 10px 2px ${Variables.color2};
            -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
            -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};

            &:hover
            /*&:focus*/ {
                background-color: ${Variables.color5};
                transition: background-color ease 0.45s;

                img {
                    transform: rotateY(360deg);
                    /* top: -75px; */
                    transition: 3s;
                }
            }
            @media (max-width: 767px) {
                width: unset;
                margin: 0 5%;
                padding: 15px;
            }
            img {
                position: relative;
                width: auto;
                max-width: 250px;
                height: 250px;

                @media ${MediaQueries.tablet} {
                    max-width: 250px;
                }
                @media ${MediaQueries.mobile} {
                    height: 175px;
                }
            }
            &:nth-child(1) {
                span {
                    ${H2Styles}
                    color: ${Variables.color4};
                }
            }
            &:nth-child(2) {
                span {
                    ${H2Styles}
                    color: ${Variables.color3};
                }
            }
            &:nth-child(3) {
                span {
                    ${H2Styles}
                    color: ${Variables.color1};
                }
            }
            h2 {
                ${H3Styles}
                color: ${Variables.white};
            }

            .dropdown {
                p {
                    color: ${Variables.color1};
                    font-size: 1.75rem;
                    line-height: 25px;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.26s ease, opacity ease 0.25s;
                }
            }
            &.active {
                transition: background-color ease 0.45s;
                background-color: ${Variables.color14};

                .dropdown {
                    p {
                        max-height: 145px; // TODO: find solution to using auto height :)
                        opacity: 1;
                        transition: max-height 0.25s ease, opacity ease 0.26s;
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
            img: 'icon1.png',
            name: 'Design',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?',
        },
        {
            num: '02',
            img: 'icon3.png',
            name: 'Develop',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?',
        },
        {
            num: '03',
            img: 'icon2.png',
            name: 'Support',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?',
        },
    ],
};

const Services = () => {
    const [active, setActive] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const activeToggle = (index) => {
        console.log(index, active);
        if (index === active) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    useEffect(() => {
        setLoaded(true);
    }, [loaded]);

    return (
        <Section id='services' className={active ? 'active' : ''}>
            <div className='ServiceContainer'>
                {data.services.map((service, i) => {
                    return (
                        <button
                            className={active === i ? 'active' : ''}
                            onClick={() => activeToggle(i)}
                            key={`button-${i}`}
                        >
                            <img src={`${service.img}`} />
                            <span>{service.num}</span>
                            <span className='dropdown'>
                                <h2>{service.name}</h2>
                                <p>{service.desc}</p>
                            </span>
                        </button>
                    );
                })}
            </div>
        </Section>
    );
};

export default Services;
