import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';
import { useEffect, useState } from 'react';
import { PSmallStyles, H3Styles } from '../styles/Type';

const FooterElm = styled.footer`
    position: relative;
    height: 45vh;
    background-color: ${Variables.color12};

    .bottom-color-strip {
        background-color: ${Variables.black};
        padding: 15px 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;

        div {
            ${Container}
            p {
                ${PSmallStyles}
                text-transform: uppercase;
                text-align: center;
            }
            a {
                display: block;
                text-align: center;
                margin-top: 8px;
                opacity: 0.4;
            }
        }
    }
`;

const FooterInner = styled.div`
    ${Container}
    padding-bottom: 68px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100%;
    justify-items: center;
    align-items: center;
    gap: 50px;

    @media ${MediaQueries.mobile} {
        grid-template-columns: 1fr;
        padding-bottom: 88px;
        padding-top: 54px;
    }

    img {
        max-width: 300px;
        width: 100%;
    }
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        padding-top: 20vh;

        @media ${MediaQueries.mobile} {
            padding-top: unset;
        }

        li {
            margin-bottom: 4px;

            h2 {
                ${H3Styles}
            }
            a {
                ${PSmallStyles}
            }
        }
    }
`;

export default function Footer() {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, []);

    const data = {
        links: [
            { href: '#', text: 'Services' },
            { href: '#', text: 'Testimonials' },
            { href: '#', text: 'About' },
            { href: '#', text: 'Contact' },
        ],
    };

    return (
        <FooterElm>
            <FooterInner>
                <img src={Variables.logo2Url} alt=''></img>
                <ul>
                    <li>
                        <h2>Resources</h2>
                    </li>
                    {data.links.map((link, index) => {
                        return (
                            <li key={`footerLink${index}`}>
                                <a href={`${link.href}`}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </FooterInner>
            <div className='bottom-color-strip'>
                <div>
                    <p>{`Copyright © ${date} ${Variables.companyName}`}</p>
                    <a
                        href='https://www.flaticon.com/free-icons/web-development'
                        title='web development icons'
                    >
                        Web development icons created by Freepik - Flaticon
                    </a>
                </div>
            </div>
        </FooterElm>
    );
}
