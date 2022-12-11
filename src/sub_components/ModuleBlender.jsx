import styled from 'styled-components';
import { BlurEffect } from '../styles/Utilities';
import { css } from 'styled-components';

const Blender = styled.div`
    position: relative;
    width: 100%;

    .blender-inner {
        position: absolute;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        z-index: 1;
        height: 50px;
        ${BlurEffect}

        ${(props) =>
            props.size === 'large' &&
            css`
                height: 80px;
            `}
    }
`;

export default function ModuleBlender({ size }) {
    return (
        <Blender size={size}>
            <div className='blender-inner'></div>
        </Blender>
    );
}
