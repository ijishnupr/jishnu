

import TextTransition, { presets } from 'react-text-transition';
import Header from './navbar';
import './page.css';
import { useEffect, useState } from 'react';
import img from './img/developer.gif';

function Page() {
  const [index, setindex] = useState(0)
  const text = ["Hi i'm Jishnu", "I'm a fullstack developer"]

  useEffect(() => {
    const intervalId = setInterval(
      () => setindex((index) => index + 1), 3000)
    return () => clearTimeout(intervalId);
  }, [])
  return <div className='container-fluid'>
        <Header />
    <div className='row'>
      <div className='col-12 col-md-6 hei'>
        {/* <div className="head">

          <h2>i'm<br></br> <span id='spin'></span></h2>

        </div> */}
        <div className='landing'>

          <h1><TextTransition springConfig={presets.wobbly}>{text[index % text.length]} </TextTransition></h1>
        </div>
      </div>
      <div className='col d-none d-md-block'>
        {/* <img className='vid' src={img} alt='img'></img> */} 
      </div>

    </div>
  </div>
}
export default Page;