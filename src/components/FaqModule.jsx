import Dropdown from "../sub_components/Dropdown";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Zoom from "react-reveal/Zoom";

const FaqContainer = styled.section`
  display: relative;
  /* background-color: ${Variables.color7}; */
  background-image: url(${Variables.background1});
  width: 100%;

  z-index: 1;
  /* Full height */
  /* height: auto; */
  height: 100%;
  background-color: ${Variables.color7};
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  /* @media ${MediaQueries.tablet} {
    background-attachment: scroll;
  } */

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
        "Each businesses goals differ. You must have a conversation with a team member to ensure we align on the scope of your project. We’ve ranged from $1,000 - $20,000.",
    },
    {
      question: "How long does it take for a website to be built?",
      answer:
        "This depends on the scope of your project, we’ve been able to complete websites in 2-3 weeks to 4 months. ",
    },
    {
      question: "How easy is it for me to make changes on a website? ",
      answer: `${Variables.companyName} may provide clients with a Content Management System which allows for easy edits to copy, media etc.`,
    },
    {
      question: "Does your company handle all things related to a website?",
      answer:
        "Yes, we handle everything spanning from web design, web development, hosting and content updates.",
    },
    {
      question: "What does the process of your website include? ",
      answer:
        "We follow an Agile approach, we will conduct weekly or bi-weekly status updates throughout the entire project to ensure we are aligned throughout the whole process and meeting your goals.",
    },
    {
      question: "Do you work with WordPress?",
      answer:
        "Yes, we specialize in WordPress with years of experience. We have worked with some of the most complex themes as well as creating custom themes.",
    },
    {
      question: "Can you make web application or mobile applications?",
      answer:
        "Yes, we can create fully custom web applications and mobile applications. These products are a much higher cost to a client due to additional hours commenced.",
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
          <h2
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {data.heading}
          </h2>
          <p>{data.subheading}</p>
        </div>
        <div className="dropdown-container">
          {data.questions.map((faq, index) => {
            return (
              <Zoom>
                <Dropdown
                  key={`faq-dropdown-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              </Zoom>
            );
          })}
        </div>
      </div>
    </FaqContainer>
  );
}
