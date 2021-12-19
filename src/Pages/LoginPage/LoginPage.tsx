import axios from "axios";
import React, { useEffect, useState } from "react";
import './LoginPage.css'

interface IState {
    userName:string,
    password:string
}

const LoginPage = ()=>{
    const [userName, setUserName] = useState<IState["userName"]>()
    const [password, setPassword] = useState<IState["password"]>()


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
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>,setState:Function)=>{
        setState(e.target.value)
    }

    const handleLogingIn = ()=>{
        console.log({userName:userName,password:password})
        axios.post('http://localhost:8080/users/loginIn',{userName:userName,password:password},{})
        .then((res)=>{
            if(res.data.token !== null){
                document.cookie = `token=${res.data.token}`;
                alert('all good')
                window.location.href = `http://localhost:3000/main`
            }else{
                alert("name or password is incorrect")
                setPassword("");
                setUserName("");
            }
        }).catch((error)=>{
            alert("name or password is incorrect");
            setPassword("");
            setUserName("");
        })
    }


    return(
        <div className="login-box">
            <h2>Login</h2>
            <form autoComplete="off">
            <div className="user-box">
                <input type="text" name="userName" value={userName || ""} required  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleOnChange(e,setUserName)}/>
                <label>Username</label>
                </div>
                <div className="user-box">
                <input type="password" name="password" value={password || ""} required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleOnChange(e,setPassword)}/>
                <label>Password</label>
                </div>
            </form>
            <div className="submitButton">
                <button id="logInButton" type="submit" onClick={handleLogingIn}>      
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Log In</button>
                </div>

            {/* <button onClick={async ()=>{
                try{
                    const res = await axios.get('http://localhost:8080/users/users',{withCredentials:true})
                    const data = await res.data;
                    console.log(data)
                }catch(error){
                    alert(error) 
                }

            }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Get data</button> */}
        </div>
    )

}

export default LoginPage