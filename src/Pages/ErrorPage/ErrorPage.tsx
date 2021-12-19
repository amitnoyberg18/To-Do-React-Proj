import axios from "axios";
import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import './ErrorPage.css'

const ErrorPage = ()=>{

    useEffect(()=>{
        axios.get('http://localhost:8080/users/checkAuth',{withCredentials:true})
        .then((res)=>{
            if(res){
                window.location.href = `http://localhost:3000/main`;
            }else{
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        })
    },[])

    return (
        <div className="ErrorPage">
            <h2>404</h2>
            <div className="BackToApp">
                <Link to="/login"> <button id="backToAppButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>To Move To Login Page</button> </Link>
            </div>
        </div>
    )
}
export default ErrorPage