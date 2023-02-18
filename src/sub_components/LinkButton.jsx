import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomLinkStylingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  .CustomLink {
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${Variables.color1};
    border-radius: 20px;
    color: ${Variables.black};
    border: 2px solid ${Variables.white};
    text-decoration: unset;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    span {
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      font-weight: 700;
      font-family: ${Variables.openSans};
      font-size: 1.4rem;
      color: ${Variables.white};
    }

    &:after {
      content: "";
      background-color: ${Variables.color2};
      position: absolute;
      width: 100%;
      height: 0;
      left: 0;
      bottom: 0;
      transition: height ease-in 0.35s;
      z-index: 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    &:hover,
    :focus {
      &:after {
        height: 100%;
        transition: height ease-out 0.1s;
      }
    }

    &:focus {
      &:after {
        transition: height ease 1s;
      }
    }
  }
`;

export default function LinkButton({ ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <CustomLinkStylingWrapper>
        <Link
          className="CustomLink"
          aria-label={props.ariaLabel}
          to={props.href}
          target={props.target}
        >
          <span>{props.text}</span>
        </Link>
      </CustomLinkStylingWrapper>
    </motion.div>
  );
}
