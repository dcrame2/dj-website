import React from "react";
import styled from "styled-components";
import SecondaryHero from "../components/SecondaryHero";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";

const PortfolioPage = () => {
  return (
    <>
      <Spacer
        color={Variables.color10}
        desktop={258}
        tablet={120}
        mobile={100}
      />

      <SecondaryHero>Portfolio</SecondaryHero>

      <Spacer
        color={Variables.color10}
        desktop={258}
        tablet={120}
        mobile={100}
      />
    </>
  );
};

export default PortfolioPage;
