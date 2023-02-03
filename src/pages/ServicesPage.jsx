import React from "react";
import styled from "styled-components";
import SecondaryHero from "../components/SecondaryHero";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import FullScreenModule from "../components/FullScreenModule";

const ServicesContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <FullScreenModule bgColor={Variables.black} />
      <FullScreenModule bgColor={Variables.color1} />
      <FullScreenModule bgColor={Variables.color2} />
      <FullScreenModule bgColor={Variables.color9} />
      <FullScreenModule bgColor={Variables.color4} />
      <FullScreenModule />
    </ServicesContainer>
  );
};

export default ServicesPage;
