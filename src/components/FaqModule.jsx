import Dropdown from "../sub_components/Dropdown";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { H2Styles, PBaseStyles } from "../styles/Type";

const FaqContainer = styled.section`
  display: relative;
  background-color: ${Variables.color7};

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
        ${PBaseStyles}
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
        "Each clients goal differ and you must have a conversation with a team member to ensure we align on the scope of your project. We’ve ranged from $1,500 - $20,000.",
    },
    {
      question: "How long does it take for a website?",
      answer:
        "This depends on the scope of your project, we’ve been able to complete websites in 2-3 weeks to 4 months.",
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
        "We follow an Agile approach, we will conduct weekly or bi-weekly status updates throughout the entire project to ensure we are aligned throughout the entire process and meeting your goals.",
    },
    {
      question: "Do you work with WordPress?",
      answer:
        "Yes, we specialize in WordPress with years of experience, we have worked with some of the most complex of themes.",
    },
    {
      question: "Can you make web application or mobile applications?",
      answer:
        "Yes, we can create fully custom web applications and mobile applications. These products are a much higher cost to a client due to additional hours commenced.",
    },
  ],
};

export default function FaqModule({ ...props }) {
  return (
    <FaqContainer id={props.id}>
      <div className="inner-container">
        <div className="heading-section">
          <h2>{data.heading}</h2>
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
