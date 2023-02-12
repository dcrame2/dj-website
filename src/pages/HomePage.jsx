import Contact from '../components/Contact';
import Services from '../components/Services';
import ModuleBlender from '../sub_components/ModuleBlender';
import ImageContentModule from '../components/ImageContentModule.jsx';
import Hero from '../components/Hero';
import Footer from '../components/Footer.jsx';
import Spacer from '../sub_components/Spacer.jsx';
import FaqModule from '../components/FaqModule.jsx';
import TestimonialsV2 from '../components/TestimonialsV2.jsx';
import '../global.css';
import { useState } from 'react';
import { MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables.jsx';
import styled from 'styled-components';

const ParaContainer = styled.div`
    background-image: url(${Variables.background1});
    z-index: 1;
    height: 100%;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-size: auto 200px; */

    @media ${MediaQueries.tablet} {
        background-color: ${Variables.color7};
        background-image: unset;
    }
`;

function HomePage({ scrollPosition }) {
    return (
        <>
            <Hero src='hero1.mp4' />
            {/* <ModuleBlender size='large' /> */}
            <Services />
            <ModuleBlender />
            <ParaContainer>
                <Spacer
                    color={Variables.color20}
                    desktop={258}
                    tablet={120}
                    mobile={100}
                />
            </ParaContainer>
            <ModuleBlender />
            <TestimonialsV2 id='testimonials' />
            <ModuleBlender />
            <FaqModule id='faqSection' />
            <ModuleBlender />
            <Contact />
            <ModuleBlender />
            {/* <Footer /> */}
        </>
    );
}

export default HomePage;
