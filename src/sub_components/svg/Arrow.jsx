import styled from 'styled-components';
import { Variables } from '../../styles/Variables';

const ArrowSvg = styled.svg`
    max-width: 45px;
    max-height: 45px;

    polyline {
        stroke: ${(props) => (props.color ? props.color : Variables.white)};
        stroke-width: 9;
        fill: none;
        stroke-linecap: round;
    }
`;

export default function Arrow() {
    return (
        <ArrowSvg
            height='100%'
            width='100%'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
        >
            <polyline points='10,50 90,50' />
            <polyline points='60,75 90,50 60,25' />
        </ArrowSvg>
    );
}
