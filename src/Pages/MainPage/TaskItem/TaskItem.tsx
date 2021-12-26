import React, { useState } from "react";
import { Task } from "../../../moudles/Task";
import TaskDetail from "../TaskDetail/TaskDetail";
import './TaskItem.css'

interface IProps{
    task:Task;
}

const TaskItem:React.FC<IProps> = ({task})=>{

    const [showContent,setShowContent] = useState(false)
    return (
        <div className="TaskItem">
            <button type="button" id = "DeleteItem">X</button>
            <button type="button" id = "EditItem">&#9998;</button>
            <button type="button" id = "ShowContent" onClick={()=>{
                setShowContent(true);
            }}>Details</button>

            <div className="FirstContent">
                <h3>{task.TaskName}</h3>
                <p>{task.description.length > 30 ? `${task.description.slice(0,30)}...`:task.description}</p>
                <p><small>{task.timeToEnd}</small></p>
                <p><small>{task.status}</small></p>
            </div>

            {/* {showContent && <TaskDetail  task={task} />} */}
        </div>)
}

export default TaskItem