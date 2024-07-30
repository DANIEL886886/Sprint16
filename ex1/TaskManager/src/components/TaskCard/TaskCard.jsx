import "./TaskCard.css";
import Badge from "../Badge/Badge";
import DateContainer from "../DateContainer/DateContainer";
import React, { useState } from "react";

function TaskCard(props) {

 const [taskId, setTaskId] = useState(props.id)

 const handleClick = (e) => {
  e.stopPropagation();
  props.onDeleteTask(props.id);
 };

 const focusedClass = props.isFocused ? "focused" : "";
  
 function setFocused() {
  props.markAsFocus()
 }

 return (
 <div className={`card-wrapper ${focusedClass}`} onClick={setFocused}>
   <div className="card-header">
	  <p className="task-id">{taskId}</p>
	  <Badge status={props.status} />
	 </div>

	 <div className="card-content">
    <p>{props.details}</p>
	 </div>

	 <div className="card-footer">
    <DateContainer date={props.dueDate} />
    {props.isFocused ? (<button className="task-btn" onClick={handleClick}>Delete</button>) : ("")}
	 </div>
  </div>
);
}

export default TaskCard;
