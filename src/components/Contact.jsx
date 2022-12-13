import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
// import LinkButton from "../sub_components/LinkButton";
import Button from "../sub_components/Button";
import { H3Styles, PSecondary } from "../styles/Type";
import { Container } from "../styles/Utilities";

const Section = styled.section`
  height: auto;
  width: 100%;
  padding: 50px 0 125px;
  /* ${Container} */
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

      h2 {
        font-size: 3rem;
      }

      p {
        ${PSecondary}
        color: ${Variables.white};
        line-height: 25px;
        margin-right: 5%;
      }
    }

    .form-wrapper {
      display: flex;
      flex-direction: row;
      gap: 170px;
      justify-content: center;
      align-items: center;

      @media ${MediaQueries.tablet} {
        flex-direction: column;
        gap: 20px;
        /* max-width: 540px; */
        background-color: ${Variables.color2};
        border-radius: 15px;
        box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};
      }
      /* @media (max-width: 499px) {
     
    } */

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        color: ${Variables.white};
        background-color: ${Variables.color2};
        border-radius: 15px;
        padding: 50px;
        box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.color2};
        @media ${MediaQueries.tablet} {
          width: 100%;
          padding: 20px;
          box-shadow: unset;
          -webkit-box-shadow: unset;
          -moz-box-shadow: unset;
        }

        h3 {
          ${H3Styles}
        }

        /* width: 100%; */

        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          @media ${MediaQueries.tablet} {
            width: 100%;
          }
          /* width: 100%; */

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
            /* box-shadow: 1px 1px 4px 1px ${Variables.color5};
            -webkit-box-shadow: 1px 1px 4px 1px ${Variables.color5};
            -moz-box-shadow: 1px 1px 4px 1px ${Variables.color5}; */
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

      img {
        /* filter: hue-rotate(95deg); */
        width: auto;
        height: 400px;
        border-radius: 15px;
        @media ${MediaQueries.mobile} {
          height: 200px;
        }
      }
    }
  }
`;

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  return (
    <Section id="contact">
      <div className="ContactInnerContainer">
        <div className="form-info">
          <h2>Contact</h2>
          <p>
            Need a website? Talk with a team member for a FREE consultation on
            the goals of your wesbite.
          </p>
        </div>
        <div className="form-wrapper">
          <img src="businessman-working-on-laptop.png" />
          <form
            // onSubmit={onSubmit}
            action="https://formsubmit.co/dcrame2@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New DJ Submission!" />
            {/* <input type="hidden" name="_cc" value="jtully97@gmail.com" /> */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <h3>Talk with our team!</h3>
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
            {/* <LinkButton type="submit" text="Submit"></LinkButton> */}
            <Button text="Submit" type="submit"></Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
