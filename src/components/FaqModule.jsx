import Dropdown from "../sub_components/Dropdown";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FaqContainer = styled.section`
  display: relative;
  /* background-color: ${Variables.color7}; */
  background-image: url(${Variables.background1});
  /* width: 100%; */

  z-index: 1;
  /* Full height */
  /* height: auto; */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media ${MediaQueries.tablet} {
    background-color: ${Variables.color7};
    background-image: unset;
  }

  .inner-container {
    ${Container}
    max-width: 1100px;
    padding-top: 160px;
    padding-bottom: 180px;

    @media ${MediaQueries.tablet} {
      padding-top: 120px;
      padding-bottom: 160px;
    }

    @media ${MediaQueries.mobile} {
      padding-top: 80px;
      padding-bottom: 120px;
    }

    .heading-section {
      margin: 0 auto 78px;
      text-align: center;
      max-width: 800px;

      @media ${MediaQueries.tablet} {
        margin: 0 auto 48px;
      }

      @media ${MediaQueries.mobile} {
        margin: 0 auto 28px;
      }

      h2 {
        ${H2Styles}
        text-transform: uppercase;
        color: ${Variables.black};
        margin-bottom: 16px;
      }
      P {
        /* ${PBaseStyles} */
        ${PSecondary}
        color: ${Variables.black};
      }
    }

    .dropdown-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const data = {
  heading: "Frequently Asked Questions",
  subheading:
    "If you have a question that you do not see here, please reach out via the contact form",
  questions: [
    {
      question: `How much does ${Variables.companyName} cost?
        `,
      answer:
        "Each businesses goals differ. You must have a conversation with a team member to ensure we align on the scope of your project.",
      //  We’ve ranged from $1,000 - $20,000.
    },
    {
      question: "How long does it take for a website to be built?",
      answer:
        "This depends on the scope of your project, we’ve been able to complete websites in 2-3 weeks to 4 months. ",
    },
    {
      question: `How easy is it for my business to make changes on a website built by ${Variables.companyName}?`,
      answer: `${Variables.companyName} may provide clients with a Content Management System which allows for simple edits to copy, media etc. via a user-friendly dashboard - no coding necessary!`,
    },
    {
      question: "Does your company handle all things related to a website?",
      answer:
        "Yes, we handle everything spanning from web design, web development, hosting and content updates.",
    },
    {
      question: "What is your website and web application development process?",
      answer:
        "Our development process follows a streamlined Agile approach, with regular status updates to ensure alignment and goal achievement as we progress on the development of your website or web application.",
    },
    {
      question: "Can you make mobile applications?",
      answer:
        "Yes, we create fully custom mobile applications. Mobile application and web applications are a much higher cost to a client due to additional hours commenced.",
    },
  ],
};

export default function FaqModule({ ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <FaqContainer id={props.id}>
      <div className="inner-container">
        <div ref={ref} className="heading-section">
          <motion.h2
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {data.heading}
          </motion.h2>
          <p>{data.subheading}</p>
        </div>
        <div className="dropdown-container">
          {data.questions.map((faq, index) => {
            return (
              <Dropdown
                key={`faq-dropdown-${index}`}
                question={faq.question}
                answer={faq.answer}
              />
            );
          })}
        </div>
      </div>
    </FaqContainer>
  );
}
