import React, { useEffect, useState } from 'react'  
import http from '../../Axios/https';  
  import './Questions.css';
import { IoIosArrowUp } from 'react-icons/io';
export default function Questions() {  
   const [questions, setQuestions] = useState([]);  
   const [showAnswers, setShowAnswers] = useState({});  
  
   useEffect(() => {    
      http.get('/Questions/Get').then(res=>{  
        setQuestions(res.data)  
      }).catch(  
        error=>{  
           console.log(error);  
        }  
      )    
   }, []);  
  
   const handleToggleAnswer = (index) => {   
      setShowAnswers(prevState => ({ ...prevState, [index]: !prevState[index] }));  
   };   
  
   return (  
      <div className="questions-con">   
        {  
           questions.map((item, index)=>{  
              return(  
                <div key={index} className="question-box">  
                   <div className="question" onClick={() => handleToggleAnswer(index)}>   
                      question : {item.question} <span className="icon"><IoIosArrowUp />                      </span>   
                   </div>   
                   <div className="answer" style={{ display: showAnswers[index] ? 'block' : 'none' }}>   
                      answer : {item.answer}   
                   </div>      
                </div>  
              )  
           })  
        }  
      </div>   
   )  
}
