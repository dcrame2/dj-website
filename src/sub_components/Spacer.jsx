import { MediaQueries } from '../styles/Utilities';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
    width: 100%;
    height: ${(props) => props.desktop}px;

    @media ${MediaQueries.tablet} {
        height: ${(props) => props.tablet}px;
    }

    @media ${MediaQueries.mobile} {
        height: ${(props) => props.mobile}px;
    }
`;

export default function Spacer({ ...props }) {
    const [siblingColor, setSiblingColor] = useState();

    useEffect(() => {}, []);

    return (
        <Container
            desktop={props.desktop}
            tablet={props.tablet}
            mobile={props.mobile}
        />
    );
}
