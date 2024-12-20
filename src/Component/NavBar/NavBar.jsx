import React from 'react'
import logo from '../../assets/logooo.png'
import { Link } from 'react-router-dom'
import './NavBar.css';
export default function NavBar() {
  return (
    <div className='NavBar container'>
    <div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className='links'>
        <Link to='/About'>About</Link>
        <Link to='/About'>Services</Link>
        <Link to='/About'>Projects</Link>
        <Link to='/About'>faqs</Link>
        <Link to='/About'>content</Link>
    </div>
    <div className='lang'>
    <Link to='/About' target='_blank'>apply for job</Link>
     <button>AR</button>
    </div>
    </div>
  )
}
