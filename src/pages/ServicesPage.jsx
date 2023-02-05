import React from 'react';
import styled from 'styled-components';
import SecondaryHero from '../components/SecondaryHero';
import Spacer from '../sub_components/Spacer';
import { Variables } from '../styles/Variables';
import FullScreenModule from '../components/FullScreenModule';

const ServicesContainer = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
`;

const data = [
    {
        id: '1',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: 'right',
        heading: 'Test header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
    {
        id: '2',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: '',
        heading: '2nd header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
    {
        id: '23',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: 'right',
        heading: '3rd header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
    {
        id: '23',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: '',
        heading: '3rd header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
    {
        id: '3',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: 'right',
        heading: '3rd header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
    {
        id: '4',
        imgSrc: '/service_about/design.jpg',
        altText: 'text',
        imgPlacement: '',
        heading: '3rd header',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime eiiure cupiditate voluptas et sit, voluptatibus modi eligendi. Fugiat, debitis sed magni maxime fugit officia. Rem provident atque laboriosam?',
    },
];

const ServicesPage = ({ scrollPosition }) => {
    return (
        <ServicesContainer>
            <FullScreenModule data={data[0]} bgColor={Variables.white} />
            <FullScreenModule data={data[1]} bgColor={Variables.color1} />
            <FullScreenModule data={data[2]} bgColor={Variables.color2} />
            <FullScreenModule data={data[3]} bgColor={Variables.color9} />
            <FullScreenModule data={data[4]} bgColor={Variables.color4} />
            <FullScreenModule />
        </ServicesContainer>
    );
};

export default ServicesPage;
