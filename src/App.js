import Navigation from "./components/Navigation.jsx";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ModuleBlender from "./sub_components/ModuleBlender";
import ImageContentModule from "./components/ImageContentModule.jsx";
import Hero from "./components/Hero";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials";
import SlideOutLink from "./components/SlideOutLink";
import Spacer from "./sub_components/Spacer.jsx";
import "./global.css";
import { useState, useEFfect, useEffect } from "react";
import { Variables } from "./styles/Variables.jsx";

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
        animateStartId="services"
        scrollY={scrollY}
        href="#services"
        text="services"
      />
      <Hero src="hero1.mp4" />
      <ModuleBlender size="large" />
      <Services />
      <ModuleBlender />
      <Spacer color={Variables.color7} desktop={158} tablet={92} mobile={80} />
      <ImageContentModule
        id="designSection"
        imgSrc="design.jpg"
        altTxt=""
        heading="Design"
        content={`The average Web users attention span lasts on average 8 seconds. With thatin my mind, it is vital to provide your websites visitors with the most eye catching content available, while simultaneously delivering your business goals.\n\nBy teaming up with ${Variables.companyName} we can ensure that your users experience a smooth and seamless experience, while still informing users on all that your business has to offer.`}
      />
      <Spacer color={Variables.color7} desktop={144} tablet={92} mobile={60} />
      <ImageContentModule
        id="developSection"
        imgRight="right"
        imgSrc="developer2.jpg"
        altTxt=""
        heading="Develop"
        content={`${Variables.companyName} knows Web Development better than anything. With a team full of Web Developers we provide quality and modern wesbites that attract customers to your business.\n\n${Variables.companyName} will ensure your website functions to the highest standard. Your user's experience and the user interface will be flawlessly developed.`}
      />
      <Spacer color={Variables.color7} desktop={144} tablet={92} mobile={60} />
      <ImageContentModule
        id="supportSection"
        imgRight="left"
        imgSrc="support.jpg"
        altTxt=""
        heading="Support"
        content={`For new websites built by ${Variables.companyName} we provide clients with a Content Management System that allows you as the client to make easy content changes to your website, for example: text, images and links.\n\nNot every change can be made by the client where a developer may be needed but ${Variables.companyName} offers support and maintenance to any website whether built by us or to an existing website, for example: adding new pages or adjusting the design.`}
      />
      <Spacer color={Variables.color7} desktop={158} tablet={92} mobile={80} />
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
