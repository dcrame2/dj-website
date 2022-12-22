import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PBaseStyles, PSecondary } from '../styles/Type';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import DropIndicator from './svg/DropIndicator';

const Container = styled.div`
    display: relative;
    border-bottom: 2px solid ${Variables.black};

    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        position: relative;

        .toggle {
            background-color: unset;
            border: unset;
            ${PBaseStyles}
            color: ${Variables.black};
            padding: 20px 85px 20px 0;
            width: 100%;
            text-align: left;
            z-index: 1;

            @media ${MediaQueries.tablet} {
                padding: 16px 45px 16px 0;
            }
        }
        .indicator {
            position: absolute;
            top: 25%;
            right: 0;
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
            max-width: 80%;
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

            @media ${MediaQueries.tablet} {
                max-height: 300px;
            }

            @media ${MediaQueries.mobile} {
                max-height: 550px;
            }

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
