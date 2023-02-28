import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { PSecondary, H2Styles, H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
const glow = keyframes`
        
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
  gap: 50px;
  ${Container}
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
      ${H1Styles}
      font-size: 15rem;
      text-transform: uppercase;
      color: ${Variables.color4};
    }
    p {
      ${PSecondary}
    }
    hr {
      margin-top: 50px;
      color: ${Variables.color1};
      height: 6px;
      width: 100px;
      background-color: ${Variables.color1};
      border: none;
    }
  }
  .inner-link-container {
    width: 100%;
    max-height: 250px;
    height: 100%;
    @media ${MediaQueries.tablet} {
      max-height: 150px;
    }
    @media (max-width: 875px) {
      max-height: unset;
      height: unset;
    }
    @media ${MediaQueries.mobile} {
      /* width: unset; */
    }
    ul {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      @media (max-width: 875px) {
        flex-direction: column;
        gap: 15px;
      }
      @media ${MediaQueries.mobile} {
        flex-direction: column;
        gap: 12px;
      }
      li {
        box-shadow: 0px 5px 15px -5px ${Variables.color4};
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${Variables.white};
        text-align: center;
        background-color: ${Variables.color2};
        width: 100%;
        max-width: 200px;
        height: auto;
        transform: perspective(150px) rotateY(-10deg);
        transform-style: preserve-3d;
        transition: all 0.3s ease-in;

        height: 100%;
        @media (max-width: 875px) {
          transform: unset;
          max-width: unset;
        }
        @media ${MediaQueries.tablet} {
          min-height: 50px;
          height: 100%;
          width: 100%;
          box-shadow: 10px 0px 15px -5px ${Variables.color4};
          /* max-width: 400px; */
        }

        &:nth-child(1) {
          z-index: 9;
          &:hover {
            z-index: 10;
          }
        }
        &:nth-child(2) {
          z-index: 8;
          &:hover {
            z-index: 10;
          }
        }
        &:nth-child(3) {
          z-index: 7;
          &:hover {
            z-index: 10;
          }
        }
        &:nth-child(4) {
          z-index: 6;
          &:hover {
            z-index: 10;
          }
        }
        &:nth-child(5) {
          z-index: 5;
          &:hover {
            z-index: 10;
          }
        }
        &:nth-child(6) {
          z-index: 4;
          &:hover {
            z-index: 10;
          }
        }

        &:hover,
        :focus {
          &:after {
            height: 100%;
            transition: height ease-out 0.1s;
          }
        }

        &:focus {
          &:after {
            transition: height ease 1s;
          }
        }

        &:hover {
          border: 3px solid ${Variables.white};
          z-index: 2;
          background-color: ${Variables.color1};
          color: ${Variables.color4};
          transition: all 0.8s ease;
          transform: scale(1.3);
          &:before {
            display: none;
          }
          @media ${MediaQueries.mobile} {
            transform: scale(1.08);
          }
        }
        &::before {
          width: 20%;
          /* transform-origin: left center; */
          transform: perspective(150px) rotateY(45deg) translateX(100%);
          position: absolute;
          content: "";
          right: -15px;
          height: 120%;
          border-top: 5px solid ${Variables.color4};
          border-right: 5px solid ${Variables.color4};
          border-bottom: 5px solid ${Variables.color4};
          border-left: 5px solid ${Variables.color4};
          transform-style: preserve-3d;
          transition: all 0.8s ease-in;
          background-color: ${Variables.color2};
          @media ${MediaQueries.tablet} {
            right: -10px;
            height: 118%;
          }
          @media (max-width: 875px) {
            /* display: none; */
            width: 100.8%;
            height: 168%;
            transform: rotateX(80deg) translateY(100%) perspective(150px)
              skewX(-10deg);
            /* translateX(45deg); */
            right: -8px;
            top: -60px;
          }
          @media ${MediaQueries.tablet} {
            /* box-shadow: 3px 0px 12px 2px ${Variables.color4}; */
          }
        }
        &::after {
          content: "";
          background-color: ${Variables.color1};
          position: absolute;
          width: 100%;
          height: 0;
          left: 0;
          bottom: 0;
          transition: all 0.8s ease-in;
          z-index: 0;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }

        a {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
          gap: 15px;
          @media ${MediaQueries.tablet} {
            width: 75%;
          }
          @media (max-width: 875px) {
            flex-direction: row;
          }

          @media ${MediaQueries.mobile} {
            flex-direction: row;
          }
          .icon-container {
            max-width: 60px;
            @media ${MediaQueries.tablet} {
              max-width: 40px;
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
      color: ${Variables.white};
      width: 20px;
      border-right: 1px solid ${Variables.color2};
      border-top: 1px solid ${Variables.color2};
      border-bottom: 1px solid ${Variables.color2};
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
`;

const ServiceHeroV2 = ({ data, active }) => {
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
      controls.start({
        opacity: 1,
        translateY: "0px",
        transform: "perspective(150px) rotateY(-10deg)",
      });
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
    <>
      <FullScreenContainer>
        <div className="inner-container">
          <h1 className="cursive">{data.heading}</h1>
          {/* <p>{data.subheading}</p> */}
          <hr />
        </div>
        <div className="inner-link-container">
          <ul>
            {data.serviceLinks.map((links, index) => {
              const closeSideTab = () => {
                setTargetId(links.serviceHref);
                setShowSideItems(false);
              };
              return (
                <motion.li
                  onClick={closeSideTab}
                  id={`#${links.serviceHref}`}
                  // initial={{
                  //   opacity: 0,
                  //   translateY: "200px",
                  //   transform: "perspective(150px) rotateY(-10deg)",
                  // }}
                  // animate={{
                  //   transform: "perspective(150px) rotateY(-10deg)",
                  //   opacity: 1,
                  //   translateY: "0px",
                  // }}
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
      </FullScreenContainer>

      {active ? (
        <SideBar
          showSideItems={showSideItems}
          showHideHandler={showHideHandler}
          targetId={targetId}
          ref={ref}
          data={data}
          isInView={isInView}
          controls={controls}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ServiceHeroV2;
