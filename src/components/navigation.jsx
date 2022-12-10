import styled from 'styled-components';
import LinkButton from '../sub_components/LinkButton';
import { Variables } from '../styles/Variables';
import { useState, useEffect } from 'react';
import { FontStyles1 } from '../styles/Utilities';
import { MediaQueries } from '../styles/Utilities';

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

            backdrop-filter: grayscale(0.2) blur(10px);
            box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08);
            border-top: 2px solid rgba(225, 225, 225, 0.3);
            border-left: 2px solid rgba(225, 225, 225, 0.1);
            border-right: 1px solid rgba(225, 225, 225, 0.2);
        }

        &.active::after {
            height: 100%;
            transition: height ease-out 0.2s;
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

                    ul.primary-links-list {
                        display: flex;
                        justify-content: center;

                        @media ${MediaQueries.tablet} {
                            display: none;
                        }

                        li {
                            margin-left: auto;

                            ul {
                                li.underline {
                                    margin: 0 25px;
                                    display: flex;
                                    align-items: center;

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
                        }
                    }
                }
            }
        }
        .mobile-dropdown {
            display: none;

            ul {
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

export default function Navigation() {
    const [navBackdrop, setNavBackdrop] = useState(false);

    useEffect(() => {
        window.onscroll = function (e) {
            if (this.scrollY > 83) {
                setNavBackdrop(true);
            } else {
                setNavBackdrop(false);
            }
        };
    }, []);

    return (
        <Nav>
            <div className={`wrapper ${navBackdrop ? 'active' : ''}`}>
                <ul>
                    <li className='logo'>
                        <a href='#'>
                            <img src='' alt='Logo'></img>
                        </a>
                    </li>
                    <li className='primary-links'>
                        <ul className='primary-links-list'>
                            <li>
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
                </ul>
            </div>
        </Nav>
    );
}
