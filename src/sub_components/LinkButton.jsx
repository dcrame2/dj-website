import styled from 'styled-components';
import { Variables } from '../styles/Variables';

const CustomLinkStylingWrapper = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
`;

const CustomLink = styled.a`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    //opacity: 0.7;
    background-color: ${Variables.color9};
    border-radius: 20px;
    color: ${Variables.white};
    //border: 3px solid ${Variables.white};
    text-decoration: unset;
    overflow: hidden;

    span {
        position: relative;
        z-index: 1;
        text-transform: uppercase;
        font-weight: bold;
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

export default function LinkButton({ text, href, target }) {
    return (
        <CustomLinkStylingWrapper>
            <CustomLink href={href} target={target}>
                <span>{text}</span>
            </CustomLink>
        </CustomLinkStylingWrapper>
    );
}
