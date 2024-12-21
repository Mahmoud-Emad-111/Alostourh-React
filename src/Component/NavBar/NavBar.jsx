import React from 'react';  
import logo from '../../assets/logooo.png';  
import { Link } from 'react-router-dom';  
import './NavBar.css';  
  
export default function NavBar() {  
  return (  
   <nav className="NavBar container">  
    <div className="logo">  
      <Link to="/">  
       <img src={logo} alt="Logo" />  
      </Link>  
    </div>  
    <div className="links">  
      <Link to="/About">About</Link>  
      <Link to="/Services">Services</Link>  
      <Link to="/Projects">Projects</Link>  
      <Link to="/Faqs">FAQs</Link>  
      <Link to="/Contact">Contact</Link>  
    </div>  
    <div className="lang">  
      <Link to="/Jop" target="_blank">Apply for Job</Link>  
      <button>AR</button>  
    </div>  
   </nav>  
  );  
}
