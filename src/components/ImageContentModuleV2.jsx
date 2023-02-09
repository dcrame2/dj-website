import styled, { css } from "styled-components";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import { H1Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ICMContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: ${Variables.color20};
  h2 {
    ${H1Styles};
    text-transform: uppercase;
    color: ${(props) => props.color};
    margin-bottom: 12px;
    text-align: center;
  }
  .ICMInnerContainer {
    ${Container}
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    max-width: 1200px;
    padding-top: 50px;
    @media ${MediaQueries.tablet} {
      flex-direction: column;
      gap: 48px;
    }

    @media ${MediaQueries.mobile} {
      gap: 42px;
    }

    img {
      background-color: ${Variables.color1};
      max-width: 600px;
      /* width: 40%; */
      width: 100%;
      height: auto;
      border-radius: 15px;
      /* box-shadow: 1px 1px 10px 2px ${Variables.color8};
      -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color8};
      -moz-box-shadow: 1px 1px 10px 2px ${Variables.color8}; */
    }

    .content {
      max-width: 460px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        ${PSecondary}
        line-height: 30px;
        font-size: 2.2rem;
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
          font-size: 2.2rem;
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
  console.log(props.color);
  let translation; // set translation based on image placement prop
  {
    props.imgPlacement === "right"
      ? (translation = "translateX(200px)")
      : (translation = "translateX(-200px)");
  }

  return (
    <ICMContainer
      color={props.color}
      id={props.id}
      imgPlacement={props.imgPlacement}
    >
      <h2>{props.heading}</h2>
      <div className="ICMInnerContainer" ref={ref}>
        <img
          src={props.imgSrc}
          alt={props.altTxt}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
        <div className="content">
          <img src={props.imgIcon} alt="" srcset="" />
          <p>{props.content}</p>

          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </ICMContainer>
  );
}
