import Navigation from './components/Navigation.jsx';
import Contact from './components/Contact';
import Services from './components/Services';
import ModuleBlender from './sub_components/ModuleBlender';
import ImageContentModule from './components/ImageContentModule.jsx';
import Hero from './components/Hero';
import './global.css';
import { useState } from 'react';

function App() {
    const [navBackdrop, setNavBackdrop] = useState(false);

    const scrollListener = () => {
        window.onscroll = function (e) {
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
            <Hero src='hero1.mp4' />
            <Services />
            <ModuleBlender />
            <ImageContentModule
                imgSrc='dev.jpg'
                altTxt=''
                heading='Super Dope Heading'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?'
            />
            <ImageContentModule
                imgRight='right'
                imgSrc='dev.jpg'
                altTxt=''
                heading='Super Dope Heading'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, ullam ea cumque ducimus laboriosam sequi tempora laudantium architecto aperiam autem nam quas incidunt excepturi op?'
            />
            <ModuleBlender />
            <Contact />
        </>
    );
}

export default App;
