import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Slider from "react-slick";
import http from '../../Axios/https';
import './Home.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import About from '../About/About';
import Cart from '../Cart/Cart';
import Questions from '../Questions/Questions';
import Contact from '../Contact/Contact';
import Foater from '../Foater/Foater';
export default function Home() {

    useEffect(() => {
    http.get('/Slider/Get').then(res=>{
        
        setImagesSlider(res.data)
    }).catch(
        error=>{
            console.log(error);
            
        }
    )        
    http.get('/Services/Get').then(res=>{
        
        setServices(res.data)
    }).catch(
        error=>{
            console.log(error);
            
        }
    )        
    http.get('/Project/Get').then(res=>{
        
        setProjects(res.data)
    }).catch(
        error=>{
            console.log(error);
            
        }
    )     

    }, []);
    const [ImagesSlider, setImagesSlider] = useState([]);
    const [Projects, setProjects] = useState([]);
    const [Services, setServices] = useState([]);
    console.log(Projects);
    
    var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:3000,

    };

    var settings_services = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed:2000,
        autoplay:true,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed:2000,
              autoplay:true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const [currentPage, setCurrentPage] = useState(1);  
      const itemsPerPage = 4;  
      
      
      const indexOfLastItem = currentPage * itemsPerPage;  
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;  
      const currentItems = Services.slice(indexOfFirstItem, indexOfLastItem);  
      
      const paginate = (pageNumber) => {  
       setCurrentPage(pageNumber);  
      };  
      
      const pageNumbers = [];  
      for (let i = 1; i <= Math.ceil(Services.length / itemsPerPage); i++) {  
       pageNumbers.push(i);  
      }  

  return (
    <div className='Home'>
      <NavBar/>
      <div className="HomeSlider">
      <Slider {...settings}>
        {
            ImagesSlider.map((item,index)=>{
                return (
                    <div className='itemSlider'  key={index}>
                        <img src={item.image}  alt="" />
                        <div className="text">
                            <h1>alostourh</h1>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                            <div className="slider_btn">
                                <Link to='/Contact'>contact us </Link>
                                <Link  to='/Projects'>Discover Our Work <FaLongArrowAltRight />                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
      </div>
      <br />
      <br />
      <div className="HomeAbout">
        <h2 className='main-title'>About US</h2>
      <br />
      <br />

        <About/>
      </div>
      <br />
      <br />

      <div className="HomeServices container">
      <h2 className='main-title'>Services</h2>
      <Slider {...settings_services}>
        
        {
            Services.map((item,index)=>{
                return(
                    <div className='itme-project' key={index}>
                    <Cart image={item.images[0].image} btn='Details Service' title={item.head} link={item.link} text={item.text}/>
                    </div>
                )
            })
        }
        </Slider>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className='main-title'>Projects</h2>
      <br />
      <br />
      <br />

      <div className="HomeProjects container">  
    {currentItems.map((item, index) => {  
        console.log(item);
        
      return (  
       <div key={index}>  
        <Cart  
          image={item.images[0].image}  
          title={item.head}  
          link={item.link}  
          text={item.text}  
          btn='Demo'
        />  
                 <br />
                 <br />
                 <br />
       </div>  
      );  
    })}  

    <div className="pagination">  
      {pageNumbers.map((pageNumber) => {  
       return (  
        <button  
          key={pageNumber}  
          onClick={() => paginate(pageNumber)}  
          className={currentPage === pageNumber ? 'active' : ''}  
        >  
          {pageNumber}  
        </button>  
       );  
      })}  
    </div>  
   </div>  
    {/* ############################################ */}
  
    <div className='HomeQuestions container'>
      <h2 className='main-title'> Frequently Asked Questions  </h2>
        <Questions/>
    </div>
    <br />
    <br />
    <div>
        <Contact/>
    </div>
    <Foater/>
    </div>
  )
}
