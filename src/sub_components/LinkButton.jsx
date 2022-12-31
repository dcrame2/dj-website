import styled from 'styled-components';
import { Variables } from '../styles/Variables';

const CustomLinkStylingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const CustomLink = styled.a`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${Variables.color9};
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

export default function LinkButton({ ...props }) {
    return (
        <CustomLinkStylingWrapper>
            <CustomLink
                aria-label={props.ariaLabel}
                href={props.href}
                target={props.target}
            >
                <span>{props.text}</span>
            </CustomLink>
        </CustomLinkStylingWrapper>
    );
}
