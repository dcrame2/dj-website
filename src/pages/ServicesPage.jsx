import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import SecondaryHero from "../components/SecondaryHero";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import FullScreenModule from "../components/FullScreenModule";
import ServiceHero from "../components/ServiceHero";
import { Container, MediaQueries } from "../styles/Utilities";

const ServicesContainer = styled.div`
  /* scroll-snap-type: y mandatory; */
  /* overflow-y: scroll; */
  /* height: 100vh; */
  /* ${Container} */
`;

const serviceHeroData = {
  heading: "Services We Offer",
  subheading:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. VerLorem ipsum dolor sit amet consectetur adipisicing elit. Ver",
  serviceLinks: [
    {
      serviceName: "Website Development",
      serviceHref: "/service-1",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
    {
      serviceName: "Web App Development",
      serviceHref: "/service-2",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
    {
      serviceName: "SEO",
      serviceHref: "/service-3",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },

    {
      serviceName: "Web Design/User Interface",
      serviceHref: "/service-4",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
    {
      serviceName: "Web Maintenance",
      serviceHref: "/service-5",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
    {
      serviceName: "CMS Development",
      serviceHref: "/service-6",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
    {
      serviceName: "Web Hosting",
      serviceHref: "/service-7",
      serviceIcon: "/service_about/webdeveloper_icon.svg",
    },
  ],
};

const data = [
  {
    id: "1",

    color: `${Variables.color10}`,
    imgIcon: "/service_about/webdeveloper_icon.svg",
    imgSrc: "/service_about/design.jpg",
    altText: "Web",
    imgPlacement: "right",
    heading: "Website Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
  {
    id: "2",
    color: `${Variables.white}`,
    imgSrc: "/service_about/design.jpg",
    altText: "text",
    imgPlacement: "",
    heading: "Web App Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
  {
    id: "23",
    color: `${Variables.color10}`,
    imgSrc: "/service_about/design.jpg",
    altText: "text",
    imgPlacement: "right",
    heading: "SEO",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
  {
    id: "23",
    color: `${Variables.white}`,
    imgSrc: "/service_about/design.jpg",
    altText: "text",
    imgPlacement: "",
    heading: "web design/user interface",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
  {
    id: "3",
    color: `${Variables.color10}`,
    imgSrc: "/service_about/design.jpg",
    altText: "text",
    imgPlacement: "right",
    heading: "web maintenance",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
  {
    id: "4",
    color: `${Variables.white}`,
    imgSrc: "/service_about/design.jpg",
    altText: "text",
    imgPlacement: "",
    heading: "cms development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?",
  },
];

const ParaContainer = styled.div`
  /* background-image: url(${Variables.background1}); */
  z-index: 1;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-image: url("/images/party.jpg"); */
  @media ${MediaQueries.tablet} {
    background-color: ${Variables.color7};
    background-image: unset;
  }
`;

const ServicesPage = ({ scrollPosition }) => {
  const [active, setActive] = useState(false);
  const [triggerDistance, setTriggerDistance] = useState();

  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    if (scrollPosition > 800) {
      setActive(true);
      setReRender(true);
    } else {
      setActive(false);
    }
  }, [scrollPosition]);

  return (
    <ServicesContainer>
      <ParaContainer>
        <ServiceHero
          reRender={reRender}
          active={active}
          data={serviceHeroData}
          scrollPosition={scrollPosition}
        />
        {data.map((information, i) => {
          return (
            <FullScreenModule
              id={`service-${i + 1}`}
              data={information}
              bgColor={information.color}
            />
          );
        })}
      </ParaContainer>
    </ServicesContainer>
  );
};

export default ServicesPage;
