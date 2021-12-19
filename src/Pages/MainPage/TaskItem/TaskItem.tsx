import React from "react";
import { Task } from "../../../moudles/Task";
import './TaskItem.css'

interface IProps{
    task:Task;
}

const TaskItem:React.FC<IProps> = ({task})=>{
    return (
        <div className="TaskItem">
            <button type="button" id = "DeleteItem">X</button>
            <button type="button" id = "EditItem">&#9998;</button>
            <button type="button" id = "ShowContent">Details</button>

            <div className="FirstContent">
                <h3>{task.TaskName}</h3>
                <p>{task.description.length > 30 ? `${task.description.slice(0,30)}...`:task.description}</p>
                <p><small>{task.timeToEnd}</small></p>
            </div>
        </div>)
}

export default TaskItem