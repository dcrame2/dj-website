import { Variables } from './Variables';
import { MediaQueries } from './Utilities';
import { css } from 'styled-components';

export const H1Styles = css`
    font-family: ${Variables.joseph};
    font-size: 8rem;
    line-height: 8.3rem;
    color: ${Variables.white};

    @media ${MediaQueries.tablet} {
        font-size: 7rem;
        line-height: 7.3rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 4.2rem;
        line-height: 4.4rem;
    }
`;

export const PBaseStyles = css`
    font-family: ${Variables.joseph};
    font-size: 3rem;
    line-height: 3.3rem;
    color: ${Variables.white};

    @media ${MediaQueries.tablet} {
        font-size: 2.5rem;
        line-height: 2.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 1.8rem;
        line-height: 2rem;
    }
`;
