import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H3Styles, PBaseStyles } from '../styles/Type';
import { Variables } from '../styles/Variables';

const Container = styled.div`
    display: relative;
    border-bottom: 2px solid ${Variables.black};

    button {
        background-color: unset;
        border: unset;
        ${H3Styles}
        color: ${Variables.black};
    }

    div.panel {
        max-height: 0px;
        transition: max-height ease 0.4s;
        overflow: hidden;

        p {
            ${PBaseStyles}
        }
        &.active {
            max-height: 200px;
            transition: max-height ease 0.4s;
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
        <Container>
            <button onClick={toggleDropdown}>{props.question}</button>
            <div className={`panel ${active ? 'active' : ''}`}>
                <p>{props.answer}</p>
            </div>
        </Container>
    );
}
