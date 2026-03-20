import './App.css';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './components/navbar';
import Hero from './components/page';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contactme';
import Footer from './components/footer';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={7}
        outerSize={32}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{ backgroundColor: '#2997ff', zIndex: 99999 }}
        outerStyle={{ border: '1.5px solid rgba(41,151,255,0.6)', backgroundColor: 'transparent', zIndex: 99999 }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
