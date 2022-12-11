import styled from 'styled-components';
import { Container } from '../styles/Utilities';
import Button from '../sub_components/Button';

const ICMContainer = styled.div`
    position: relative;
    width: 100%;

    .ICMInnerContainer {
    }
`;

export default function ImageContentModule() {
    return (
        <ICMContainer>
            <div className='ICMInnerContainer'></div>
        </ICMContainer>
    );
}
