import "./DateContainer.css";
import React from "react";

function DateContainer(props) {
  return (
    <div className="due-date">
      
      <p>Due Date</p>

      <p>{props.date.toLocaleDateString()}</p>

    </div>
  );
}

export default DateContainer;
