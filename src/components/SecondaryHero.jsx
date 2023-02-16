import React from "react";

import styled from "styled-components";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H1Styles, PSecondary } from "../styles/Type";

const OuterContainer = styled.div`
  height: auto;
  background-color: ${Variables.color4};

  .inner-container {
    ${Container};

    display: flex;
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
          We deliver outcomes. Our entire company is designed to help you plan,
          build and execute solutions that drive your business forward.
        </p>
      </div>
    </OuterContainer>
  );
};

export default SecondaryHero;
