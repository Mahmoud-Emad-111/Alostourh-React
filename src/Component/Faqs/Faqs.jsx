import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Questions from '../Questions/Questions';
import Contact from '../Contact/Contact';
import Foater from '../Foater/Foater';

export default function Faqs() {
    
  return (
    <div className='Faqs'>
        <NavBar/>
        <div className='container'>
            <h2 className='main-title'> Frequently Asked Questions  </h2>
                    <Questions/>
        </div>
        <br />
        <br />
        <Contact/>
        <Foater/>
    </div>
  )
}
