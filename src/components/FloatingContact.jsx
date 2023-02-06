import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Variables } from '../styles/Variables';
import Button from '../sub_components/Button';
import Close from '../sub_components/svg/Close';
import { H3Styles, PSmallStyles } from '../styles/Type';
import { motion } from 'framer-motion';

const FloatingButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    max-height: ${(props) => (props.loaded ? '85px' : 'unset')};
    max-width: ${(props) => (props.loaded ? '85px' : 'unset')};
    height: ${(props) => (props.loaded ? '85px' : 'unset')};
    width: ${(props) => (props.loaded ? '85px' : 'unset')};
    padding: ${(props) => (props.loaded ? 'unset' : '38px 24px')};
    bottom: 20px;
    right: -100%;
    z-index: 100;
    transform: rotate(-180deg);
    transition: all ease 0.4s;
    background-color: ${Variables.color9};
    color: ${Variables.white};
    border-radius: 50%;
    border: 4px solid ${Variables.white};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    overflow: hidden;

    &.active {
        right: 20px;
        transform: rotate(0deg);
    }

    &.expand {
        max-width: ${(props) => props.width + 100 + 'px'};
        max-height: ${(props) => props.height + 'px'};
        width: 100%;
        height: 100%;
        padding: 38px 24px;
        border-radius: 38px;
        justify-content: flex-start;
        background-color: ${Variables.color16};
        border: solid 4px ${Variables.color2};
        //transform: rotateY(360deg);

        form {
            display: flex;
            margin-top: 20px;
            opacity: 1;
            scale: 1;
            height: 100%;
        }

        button.close {
            display: block;
        }
    }

    button.close {
        display: ${(props) => (props.loaded ? 'none' : 'block')};
        align-self: flex-end;
        width: 30px;
        height: 30px;
        background-color: unset;
        border: unset;
        cursor: pointer;
    }

    form {
        display: flex;
        height: ${(props) => (props.loaded ? '0px' : 'unset')};
        scale: ${(props) => (props.loaded ? '0' : 'unset')};
        transition: all ease 0.4s;
        opacity: 0;
        z-index: 10;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 14px;

        h3 {
            ${H3Styles}
            margin-bottom: 4px;
        }

        div {
            display: flex;
            flex-direction: column;
            width: 100%;

            label {
                ${PSmallStyles}
            }
            input,
            textarea {
                border: 2px solid ${Variables.color2};
                border-radius: 8px;
                background-color: unset;
            }
            input {
                height: 40px;
            }
            textarea {
                height: 80px;
            }
        }

        button {
            margin-top: 8px;
        }
    }

    button.toggle-form {
        cursor: pointer;
        padding: 10px;
        background-color: unset;
        text-decoration: unset;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: unset;
        transition: all ease 0.4s;
        opacity: ${(props) => (props.showText ? 1 : 0)};
        transition: ${(props) =>
            props.showText ? 'all ease .4s' : 'opacity ease 0s'};
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

        &:hover {
            &:after {
                height: 100%;
                transition: height ease-out 0.1s;
            }
        }
    }
`;

export default function FloatingContact({ ...props }) {
    const [active, setActive] = useState(false);
    const [triggerDistance, setTriggerDistance] = useState();
    const [expand, setExpand] = useState(false);
    const [showText, setShowText] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    // Grab element by id through prop animateStartId : string
    // setTriggerDistance state
    useEffect(() => {
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

    const [fnameValue, setFnameValue] = useState('');
    const [lnameValue, setLnameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [successValue, setSuccessValue] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const FNameHandler = (e) => {
        setFnameValue(e.target.value);
    };

    const LNameHandler = (e) => {
        setLnameValue(e.target.value);
    };

    const EmailHandler = (e) => {
        setEmailValue(e.target.value);
    };

    const MessageHandler = (e) => {
        setMessageValue(e.target.value);
    };

    const recipients = [
        'jtully97@gmail.com',
        'dcrame2@gmail.com',
        'info@thedigitaldelight.com',
    ];

    const submitForm = (recip) => {
        recip.map((email) => {
            fetch(`https://formsubmit.co/ajax/${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    fname: `${fnameValue}`,
                    lname: `${lnameValue}`,
                    email: `${emailValue}`,
                    message: `${messageValue}`,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setSuccessValue(true);
                    setSuccessMessage(data.message);
                })
                .catch((error) => console.log(error));
        });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        submitForm(recipients);
        // https://github.com/github/fetch
    };

    useEffect(() => {
        if (expand) {
            setShowText(false); // control the timing of toggling the display of button text
        } else {
            setTimeout(() => {
                setShowText(true);
            }, 400);
        }
    }, [expand]);

    useEffect(() => {
        // get popup height while it is off screen
        if (!loaded) {
            const element = document.getElementById('floatingPopup');

            const width = element.clientWidth;
            setWidth(width);

            let height = element.clientHeight;
            setHeight(height);
        }
        setLoaded(true);
    }, [loaded]);

    return (
        <FloatingButton
            className={`${expand ? 'expand' : ''} ${active ? 'active' : ''} `}
            showText={showText}
            id='floatingPopup'
            loaded={loaded}
            width={width}
            height={height}
        >
            <motion.button
                className='close'
                onClick={() => setExpand(false)}
                aria-label='close form popup'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                <Close color={Variables.white} />
            </motion.button>
            <form onSubmit={OnSubmit}>
                {/* action="https://formsubmit.co/dcrame2@gmail.com" */}
                <input
                    type='hidden'
                    name='_subject'
                    value={`New ${Variables.companyName} Submission!`}
                />
                <input
                    type='hidden'
                    name='_autoresponse'
                    value={`Thank you from ${Variables.companyName}`}
                ></input>
                <input type='hidden' name='_cc' value='jtully97@gmail.com' />
                <input type='hidden' name='_captcha' value='false' />
                <input type='hidden' name='_template' value='table'></input>
                <input
                    type='hidden'
                    name='_next'
                    value='http://www.thedigitaldelight.com'
                ></input>
                <h3>Talk with our team!</h3>
                <div>
                    <label htmlFor='firstname'>First Name*</label>
                    <input
                        onChange={FNameHandler}
                        type='text'
                        name='firstname'
                        id='firstname'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name*</label>
                    <input
                        onChange={LNameHandler}
                        type='text'
                        name='lastname'
                        id='lastname'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email Address*</label>
                    <input
                        onChange={EmailHandler}
                        type='email'
                        name='email'
                        id='email'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message*</label>
                    <textarea
                        onChange={MessageHandler}
                        type='text'
                        name='message'
                        id='message'
                        required
                    />
                </div>
                <Button ariaLabel='Submit form' text='Submit'></Button>
            </form>
            <button
                aria-label={props.ariaLabel}
                className='toggle-form'
                onClick={() => setExpand(true)}
            >
                <span>{props.text ? props.text : null}</span>
            </button>
        </FloatingButton>
    );
}
