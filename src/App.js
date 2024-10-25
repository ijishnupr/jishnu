
import './App.css';
import { Fragment } from 'react';
import Page from './components/page';
import About from './components/about';
import Skills from './components/skills';
import Contactme from './components/contactme';
import Footer from './components/footer';
import Projects from './components/projects';
import Experience from './components/experience';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return <Fragment>
    <AnimatedCursor
    innerSize={8}          
    outerSize={25}         
    innerScale={1}         
    outerScale={2}         
    innerAlpha={1}         
    outerAlpha={0}
    hasBlendMode={true}
    outerStyle={{
      border: '3px solid white'
    }}
    color='255, 255, 255'
    />
   <Page/>
   <About/>
   <Skills/>
   <Experience/>
  <Projects/>
   <Contactme/>
   <p style={{textAlign:'center',paddingTop:'60px'}}>Thank you for scrolling till end :)</p>
   <Footer/>
  </Fragment>
  
 
}

export default App;
