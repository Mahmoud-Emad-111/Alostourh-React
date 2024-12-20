import axios from "axios";
import React from "react";
const http=axios.create({
        // baseURL:'http://127.0.0.1:8000/api',
        baseURL:'https://backend.alostourh.com/public/api',
        credentials: "same-origin",
        headers:{
            'X-Requested-With':'XMLHttpRequest',
            "Content-Type": "aplication/json" ,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Credentials':'true',
            "Access-Control-Allow-Origin": "*",
            // 'X-CSRF-TOKEN'
            // "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
            // "Access-Control-Request-Headers": 'Content-Type, Authorization'
            // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8000'
        },
        responseType:'json',
        // withCredentials:true
        
    });
export  default http ;       