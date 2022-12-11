import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";

const Section = styled.section`
  height: auto;
  padding: 8% 5%;
  background-color: ${Variables.color4};

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      gap: 20px;

      label {
        font-size: 2rem;
      }

      input,
      textarea {
        background-color: transparent;
        border-color: ${Variables.color2};
      }
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <form action="https://formsubmit.co/dcrame2@gmail.com" method="POST">
        <div>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" required />
        </div>
        <div>
          <label htmlFor="lname">Label Name:</label>
          <input type="text" name="lname" required />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea type="text" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};

export default Contact;
