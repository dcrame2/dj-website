import { Variables, desktopWidthInt, mobileWidthInt } from './Variables';
import { css } from 'styled-components';

export const MediaQueries = {
    desktop: `(min-width: ${desktopWidthInt}px)`,
    tablet: `(max-width: ${desktopWidthInt - 1}px) and (min-width: ${
        mobileWidthInt + 1
    }px)`,
    mobile: `(max-width: ${mobileWidthInt}px`,
};

export const Container = css`
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
`;

export const FontStyles1 = css`
    color: ${Variables.white};
    font-size: 22px;
    text-transform: uppercase;
`;
