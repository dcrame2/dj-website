import React from "react";
import styled from "styled-components";
import { PSecondary, H2Styles, H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import ImageContentModule from "./ImageContentModule";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100%;
  scroll-snap-align: start;
  background-color: ${(props) => props.bgColor};
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px; /* scroll-snap-stop: always; */
  @media ${MediaQueries.mobile} {
    padding-top: 125px;
  }
  .inner-container {
    /* ${Container} */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    h1 {
      ${H1Styles}
    }
    p {
      ${PSecondary}
    }
    hr {
      width: 75%;
    }
  }
  .inner-link-container {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 15px;
      li {
        border: 1px solid ${Variables.color10};
        border-radius: 24px;
        padding: 10px;
        max-width: 125px;
        list-style-type: none;
        background-color: ${Variables.color16};
        transition: background-color 0.5s ease-in;
        &:hover {
          background-color: ${Variables.color9};
          transition: background-color 0.5s ease-in;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          /* background-color: ${Variables.color16}; */
          img {
            width: 55px;
          }
          p {
            text-align: center;
            ${PSecondary}
            font-size: 14px;
          }
        }
      }
    }
  }
`;

const ServiceHero = ({ data, scrollList }) => {
  return (
    <FullScreenContainer>
      <div className="inner-container">
        <h1>{data.heading}</h1>
        <p>{data.subheading}</p>
        <hr />
      </div>
      <div className="inner-link-container">
        <ul>
          {data.serviceLinks.map((links, index) => {
            return (
              <li key={links.serviceName}>
                <a href={links.serviceHref}>
                  <img src={links.serviceIcon} alt="" />
                  <p>{links.serviceName}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </FullScreenContainer>
  );
};

export default ServiceHero;
