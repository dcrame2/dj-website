import Navigation from "./components/Navigation.jsx";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ModuleBlender from "./sub_components/ModuleBlender";
import ImageContentModule from "./components/ImageContentModule.jsx";
import Hero from "./components/Hero";
import Footer from "./components/Footer.jsx";
import SlideOutLink from "./components/SlideOutLink";
import Spacer from "./sub_components/Spacer.jsx";
import FaqModule from "./components/FaqModule.jsx";
import TestimonialsV2 from "./components/TestimonialsV2.jsx";
import "./global.css";
import { useState } from "react";
import { MediaQueries } from "./styles/Utilities";
import { Variables } from "./styles/Variables.jsx";
import styled from "styled-components";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  HashRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

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
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
