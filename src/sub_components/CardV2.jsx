import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Variables, tabletWidthInt } from "../styles/Variables";
import LinkButtonV2 from "./LinkButtonV2";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { MediaQueries } from "../styles/Utilities";
import { H2Styles, PSecondary, H3Styles } from "../styles/Type";

const CardWrapper = styled.div`
  button {
    border: unset;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    background-color: ${Variables.color12};
    border: 1px solid ${Variables.color10};
    color: ${Variables.white};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 45px;
    border-radius: 40px;
    max-width: 540px;
    transition: background-color ease 0.7s;
    /* transition: background-color ease 0.45s; */
    /* background-color: ${Variables.color10}; */
    height: 400px;
    box-shadow: 1px 1px 10px 2px ${Variables.color1};
    -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color1};
    -moz-box-shadow: 1px 1px 10px 2px ${Variables.color1};

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    @media ${MediaQueries.desktop} {
      flex: 1 1 0px;
    }

    @media ${MediaQueries.mobile} {
      border-radius: 30px;
    }

    &:hover {
      @media ${MediaQueries.desktop} {
        /* background-color: ${Variables.color10}; */
        transition: background-color ease 0.45s;
      }
    }
    @media (max-width: 767px) {
      width: unset;
      padding: 34px;
    }
    img {
      position: relative;
      max-width: 300px;
      height: auto;
      opacity: 0.8;
      width: 100%;
      /* min-height: 100px; */

      @media ${MediaQueries.tablet} {
        max-width: 250px;
      }
      @media ${MediaQueries.mobile} {
        max-width: 200px;
      }
    }
    &:nth-child(1) {
      span.num {
        ${H2Styles}
        color: ${Variables.color3};
      }
    }
    &:nth-child(2) {
      span.num {
        ${H2Styles}
        color: ${Variables.color3};
      }
    }
    &:nth-child(3) {
      span.num {
        ${H2Styles}
        color: ${Variables.color1};
      }
    }
    h2 {
      ${H3Styles}
      color: ${Variables.white};
      text-transform: uppercase;
    }

    .dropdown {
      display: flex;
      flex-direction: column;
      gap: 25px;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.26s ease, opacity ease 0.25s;
      max-height: 245px; // TODO: find solution to using auto height :)
      transition: max-height 0.25s ease, opacity ease 0.26s;
      opacity: 1;
      p {
        /* color: ${Variables.color1}; */
        font-family: ${Variables.joseph};
        font-size: 1.75rem;
        line-height: 25px;
        overflow: hidden;
      }
    }
    &.active {
      transition: background-color ease 0.45s;
      background-color: ${Variables.color10};
      height: 400px;
      /* height: 100%; */
      .dropdown {
        max-height: 245px; // TODO: find solution to using auto height :)
        transition: max-height 0.25s ease, opacity ease 0.26s;
        opacity: 1;
      }
    }
  }
`;

export default function CardV2({ index, active, data, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const [isInViewFired, setIsInViewFired] = useState(false);
  const [initial, setInitial] = useState({ opacity: 0, scale: 0.5 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      setIsInViewFired(true);
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }

    if (isInViewFired) {
      setInitial({ opacity: 1, scale: 1 });
    }
  }, [isInView, isInViewFired]);

  return (
    <CardWrapper ref={ref}>
      <motion.button
        // className="active"
        onClick={() => onClick(index)}
        initial={initial}
        animate={controls}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            opacity: 0,
          },
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
          delay: `.${index}`,
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
      >
        {data.img ? <img src={`${data.img}`} alt={data.alt} /> : ""}
        {/* <span className="num">{data.num}</span> */}
        <h2>{data.name}</h2>
        <span className="dropdown">
          <p>{data.desc}</p>
          <LinkButtonV2
            text="Visit"
            ariaLabel={`Visiting project ${data.name}`}
            href={`${data.urlLink}`}
            target="_blank"
          ></LinkButtonV2>
        </span>
      </motion.button>
    </CardWrapper>
  );
}
