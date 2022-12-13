import React from 'react';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import styled from 'styled-components';
import { H3Styles, H2Styles, PSecondary } from '../styles/Type';

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
        justify-content: space-between;
        align-items: center;
        gap: 42px;
        justify-content: center;

        @media ${MediaQueries.tablet} {
            gap: 42px;
            flex-direction: column;
        }
        @media ${MediaQueries.mobile} {
            padding-right: unset;
            padding-left: unset;
        }
        div {
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

            &:hover,
            &:focus {
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
            p {
                color: ${Variables.color1};
                font-size: 1.75rem;
                line-height: 25px;
            }
            div {
                display: flex;
                flex-wrap: wrap;
                height: auto;
                background-color: ${Variables.color2};
                color: ${Variables.white};
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                gap: 20px;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 1px 1px 10px 2px ${Variables.color2};
                -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
                -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};
                @media (max-width: 767px) {
                    width: unset;
                    margin: 0 5%;
                    padding: 15px;
                }
                img {
                    position: relative;
                    width: auto;
                    height: 250px;
                    padding: 5px;
                    @media (max-width: 767px) {
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
                        color: ${Variables.color3};
                    }
                }
                &:nth-child(3) {
                    span {
                        color: ${Variables.color1};
                    }
                }
                h2 {
                    ${H3Styles}
                    color: ${Variables.white};
                }
                p {
                    color: ${Variables.color1};
                    ${PSecondary}
                }
                span {
                    ${H2Styles}
                    color: ${Variables.color4};
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
    return (
        <Section id='services'>
            <div className='ServiceContainer'>
                {data.services.map((service, i) => {
                    return (
                        <div>
                            <img src={`${service.img}`} />
                            <span>{service.num}</span>
                            <h2>{service.name}</h2>
                            <p>{service.desc}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Services;
