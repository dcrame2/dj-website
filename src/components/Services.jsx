import React, { useRef } from "react";
import { MediaQueries } from "../styles/Utilities";
import { Variables, tabletWidthInt } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import styled from "styled-components";
import { H3Styles, H2Styles, PSecondary } from "../styles/Type";
import { useState, useEffect } from "react";
import LinkButton from "../sub_components/LinkButton";
import { motion, useInView, useAnimationControls } from "framer-motion";
import Card from "../sub_components/Card";

// Google analytics
const Section = styled.section`
  position: relative;
  width: 100%;
  padding-top: 85px;
  padding-bottom: 185px;
  background-color: ${Variables.color4};
  //background-color: ${Variables.black};

  @media ${Variables.tablet} {
    padding-bottom: 140px;
  }

  @media ${Variables.mobile} {
    padding-bottom: 100px;
  }
`;

const InnerSection = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: start;

  @media ${MediaQueries.tablet} {
    align-items: center;
  }

  .heading-container {
    margin: 44px 0 62px;
    max-width: 540px;

    @media ${Variables.tablet} {
      margin: 24px 0 40px;
    }
    h2 {
      ${H2Styles}

      text-transform: uppercase;
      margin-bottom: 14px;
    }
    h3 {
      ${PSecondary}

      max-width: 650px;
    }
  }

  .ServiceContainer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 42px;
    justify-content: center;
    align-items: start;

    @media ${MediaQueries.tablet} {
      gap: 42px;
      flex-direction: column;
      align-items: center;
    }
    @media ${MediaQueries.mobile} {
      padding-right: unset;
      padding-left: unset;
    }
  }
`;

const data = {
  heading: "Grow your business",
  subheading: `your trusted partner in web development and online success. We specialize in delivering high-quality web applications and websites to businesses of all sizes. With years of experience and a team of talented developers, we have built a reputation for delivering outstanding results and exceptional customer service.`, //We offer a wide range of web related services that are a must-have for any business.
};

export default function Services() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const [isInViewFired, setIsInViewFired] = useState(false);
  const [initial, setInitial] = useState({ opacity: 0, scale: 0.5 });
  const controls = useAnimationControls();

  const activeToggle = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);

    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (windowSize < tabletWidthInt) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

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
    <Section id="services" className={active ? "active" : ""}>
      <InnerSection>
        <div className="heading-wrapper" ref={ref}>
          <motion.div
            className="heading-container"
            initial={initial}
            animate={controls}
          >
            <h2>{data.heading}</h2>
            <h3>{data.subheading}</h3>
          </motion.div>
        </div>
        <div className="ServiceContainer"></div>
      </InnerSection>
    </Section>
  );
}
