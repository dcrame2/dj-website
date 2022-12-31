import styled from 'styled-components';
import { Variables } from '../styles/Variables';

const CustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const CustomButton = styled.button`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${Variables.color9};
    border-radius: 20px;
    color: ${Variables.color10};
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
        content: '';
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
    @keyframes focusAnimation {
        0% {
            height: 90%;
        }
        10% {
            height: 82%;
        }
        20% {
            height: 75%;
        }
        30% {
            height: 98%;
        }
        40% {
            height: 79%;
        }
        50% {
            height: 85%;
        }
        60% {
            height: 98%;
        }
    }
    &:focus {
        &:after {
            transition: height ease 0.4s;
            animation: focusAnimation 1s infinite;
            animation-fill-mode: forwards;
        }
    }
`;

export default function Button({ ...props }) {
    return (
        <CustomButtonWrapper>
            <CustomButton
                onClick={props.onClicked}
                type={props.type}
                aria-label={props.ariaLabel}
            >
                <span>{props.text}</span>
            </CustomButton>
        </CustomButtonWrapper>
    );
}
