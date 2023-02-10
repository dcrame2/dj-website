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
      serviceIcon: "/icons/web-dev-icon.svg",
    },
    {
      serviceName: "App Development",
      serviceHref: "/service-2",
      serviceIcon: "/icons/mobile-dev-icon.svg",
    },
    {
      serviceName: "SEO",
      serviceHref: "/service-3",
      serviceIcon: "/icons/seo-icon.svg",
    },

    {
      serviceName: "Web Design",
      serviceHref: "/service-4",
      serviceIcon: "/icons/web-design.svg",
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

    color: `${Variables.white}`,
    bgColor: `${Variables.color10}`,
    imgIcon: "/service_about/webdeveloper_icon.svg",
    imgSrc: "/service_about/website-development.jpg",
    altText: "Web",
    imgPlacement: "right",
    heading: "Website Development",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
  {
    id: "2",
    imgIcon: "/service_about/webdeveloper_icon.svg",
    color: `${Variables.color10}`,
    bgColor: `${Variables.white}`,
    imgSrc: "/service_about/app-development.jpg",
    altText: "text",
    imgPlacement: "",
    heading: "App Development",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
  {
    id: "3",
    imgIcon: "/service_about/webdeveloper_icon.svg",
    color: `${Variables.white}`,
    bgColor: `${Variables.color10}`,
    imgSrc: "/service_about/seo.jpg",
    altText: "text",
    imgPlacement: "right",
    heading: "Search Engine Optimization",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
  {
    id: "4",
    color: `${Variables.color10}`,
    bgColor: `${Variables.white}`,
    imgIcon: "/service_about/webdeveloper_icon.svg",
    imgSrc: "/service_about/web-design.jpg",
    altText: "text",
    imgPlacement: "",
    heading: "Web Design",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
  {
    id: "5",
    color: `${Variables.white}`,
    bgColor: `${Variables.color10}`,
    imgIcon: "/service_about/webdeveloper_icon.svg",
    imgSrc: "/service_about/web-main.jpg",
    altText: "text",
    imgPlacement: "right",
    heading: "web maintenance",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
  {
    id: "6",
    color: `${Variables.color10}`,
    bgColor: `${Variables.white}`,
    imgSrc: "/service_about/cms.jpg",
    imgIcon: "/service_about/webdeveloper_icon.svg",
    altText: "text",
    imgPlacement: "",
    heading: "Cms development",
    content:
      "At XYZ Web Development Agency, we understand the importance of having a strong online presence in today's digital world. Our team of experts has the skills and experience necessary to create a website that not only looks great but also functions smoothly and efficiently. Our goal is to help your business grow and succeed through the power of the internet.",
    factList: [
      "Custom Website Design: We will work with you to create a custom website design that reflects your brand and meets your specific needs. ",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Mobile Responsiveness: We ensure that all of our website designs are mobile responsive, providing a seamless experience for users on all devices.",
    ],
    highlights: ["AGILE", "FAST", "RELIABLE"],
  },
];

// const ParaContainer = styled.div`
//   /* background-image: url(${Variables.background1}); */
//   z-index: 1;
//   height: 100%;
//   background-attachment: fixed;
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   /* background-image: url("/images/party.jpg"); */
//   @media ${MediaQueries.tablet} {
//     background-color: ${Variables.color7};
//     background-image: unset;
//   }
// `;

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
            bgColor={information.bgColor}
            // color={information}
          />
        );
      })}
    </ServicesContainer>
  );
};

export default ServicesPage;
