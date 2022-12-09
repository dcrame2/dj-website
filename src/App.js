import Navigation from './components/Navigation.jsx';
import LinkButton from './sub_components/LinkButton';
import Hero from './components/Hero';
import './global.css';

function App() {
   return (
      <>
         <Navigation />
         <Hero src='hero1.mp4' />
         <LinkButton href='#' target='_blank' text='Call to Action' />
         <h1> DYLAN is a little bitch</h1>
      </>
   );
}

export default App;
