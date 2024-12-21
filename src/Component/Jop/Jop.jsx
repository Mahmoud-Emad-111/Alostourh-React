import React, { useState } from 'react'
import './Jop.css';
import video from '../../assets/bg.mp4';
import { ToastContainer, toast } from 'react-toastify';

import http from '../../Axios/https';
import NavBar from '../NavBar/NavBar';
export default function Jop() {
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [phone, setPhone] = useState('');  
    const [sammary, setsammary] = useState('');  
    const [cv, setCv] = useState(null);  
    const [isSubmitted, setIsSubmitted] = useState(false);  
    
    const handleSubmit = (e) => {  
     e.preventDefault();  
     const data = {  
        name,  
        email,
        phone,  
        sammary,  
        cv,
       };  
      
       try {  
          http.post('/Job/Store',data).then(res=>{
              setName('');  
              setEmail('');  
              setPhone('');  
              setsammary('');  
              setCv(null);
              console.log(res);
                
              res.status===200 ? toast.success(" The message has been sent",{autoClose: 2000,}) : toast.error("ERROR ",{autoClose: 2000,})
  
          })
  
        // location.reload();  
       } catch (err) {  
        console.log(err);  
       }  
     console.log('Form submitted:', { name, email, phone, sammary, cv });  
     setIsSubmitted(true);  
    };  
    
    const handleFileChange = (e) => {  
     setCv(e.target.files[0]);  
    };  
    
  return (
    <div> 
                  <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

        <NavBar/> 
        <br />
        <br />
        <video src={video} className='bg' autoplay muted loop ></video>
        <form id="job-application-form" onSubmit={handleSubmit}>  
      <div className="form-body">  
       <h1>Apply for job</h1>  
       <input  
        type="text"  
        id="name"  
        placeholder="write your name"  
        value={name}  
        onChange={(e) => setName(e.target.value)}  
        required
       />  
       <input  
        type="email"  
        id="email"  
        placeholder="write your E-mail"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}
        required
        
       />  
       <input  
        type="text"  
        id="phone"  
        placeholder="write your phone number"  
        value={phone}  
        onChange={(e) => setPhone(e.target.value)} 
        required

       />  
       <textarea  
        id="sammary"  
        placeholder="sammary"  
        value={sammary}  
        onChange={(e) => setsammary(e.target.value)}  
        required

       />  
       <label for="cv">upload your cv</label>  
       <div className="file">  
        required
        <input type="file" id="cv" onChange={handleFileChange}  />  
       </div>  
       {/* {isSubmitted && (  
        <h3 className="noti" style={{ textAlign: 'center' }}>  
          The message has been sent  
        </h3>  
       )}   */}
       <button id="submit-btn" type="submit">  
        send request  
       </button>  
      </div>  
    </form>
    <br />
    <br />  
   </div>  
  )
}
