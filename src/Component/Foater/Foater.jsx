import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import './Foater.css'
export default function Foater() {
  return (
    <div className='Foater'>
        <div className="container Foater_c">

        <p>Copyright © 2024 All Rights Reserved - Alostourh</p>
        <div className='media'>
           <FaFacebook />
           <FaTelegram />
            <FaInstagram />
           <FaWhatsapp />

        </div>
        <span>powered by Marslia</span>
        </div>
    </div>
  )
}
