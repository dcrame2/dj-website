import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../styles/Utilities';
import { Variables } from '../styles/Variables';

const BGMContainer = styled.div`
    position: relative;
    background-color: ${Variables.color4};
    min-height: 350vh;
`;

const BGMInnerContainer = styled.div`
    ${Container}
`;

const StickyContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: blue;
    }
`;

export default function BarGraphModule({ ...props }) {
    return (
        <BGMContainer>
            <BGMInnerContainer></BGMInnerContainer>
            <StickyContainer>
                <h1>Test test</h1>
            </StickyContainer>
        </BGMContainer>
    );
}
