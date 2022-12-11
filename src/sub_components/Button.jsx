import styled from 'styled-components';
import { Variables } from '../styles/Variables';

const CustomButtonWrapper = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
`;

const CustomButton = styled.button`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${Variables.color1};
    border-radius: 20px;
    color: ${Variables.white};
    border: unset;
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

export default function Button({ text, type, onClicked }) {
    return (
        <CustomButtonWrapper>
            <CustomButton onClick={onClicked} type={type}>
                <span>{text}</span>
            </CustomButton>
        </CustomButtonWrapper>
    );
}