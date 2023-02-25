import React from "react";
import styled from "styled-components";
import SecondaryHero from "../components/SecondaryHero";
import ThirdHero from "../components/ThirdHero";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import Card from "../sub_components/Card";
import PortfolioModule from "../components/PortfolioModule";
import ModuleBlender from "../sub_components/ModuleBlender";

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioPage = () => {
  return (
    <>
      <ThirdHero>
        <NameContainer>
          <span>Port</span>
          <span>folio</span>
        </NameContainer>
      </ThirdHero>
      <ModuleBlender />
      <PortfolioModule />
    </>
  );
};

export default PortfolioPage;
