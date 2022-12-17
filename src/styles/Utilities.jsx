import {
    Variables,
    desktopWidthInt,
    mobileWidthInt,
    tabletWidthInt2,
} from './Variables';
import { css } from 'styled-components';

export const MediaQueries = {
    desktop: `(min-width: ${desktopWidthInt}px)`,
    tablet: `(max-width: ${desktopWidthInt - 1}px)`,
    tabletOnly: `(max-width: ${desktopWidthInt - 1}px) and (min-width: ${
        mobileWidthInt + 1
    }px)`,
    mobile: `(max-width: ${mobileWidthInt}px)`,
    tablet2: `(max-width: ${tabletWidthInt2}px)`,
};

export const Container = css`
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
    padding: 0 64px;

    @media (min-width: ${Variables.tablet}) {
        padding: 0 44px;
    }
`;

export const FontStyles1 = css`
    color: ${Variables.white};
    font-size: 22px;
    text-transform: uppercase;
`;

export const GlassEffect = css`
    backdrop-filter: blur(90px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
    -webkit-backdrop-filter: grayscale(0.2) blur(90px);
`;

export const BlurEffect = css`
    backdrop-filter: grayscale(0) blur(10px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
`;
