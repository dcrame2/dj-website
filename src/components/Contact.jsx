import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
// import LinkButton from "../sub_components/LinkButton";
import Button from "../sub_components/Button";

const Section = styled.section`
  height: auto;
  padding: 8% 5%;
  background-color: ${Variables.color5};

  .form-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.75rem;
      color: ${Variables.white};
      line-height: 25px;
      margin-right: 5%;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
          width: 150px;
          font-size: 2rem;
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
          border: 2px solid ${Variables.color2};
          box-shadow: 1px 1px 6px 1px ${Variables.color2};
          -webkit-box-shadow: 1px 1px 6px 1px ${Variables.color2};
          -moz-box-shadow: 1px 1px 6px 1px ${Variables.color2};
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
      filter: hue-rotate(95deg);
      width: auto;
      height: 400px;
      border-radius: 15px;
    }
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <div className="form-info">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          deserunt facere accusamus consectetur ipsam voluptates adipisci libero
          aliquid id nihil. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quasi deserunt facere accusamus consectetur ipsam voluptates
          adipisci libero aliquid id nihil.
        </p>
      </div>
      <div className="form-wrapper">
        <form action="https://formsubmit.co/dcrame2@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New DJ Submission!" />
          {/* <input type="hidden" name="_cc" value="jtully97@gmail.com" /> */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thanks.html"
          ></input>

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
        <img src="map.png" />
      </div>
    </Section>
  );
};

export default Contact;