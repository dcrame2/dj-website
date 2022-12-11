import Navigation from "./components/Navigation";
// import LinkButton from "./sub_components/LinkButton";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Hero from "./components/Hero";
import "./global.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero src="hero1.mp4" />
      <Services />

      <Contact />
    </>
  );
}

export default App;
