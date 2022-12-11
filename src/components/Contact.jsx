import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import LinkButton from "../sub_components/LinkButton";

const Section = styled.section`
  height: auto;
  padding: 8% 5%;
  background-color: ${Variables.color4};

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
        width: 400px;
        border: 2px solid ${Variables.color2};
      }
      input {
        height: 40px;
      }

      textarea {
        height: 75px;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <form action="https://formsubmit.co/dcrame2@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="New DJ Submission!" />
        <input type="hidden" name="_cc" value="jtully@gmail.com" />
        <input type="hidden" name="_captcha" value="false" />
        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}

        <div>
          <label htmlFor="fname">First Name:*</label>
          <input type="text" name="fname" required />
        </div>
        <div>
          <label htmlFor="lname">Label Name:*</label>
          <input type="text" name="lname" required />
        </div>
        <div>
          <label htmlFor="email">Email Address:*</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:*</label>
          <textarea type="text" name="message" required />
        </div>
        <LinkButton text="Submit">
          <button type="submit"></button>
        </LinkButton>
      </form>
    </Section>
  );
};

export default Contact;
