import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PBaseStyles, PSecondary } from '../styles/Type';
import { Variables } from '../styles/Variables';
import DropIndicator from './svg/DropIndicator';

const Container = styled.div`
    display: relative;
    border-bottom: 2px solid ${Variables.black};

    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .toggle {
            background-color: unset;
            border: unset;
            ${PBaseStyles}
            color: ${Variables.black};
            padding: 20px 0;
            max-width: 90%;
            text-align: left;
        }
        .indicator {
            display: flex;
            align-items: center;
            svg {
                transition: transform ease 0.4s;
            }
        }
    }

    .panel {
        max-height: 0px;
        transition: max-height ease 0.4s;
        overflow: hidden;

        p {
            ${PSecondary}
            margin-bottom: 24px;
            opacity: 0;
            transition: opacity ease 0.4s;
        }
    }

    &.active {
        svg {
            transform: rotate(180deg);
            transition: transform ease 0.4s;
        }

        .panel {
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
        <Container className={`${props.classname} ${active ? 'active' : ''}`}>
            <div className='wrapper'>
                <button className='toggle' onClick={toggleDropdown}>
                    {props.question}
                </button>
                <div className='indicator'>
                    <DropIndicator />
                </div>
            </div>
            <div className={`panel ${active ? 'active' : ''}`}>
                <p>{props.answer}</p>
            </div>
        </Container>
    );
}
