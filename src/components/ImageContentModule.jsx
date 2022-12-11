import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import Button from '../sub_components/Button';

const ICMContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${Variables.color6};

    .ICMInnerContainer {
        ${Container}
        height: 720px;
    }
`;

export default function ImageContentModule() {
    return (
        <ICMContainer>
            <div className='ICMInnerContainer'></div>
        </ICMContainer>
    );
}
