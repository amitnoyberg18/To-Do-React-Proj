import axios from "axios";
import React, { useEffect, useState } from "react";
import {Task} from '../../moudles/Task'
import TaskItem from "../MainPage/TaskItem/TaskItem";
import './MainPage.css'
import {Link} from 'react-router-dom'

interface IState{
    Tasks:Task[]
}

const MainPage = ()=>{

    const [tasks, setTasks] = useState<IState["Tasks"]>([])
    //all tasks
    useEffect(()=>{
        try{
            axios.get('http://localhost:8080/tasks/userTasks',{withCredentials:true})
            .then((res)=>{
                setTasks(res.data);
                console.log(res.data);
            }).catch((error)=>{
                window.location.href = 'http://localhost:3000'
            })
        }catch(error){
            console.log(error);
            //link to a page that says thart you are forbidden , for now i'll use the 404 page
            window.location.href = 'http://localhost:3000'
        };
 
    },[])

    // const getData = async () =>{
    //     const res = await axios.get('http://localhost:8080/tasks/userTasks')
    //     const data = res.data;
    // }
    return (
        <div className="MainPage">
            <Link to='/login'>
                <button id="BackButton" onClick={()=>{
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }}>Back To Login</button>
            </Link>
            <div className="tasks">
            <h2>To Do List</h2>
            {tasks && 
            tasks.map((task)=>(
                <TaskItem key={task.id} task={task}/>
            ))}
            <Link to='/AddTask'>
                <button id="AddItem" type="button"><span id="PlusButton">+</span> Add Item</button>
            </Link>
            </div>
        </div>
    )
}
export default MainPage;