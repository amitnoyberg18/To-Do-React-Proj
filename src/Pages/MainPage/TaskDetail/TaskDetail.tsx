import React from "react";
import { Task } from "../../../moudles/Task";
import './TaskDetail.css'


interface IProps{
    task:Task;
    // setShowContent:Function;
}
const TaskDetail:React.FC<IProps> = ({task}) =>{

    return (
        <div className="TaskDetail">
            <button type="button" id = "DeleteItem" onClick={()=>{
                
            }}>X</button>
            <div className="FirstContent">
                <h1>{task.TaskName}</h1>
                <h3 style={task.status === 'completed'?{color:'green'}:{color:"yellow"}}>{task.status}</h3>
                <p>{task.description}</p>
                <br />
                <p><small>{task.timeToEnd}</small></p>
                
            </div>
        </div>
    )
}

export default TaskDetail;