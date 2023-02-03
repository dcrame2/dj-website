import React from "react";
import styled from "styled-components";
import { PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  background-color: ${(props) => props.bgColor};
  padding-top: 200px;
  /* scroll-snap-stop: always; */
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
    <FullScreenContainer bgColor={props.bgColor}>
      {/* <div className="inner-container">
        <h2>Web Development</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sit
          iusto dolores architecto vel error esse nisi beatae, quidem nostrum!
        </p>
      </div> */}
      <ImageContentModule {...props.data} />
    </FullScreenContainer>
  );
};

export default FullScreenModule;
