import React from 'react';
import styled from 'styled-components';
import SecondaryHero from '../components/SecondaryHero';
import Spacer from '../sub_components/Spacer';
import { Variables } from '../styles/Variables';

const AboutUsPage = () => {
    return (
        <>
            <Spacer
                color={Variables.color3}
                desktop={258}
                tablet={120}
                mobile={100}
            />

            <SecondaryHero>About Us</SecondaryHero>

            <Spacer
                color={Variables.color3}
                desktop={258}
                tablet={120}
                mobile={100}
            />
        </>
    );
};

export default AboutUsPage;
