import React from "react";

import styled from "styled-components";
import { Container, MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H1Styles, PSecondary } from "../styles/Type";

const OuterContainer = styled.div`
  /* background-color: ${Variables.color2}; */
  background-image: url("service_about/cms.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  @media (max-width: 1200px) {
    background-position: center;
  }

  /* opacity: 0.7; */
  .inner-container {
    height: 80vh;
    ${Container};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${MediaQueries.mobile} {
      height: 70vh;
    }
    h1 {
      ${H1Styles};

      text-transform: uppercase;
    }
    p {
      ${PSecondary};
    }
  }
`;

const OpaqueFilter = styled.div`
  background: linear-gradient(90deg, #003f91 0%, #003f91 90%, #003f91 100%);
  opacity: 0.75;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  width: 100%;
  /* z-index: 1;s */

  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;

const SecondaryHero = ({ children }) => {
  return (
    <OuterContainer>
      <OpaqueFilter>
        <div className="inner-container">
          <h1>{children}</h1>
          <p>
            Explore our impressive collection of custom-built websites and web
            applications
          </p>
        </div>
      </OpaqueFilter>
    </OuterContainer>
  );
};

export default SecondaryHero;
