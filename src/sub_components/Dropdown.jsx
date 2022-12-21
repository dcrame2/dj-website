import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H3Styles, PBaseStyles } from '../styles/Type';
import { Variables } from '../styles/Variables';

const Container = styled.div`
    display: relative;
    border-bottom: 2px solid ${Variables.black};

    .wrapper {
        .toggle {
            background-color: unset;
            border: unset;
            ${H3Styles}
            color: ${Variables.black};
            padding: 20px 0;
            max-width: 90%;
            text-align: left;
        }
        .indicator {
        }
    }

    .panel {
        max-height: 0px;
        transition: max-height ease 0.4s;
        overflow: hidden;

        p {
            ${PBaseStyles}
            margin-bottom: 24px;
            opacity: 0;
            transition: opacity ease 0.4s;
        }
        &.active {
            max-height: 200px;
            transition: max-height ease 0.4s;

            p {
                opacity: 1;

                transition: opacity ease 0.4s;
            }
        }
    }
`;

export default function Dropdown({ ...props }) {
    const [active, setActive] = useState(false);

    // useEffect(() => {}, []);

    const toggleDropdown = () => {
        setActive(!active);
    };

    return (
        <Container className={props.className}>
            <div className='wrapper'>
                <button className='toggle' onClick={toggleDropdown}>
                    {props.question}
                </button>
                <div className='indicator'></div>
            </div>
            <div className={`panel ${active ? 'active' : ''}`}>
                <p>{props.answer}</p>
            </div>
        </Container>
    );
}
