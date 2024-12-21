import React from 'react'
import NavBar from '../NavBar/NavBar'
import Contact from '../Contact/Contact'
import Foater from '../Foater/Foater'
import './ContactPage.css';
export default function ContactPage() {
  return (
    <div className='ContactPage'>
        <NavBar/>
        {/* <div className="container"> */}
        <Contact/>
        {/* </div> */}

        <p class="map">  
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1728.1193903416874!2d31.288494!3d29.972567000000005!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzIwLjkiTiAzMcKwMTcnMTYuNSJF!5e0!3m2!1sar!2seg!4v1734754253652!5m2!1sar!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     </p> 
    
        <Foater/>
    </div>
  )
}
