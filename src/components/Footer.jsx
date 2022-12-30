import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';
import { useEffect, useState } from 'react';
import { PSmallStyles, H4Styles } from '../styles/Type';

const FooterElm = styled.footer`
    position: relative;
    background-color: ${Variables.color12};

    .bottom-color-strip {
        background-color: ${Variables.black};
        padding: 15px 0;
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
    padding-bottom: 50px;
    padding-top: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    justify-items: center;
    align-items: center;
    gap: 50px;

    @media ${MediaQueries.tabletOnly} {
        grid-template-columns: 1fr 1fr;
        gap: 40px 20px;
    }

    @media ${MediaQueries.mobile} {
        grid-template-columns: 1fr;
        padding-bottom: 40px;
        padding-top: 80px;
    }

    img {
        max-width: 300px;
        width: 100%;

        @media ${MediaQueries.tabletOnly} {
            grid-row: 1;
            grid-column: 1 / 3;
        }
        @media ${MediaQueries.mobile} {
            margin-bottom: 25px;
        }
    }

    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        @media ${MediaQueries.tabletOnly} {
            grid-row: 2;
        }

        @media ${MediaQueries.tablet} {
            align-items: center;
        }

        @media ${MediaQueries.mobile} {
            padding-top: unset;
        }

        li {
            margin-bottom: 4px;

            h2 {
                ${H4Styles}
                text-transform: uppercase;
            }
            a {
                ${PSmallStyles}
                &:hover {
                    color: ${Variables.color2};
                }
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
        resources: {
            heading: 'Resources',
            links: [
                { href: '#services', text: 'Services' },
                { href: '#testimonials', text: 'Testimonials' },
                { href: '#faqSection', text: 'FAQ' },
            ],
        },
        information: {
            heading: 'Email',
            links: [
                {
                    href: 'mailto:info@thedigitaldelight.com',
                    text: 'info@thedigitaldelight.com',
                },
            ],
        },
    };

    return (
        <FooterElm>
            <FooterInner>
                <img src={Variables.logo6Url} alt=''></img>
                <ul>
                    <li>
                        <h2>{data.resources.heading}</h2>
                    </li>
                    {data.resources.links.map((link, index) => {
                        return (
                            <li key={`resource-link-${index}`}>
                                <a href={`${link.href}`}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    <li>
                        <h2>{data.information.heading}</h2>
                    </li>
                    {data.information.links.map((link, index) => {
                        return (
                            <li key={`information-link${index}`}>
                                <a href={`${link.href}`}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </FooterInner>
            <div className='bottom-color-strip'>
                <div>
                    <p>{`Copyright © ${date} ${Variables.companyName}`}</p>
                </div>
            </div>
        </FooterElm>
    );
}
