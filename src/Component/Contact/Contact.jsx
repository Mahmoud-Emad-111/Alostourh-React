import React, { useEffect, useState } from 'react'
import http from '../../Axios/https';
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import image from '../../assets/contact-float.png'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
export default function Contact() {
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [message, setMessage] = useState('');  
    const [showNotification, setShowNotification] = useState(false);  
    const [socialMediaLinks, setSocialMediaLinks] = useState({  
     facebook: '',  
     telegram: '',  
     instagram: '',  
     whatsapp: '',  
    });  
    
    useEffect(() => {  
        http.get('/Media/Get').then(res=>{
            setSocialMediaLinks({  
                facebook: res.data.facebook,  
                telegram: res.data.telegram,  
                instagram: res.data.instagram,  
                whatsapp: res.data.whats,  
               });  
        }).catch(err=>{console.log(err);
        })
    }, []);  
    
    const handleSubmit = async (e) => {  
     e.preventDefault();  
    
     const data = {  
      name,  
      email,  
      message,  
     };  
    
     try {  
        http.post('/Contact/Store',data).then(res=>{
            setName('');  
            setEmail('');  
            setMessage('');  
            setShowNotification(true);  
            res.status===200 ? toast.success(" The message has been sent",{autoClose: 2000,}) : toast.error("ERROR ",{autoClose: 2000,})

        })

      // location.reload();  
     } catch (err) {  
      console.log(err);  
     }  
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
        <section className="contact" id="contact_us">  
      <h2 className="main-title">  
       contact us  
      </h2>  
      <p className="sub-title">  
       You can contact us through our social media pages, or you can send a message with what you want to do  
       through our emails .  
      </p>  
      <div className="contact-body">  
       <div className="text-box">  
        <img src={image} className="contact-float" />  
        <div className="box">  
          <p className="title-paragraph">We are here</p>  
          <p className="main-paragraph">  
           We are here to answer any questions you may have. If you would like to know more about our  
           services or have specific  
           questions, please do not hesitate to contact us. Our dedicated team will get back to you as soon  
           as possible.  
          </p>  
        </div>  
        <div className="box">  
          <p className="title-paragraph">Email us</p>  
          <p className="main-paragraph email">  
           VentoSoffio@gmail.com  
          </p>  
        </div>  
        <div className="box">  
          <p className="title-paragraph">Follow us</p>  
          <p className="social-links">  
           <a href={socialMediaLinks.facebook}>  
           <FaFacebook />
           </a>  
           <a href={socialMediaLinks.telegram}>  
           <FaTelegram />
           </a>  
           <a href={socialMediaLinks.instagram}>  
           <FaInstagram />
           </a>  
           <a href={socialMediaLinks.whatsapp}>  
           <FaWhatsapp />
           </a>  
          </p>  
        </div>  
       </div>  
       <form onSubmit={handleSubmit}>  
        <input  
          type="text"  
          placeholder="write your name"  
          value={name}  
          onChange={(e) => setName(e.target.value)}  
        />  
        <input  
          type="text"  
          placeholder="write your email"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
        />  
        <textarea  
          placeholder="write your massage"  
          value={message}  
          onChange={(e) => setMessage(e.target.value)}  
        />  
        {/* <h3 className="noti" style={{ display: showNotification ? 'block' : 'none' }}>  
          The message has been sent  
        </h3>   */}
        <button type="submit">send</button>  
       </form>  
      </div>  
    </section>  
  
    </div>
  )
}
