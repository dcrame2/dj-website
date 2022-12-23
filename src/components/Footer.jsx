import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries, Container } from "../styles/Utilities";
import { useEffect, useState } from "react";
import { PSmallStyles, H3Styles } from "../styles/Type";

const FooterElm = styled.footer`
  position: relative;
  background-color: ${Variables.color12};

  .bottom-color-strip {
    background-color: ${Variables.black};
    padding: 15px 0;
    width: 100%;

    div {
      ${Container}
      p {
        ${PSmallStyles}
        text-transform: uppercase;
        text-align: center;
      }
      a {
        display: block;
        text-align: center;
        margin-top: 8px;
        opacity: 0.4;
      }
    }
  }
`;

const FooterInner = styled.div`
  ${Container}
  padding-bottom: 50px;
  padding-top: 110px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  justify-items: center;
  align-items: center;
  gap: 50px;

  @media ${MediaQueries.mobile} {
    grid-template-columns: 1fr;
    padding-bottom: 40px;
    padding-top: 80px;
  }

  img {
    max-width: 300px;
    width: 100%;
  }
  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${MediaQueries.mobile} {
      padding-top: unset;
    }

    li {
      margin-bottom: 4px;

      h2 {
        ${H3Styles}
        text-transform: uppercase;
      }
      a {
        ${PSmallStyles}
        &:hover {
          color: ${Variables.color2};
        }
      }
    }
  }
`;

export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  const data = {
    links: [
      { href: "#services", text: "Services" },
      { href: "#testimonials", text: "Testimonials" },
      { href: "#faqSection", text: "FAQ" },
    ],
  };

  return (
    <FooterElm>
      <FooterInner>
        <img src={Variables.logo6Url} alt=""></img>
        <ul>
          <li>
            <h2>Resources</h2>
          </li>
          {data.links.map((link, index) => {
            return (
              <li key={`footerLink${index}`}>
                <a href={`${link.href}`}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </FooterInner>
      <div className="bottom-color-strip">
        <div>
          <p>{`Copyright © ${date} ${Variables.companyName}`}</p>
          <a
            href="https://www.flaticon.com/free-icons/web-development"
            title="web development icons"
          >
            Web development icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </FooterElm>
  );
}
