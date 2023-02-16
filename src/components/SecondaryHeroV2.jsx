import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HeroContainer = styled.div``;

const InnerContainer = styled.div`
    ${Container}
`;

export default function SecondaryHeroV2() {
    return (
        <HeroContainer>
            <InnerContainer>test</InnerContainer>
        </HeroContainer>
    );
}
