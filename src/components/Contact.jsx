import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import Button from "../sub_components/Button";
import { H3Styles, PSecondary, H2Styles } from "../styles/Type";
import { Container } from "../styles/Utilities";

const Section = styled.section`
  height: auto;
  width: 100%;
  padding: 50px 0 125px;
  background-color: ${Variables.color10};
  @media ${MediaQueries.mobile} {
    padding: 85px 0;
  }
  .ContactInnerContainer {
    ${Container}
    @media ${MediaQueries.mobile} {
      padding-right: 25px;
      padding-left: 25px;
    }
    .form-wrapper {
      display: flex;
      flex-direction: row;
      gap: 170px;
      justify-content: center;
      align-items: center;
      @media ${MediaQueries.tablet} {
        padding: 50px 20px;
        flex-direction: column;
        gap: 20px;
        background-color: ${Variables.color2};
        border-radius: 15px;
        box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
      @media ${MediaQueries.mobile} {
        border-radius: 30px;
        padding: 40px 20px;
      }

      .form-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 50px;
        width: 40%;
        @media ${MediaQueries.tablet} {
          margin-bottom: 20px;
          width: 100%;
        }
        img {
          width: 500px;
          height: 500px;
          border-radius: 15px;
          margin: auto;
          @media ${MediaQueries.tablet2} {
            height: 300px;
            width: 300px;
          }
          @media ${MediaQueries.mobile} {
            height: 200px;
            width: 200px;
          }
        }
        h2 {
          ${H2Styles}
          text-transform: uppercase;
          @media ${MediaQueries.tablet} {
            text-align: center;
          }
        }
        p {
          ${PSecondary}
          color: ${Variables.white};
          line-height: 25px;
          margin-right: 5%;
          @media ${MediaQueries.tablet} {
            text-align: center;
            margin-right: unset;
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        color: ${Variables.white};
        background-color: ${Variables.color2};
        border-radius: 40px;
        padding: 50px;
        /* box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2}; */
        box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        @media ${MediaQueries.tablet} {
          width: 100%;
          padding: unset;
          box-shadow: unset;
          -webkit-box-shadow: unset;
          -moz-box-shadow: unset;
        }

        h3 {
          ${H3Styles}
          @media ${MediaQueries.tablet} {
            display: none;
          }
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          @media ${MediaQueries.tablet} {
            width: 100%;
          }
          label {
            width: 150px;
            ${PSecondary}
            text-align: left;
          }
          input,
          textarea {
            text-indent: 10px;
            outline: none;
            font-size: 1.5rem;
            background-color: transparent;
            border-radius: 8px;
            width: 500px;
            border: 2px solid ${Variables.color1};
            &:hover,
            &:focus {
              box-shadow: 1px 1px 4px 1px ${Variables.color5};
            }
            @media ${MediaQueries.tablet} {
              width: 100%;
            }
          }
          input {
            height: 40px;
          }
          textarea {
            height: 75px;
          }
        }
      }
    }
  }
`;

const data = {
  title: "Contact",
  desc: "Need a website? Talk with a team member for a FREE consultation on the goals of your wesbite.",
  title2: "Talk with our team!",
};

const Contact = () => {
  return (
    <Section id="contact">
      <div className="ContactInnerContainer">
        <div className="form-wrapper">
          <div className="form-info">
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <img src="businessman-working-on-laptop.png" />
          </div>
          <form action="https://formsubmit.co/dcrame2@gmail.com" method="POST">
            <input
              type="hidden"
              name="_subject"
              value={`New ${Variables.companyName} Submission!`}
            />
            <input
              type="hidden"
              name="_autoresponse"
              value={`Thank you from ${Variables.companyName}`}
            ></input>
            <input type="hidden" name="_cc" value="jtully97@gmail.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thanks.html"
            ></input>
            <h3>{data.title2}</h3>
            <div>
              <label htmlFor="fname">First Name*</label>
              <input type="text" name="fname" required />
            </div>
            <div>
              <label htmlFor="lname">Last Name*</label>
              <input type="text" name="lname" required />
            </div>
            <div>
              <label htmlFor="email">Email Address*</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea type="text" name="message" required />
            </div>
            <Button text="Submit" type="submit"></Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
