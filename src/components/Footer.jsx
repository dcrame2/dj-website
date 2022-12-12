import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';
import { useEffect, useState } from 'react';
import { PSmallStyles } from '../styles/Type';

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
        }
    }
`;

const FooterInner = styled.div`
    ${Container}
    display: grid;
    grid-template-columns: 2fr;

    img {
    }
    div {
    }
`;

export default function Footer() {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, []);

    return (
        <FooterElm>
            <FooterInner>
                <img src='' alt=''></img>
                {/* <ul>
                    <li>
                        <a href=''></a>
                    </li>
                </ul> */}
            </FooterInner>
            <div className='bottom-color-strip'>
                <div>
                    <p>{`Copyright © ${date} ${Variables.companyName}`}</p>
                </div>
            </div>
        </FooterElm>
    );
}
