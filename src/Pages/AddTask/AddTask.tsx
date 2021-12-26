import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../moudles/Task";
import './AddTask.css'

const AddTask = () =>{

    useEffect(()=>{
        axios.get('http://localhost:8080/users/checkAuth',{withCredentials:true})
        .then((res)=>{
            if(!res){
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.href = 'http://localhost:3000'
            }
        })
        .catch((error)=>{
            window.location.href = 'http://localhost:3000'
        })
    },[])


    const [data,setData] = useState<{TaskName:string,description:string,date:Date}>({TaskName:'',description:'',date: new Date()})

    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/tasks/AddTask',data,{withCredentials:true})
        .then((res)=>{
            //check the response
            alert('Task Added')
            setData({TaskName:'',description:'',date: new Date()})
        })
        .catch((error)=>{
            alert(error+', Try again')
            setData({TaskName:'',description:'',date: new Date()})
        })
    }

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement>) =>{
        setData((prevData:{TaskName:string,description:string,date:Date})=>{
            return {...prevData,[e.target.name] : e.target.value}
        })
    }
    return (
        <div>
            <Link to='/main'>
                <button id="BackButton">Back To Main</button>
            </Link>
            <div className="addingATask">
                <h1> Add New Task</h1>
                <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleOnSubmit(e)} autoComplete="off">

                    <label htmlFor="input" >*TaskName: </label>
                    <input type="text" name="TaskName" value={data.TaskName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleOnChange(e)} maxLength={25} />

                    <br />
                    <label>*description: </label>
                    <textarea name="description" value={data.description} cols={10} rows={5} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>handleOnChange(e)} maxLength={250} required></textarea>

                    <input type="date" name="date" id='date' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleOnChange(e)}/>

                    <br />
                    <button type="reset" className='Button'> reset</button>
                    <button type="submit" className='Button'> submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask;