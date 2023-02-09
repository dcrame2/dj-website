import React from "react";
import styled from "styled-components";
import { PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModuleV2 from "./ImageContentModuleV2";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  background-color: ${(props) => props.bgColor};
  padding-top: 150px;
  color: ${(props) => props.color};
  /* scroll-snap-stop: always; */
  @media ${MediaQueries.mobile} {
    padding-top: 125px;
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
      <ImageContentModuleV2 color={props.color} {...props.data} />
    </FullScreenContainer>
  );
};

export default FullScreenModule;
