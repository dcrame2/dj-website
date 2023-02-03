import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import './global.css';
import { useState, useEffect } from 'react';
import { MediaQueries } from './styles/Utilities';
import { Variables } from './styles/Variables.jsx';
import styled from 'styled-components';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import FloatingContact from './components/FloatingContact.jsx';

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

function App() {
    const [navBackdrop, setNavBackdrop] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
            if (window.pageYOffset > 83) {
                setNavBackdrop(true);
            } else {
                setNavBackdrop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <HashRouter>
                <Navigation
                    backdrop={navBackdrop}
                    setBackdrop={setNavBackdrop}
                />
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage scrollPosition={scrollPosition} />}
                    />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                </Routes>
                <FloatingContact
                    ariaLabel='Jump to services overview'
                    scrollY={scrollPosition}
                    text='Contact Us'
                />
                <Footer />
            </HashRouter>
        </>
    );
}

export default App;
