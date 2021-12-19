import React from "react";
import {BrowserRouter as Switch,Routes,Route} from 'react-router-dom'
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MainPage from "../Pages/MainPage/MainPage";

const Router = ()=>{
    return (
    <Switch>
        <Routes>
            <Route path = "/login" element = {<LoginPage />}/>
            <Route path = '*' element = {<ErrorPage />} />
            <Route path = '/App' element = {<App />} />
            <Route path = '/main' element = {<MainPage />} />
        </Routes>
    </Switch>)
}
export default Router