import styled from 'styled-components';
import LinkButton from '../sub_components/LinkButton';
import { Variables } from '../styles/Variables';
import { useState, useEffect } from 'react';
import { FontStyles1, GlassEffect } from '../styles/Utilities';
import { MediaQueries } from '../styles/Utilities';
import Hamburger from '../sub_components/svg/Hamburger';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    .wrapper {
        position: relative;
        display: flex;
        padding: 28px 26px;
        justify-content: center;

        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            width: 100%;
            left: 0;
            right: 0;
            top: 0;
            transition: height ease-in 0.2s;
            height: 0%;
            ${GlassEffect}
        }

        &.active::after {
            height: 100%;
            transition: height ease-out 0.2s;
        }
        &.panel-active::after {
            height: 100vh;
        }

        ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: ${Variables.maxWidth};

            li {
                display: flex;
                align-items: center;

                &.logo {
                    max-width: 285px;
                    width: 100%;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                &.primary-links {
                    width: 100%;
                    @media ${MediaQueries.tablet} {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        height: 0;
                        transition: height ease 0.3s;
                        overflow: hidden;
                        transition: height ease 0.3s;
                        &.active {
                            height: 100vh;
                        }

                        &.backdrop-active {
                            top: 123px;
                        }
                    }

                    ul.primary-links-list {
                        display: flex;
                        justify-content: center;

                        @media ${MediaQueries.tablet} {
                            flex-direction: column;
                            align-items: center;
                            height: 100%;

                            li.primary-links-list-item {
                                ul {
                                    height: 68vh;
                                }
                            }
                        }

                        li {
                            margin-left: auto;

                            @media ${MediaQueries.tablet} {
                                margin-left: unset;
                            }

                            ul {
                                @media ${MediaQueries.tablet} {
                                    flex-direction: column;
                                    justify-content: center;
                                    height: 100%;
                                    gap: 10%;
                                }
                                li.underline {
                                    margin: 0 25px;
                                    display: flex;
                                    align-items: center;

                                    @media ${MediaQueries.tablet} {
                                        justify-content: center;
                                    }

                                    a {
                                        text-decoration: unset;
                                        ${FontStyles1}
                                        position: relative;

                                        &::after {
                                            content: '';
                                            position: absolute;
                                            left: 0;
                                            height: 3px;
                                            width: 0%;
                                            transition: width ease 0.3s;
                                            bottom: 0px;
                                            background-color: ${Variables.white};
                                        }
                                        &:hover,
                                        focus {
                                            &::after {
                                                width: 100%;
                                                transition: width ease 0.3s;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        li.cta {
                            flex-shrink: 0;
                            margin-left: auto;

                            @media ${MediaQueries.tablet} {
                                margin-left: unset;
                                //margin-bottom: calc(20vh);
                            }
                        }
                    }
                }
                &.menu-toggle {
                    @media ${MediaQueries.desktop} {
                        display: none;
                    }
                    transition: transform ease 0.3s;

                    &.active {
                        transform: rotate(90deg);
                        transition: transform ease 0.3s;
                    }

                    button {
                        background-color: unset;
                        border: unset;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

const data = {
    links: [
        { href: '#', text: 'Services' },
        { href: '#', text: 'Testimonials' },
        { href: '#', text: 'About' },
    ],
};

export default function Navigation({ backdrop }) {
    const [hamburgerPressed, setHamburgerPressed] = useState(false);

    const HamburgerToggle = () => {
        if (hamburgerPressed) {
            setHamburgerPressed(false);
        } else {
            setHamburgerPressed(true);
        }
    };

    return (
        <Nav>
            <div
                className={`wrapper 
                    ${backdrop ? 'active' : ''}
                    ${hamburgerPressed ? 'panel-active' : ''}`}
            >
                <ul>
                    <li className='logo'>
                        <a href='#'>
                            <img src='' alt='Logo'></img>
                        </a>
                    </li>
                    <li
                        className={`primary-links 
                        ${backdrop ? 'backdrop-active' : ''}
                        ${hamburgerPressed ? 'active' : ''}
                        `}
                    >
                        <ul className='primary-links-list'>
                            <li className='primary-links-list-item'>
                                <ul>
                                    {data.links.map((link, index) => {
                                        return (
                                            <li
                                                className='underline'
                                                key={`textLink${index}`}
                                            >
                                                <a href={`${link.href}`}>
                                                    {link.text}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li className='cta'>
                                <LinkButton text='Contact Us'></LinkButton>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={`menu-toggle ${
                            hamburgerPressed ? 'active' : ''
                        }`}
                    >
                        <button onClick={HamburgerToggle}>
                            <Hamburger></Hamburger>
                        </button>
                    </li>
                </ul>
            </div>
        </Nav>
    );
}