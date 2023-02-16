import styled from 'styled-components/macro';
import { Container } from '../styles/Utilities';

const HeroContainer = styled.div`
    position: relative;
`;

const InnerContainer = styled.div`
    ${Container}
`;

export default function SecondaryHeroV2({ data }) {
    return (
        <HeroContainer>
            <InnerContainer>test</InnerContainer>
        </HeroContainer>
    );
}
