import styled, { css } from "styled-components";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import { H1Styles, PBaseStyles, PSecondary, H2Styles } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const ICMContainer = styled.section`
  position: relative;
  /* width: 100%; */
  background-color: ${Variables.color20};
  h2 {
    ${H2Styles};
    text-transform: uppercase;
    color: ${(props) => props.color};
    margin-bottom: 12px;
    text-align: center;
    @media ${MediaQueries.mobile} {
      font-size: 3rem;
    }
  }
  .ICMInnerContainer {
    ${Container}
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* gap: 30px; */
    max-width: 1050px;
    padding-top: 50px;
    @media ${MediaQueries.tablet} {
      flex-direction: column;
      gap: 48px;
    }

    @media ${MediaQueries.mobile} {
      gap: 42px;
    }
    .ICMImgContainer {
      display: flex;
      flex-direction: column;
      gap: 100px;
      @media ${MediaQueries.mobile} {
        align-items: center;
        gap: 20px;
        flex-direction: row;
        ${(props) =>
          props.imgPlacement === "right" &&
          css`
            flex-direction: row-reverse;
          `}
      }
      img {
        background-color: ${Variables.color1};
        max-width: 400px;
        /* width: 40%; */
        width: 100%;
        height: auto;
        border-radius: 15px;
        float: left;
        box-shadow: 1px 1px 10px 2px ${(props) => props.color};
        -webkit-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
        -moz-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
        @media ${MediaQueries.mobile} {
          max-width: 260px;
          height: 100%;
        }
      }
      .highlight-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        ${PSecondary}
        @media ${MediaQueries.mobile} {
          gap: 12px;
          font-size: 14px;
          flex-direction: column;
        }
        .highlight-items {
          background-color: ${(props) => props.color};
          color: ${(props) => props.bgColor};
          display: flex;
          justify-content: center;
          align-items: center;
          /* border: 1px solid ${Variables.white}; */
          text-align: center;
          border-radius: 20%;
          height: 100px;
          width: 100px;
          box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          -webkit-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          -moz-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          @media ${MediaQueries.mobile} {
            width: 70px;
            height: 60px;
            font-size: 12px;
          }
        }
      }
    }
    .content {
      max-width: 460px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        ${PSecondary}
        line-height: 30px;
        /* font-size: 2.rem; */
        color: ${(props) => props.color};
        white-space: pre-wrap;
      }
      img {
        width: 75px;
        background-color: unset;
        box-shadow: unset;
        border-radius: unset;
        @media ${MediaQueries.mobile} {
          display: none;
        }
      }
      ul {
        ${PSecondary}
        color: ${(props) => props.color};
        white-space: pre-wrap;
        li {
          line-height: 30px;
          /* font-size: 2.2rem; */
          margin-left: 20px;
        }
      }
    }

    ${(props) =>
      props.imgPlacement === "right" &&
      css`
        flex-direction: row-reverse;
      `}
  }
`;

export default function ImageContentModule({ ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //   console.log(props.color);
  let translation; // set translation based on image placement prop

  {
    props.imgPlacement === "right"
      ? (translation = "translateX(200px)")
      : (translation = "translateX(-200px)");
  }

  return (
    <ICMContainer
      color={props.color}
      bgColor={props.bgColor}
      id={props.id}
      imgPlacement={props.imgPlacement}
    >
      <h2>{props.heading}</h2>
      <div className="ICMInnerContainer" ref={ref}>
        <div className="ICMImgContainer">
          <img
            src={props.imgSrc}
            alt={props.altTxt}
            style={{
              transform: isInView ? "none" : translation,
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
          <div className="highlight-container">
            {props.highlights.map((list, index) => {
              return (
                <div className="highlight-items" key={`${index}`}>
                  {list}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <p>{props.content}</p>

          <ul>
            {props.factList.map((list, index) => {
              return <li key={`${index}`}>{list}</li>;
            })}
          </ul>
        </div>
      </div>
    </ICMContainer>
  );
}
