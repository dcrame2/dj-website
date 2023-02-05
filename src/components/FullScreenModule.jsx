import React from "react";
import styled from "styled-components";
import { PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  background-color: ${(props) => props.bgColor};
  padding-top: 200px;
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
    h2 {
      ${H2Styles}
    }
    p {
      ${PSecondary}
    }
  }
`;

const FullScreenModule = ({ ...props }) => {
  //   const { id, heading, imgSrc, altText, imgPlacement, content } = props.data;
  //   console.log(id);
  return (
    <FullScreenContainer id={props.id} bgColor={props.bgColor}>
      <ImageContentModule {...props.data} />
      {/* </div> */}
    </FullScreenContainer>
  );
};

export default FullScreenModule;
