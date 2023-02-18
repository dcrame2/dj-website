import React from "react";
import styled from "styled-components";
import SecondaryHero from "../components/SecondaryHero";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import Card from "../sub_components/Card";
import PortfolioModule from "../components/PortfolioModule";

// const data = [

// ]

const PortfolioPage = () => {
  return (
    <>
      {/* <Spacer
        color={Variables.color3}
        desktop={258}
        tablet={120}
        mobile={100}
      /> */}

      <SecondaryHero>Portfolio</SecondaryHero>

      {/* <Spacer
        color={Variables.color3}
        desktop={258}
        tablet={120}
        mobile={100}
      /> */}
      <PortfolioModule />
    </>
  );
};

export default PortfolioPage;
