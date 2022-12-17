import { MediaQueries } from '../styles/Utilities';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: ${(props) => props.desktop}px;
    background-color: ${(props) => props.color};

    @media ${MediaQueries.tablet} {
        height: ${(props) => props.tablet}px;
    }

    @media ${MediaQueries.mobile} {
        height: ${(props) => props.mobile}px;
    }
`;

export default function Spacer({ ...props }) {
    // TODO: dynamically grab sibling color and apply to self
    return (
        <Container
            color={props.color}
            desktop={props.desktop}
            tablet={props.tablet}
            mobile={props.mobile}
        />
    );
}
