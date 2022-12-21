import Dropdown from '../sub_components/Dropdown';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';

const FaqContainer = styled.div`
    display: relative;
    background-color: ${Variables.color1};

    .inner-container {
        ${Container}
        padding-top: 90px;
        padding-bottom: 90px;
    }
`;

const data = {
    questions: [
        {
            question: `How much does ${Variables.companyName} cost?
        `,
            answer: 'Each clients goal differ and you must have a conversation with a team member to ensure we align on the scope of your project. Please fill out our contact form<a href=”/#contact”> here</a>. We’ve ranged from $1500 - $1MIL',
        },
        {
            question: 'How long does it take for a website?',
            answer: 'This depends on the scope of your project, we’ve ranged from 2-3 weeks to 4 months.',
        },
        {
            question: 'How easy is it for me to make changes on a website? ',
            answer: `${Variables.companyName} provides clients with a Content Management System call WordPress to make changes to copy, content, and images. `,
        },
        {
            question:
                'Does your company handle all things related to a website?',
            answer: 'Yeup! everything spanning from web design, web development, hosting, content updates you name it!',
        },
        {
            question: 'What does the process of your website include? ',
            answer: 'We follow an Agile approach, we will conduct weekly or bi-weekly status updates throughout the entire project to ensure we are aligned on your project and meeting your goals.',
        },
        {
            question: 'Do you work with WordPress?',
            answer: 'We specialize in WordPress with years of experience, we have worked with some of the most complex of themes',
        },
        {
            question: 'Can you make web application or mobile applications?',
            answer: 'Yes, the boys can make fully custom web applications and mobile applications. These products are a much higher cost to a client due to additional hours commenced.',
        },
    ],
};

export default function FaqModule() {
    return (
        <FaqContainer>
            <div className='inner-container'>
                {data.questions.map((faq, index) => {
                    console.log(faq);
                    return (
                        <Dropdown
                            key={`faq-dropdown-${index}`}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    );
                })}
            </div>
        </FaqContainer>
    );
}
