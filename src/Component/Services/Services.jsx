import React, { useEffect, useState } from 'react'
import http from '../../Axios/https';
import Cart from '../Cart/Cart';
import NavBar from '../NavBar/NavBar';
import Foater from '../Foater/Foater';
import './Services.css';
export default function Services() {
    useEffect(() => {
        http.get('/Services/Get').then(res=>{
        
            setServices(res.data)
        }).catch(
            error=>{
                console.log(error);
                
            }
        )  

    }, );
    const [Services, setServices] = useState([]);
    
  return (
    <div className='Services '>
        <NavBar/>
        <br />
        <br />
      <h2 className='main-title'>Services</h2>
      <br />
      <br />

        <div className='container Services_itmes'>

          {
              Services.map((item,index)=>{
                      return(
                          <div className='itme-service' key={index}>
                          <Cart image={item.images[0].image} btn='Details Service' title={item.head} link={item.link} text={item.text}/>
                          </div>
                      )
                  })
                }
        </div>
        <br />
        <br />

        <Foater/>

    </div>
  )
}
