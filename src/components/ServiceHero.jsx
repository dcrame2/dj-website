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
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${MediaQueries.mobile} {
    padding-top: 125px;
  }
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    h1 {
      ${H1Styles}
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
      gap: 15px;

      &.active {
        flex-direction: column;
        z-index: 1;
        gap: 8px;
        justify-content: normal;

        li {
          max-width: 260px;
          background-color: ${Variables.color10};
          /* padding-left: 15px; */
          border-bottom: 1px solid #fff;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          padding: 5px;
          a {
            flex-direction: row;

            img {
              width: 30px;
            }
            p {
              text-align: left;
            }
          }
        }
      }
      li {
        border: 1px solid ${Variables.color10};
        padding: 10px;
        width: 100%;
        max-width: 150px;
        list-style-type: none;
        background-color: ${Variables.black};
        transition: background-color 0.3s ease-in;
        &:hover {
          background-color: ${Variables.color9};
          transition: background-color 0.3s ease-in;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          img {
            width: 45px;
          }
          p {
            text-align: center;
            ${PSecondary}
            font-size: 14px;
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
      controls.start({ opacity: 1, translateX: "0px" });
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
                      translateX: "-200px",
                    }}
                    animate={{
                      opacity: 1,
                      translateX: "0px",
                    }}
                    transition={{ delay: `.${index}00` }}
                    key={index}
                  >
                    <Link to={links.serviceHref}>
                      <img src={links.serviceIcon} alt="" />
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
                    translateX: "-200px",
                  }}
                  animate={controls}
                  transition={{ delay: `.${index}00` }}
                  key={index}
                >
                  <a href={links.serviceHref}>
                    <img src={links.serviceIcon} alt="" />
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
