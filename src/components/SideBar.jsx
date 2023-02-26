import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import { PSecondary } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SideBarContainer = styled.div`
  display: flex;

  &.active {
    flex-direction: row-reverse;
    z-index: 2;
    gap: 0;
    position: fixed;
    top: 200px;
    left: 0;
    margin-left: -215px;
    transition: margin-left 0.4s ease-in-out;
    @media ${MediaQueries.mobile} {
      margin-left: -185px;
    }
    .tab-container {
      max-width: 75px;
      button {
        letter-spacing: 1.1px;
        font-weight: bold;
        color: ${Variables.white};
        text-transform: uppercase;
        margin-top: 23px;
        margin-left: -23px;
        transform: rotate(-90deg);
        cursor: pointer;
        padding: 12px 8px;
        border-radius: 8px 8px;
        border-right: 3px solid ${Variables.white};
        border-left: 3px solid ${Variables.white};
        border-bottom: 3px solid ${Variables.white};
        background-color: ${Variables.color1};
        @media ${MediaQueries.mobile} {
          padding: 4px 8px;
          margin-top: 34px;
          margin-left: -32px;
        }
      }
    }
    ul {
      transition: margin-left 0.4s ease-in-out;
      &.show-side {
        margin-left: 215px;
        transition: margin-left 0.4s ease-in-out;
        @media ${MediaQueries.mobile} {
          margin-left: 185px;
        }
      }
      li {
        width: 100%;
        text-transform: uppercase;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid ${Variables.white};
        text-align: center;
        background-color: ${Variables.color2};
        padding: 10px 20px;
        max-width: 215px;
        background-color: ${Variables.white};
        color: ${Variables.color2};
        border-bottom: 1px solid ${Variables.color2};
        border-top: 1px solid ${Variables.color2};
        border-right: 1px solid ${Variables.color2};
        @media ${MediaQueries.mobile} {
          max-width: 185px;
        }
        &:hover {
          background-color: ${Variables.color1};
          color: ${Variables.color4};
          transition: background-color 0.3s ease-in;
        }
        a {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 15px;
          @media ${MediaQueries.mobile} {
            flex-direction: row;
          }
          .icon-container {
            max-width: 100px;
            @media ${MediaQueries.tablet} {
              max-width: 40px;
            }

            img {
              width: 30px;
              @media ${MediaQueries.mobile} {
                display: none;
              }
            }
          }
          p {
            white-space: nowrap;
            text-align: center;
            ${PSecondary}
            font-size: 1.25rem;
            @media ${MediaQueries.tablet} {
              /* font-size: 1.25rem; */
              text-align: left;
            }
          }
        }
      }
    }
  }
`;

const SideBar = ({
  active,
  data,
  // targetId,
  // setTargetId,
  ref,
  isInView,
  controls,
  showHideHandler,
  showSideItems,
}) => {
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
    <SideBarContainer className="active">
      <div className="tab-container">
        <button onClick={showHideHandler}>Services</button>
      </div>
      <ul className={`${showSideItems ? "show-side" : ""}`}>
        {data.serviceLinks.map((links, index) => {
          const closeSideTab = () => {
            setTargetId(links.serviceHref);
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
    </SideBarContainer>
    // </div>
  );
};

export default SideBar;
