import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Variables } from '../styles/Variables';

const FloatingButton = styled.div`
    display: flex;
    position: relative;
    z-index: 100;

    &.active {
        right: 20px;
    }

    button {
        cursor: pointer;
        position: fixed;
        width: 85px;
        height: 85px;
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

        &.active {
            right: 20px;
            transition: right ease 0.4s, transform ease 0.5s;
            transform: rotate(0);
        }

        span {
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            font-weight: 700;
            font-family: ${Variables.openSans};
            font-size: 1.4rem;
            color: ${Variables.white};
            transform: rotate(-15deg);
        }

        &:after {
            content: '';
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

        &:focus {
            &:after {
                transition: height ease 0.4s;
            }
        }
    }
`;

export default function FloatingContact({ ...props }) {
    const [active, setActive] = useState(false);
    const [triggerDistance, setTriggerDistance] = useState();
    const [scrollY, setScrollY] = useState();

    const scrollListener = () => {
        console.log(window.scrollY);
        window.onscroll = function (e) {
            setScrollY(window.scrollY);
        };
    };

    scrollListener();

    // Grab element by id through prop animateStartId : string
    // setTriggerDistance state
    useEffect(() => {
        // console.log(props.animateStartId);
        // console.log(props.scrollY);

        if (props.animateStartId !== undefined) {
            let selectedElement = document.getElementById(
                `${props.animateStartId}`
            );
            setTriggerDistance(
                window.pageYOffset + selectedElement.getBoundingClientRect().top
            );
        } else {
            setTriggerDistance(500);
        }
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
        <FloatingButton>
            <button
                id='TEST'
                aria-label={props.ariaLabel}
                className={`${active ? 'active' : ''}`}
            >
                <span>{props.text ? props.text : null}</span>
            </button>
        </FloatingButton>
    );
}
