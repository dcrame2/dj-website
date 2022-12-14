import Navigation from './components/Navigation.jsx';
import Contact from './components/Contact';
import Services from './components/Services';
import ModuleBlender from './sub_components/ModuleBlender';
import ImageContentModule from './components/ImageContentModule.jsx';
import Hero from './components/Hero';
import Footer from './components/Footer.jsx';
import Testimonials from './components/Testimonials';
import SlideOutLink from './components/SlideOutLink';
import './global.css';
import { useState, useEFfect, useEffect } from 'react';
import { Variables } from './styles/Variables.jsx';

function App() {
    const [navBackdrop, setNavBackdrop] = useState(false);
    const [animateElements, setAnimateElements] = useState();
    const [scrollY, setScrollY] = useState();

    const scrollListener = () => {
        window.onscroll = function (e) {
            setScrollY(this.scrollY);
            // Nav functionality
            if (this.scrollY > 83) {
                setNavBackdrop(true);
            } else {
                setNavBackdrop(false);
            }
        };
    };

    scrollListener();

    return (
        <>
            <Navigation backdrop={navBackdrop} setBackdrop={setNavBackdrop} />
            <SlideOutLink
                animateStartId='services'
                scrollY={scrollY}
                href='#services'
                text='services'
            />
            <Hero src='hero1.mp4' />
            <ModuleBlender size='large' />
            <Services />
            <ModuleBlender />
            <ImageContentModule
                imgSrc='dev.jpg'
                altTxt=''
                heading='Design'
                content={`The average Web users attention span lasts on average 8 seconds. With that it is vital to provide your websites visitors with the most eye catching content available. While also delivering your business goals. By teaming up with ${Variables.companyName} we can ensure that your users experience a smooth seamless experience, while still informing on all that your business has to offer.`}
            />
            <ImageContentModule
                imgRight='right'
                imgSrc='dev.jpg'
                altTxt=''
                heading='Super Dope Heading'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?'
            />
            <ModuleBlender />
            <Testimonials />
            <ModuleBlender />
            <Contact />
            <ModuleBlender />
            <Footer />
        </>
    );
}

export default App;
