
import './App.css';
import { Fragment } from 'react';
import Page from './components/page';
import About from './components/about';
import Skills from './components/skills';
import Contactme from './components/contactme';
import Footer from './components/footer';
import Projects from './components/projects';


function App() {
  return <Fragment>
   <Page/>
   <About/>
   <Skills/>
  <Projects/>
   <Contactme/>
   <p style={{textAlign:'center',paddingTop:'60px'}}>Thank you for scroll till end :)</p>
   <Footer/>
  </Fragment>
  
 
}

export default App;
