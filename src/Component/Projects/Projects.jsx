import React, { useEffect, useState } from 'react'

import './Projects.css';
import http from '../../Axios/https';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import Foater from '../Foater/Foater';
export default function Projects() {
    useEffect(() => {
        
        http.get('/Project/Get').then(res=>{
        
            setProjects(res.data)
        }).catch(
            error=>{
                console.log(error);
                
            }
        )     
     
    }, );
      const [Projects, setProjects] = useState([]);
  
  
    return (
    <div className='Projects'>
            <NavBar/>
                <br />
                <br />
              <h2 className='main-title'>Projects</h2>
              <br />
              <br />
        <div className='container Project-items'> 
                {
                          Projects.map((item,index)=>{
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
