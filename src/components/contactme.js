import React from 'react';
import contact from './img/contact.jpg'
import { useForm, ValidationError } from '@formspree/react';
function Contactme() {
  const [state, handleSubmit] = useForm("mbjvlpjv");
  if (state.succeeded) {
      return<div className='row justify-content-center'>

          <h2 className='text-center mt-5 pt-5'>Thank you for contacting me</h2>
      </div>
    }
  return (<div className='container-fluid'>
        <div className='row contact'>
            <div className='col mx-auto d-block mt-5'>
            <h2 id='contact'>GET IN TOUCH</h2>
      <form onSubmit={handleSubmit}>
<div className='contdiv'>

      <input type="text" name='' className="form-control mt-5" placeholder="Name"></input>
      <input type="email" name='email' className="form-control mt-5" placeholder="Email"></input>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
     <textarea name='message' className="form-control mt-5 mb-5" placeholder="Your message.."></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      <button type='submit'  class="button-57 rounded mx-auto d-block" role="button"><span class="text">Send</span><span>Click</span></button>
      
        </div>
    </form>
        </div>
        <div className='col d-none d-lg-block d-xl-block d-md-block'>
          <img src={contact} style={{width:'600px'}}/>
        </div>
    </div>
</div>
  );
}
export default Contactme;