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
      serviceHref: "service-1",
      serviceIcon: "/icons/web-dev-icon.svg",
    },
    {
      serviceName: "App Development",
      serviceHref: "service-2",
      serviceIcon: "/icons/mobile-dev-icon.svg",
    },
    {
      serviceName: "SEO",
      serviceHref: "service-3",
      serviceIcon: "/icons/seo-icon.svg",
    },

    {
      serviceName: "Web Design",
      serviceHref: "service-4",
      serviceIcon: "/icons/web-design.svg",
    },
    {
      serviceName: "Web Maintenance",
      serviceHref: "service-5",
      serviceIcon: "/icons/web-main-icon.svg",
    },
    {
      serviceName: "Web Hosting",
      serviceHref: "service-6",
      serviceIcon: "/icons/hosting-icon.svg",
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
    imgPlacement: "left",
    heading: "App Development",
    content:
      "App development is a complex process that requires a team of experts to bring your vision to life. Our app development agency is dedicated to delivering high-quality and user-friendly apps that meet the needs of your business. Our experienced developers use the latest technologies and tools to build apps that are not only functional but also visually appealing.",
    factList: [
      "Wide range of experience in various app categories, including e-commerce, social media, entertainment, and more.",
      "Customer-focused development process with constant communication and feedback to ensure app meets expectations.",
    ],
    highlights: ["Scalable", "Native", "FAST"],
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
      "Search Engine Optimization (SEO) is a crucial component of any digital marketing strategy. Our development agency recognizes the importance of SEO and incorporates best practices into every website we build. This helps our clients reach more potential customers, increase their online visibility, and achieve their business goals.",
    factList: [
      "Custom SEO strategy tailored to client's goals, audience, and industry. ",
      "On-page optimization for improved search engine visibility, traffic, and conversions.",
    ],
    highlights: ["Analytics", "Meta", "Organic"],
  },
  {
    id: "4",
    color: `${Variables.color10}`,
    bgColor: `${Variables.white}`,
    imgIcon: "/service_about/webdeveloper_icon.svg",
    imgSrc: "/service_about/web-design.jpg",
    altText: "text",
    imgPlacement: "left",
    heading: "Web Design",
    content:
      "Web design is a critical aspect of any website and can greatly impact a user's experience. Our development agency is dedicated to creating visually appealing and user-friendly web designs that meet the unique needs of each client. Our experienced designers work closely with clients to ensure that their vision is brought to life.",
    factList: [
      "Tailored custom web designs that reflect client's brand and goals.",
      "User-focused design for improved navigation and user experience.",
    ],
    highlights: ["Wireframes", "UI/UX", "Responsive"],
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
      "Website maintenance is an essential part of ensuring that your website remains functional and up-to-date. Our development agency offers comprehensive maintenance services to keep your website running smoothly and efficiently. Our experienced developers and designers work together to keep your website in top shape.",
    factList: [
      "Regular software and security updates to keep your website running smoothly.",
      "Content Management Systems (CMS): Our team is experienced in using various CMS platforms such as WordPress, Joomla, and Shopify, allowing us to create a website that is easy for you to manage.",
      "Quick issue resolution to minimize downtime and keep your website accessible.",
    ],
    highlights: ["support", "Security", "Updates"],
  },
  {
    id: "6",
    color: `${Variables.color10}`,
    bgColor: `${Variables.white}`,
    imgSrc: "/service_about/cms.jpg",
    imgIcon: "/service_about/webdeveloper_icon.svg",
    altText: "text",
    imgPlacement: "left",
    heading: "Web Hosting",
    content:
      "Web hosting is an important aspect of any website, and choosing the right hosting solution can greatly impact your website's performance and stability. Our development agency offers reliable and scalable web hosting solutions that meet the needs of your website, no matter how big or small.",
    factList: [
      "Scalable options: We offer a range of hosting options, from shared hosting to dedicated servers, so that you can choose the best solution for your website. Our hosting solutions are designed to grow with your website, ensuring that it remains fast and reliable, no matter how much traffic it receives.",
    ],
    highlights: ["Managed", "hosting", "Server"],
  },
];

const ServicesPage = ({ scrollPosition }) => {
  const [active, setActive] = useState(false);
  const [triggerDistance, setTriggerDistance] = useState();

  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    if (scrollPosition >= 800) {
      setActive(true);
      setReRender(true);
    } else {
      setActive(false);
    }
  }, [scrollPosition]);

  return (
    <ServicesContainer>
      {/* <Spacer desktop={258} tablet={120} mobile={100} /> */}
      <ServiceHero
        reRender={reRender}
        active={active}
        data={serviceHeroData}
        scrollPosition={scrollPosition}
      />
      {/* <Spacer desktop={258} tablet={120} mobile={100} /> */}
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
