import React from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Foater from '../Foater/Foater'

export default function AboutPage() {
  return (
    <div className='ApoutPage'>
      <NavBar/>
      <h2 className='main-title'>About</h2>
      <br />
      <br />
      <About/>
      <br />
      <Foater/>
    </div>
  )
}
