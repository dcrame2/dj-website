import React from "react";

import styled from "styled-components";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H1Styles, PSecondary } from "../styles/Type";

const OuterContainer = styled.div`
  background-color: ${Variables.color2};

  .inner-container {
    height: 100vh;
    ${Container};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      ${H1Styles};
      text-transform: uppercase;
    }
    p {
      ${PSecondary};
    }
  }
`;

const SecondaryHero = ({ children }) => {
  return (
    <OuterContainer>
      <div className="inner-container">
        <h1>{children}</h1>
        <p>
          Explore our impressive collection of custom-built websites and web
          applications
        </p>
      </div>
    </OuterContainer>
  );
};

export default SecondaryHero;
