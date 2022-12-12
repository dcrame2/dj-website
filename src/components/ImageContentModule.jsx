import styled, { css } from "styled-components";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import { H3Styles, PSecondary } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";

const ICMContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${Variables.color7};

  .ICMInnerContainer {
    ${Container}
    padding-top: 85px;
    padding-bottom: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 85px;

    @media ${MediaQueries.tablet} {
      flex-direction: column;
    }

    @media ${MediaQueries.mobile} {
      gap: 42px;
    }

    @media (min-width: ${Variables.desktopW}) {
      padding-top: 85px;
      padding-bottom: 85px;
    }

    img {
      background-color: ${Variables.color1};
      max-width: 540px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      border-radius: 15px;
      box-shadow: 1px 1px 10px 2px ${Variables.color8};
      -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color8};
      -moz-box-shadow: 1px 1px 10px 2px ${Variables.color8};
    }
    .content {
      ${MediaQueries.desktop} {
        margin-right: auto;
      }

      h2 {
        ${H3Styles}
        color: ${Variables.black};
        margin-bottom: 12px;
      }
      p {
        ${PSecondary}
        color: ${Variables.black};
        max-width: 400px;
      }
    }

    ${(props) =>
      props.imgRight === "right" &&
      css`
        flex-direction: row-reverse;

        .content {
          @media ${MediaQueries.desktop} {
            margin-left: auto;
            margin-right: unset;
          }
        }
      `}
  }
`;

export default function ImageContentModule({ ...props }) {
  return (
    <ICMContainer imgRight={props.imgRight}>
      <div className="ICMInnerContainer">
        <img src={props.imgSrc} alt={props.altTxt} />
        <div className="content">
          <h2>{props.heading}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </ICMContainer>
  );
}
