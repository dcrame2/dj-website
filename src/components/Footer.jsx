import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';

const FooterElm = styled.footer`
    position: relative;
    height: 60vh;
`;

const FooterWrapper = styled.div`
    position: relative;
    background-color: ${Variables.color10};
`;

const FooterInner = styled.div`
    ${Container}
`;

export default function Footer() {
    return (
        <FooterElm>
            <FooterWrapper>
                <FooterInner>
                    <div className='bottom-color-strip' />
                    <div className='color-panel' />
                </FooterInner>
            </FooterWrapper>
        </FooterElm>
    );
}
