import React from "react";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { Container } from "../styles/Utilities";
import styled from "styled-components";
import { H3Styles, H2Styles, PSecondary } from "../styles/Type";
import { useState, useEffect } from "react";
import LinkButton from "../sub_components/LinkButton";

const Section = styled.section`
  position: relative;
  width: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  background-color: ${Variables.color1};

  .inner-section {
    ${Container}
    display: flex;
    flex-direction: column;
    align-items: start;

    @media ${MediaQueries.tablet} {
      align-items: center;
    }

    .heading-container {
      margin: 44px 0 62px;
      max-width: 540px;

      @media ${Variables.tablet} {
        margin: 24px 0 40px;
      }
      h2 {
        ${H2Styles}
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      h3 {
        ${PSecondary}
        max-width: 650px;
      }
    }

    .ServiceContainer {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 42px;
      justify-content: center;

      @media ${MediaQueries.tablet} {
        gap: 42px;
        flex-direction: column;
        align-items: center;
      }
      @media ${MediaQueries.mobile} {
        padding-right: unset;
        padding-left: unset;
      }

      button {
        border: unset;
        display: flex;
        flex-wrap: wrap;
        height: auto;
        background-color: ${Variables.color2};
        color: ${Variables.white};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        padding: 45px;
        border-radius: 40px;
        max-width: 540px;
        transition: background-color ease 0.7s;

        box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        @media ${MediaQueries.desktop} {
          flex: 1 1 0px;
        }

        @media ${MediaQueries.mobile} {
          border-radius: 30px;
        }

        &:hover
            /*&:focus*/ {
          @media ${MediaQueries.desktop} {
            background-color: ${Variables.color5};
            transition: background-color ease 0.45s;
          }

          img {
            transform: rotateY(360deg);
            /* top: -75px; */
            transition: 3s;
          }
        }
        @media (max-width: 767px) {
          width: unset;
          padding: 34px;
        }
        img {
          position: relative;
          max-width: 250px;
          height: 170px;
          opacity: calc() 0.9;

          @media ${MediaQueries.tablet} {
            max-width: 250px;
          }
          @media ${MediaQueries.mobile} {
            height: 175px;
          }
        }
        &:nth-child(1) {
          span.num {
            ${H2Styles}
            color: ${Variables.color4};
          }
        }
        &:nth-child(2) {
          span.num {
            ${H2Styles}
            color: ${Variables.color3};
          }
        }
        &:nth-child(3) {
          span.num {
            ${H2Styles}
            color: ${Variables.color1};
          }
        }
        h2 {
          ${H3Styles}
          color: ${Variables.white};
        }

        .dropdown {
          display: flex;
          flex-direction: column;
          gap: 25px;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.26s ease, opacity ease 0.25s;
          p {
            color: ${Variables.color1};
            font-size: 1.75rem;
            line-height: 25px;
            overflow: hidden;
          }
        }
        &.active {
          transition: background-color ease 0.45s;
          background-color: ${Variables.color14};

          .dropdown {
            max-height: 245px; // TODO: find solution to using auto height :)
            transition: max-height 0.25s ease, opacity ease 0.26s;
            opacity: 1;
          }
        }
      }
    }
  }
`;

const data = {
  services: [
    {
      num: "01",
      img: "/web_dev_icons/ui-design.png",
      name: "Design",
      desc: "Quality designs made to catch users attention and show your business model",
    },
    {
      num: "02",
      img: "/web_dev_icons/web-development.png",
      name: "Develop",
      desc: "Professional developers executing modern websites your user will enjoy visting",
    },
    {
      num: "03",
      img: "/web_dev_icons/maintenance.png",
      name: "Support",
      desc: "Developers to help maintain and support your website for any update needs",
    },
  ],
  heading: "Services We Offer",
  subheading: `Managing a business demands a lot. Take a load off, leave it to ${Variables.companyName}. We offer a wide range of services spanning all things web related. Check em' out! Some of our focal services can be viewed below!`,
};

const Services = () => {
  const [active, setActive] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const activeToggle = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    <Section id="services" className={active ? "active" : ""}>
      <div className="inner-section">
        <div className="heading-container">
          <h2>{data.heading}</h2>
          <h3>{data.subheading}</h3>
        </div>
        <div className="ServiceContainer">
          {data.services.map((service, i) => {
            return (
              <button
                className={active === i ? "active" : ""}
                onClick={() => activeToggle(i)}
                key={`button-${i}`}
              >
                <img src={`${service.img}`} />
                <span className="num">{service.num}</span>
                <h2>{service.name}</h2>
                <span className="dropdown">
                  <p>{service.desc}</p>
                  <LinkButton
                    text="Learn More"
                    href={`#${service.name.toLowerCase()}Section`}
                  ></LinkButton>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Services;
