import { hydrateRoot } from "react-dom/client";
import  Navigation from './components/Navigation.jsx'
import Hero from "./components/Hero";
import "./global.css";

function App() {
  return (
    <>
    <Navigation />
    <Hero src="hero1.mp4" />
    <h1> Josh is a little bitch</h1>
    </>
  )
}

export default App;
