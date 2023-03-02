import styled, { css } from "styled-components";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import { H1Styles, PBaseStyles, PSecondary, H2Styles } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import {
  motion,
  useInView,
  useTime,
  useTransform,
  useScroll,
  useSpring,
  useAnimationControls,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const Wrapper = styled.div``;

const ICMContainer = styled.section`
  position: relative;
  /* width: 100%; */
  background-color: ${Variables.transparent};
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
  hr {
    color: ${Variables.color1};
    height: 6px;
    width: 100px;
    background-color: ${Variables.color1};
    border: none;
  }
  .ICMInnerContainer {
    ${Container}
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      gap: 50px;
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
        font-size: 1.25rem;
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
          font-weight: bold;
          /* border: 1px solid ${Variables.white}; */

          font-size: 1.25rem;
          text-align: center;
          text-transform: uppercase;
          border-radius: 20%;
          height: 100px;
          width: 100px;
          box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          -webkit-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          -moz-box-shadow: 1px 1px 10px 2px ${(props) => props.color};
          @media ${MediaQueries.mobile} {
            width: 70px;
            height: 60px;
            font-size: 9px;
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

  const [isInViewHighlights, setIsInViewHighlights] = useState(false);

  const highlightsRef = useRef(null);
  const inView = useInView(highlightsRef, { once: true });
  // const animationRef = useRef(null);

  useEffect(() => {
    if (inView && !isInViewHighlights) {
      setIsInViewHighlights(true);
    }
  }, [inView, isInViewHighlights]);

  const time = useTime({ pause: !isInViewHighlights });
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: true });

  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "center center"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // console.log(y);
  // console.log(hightlightsRef);

  // useEffect(() => {
  //   if (isInViewHighlights) {
  //     animationRef.current.resume();
  //   } else {
  //     animationRef.current.pause();
  //   }
  // }, [isInViewHighlights]);

  {
    props.imgPlacement === "right"
      ? (translation = "translateX(200px)")
      : (translation = "translateX(-200px)");
  }

  return (
    <Wrapper
      style={
        {
          // height: "80vh",
        }
      }
      ref={headerRef}
    >
      <motion.div
        style={{
          // height: "80vh",
          backgroundSize: "cover",
          backgroundImage: "/images/background.jpg",
        }}
        className="test"
      >
        <ICMContainer
          as={motion.section}
          color={props.color}
          bgColor={props.bgColor}
          id={props.id}
          imgPlacement={props.imgPlacement}
          style={{ scaleX }}
        >
          <motion.h2
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {props.heading}
          </motion.h2>
          <hr />
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
              <div className="highlight-container" ref={highlightsRef}>
                {props.highlights.map((list, index) => {
                  return (
                    <motion.div
                      // ref={animationRef}
                      // animate={controls}
                      style={{
                        transform: isInView ? "none" : translation,
                        opacity: isInView ? 1 : 0,
                        transition: `all 0.${
                          index + 3
                        }s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index + 3}s`,
                      }}
                      className="highlight-items"
                      key={`${index}`}
                    >
                      {list}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="content">
              <p>{props.content}</p>

              <ul>
                {props.factList.map((list, index) => {
                  return (
                    <li
                      style={{
                        transform: isInView ? "none" : translation,
                        opacity: isInView ? 1 : 0,
                        transition: `all 0.${
                          index + 3
                        }s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index + 3}s`,
                      }}
                      key={`${index}`}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ICMContainer>
      </motion.div>
    </Wrapper>
  );
}
