import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';

const FooterElm = styled.footer`
    position: relative;
    height: 60vh;
    background-color: ${Variables.black};
`;

const FooterInner = styled.div`
    ${Container}

    .bottom-color-strip {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background-color: ${Variables.color2};
        padding: 20px 0;
    }
    .color-panel {
    }
`;

export default function Footer() {
    return (
        <FooterElm>
            <FooterInner>
                <div className='bottom-color-strip' />
                <div className='color-panel' />
            </FooterInner>
        </FooterElm>
    );
}
