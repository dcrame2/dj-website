import { Variables, desktopWidthInt, mobileWidthInt } from './Variables';
import { css } from 'styled-components';

export const MediaQueries = {
    desktop: `(min-width: ${desktopWidthInt}px)`,
    tablet: `(max-width: ${desktopWidthInt - 1}px)`,
    tabletOnly: `(max-width: ${desktopWidthInt - 1}px) and (min-width: ${
        mobileWidthInt + 1
    }px)`,
    mobile: `(max-width: ${mobileWidthInt}px)`,
};

export const Container = css`
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
    padding: 0 55px;

    @media (min-width: ${Variables.desktopW}) {
        padding: 0 25px;
    }
`;

export const FontStyles1 = css`
    color: ${Variables.white};
    font-size: 22px;
    text-transform: uppercase;
`;

export const GlassEffect = css`
    backdrop-filter: grayscale(0.2) blur(10px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
`;
