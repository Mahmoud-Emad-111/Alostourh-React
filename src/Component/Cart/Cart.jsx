import React from 'react'  
import { Link } from 'react-router-dom'  
import './Cart.css'  
  
const truncateText = (text, maxLength) => {  
  if (text.length <= maxLength) return text;  
  return text.substring(0, maxLength) + '...';  
};  
  
export default function Cart(props) {  
  return (  
   <div className='Cart'>  
    <img src={props.image} alt="" />  
    <div className="info-box">  
      <p className='name'>{props.title}</p>  
      <div className="des">  
       {truncateText(props.text, 300)}  
      </div>  
      <Link to={props.link} >{props.btn}</Link>  
    </div>  
   </div>  
  )  
}
