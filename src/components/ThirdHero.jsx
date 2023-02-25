import React from "react";

import styled from "styled-components";
import { Container, MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H1Styles, PSecondary } from "../styles/Type";

const OuterContainer = styled.div`
  background-color: ${Variables.color2};
  background-image: url("images/space.jpg");
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* object-fit: cover;s */
  color: transparent;
  /* background-position: center; */
  background-clip: text;
  -webkit-background-clip: text;
  @media (max-width: 1200px) {
    background-position: center;
  }

  /* opacity: 0.7; */
  .inner-container {
    height: 100vh;
    ${Container};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: ${Variables.color2}; */
    @media ${MediaQueries.mobile} {
      height: 70vh;
    }
    h1 {
      font-weight: 700;
      color: transparent !important;
      text-align: left;
      font-size: 32rem;

      text-transform: uppercase;
      @media ${MediaQueries.tablet} {
        font-size: 20rem;
      }
      @media ${MediaQueries.mobile} {
        font-size: 10rem;
      }
    }
    p {
      ${PSecondary};
    }
  }
`;

const ThirdHero = ({ children }) => {
  return (
    <OuterContainer>
      <div className="inner-container">
        <h1>{children}</h1>
      </div>
    </OuterContainer>
  );
};

export default ThirdHero;
