import styled, { css } from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import { H2Styles, PSecondary } from '../styles/Type';
import { MediaQueries } from '../styles/Utilities';

const ICMContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: ${Variables.color20};

    .ICMInnerContainer {
        ${Container}
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 85px;
        max-width: 1300px;

        @media ${MediaQueries.tablet} {
            flex-direction: column;
            gap: 48px;
        }

        @media ${MediaQueries.mobile} {
            gap: 42px;
        }

        img {
            background-color: ${Variables.color1};
            max-width: 640px;
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 1px 1px 10px 2px ${Variables.color8};
            -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color8};
            -moz-box-shadow: 1px 1px 10px 2px ${Variables.color8};
        }
        .content {
            max-width: 460px;

            h2 {
                ${H2Styles};
                text-transform: uppercase;
                color: ${Variables.black};
                margin-bottom: 12px;
            }
            p {
                ${PSecondary}
                color: ${Variables.black};
                white-space: pre-wrap;
            }
        }

        ${(props) =>
            props.imgRight === 'right' &&
            css`
                flex-direction: row-reverse;
            `}
    }
`;

export default function ImageContentModule({ ...props }) {
    return (
        <ICMContainer id={props.id} imgRight={props.imgRight}>
            <div className='ICMInnerContainer'>
                <img src={props.imgSrc} alt={props.altTxt} />
                <div className='content'>
                    <h2>{props.heading}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </ICMContainer>
    );
}
