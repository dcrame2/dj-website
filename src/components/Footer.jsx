import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';

const FooterElm = styled.footer`
    position: relative;
    height: 60vh;
`;

const FooterInner = styled.div`
    ${Container}

    .bottom-color-strip {
        width: 100%;
        position: absolute;
    }
`;

export default function Footer() {
    return (
        <FooterElm>
            <FooterInner>
                <div className='bottom-color-strip'></div>
            </FooterInner>
        </FooterElm>
    );
}
