import React from "react";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import styled from "styled-components";

const Section = styled.section`
  height: auto;
  padding: 8% 5%;
  background-color: ${Variables.color1};
`;

const ServiceContainer = styled.div`
  //   width: 20%;
  //   margin: 10% 0;
  display: flex;
  gap: 80px;
  justify-content: center;
  @media (max-width: 1099px) {
    gap: 40px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    background-color: ${Variables.color2};
    color: ${Variables.white};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    // width: 20%;
    padding: 20px;
    border-radius: 6px;
    @media (max-width: 767px) {
      width: unset;
      margin: 0 5%;
      padding: 15px;
    }
    img {
      position: relative;
      //   top: -80px;
      width: auto;
      height: 250px;
      //   border-radius: 50%;
      padding: 5px;
      //   border: 5px solid ${Variables.color1};
      @media (max-width: 767px) {
        height: 175px;
      }
    }
    &:nth-child(1) {
      //   img {
      //     border: 5px solid ${Variables.color4};
      //   }
      h3 {
        color: ${Variables.white};
        font-size: 3rem;
      }
      h4 {
        font-size: 6rem;
        color: ${Variables.color4};
      }
    }
    &:nth-child(2) {
      //   img {
      //     border: 5px solid ${Variables.color3};
      //   }
      h3 {
        color: ${Variables.white};
        font-size: 3rem;
      }
      h4 {
        font-size: 6rem;
        color: ${Variables.color3};
      }
    }
    &:nth-child(3) {
      //   img {
      //     border: 5px solid ${Variables.color1};
      //   }
      h3 {
        color: ${Variables.white};
        font-size: 3rem;
      }
      h4 {
        font-size: 6rem;
        color: ${Variables.color1};
      }
    }
    h3 {
      color: ${Variables.white};
      font-size: 1.5rem;
    }
    p {
      color: ${Variables.color1};
      font-size: 1.75rem;
      line-height: 25px;
    }
    h4 {
      font-size: 3rem;
      color: ${Variables.color4};
    }
  }
`;

const data = {
  services: [
    {
      num: "01",
      img: "icon1.png",
      name: "Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?",
    },
    {
      num: "02",
      img: "icon2.png",
      name: "Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?",
    },
    {
      num: "03",
      img: "icon3.png",
      name: "Maintenance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?",
    },
  ],
};

const Services = () => {
  return (
    <Section>
      <ServiceContainer>
        {data.services.map((service, i) => {
          return (
            <div>
              <img src={`${service.img}`} />
              <h4>{service.num}</h4>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </ServiceContainer>
    </Section>
  );
};

export default Services;
