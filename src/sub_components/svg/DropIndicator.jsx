import styled from 'styled-components';
import { Variables } from '../../styles/Variables';
import { MediaQueries } from '../../styles/Utilities';

const IndicatorSvg = styled.svg`
    max-width: 35px;
    max-height: 35px;

    @media ${MediaQueries.tablet} {
        width: 28px;
        height: 28px;
    }

    polyline {
        stroke: ${(props) =>
            props.color ? props.color : `${Variables.color10}`};
        stroke-width: 9;
        fill: none;
        stroke-linecap: round;
    }
`;

export default function DropIndicator() {
    return (
        <IndicatorSvg
            height='100%'
            width='100%'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
        >
            <polyline points='20,45 50,70' />
            <polyline points='50,70 80,45' />
        </IndicatorSvg>
    );
}
