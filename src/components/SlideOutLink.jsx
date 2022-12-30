import { useState, useEffect } from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 100;

  &.active {
    right: 20px;
  }
`;
const Link = styled.a`
  cursor: pointer;
  position: fixed;
  width: 80px;
  height: 80px;
  padding: 10px;
  background-color: red;
  border-radius: 50%;
  bottom: 20px;
  z-index: 10;
  right: -100%;
  background-color: ${Variables.color9};
  color: ${Variables.white};
  text-decoration: unset;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: right ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-180deg);
  transition: right ease 0.4s, transform ease 0.5s;
  border: 4px solid ${Variables.white};

  /* &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        border-radius: 50%;
        background-color: gray;
    } */

  &.active {
    right: 20px;
    transition: right ease 0.4s, transform ease 0.5s;
    transform: rotate(0);
  }

  span {
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-weight: bold;
    transform: rotate(-15deg);
    color: ${Variables.white};
  }

  &:after {
    content: "";
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: ${Variables.color2};
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    transition: height ease-in 0.35s;
    z-index: 0;
  }

  &:hover,
  :focus {
    &:after {
      height: 100%;
      transition: height ease-out 0.1s;
    }
  }
  // WORK IN PROGRESS
  @keyframes focusAnimation {
    0% {
      height: 70%;
    }
    10% {
      height: 62%;
    }
    20% {
      height: 75%;
    }
    30% {
      height: 68%;
    }
    40% {
      height: 79%;
    }
    50% {
      height: 55%;
    }
    60% {
      height: 78%;
    }
  }
  &:focus {
    &:after {
      transition: height ease 0.4s;
      animation: focusAnimation 2s infinite;
    }
  }
`;

// Pure Elegance
export default function SlideOutLink({ ...props }) {
  const [active, setActive] = useState(false);
  const [triggerDistance, setTriggerDistance] = useState();

  // Grab element by id through prop animateStartId : string
  // setTriggerDistance state
  useEffect(() => {
    let selectedElement = document.getElementById(`${props.animateStartId}`);
    setTriggerDistance(
      window.pageYOffset + selectedElement.getBoundingClientRect().top
    );
  }, []);

  // Access scrollY prop for current distance, if scrollY distance
  // is larger than trigger distance state value set by above useEffect
  useEffect(() => {
    if (props.scrollY > triggerDistance) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.scrollY]);

  return (
    <Wrapper>
      <Link
        aria-label={props.ariaLabel}
        className={`${active ? "active" : ""}`}
        href={props.href}
      >
        <span>{props.text ? props.text : null}</span>
      </Link>
    </Wrapper>
  );
}
