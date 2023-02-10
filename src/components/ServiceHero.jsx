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
  scroll-snap-align: start;
  /* background-color: ${(props) => props.bgColor}; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${Container}
  @media ${MediaQueries.mobile} {
    padding-top: 125px;
    padding-bottom: 125px;
    height: auto;
  }
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    h1 {
      ${H1Styles}
      text-transform: uppercase;
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
      @media ${MediaQueries.mobile} {
        flex-direction: column;
      }
      &.active {
        flex-direction: column;
        z-index: 1;
        gap: 8px;
        justify-content: normal;

        li {
          text-transform: uppercase;
          max-width: 260px;
          background-color: ${Variables.color10};
          /* padding-left: 15px; */
          border-bottom: 1px solid #fff;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          padding: 5px;
          &:nth-child(1) {
            margin-bottom: unset;
          }
          &:nth-child(2) {
            margin-top: unset;
          }

          &:nth-child(3) {
            margin-bottom: unset;
          }
          &:nth-child(4) {
            margin-top: unset;
          }

          &:nth-child(5) {
            margin-bottom: unset;
          }
          &:nth-child(6) {
            margin-top: unset;
          }

          &:nth-child(7) {
            margin-bottom: unset;
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
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border: 1px solid ${Variables.white};
        text-align: center;
        background-color: ${Variables.color2};
        width: 100%;
        padding: 15px 25px;
        max-width: 200px;

        &:nth-child(1) {
          margin-bottom: 80px;
        }
        &:nth-child(2) {
          margin-top: 80px;
        }

        &:nth-child(3) {
          margin-bottom: 80px;
        }
        &:nth-child(4) {
          margin-top: 80px;
        }

        &:nth-child(5) {
          margin-bottom: 80px;
        }
        &:nth-child(6) {
          margin-top: 80px;
        }

        &:nth-child(7) {
          margin-bottom: 80px;
        }
        @media ${MediaQueries.mobile} {
          max-width: unset;
          &:nth-child(1) {
            margin-bottom: unset;
          }
          &:nth-child(2) {
            margin-top: unset;
          }

          &:nth-child(3) {
            margin-bottom: unset;
          }
          &:nth-child(4) {
            margin-top: unset;
          }

          &:nth-child(5) {
            margin-bottom: unset;
          }
          &:nth-child(6) {
            margin-top: unset;
          }

          &:nth-child(7) {
            margin-bottom: unset;
          }
        }
        &:hover {
          background-color: ${Variables.color9};
          transition: background-color 0.3s ease-in;
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
            img {
              width: 100%;
              /* @media (max-width: 1450px) {
              width: 100px;
            } */
              @media ${MediaQueries.mobile} {
                max-width: 30px;
              }
            }
          }
          p {
            text-align: center;
            ${PSecondary}
            background-color: ${Variables.color2};
            @media ${MediaQueries.mobile} {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
    .side-wrapper {
      position: fixed;
      left: 0;
      bottom: 225px;
      z-index: 1;
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

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateY: "0px" });
      console.log("top");
    }
  }, [isInView, active]);

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
        ) : (
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
        )}
      </div>
    </FullScreenContainer>
  );
};

export default ServiceHero;
