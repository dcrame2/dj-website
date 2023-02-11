import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { PSecondary, H2Styles, H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${Container}
  /* @media ${MediaQueries.mobile} {
    height: auto;
  } */
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    h1 {
      ${H1Styles}
      text-transform: uppercase;
      @media ${MediaQueries.mobile} {
        font-size: 3.5rem;
      }
    }
    p {
      ${PSecondary}
    }
    hr {
      width: 75%;
    }
  }
  .inner-link-container {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* gap: 15px; */
      flex-wrap: wrap;
      @media ${MediaQueries.mobile} {
        flex-direction: column;
      }
      &.active {
        flex-direction: column;
        z-index: 1;
        gap: 8px;
        justify-content: normal;
        @media ${MediaQueries.mobile} {
          /* margin-right: -200px; */
          gap: 0;
        }
        li {
          text-transform: uppercase;
          height: unset;
          min-width: unset;
          background-color: ${Variables.color2};
          border-bottom: 1px solid ${Variables.white};
          border-top: 1px solid ${Variables.white};
          border-right: 1px solid ${Variables.white};
          padding: 5px;
          @media ${MediaQueries.mobile} {
            background-color: ${Variables.white};
            color: ${Variables.color2};
            border-bottom: 1px solid ${Variables.color2};
            border-top: 1px solid ${Variables.color2};
            border-right: 1px solid ${Variables.color2};
          }

          a {
            flex-direction: row;
            .icon-container {
              img {
                width: 30px;
              }
            }
            p {
              text-align: left;
            }
          }
        }
      }
      li {
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${Variables.white};
        text-align: center;
        background-color: ${Variables.color2};
        width: 100%;
        padding: 15px 25px;
        max-width: 250px;
        min-width: 150px;
        height: 250px;
        &:hover {
          background-color: ${Variables.color9};
          transition: background-color 0.3s ease-in;
        }
        @media ${MediaQueries.mobile} {
          height: unset;
          background-color: ${Variables.white};
          color: ${Variables.color2};
          border-bottom: 1px solid ${Variables.color2};
          border-top: 1px solid ${Variables.color2};
          border-right: 1px solid ${Variables.color2};
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 15px;
          @media ${MediaQueries.mobile} {
            flex-direction: row;
          }
          .icon-container {
            max-width: 100px;
            @media ${MediaQueries.tablet} {
              max-width: 30px;
              display: none;
            }
            img {
              width: 100%;
            }
          }
          p {
            text-align: center;
            ${PSecondary}
            @media ${MediaQueries.tablet} {
              font-size: 1.25rem;
              text-align: left;
            }
          }
        }
      }
    }
    .side-wrapper {
      position: fixed;
      left: 0;
      top: 225px;
      z-index: 1;
      display: flex;
      flex-direction: row-reverse;

      @media ${MediaQueries.tablet} {
        top: 125px;
      }

      button {
        padding: 2px;
        height: 75px;
        background-color: ${Variables.color1};
        color: ${Variables.white}l;
        width: 20px;
        border-right: 1px solid ${Variables.white};
        border-top: 1px solid ${Variables.white};
        border-bottom: 1px solid ${Variables.white};
      }
    }
    .tab-container {
      &.show {
        display: flex;
      }
      &.hide {
        display: none;
      }
    }
  }
`;

const ServiceHero = ({ data, scrollPosition, active, reRender }) => {
  // main nav
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const controls = useAnimationControls();

  //side nav
  const sideRef = useRef(null);
  const isInViewSide = useInView(sideRef, { once: true, amount: 0 });
  const sideControls = useAnimationControls();

  const [showSideItems, setShowSideItems] = useState(false);

  const showHideHandler = () => {
    setShowSideItems(!showSideItems);
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateY: "0px" });
      console.log("Fire");
    }
  }, [isInView]);

  console.log(scrollPosition);

  return (
    <FullScreenContainer>
      <div className="inner-container">
        <h1>{data.heading}</h1>
        <p>{data.subheading}</p>
        <hr />
      </div>
      <div className="inner-link-container">
        {active ? (
          <div className="side-wrapper">
            <button onClick={showHideHandler}>{">"}</button>
            <div
              className={`${
                showSideItems ? "show tab-container" : "hide tab-container"
              }`}
            >
              <ul className={`${active ? "active" : ""}`}>
                {data.serviceLinks.map((links, index) => {
                  return (
                    <motion.li
                      initial={{
                        opacity: 0,
                        translateY: "300px",
                      }}
                      animate={{
                        opacity: 1,
                        translateY: "0px",
                      }}
                      transition={{ delay: `.${index}00` }}
                      key={index}
                    >
                      <Link to={links.serviceHref}>
                        <div className="icon-container">
                          <img src={links.serviceIcon} alt="" />
                        </div>
                        <p>{links.serviceName}</p>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            {/* <button onClick={showHideHandler}>{">"}</button> */}
            <div
              className={`${
                showSideItems ? "show tab-container" : "show hide tab-container"
              }`}
            >
              <div className="side-wrapper">
                <ul ref={ref}>
                  {data.serviceLinks.map((links, index) => {
                    return (
                      <motion.li
                        initial={{
                          opacity: 0,
                          translateY: "200px",
                        }}
                        animate={controls}
                        transition={{ delay: `.${index}00` }}
                        key={index}
                      >
                        <a href={links.serviceHref}>
                          <div className="icon-container">
                            <img src={links.serviceIcon} alt="" />
                          </div>
                          <p>{links.serviceName}</p>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </FullScreenContainer>
  );
};

export default ServiceHero;
