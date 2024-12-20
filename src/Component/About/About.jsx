import React, { useEffect, useState } from 'react'
import http from '../../Axios/https';
import './About.css';
import { Link } from 'react-router-dom';
export default function About() {
    useEffect(() => {
        http.get('/About/Get').then(res=>{
            
            setAbout(res.data)
        }).catch(
            error=>{
                console.log(error);
                
            }
        )        
    
        http.get('/HeaderAbout/Get').then(res=>{
            
            setHeader(res.data)
        }).catch(
            error=>{
                console.log(error);
                
            }
        )    
    }, []);
    const [About, setAbout] = useState({});
    const [Header, setHeader] = useState([]);
    
    return (
    <div className='About container'>
      <div className='video'>
        <video src={About.image} autoplay muted loop ></video>
      </div>
      <div className="AboutContent">
        <h3>{About.title}</h3>
        <p>{About.text}</p>
        <div className="HeaderAbout">
            {
                Header.map((item,index)=>{
                    return(
                        <Link key={index} to={item.link}>
                            <div className="image-header">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="text-header">
                                <p>{item.title}</p>
                                <p>{item.text}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
