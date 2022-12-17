import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { H3Styles, PSecondary } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";

const TestimonialsSection = styled.section`
  height: 450px;
  padding: 50px;
  @media ${MediaQueries.mobile} {
    height: 500px;
  }

  .carousel {
    height: 100%;
    .carousel-indicators {
      bottom: -20px;
      [data-bs-target] {
        background-color: ${Variables.color9};
      }
      /* @media ${MediaQueries.mobile} {
        bottom: -10px;
      } */
    }

    .carousel-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      transform: unset;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      &.active {
        transition: opacity 0.3s ease-in;
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      &.carousel-fade {
        transform: unset;
      }

      img {
        width: auto;
        height: 200px;
      }
      .carousel-caption {
        position: unset;
        right: unset;
        bottom: unset;
        left: unset;
        padding-top: unset;
        padding-bottom: unset;
        h3 {
          ${H3Styles}
        }

        p {
          max-width: 450px;
          ${PSecondary}
        }
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Carousel fade>
        <Carousel.Item interval={6000}>
          <img className="d-block" src="avatar1.png" alt="First slide" />
          <Carousel.Caption>
            <h3>David G.</h3>
            <p>
              {Variables.companyName} transformed my business to a new level
              which increased my site viewers over 100%.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img className="d-block" src="avatar2.png" alt="Second slide" />
          <Carousel.Caption>
            <h3>William P.</h3>
            <p>
              I can't thank {Variables.companyName} enough for building our
              website. The design and support they provided is unmatched.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img className="d-block" src="avatar3.png" alt="Third slide" />
          <Carousel.Caption>
            <h3>Cynthia L.</h3>
            <p>
              I would highly recommend {Variables.companyName} for your website
              needs. I've never received better communication with a business
              before!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </TestimonialsSection>
  );
};

export default Testimonials;
