import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { H3Styles, PSecondary } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";

const TestimonialsSection = styled.section`
  height: 400px;
  padding: 50px;
  @media ${MediaQueries.mobile} {
    height: 500px;
  }

  .carousel {
    height: 100%;
    .carousel-indicators {
      bottom: -20px;

      @media ${MediaQueries.mobile} {
        bottom: 0;
      }
    }

    .carousel-item {
      &.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
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
          ${PSecondary}
        }
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Carousel>
        <Carousel.Item interval={6000}>
          <img className="d-block" src="avatar1.png" alt="First slide" />
          <Carousel.Caption>
            <h3>Super Sick Testimonial </h3>
            <p>These boys absolutely f*ck and make bad*ss websites</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block"
            src="avatar2.png"
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Super Sick Testimonial </h3>
            <p>
              Josh eats ass, specifically black booty. The darker the better as
              he says.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img className="d-block" src="avatar3.png" alt="Third slide" />
          <Carousel.Caption>
            <h3>Super Sick Testimonial </h3>
            <p>
              I need more caffiene. Guess Ill crack a mfk celsuis bc why not.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </TestimonialsSection>
  );
};

export default Testimonials;
