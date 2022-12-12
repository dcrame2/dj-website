import Navigation from './components/Navigation.jsx';
import Contact from './components/Contact';
import Services from './components/Services';
import ModuleBlender from './sub_components/ModuleBlender';
import ImageContentModule from './components/ImageContentModule.jsx';
import Hero from './components/Hero';
import Footer from './components/Footer.jsx';
import './global.css';
import { useState, useEFfect, useEffect } from 'react';

function App() {
    const [navBackdrop, setNavBackdrop] = useState(false);
    const [animateElements, setAnimateElements] = useState();

    useEffect(() => {
        let body = document.body,
            html = document.documentElement;

        let height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        console.log('height: ' + height);
    }, []);

    const windowResizeListener = () => {
        window.onresize = function (e) {
            console.log(window.innerWidth);
        };
    };

    windowResizeListener();

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
            <Footer />
        </>
    );
}

export default App;
