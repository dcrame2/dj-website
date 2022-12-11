import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import Button from '../sub_components/Button';

const ICMContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${Variables.color7};

    .ICMInnerContainer {
        ${Container}
        height: 720px;
        display: flex;

        img {
        }
        .content {
            h2 {
            }
            p {
            }
        }
    }
`;

export default function ImageContentModule({ ...props }) {
    return (
        <ICMContainer>
            <div className='ICMInnerContainer'>
                <img src={props.imgSrc} alt={props.altTxt} />
                <div className='content'>
                    <h2>{props.heading}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </ICMContainer>
    );
}
