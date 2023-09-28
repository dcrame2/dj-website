import React, { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Container, MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H2Styles, H3Styles, PSecondary } from "../styles/Type";
import Arrow from "../sub_components/svg/Arrow";
import { useInView } from "framer-motion";

const ModuleContainer = styled.section`
  position: relative;
  background-color: ${Variables.color14};
`;

const InnerContainer = styled.div`
  ${Container}
  padding-top: 160px;
  padding-bottom: 160px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${MediaQueries.tablet} {
    gap: 42px;
  }

  @media ${MediaQueries.mobile} {
    padding-top: 110px;
    padding-bottom: 110px;
  }

  .heading-container {
    text-align: center;

    h2 {
      ${H2Styles}
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h3 {
      ${PSecondary}
    }
  }

  .carousel-wrapper {
    display: flex;
    justify-content: center;
    gap: 50px;

    @media ${MediaQueries.tablet} {
      gap: 30px;
    }

    @media ${MediaQueries.mobile} {
      gap: 12px;
    }
    .content-wrapper {
      display: grid;
      justify-items: center;

      .tile {
        grid-row: 1;
        grid-column: 1;
        text-align: center;
        opacity: 0;
        transform: translateY(120px);
        transition: opacity ease 0.4s, transform ease 0.35s;

        display: flex;
        justify-content: center;
        flex-direction: column;

        max-width: 660px;
        border: 1px solid ${Variables.color10};
        padding: 26px 32px 28px;
        border-radius: 24px;

        @media ${MediaQueries.tablet} {
          padding: 20px 26px 24px;
        }

        &.active {
          opacity: 1;
          transform: translateY(0px);
          transition: opacity ease 0.4s, transform ease 0.35s;
        }

        h4 {
          ${H3Styles}
          margin-bottom: 12px;

          @media ${MediaQueries.mobile} {
            margin-bottom: 4px;
          }
        }

        p.content {
          ${PSecondary}
        }
      }
    }
    button {
      background-color: unset;
      border: unset;

      &.prev {
        transform: rotate(180deg);
      }

      svg {
        transition: transform ease 0.3s;
      }

      &:hover {
        svg {
          transform: scale(1.15);
          transition: transform ease 0.2s;
        }
      }
    }
  }
  ul.indicators {
    display: flex;
    list-style: none;
    gap: 20px;
    justify-content: center;
    z-index: 1;

    @media ${MediaQueries.mobile} {
      gap: 16px;
    }

    li {
      button {
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: unset;
        background-color: ${Variables.color5};
        transition: transform ease 0.2s, color ease 0.2s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        &:hover {
          transform: scale(1.1);
          transition: transform ease 0.2s;
        }

        &:after {
          content: "";
          background-color: ${Variables.color9};
          position: absolute;
          z-index: 0;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          margin: auto;
          border-radius: 50%;
          width: 0%;
          height: 0%;
          transition: width ease 0.3s, height ease 0.3s;
        }
      }

      &.active {
        button {
          transform: scale(1.3);
          &:after {
            width: 100%;
            height: 100%;
            transition: width ease 0.3s, height ease 0.3s;
          }
        }
      }
    }
  }
`;

const data = {
  heading: "Hear what people are saying",
  subheading: `Testimonials from ${Variables.companyName} customers`,
  testimonials: [
    {
      name: "Chicago Living Group",
      content: `I would highly recommend ${Variables.companyName} for your website needs. The did my branding of my business and developed my website!`,
    },
    {
      name: "Tulayna Limo Service",
      content: `I can't thank ${Variables.companyName} enough for building our website. The design and support they provided is unmatched.`,
    },
    {
      name: "Moulis Financial",
      content: `${Variables.companyName} transformed my business to a new level which increased my business by more than 20%.`,
    },
  ],
};

export default function TestimonialsV2({ ...props }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const max = data.testimonials.length - 1;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nextPressed = () => {
    if (activeIndex < max) {
      setActiveIndex((activeIndex) => activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevPressed = () => {
    if (activeIndex > 0) {
      setActiveIndex((activeIndex) => activeIndex - 1);
    } else {
      setActiveIndex(max);
    }
  };

  return (
    <ModuleContainer id={props.id}>
      <InnerContainer>
        <div ref={ref} className="heading-container">
          <h2
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {data.heading}
          </h2>
          <h3>{data.subheading}</h3>
        </div>
        <div className="carousel-wrapper">
          <button
            className="prev"
            onClick={prevPressed}
            aria-label="previous testimonial"
          >
            <Arrow />
          </button>
          <div className="content-wrapper">
            {data.testimonials.map((testimonial, index) => {
              return (
                <div
                  key={`tile-${index}`}
                  className={`tile ${activeIndex === index ? "active" : ""}`}
                >
                  <h4>{testimonial.name}</h4>
                  <p className="content">{testimonial.content}</p>
                </div>
              );
            })}
          </div>
          <button
            className="next"
            onClick={nextPressed}
            aria-label="next testimonial"
          >
            <Arrow />
          </button>
        </div>
        <ul className="indicators">
          {data.testimonials.map((item, index) => {
            return (
              <li
                key={`button-${index}`}
                className={`${activeIndex === index ? "active" : ""}`}
              >
                <button
                  onClick={(activeIndex) => setActiveIndex(index)}
                  aria-label={`view testimonial ${index}`}
                ></button>
              </li>
            );
          })}
        </ul>
      </InnerContainer>
    </ModuleContainer>
  );
}
