import Navigation from "./components/Navigation.jsx";
// import LinkButton from "./sub_components/LinkButton";
import Services from "./components/Services";
import Hero from "./components/Hero";
import "./global.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero src="hero1.mp4" />
      <Services />
    </>
  );
}

export default App;
