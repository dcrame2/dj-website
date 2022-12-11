import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';

const Footer = styled.footer``;

const FooterInner = styled.div`
    ${Container}
`;

export default function Footer() {
    return (
        <Footer>
            <FooterInner></FooterInner>
        </Footer>
    );
}
