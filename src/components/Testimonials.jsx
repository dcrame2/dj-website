import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { H3Styles, PSecondary, H2Styles } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Cynthia L.",
    job: "CEO @ Google",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: `I would highly recommend ${Variables.companyName} for your website needs. I've never received better communication with a business before!`,
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "CEO @ FreeCodeCamp",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: `I can't thank ${Variables.companyName} enough for building our website. The design and support they provided is unmatched.`,
  },
  {
    id: 3,
    name: "Tim Cook",
    job: "CEO @ Apple",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: `${Variables.companyName} transformed my business to a new level which increased my site viewers over 100%.`,
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "VP @ Microsoft",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: `${Variables.companyName} makes the best websites I have ever seen. They tripled my website viewers in 2 months.`,
  },
];

const TestimonialsSection = styled.section`
  height: 600px;
  padding: 100px;
  text-align: center;
  @media ${Variables.mobile} {
    padding: 80px 40px;
  }
  .author {
    margin-bottom: 0.25rem;
    ${H2Styles}
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: ${Variables.white};
  }
  .info {
    margin-bottom: 0.75rem;
    ${PSecondary}
    height: 50px;
    @media ${Variables.mobile} {
      margin: unset;
      height: 100px;
    }
  }

  .button-container {
    .prev-btn,
    .next-btn {
      color: ${Variables.color10};
      font-size: 3rem;
      background: transparent;
      border-color: transparent;
      margin: 0 0.5rem;
      transition: all 0.3s linear;
      cursor: pointer;
    }
    .prev-btn:hover,
    .next-btn:hover {
      color: ${Variables.color1};
    }
  }
  .random-btn {
    margin-top: 0.5rem;
    background: ${Variables.color1};
    color: ${Variables.color10};
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: ${Variables.color1};
    color: ${Variables.color10};
  }

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      background: ${Variables.color10};
      position: absolute;
      top: -0.25rem;
      right: -0.5rem;
      border-radius: 50%;
    }
    .person-img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }
    .quote-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      transform: translateY(25%);
      background: ${Variables.color10};
      color: ${Variables.white};
    }
  }
`;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <TestimonialsSection className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </TestimonialsSection>
  );
};

export default Testimonials;

// const TestimonialsSection = styled.section`
//   height: 450px;
//   padding: 50px;
//   .carousel {
//     height: 100%;
//     .carousel-indicators {
//       bottom: -20px;
//       [data-bs-target] {
//         background-color: ${Variables.color1};
//       }
//     }
//     .carousel-item {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 20px;
//       transform: unset;
//       opacity: 0;
//       transition: opacity 0.3s ease-out;
//       &.active {
//         transition: opacity 0.3s ease-in;
//         opacity: 1;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 20px;
//       }

//       &.carousel-fade {
//         transform: unset;
//       }

//       img {
//         width: auto;
//         height: 200px;
//         @media ${MediaQueries.mobile} {
//           height: 150px;
//         }
//       }
//       .carousel-caption {
//         position: unset;
//         right: unset;
//         bottom: unset;
//         left: unset;
//         padding-top: unset;
//         padding-bottom: unset;
//         h3 {
//           ${H3Styles}
//           color: ${Variables.color1}
//         }

//         p {
//           max-width: 450px;
//           ${PSecondary}
//         }
//       }
//     }
//   }
// `;

// const Testimonials = () => {
//   return (
//     <TestimonialsSection id="testimonials">
//       <Carousel fade>
//         <Carousel.Item interval={6000}>
//           <img className="d-block" src="avatar1.png" alt="First slide" />
//           <Carousel.Caption>
//             <h3>Johnny J.</h3>
//             <p>
//               {Variables.companyName} transformed my business to a new level
//               which increased my site viewers over 100%.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={6000}>
//           <img className="d-block" src="avatar2.png" alt="Second slide" />
//           <Carousel.Caption>
//             <h3>William P.</h3>
//             <p>
//               I can't thank {Variables.companyName} enough for building our
//               website. The design and support they provided is unmatched.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={6000}>
//           <img className="d-block" src="avatar3.png" alt="Third slide" />
//           <Carousel.Caption>
//             <h3>Cynthia L.</h3>
//             <p>
//               I would highly recommend {Variables.companyName} for your website
//               needs. I've never received better communication with a business
//               before!
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </TestimonialsSection>
//   );
// };

// export default Testimonials;
