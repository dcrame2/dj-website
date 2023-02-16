import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { PSecondary, H2Styles, H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const glow = keyframes`
  
        /* from {
            text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 150px #0008e6,
                0 0 40px #0008e6, 0 0 50px #0008e6, 0 0 30px #0008e6,
                0 0 70px #0008e6;
        }
        to {
            text-shadow: 0 0 20px #fff, 0 0 10px #00d9ff, 0 0 20px #00d9ff,
                0 0 50px #00d9ff, 0 0 30px #00d9ff, 0 0 350px #00d9ff,
                0 0 40px #00d9ff;
        } */
        
        from {
            text-shadow: 0 0 10px #fff, 0 0 12px #fff, 0 0 15px #fff, 0 0 18px #fff, 0 0 200px #fff, 0 0 23px #003F91, 0 0 26px #003F91;
        }
  
         to {
             text-shadow: 0 0 12px #fff, 0 0 14px #fff, 0 0 20px #fff, 0 0 18px #fff, 0 0 20px #fff, 0 0 22px #fff, 0 0 24px #003F91;
        }
`;

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
      text-align: center;
      display: block;
      color: ${Variables.color2};
      &.cursive {
        font-family: ${Variables.Pacifico};
        -webkit-animation: ${glow} 1s ease-in-out alternate;
        -moz-animation: ${glow} 1s ease-in-out alternate;
        animation: ${glow} 1s ease-in-out alternate;
        animation-fill-mode: forwards;
        font-size: 8rem;
        line-height: 93px;
        display: inline-block;

        @media (max-width: 1104px) {
          font-size: 4rem;
          line-height: 73px;
        }

        @media (max-width: 788px) {
          font-size: 3rem;
        }

        @media (max-width: 539px) {
          line-height: 55px;
        }
      }
    }
    /* h1 {
      ${H1Styles}
      text-transform: uppercase;
      @media ${MediaQueries.mobile} {
        font-size: 3.5rem;
      }
    } */
    p {
      ${PSecondary}
    }
    hr {
      color: ${Variables.color1};
      height: 6px;
      width: 100px;
      background-color: ${Variables.color1};
      border: none;
    }
  }
  .inner-link-container {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      @media ${MediaQueries.mobile} {
        flex-direction: column;
      }
      &.active {
        flex-direction: column;
        z-index: 1;
        gap: 8px;
        justify-content: normal;
        gap: 0;
        li {
          text-transform: uppercase;
          height: unset;
          min-width: unset;
          color: ${Variables.color2};
          background-color: ${Variables.white};
          border-bottom: 2px solid ${Variables.color2};
          border-top: 2px solid ${Variables.color2};
          border-right: 2px solid ${Variables.color2};
          padding: 5px;
          @media ${MediaQueries.mobile} {
            background-color: ${Variables.white};
            color: ${Variables.color2};
            border-bottom: 1px solid ${Variables.color2};
            border-top: 1px solid ${Variables.color2};
            border-right: 1px solid ${Variables.color2};
          }

          a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            max-width: 300px;
            width: 100%;
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
          background-color: ${Variables.color1};
          color: ${Variables.color4};
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
              max-width: 40px;
            }
            @media ${MediaQueries.mobile} {
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
      transition: all ease 0.5s;
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
        transition: all ease 0.5s;
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
        transition: all ease 0.5s;
        display: flex;
      }
      &.hide {
        transition: all ease 0.5s;
        display: none;
      }
    }
  }
`;

const ServiceHero = ({ data, active }) => {
  // main nav
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const controls = useAnimationControls();

  //side nav
  const sideRef = useRef(null);
  const isInViewSide = useInView(sideRef, { once: true, amount: 0 });
  const sideControls = useAnimationControls();

  const [showSideItems, setShowSideItems] = useState(false);
  const [activeTransition, setActiveTransition] = useState(false);

  const showHideHandler = () => {
    setShowSideItems(!showSideItems);
    setActiveTransition(!activeTransition);
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateY: "0px" });
    }
  }, [isInView]);
  const [targetId, setTargetId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location, targetId]);

  return (
    <FullScreenContainer>
      <div className="inner-container">
        <h1 className="cursive">{data.heading}</h1>
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
              <ul className={`${active && showSideItems ? "active" : ""}`}>
                {data.serviceLinks.map((links, index) => {
                  const closeSideTab = () => {
                    setTargetId(links.serviceHref);
                    setShowSideItems(false);
                  };
                  return (
                    <motion.li
                      onClick={closeSideTab}
                      id={`#${links.serviceHref}`}
                      initial={{
                        opacity: 0,
                        translateY: "200px",
                      }}
                      animate={{
                        opacity: 1,
                        translateY: "0px",
                      }}
                      transition={{ delay: `.${index}00` }}
                      key={index}
                    >
                      <Link to={`#${targetId}`}>
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
            <ul className={`${active && showSideItems ? "active" : ""}`}>
              {data.serviceLinks.map((links, index) => {
                const closeSideTab = () => {
                  setTargetId(links.serviceHref);
                  setShowSideItems(false);
                };
                return (
                  <motion.li
                    onClick={closeSideTab}
                    id={`#${links.serviceHref}`}
                    initial={{
                      opacity: 0,
                      translateY: "200px",
                    }}
                    animate={{
                      opacity: 1,
                      translateY: "0px",
                    }}
                    transition={{ delay: `.${index}00` }}
                    key={index}
                  >
                    <Link to={`#${targetId}`}>
                      <div className="icon-container">
                        <img src={links.serviceIcon} alt="" />
                      </div>
                      <p>{links.serviceName}</p>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div
              className={`${
                showSideItems ? "show tab-container" : "hide  tab-container"
              }`}
            >
              <div className="side-wrapper">
                <ul ref={ref}>
                  {data.serviceLinks.map((links, index) => {
                    return (
                      <motion.li
                        id={`#${links.serviceHref}`}
                        onClick={() => setTargetId(links.serviceHref)}
                        initial={{
                          opacity: 0,
                          translateY: "200px",
                        }}
                        animate={controls}
                        transition={{ delay: `.${index}00` }}
                        key={index}
                      >
                        <Link to={`#${targetId}`}>
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
          </div>
        )}
      </div>
    </FullScreenContainer>
  );
};

export default ServiceHero;
