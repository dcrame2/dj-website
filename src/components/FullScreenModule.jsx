import React from "react";
import styled from "styled-components/macro";
import { PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModuleV2 from "./ImageContentModuleV2";
import Spacer from "../sub_components/Spacer";

const FullScreenContainer = styled.div`
  width: 100vw;
  /* height: auto; */
  scroll-snap-align: start;
  background-color: ${(props) => props.bgColor};

  @media ${MediaQueries.mobile} {
    height: auto;
  }
  .inner-container {
    ${Container}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const FullScreenModule = ({ ...props }) => {
  return (
    <FullScreenContainer id={props.id} bgColor={props.bgColor}>
      <Spacer color={props.bgColor} desktop={258} tablet={120} mobile={150} />
      <ImageContentModuleV2
        color={props.color}
        bgColor={props.bgColor}
        {...props.data}
      />
      <Spacer color={props.bgColor} desktop={258} tablet={120} mobile={150} />
    </FullScreenContainer>
  );
};

export default FullScreenModule;
